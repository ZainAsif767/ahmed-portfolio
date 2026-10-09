"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const NODE_COUNT = 150;
const PULSE_COUNT = 70;
const LINK_RADIUS = 5.2;
const MAX_LINKS = 3;

const COLORS = {
  dark: { accent: 0x4ade80, crash: 0xf87171 },
  light: { accent: 0x15803d, crash: 0xdc2626 },
};

const POINT_VERT = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  attribute float aAlpha;
  uniform float uScale;
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    vColor = aColor;
    vAlpha = aAlpha;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = aSize * uScale / -mv.z;
    gl_Position = projectionMatrix * mv;
  }
`;
const POINT_FRAG = /* glsl */ `
  varying vec3 vColor;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5) * 2.0;
    if (d > 1.0) discard;
    float core = smoothstep(1.0, 0.0, d);
    gl_FragColor = vec4(vColor, vAlpha * (0.25 + 0.75 * core * core));
  }
`;

export default function ProcessNetwork() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isLight = () => document.documentElement.classList.contains("light");

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return; // no WebGL — the static dotted background still works
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 100);
    camera.position.z = 13;
    const world = new THREE.Group();
    scene.add(world);

    // ---- nodes -------------------------------------------------------
    const pos: THREE.Vector3[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      pos.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 34,
          (Math.random() - 0.5) * 22,
          -10 + Math.random() * 14,
        ),
      );
    }

    // ---- links (nearest neighbours) ---------------------------------
    const adj: number[][] = pos.map(() => []);
    const edges: [number, number][] = [];
    pos.forEach((p, i) => {
      pos
        .map((q, j) => ({ j, d: p.distanceTo(q) }))
        .filter((o) => o.j !== i && o.d < LINK_RADIUS)
        .sort((a, b) => a.d - b.d)
        .slice(0, MAX_LINKS)
        .forEach(({ j }) => {
          if (!adj[i].includes(j)) {
            adj[i].push(j);
            adj[j].push(i);
            edges.push([i, j]);
          }
        });
    });

    const linePos = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      pos[a].toArray(linePos, i * 6);
      pos[b].toArray(linePos, i * 6 + 3);
    });
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePos, 3));
    const lineMat = new THREE.LineBasicMaterial({ transparent: true });
    world.add(new THREE.LineSegments(lineGeo, lineMat));

    // ---- point clouds (nodes + message pulses) ----------------------
    const makePoints = (count: number, positions: Float32Array | null) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(positions ?? new Float32Array(count * 3), 3),
      );
      geo.setAttribute("aColor", new THREE.BufferAttribute(new Float32Array(count * 3), 3));
      geo.setAttribute("aSize", new THREE.BufferAttribute(new Float32Array(count), 1));
      geo.setAttribute("aAlpha", new THREE.BufferAttribute(new Float32Array(count).fill(1), 1));
      const mat = new THREE.ShaderMaterial({
        vertexShader: POINT_VERT,
        fragmentShader: POINT_FRAG,
        transparent: true,
        depthWrite: false,
        uniforms: { uScale: { value: 300 } },
      });
      const pts = new THREE.Points(geo, mat);
      pts.frustumCulled = false;
      world.add(pts);
      return { geo, mat };
    };

    const nodePos = new Float32Array(NODE_COUNT * 3);
    pos.forEach((p, i) => p.toArray(nodePos, i * 3));
    const nodes = makePoints(NODE_COUNT, nodePos);
    const pulses = makePoints(PULSE_COUNT, null);

    const baseSize = pos.map(() => 0.5 + Math.random() * 0.7);
    const nodeState = pos.map(() => ({ crashAt: -1, restartAt: -1 }));

    const pulseState = Array.from({ length: PULSE_COUNT }, () => {
      const from = Math.floor(Math.random() * NODE_COUNT);
      return {
        from,
        to: adj[from].length ? adj[from][Math.floor(Math.random() * adj[from].length)] : from,
        t: Math.random(),
        speed: 0.25 + Math.random() * 0.35,
      };
    });

    // ---- theme -------------------------------------------------------
    const accent = new THREE.Color();
    const crash = new THREE.Color();
    const applyTheme = () => {
      const light = isLight();
      const c = light ? COLORS.light : COLORS.dark;
      accent.set(c.accent);
      crash.set(c.crash);
      const blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      nodes.mat.blending = pulses.mat.blending = blending;
      nodes.mat.needsUpdate = pulses.mat.needsUpdate = true;
      lineMat.color.copy(accent);
      lineMat.opacity = light ? 0.12 : 0.07;
      lineMat.blending = blending;
      lineMat.needsUpdate = true;
    };
    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // ---- sizing / input ---------------------------------------------
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      const scale = h * 0.55;
      nodes.mat.uniforms.uScale.value = pulses.mat.uniforms.uScale.value = scale;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    // ---- loop --------------------------------------------------------
    const tmp = new THREE.Color();
    const nColor = nodes.geo.getAttribute("aColor") as THREE.BufferAttribute;
    const nSize = nodes.geo.getAttribute("aSize") as THREE.BufferAttribute;
    const nAlpha = nodes.geo.getAttribute("aAlpha") as THREE.BufferAttribute;
    const pPos = pulses.geo.getAttribute("position") as THREE.BufferAttribute;
    const pColor = pulses.geo.getAttribute("aColor") as THREE.BufferAttribute;
    const pSize = pulses.geo.getAttribute("aSize") as THREE.BufferAttribute;

    let nextCrash = 2;
    let last = performance.now() / 1000;
    let elapsed = 0;
    let raf = 0;

    const frame = (animate: boolean) => {
      const now = performance.now() / 1000;
      const dt = animate ? Math.min(now - last, 0.05) : 0;
      last = now;
      elapsed += dt;

      // supervisor: crash a random node, restart it shortly after
      if (animate && elapsed > nextCrash) {
        const i = Math.floor(Math.random() * NODE_COUNT);
        if (nodeState[i].crashAt < 0) {
          nodeState[i].crashAt = elapsed;
          nodeState[i].restartAt = elapsed + 1.1;
        }
        nextCrash = elapsed + 2.5 + Math.random() * 2.5;
      }

      for (let i = 0; i < NODE_COUNT; i++) {
        const s = nodeState[i];
        let size = baseSize[i] * (1 + 0.12 * Math.sin(elapsed * 1.4 + i));
        tmp.copy(accent);
        if (s.crashAt >= 0) {
          if (elapsed < s.restartAt) {
            tmp.copy(crash);
            size = baseSize[i] * 2.4;
          } else {
            const k = (elapsed - s.restartAt) / 0.9; // restart flash
            if (k >= 1) s.crashAt = s.restartAt = -1;
            else {
                            size = baseSize[i] * (1 + 2.2 * (1 - k));
            }
          }
        }
        nColor.setXYZ(i, tmp.r, tmp.g, tmp.b);
        nSize.setX(i, size * 4);
        nAlpha.setX(i, 0.7);
      }
      nColor.needsUpdate = nSize.needsUpdate = nAlpha.needsUpdate = true;

      // messages flowing along links
      for (let i = 0; i < PULSE_COUNT; i++) {
        const p = pulseState[i];
        p.t += p.speed * dt;
        if (p.t >= 1) {
          const prev = p.from;
          p.from = p.to;
          const options = adj[p.from].filter((n) => n !== prev);
          const pool = options.length ? options : adj[p.from];
          p.to = pool.length ? pool[Math.floor(Math.random() * pool.length)] : p.from;
          p.t = 0;
        }
        const a = pos[p.from];
        const b = pos[p.to];
        pPos.setXYZ(
          i,
          a.x + (b.x - a.x) * p.t,
          a.y + (b.y - a.y) * p.t,
          a.z + (b.z - a.z) * p.t,
        );
        pColor.setXYZ(i, accent.r, accent.g, accent.b);
        pSize.setX(i, 3.5);
      }
      pPos.needsUpdate = pColor.needsUpdate = pSize.needsUpdate = true;

      // camera parallax + scroll drift
      mouse.sx += (mouse.x - mouse.sx) * 0.04;
      mouse.sy += (mouse.y - mouse.sy) * 0.04;
      const scroll = window.scrollY;
      world.rotation.y = elapsed * 0.025 + mouse.sx * 0.18 + scroll * 0.00018;
      world.rotation.x = mouse.sy * 0.08;
      world.position.y = scroll * 0.0035;
      camera.position.z = 13 - Math.min(scroll * 0.0008, 3);

      renderer.render(scene, camera);
    };

    const loop = () => {
      frame(true);
      raf = requestAnimationFrame(loop);
    };

    let cleanupReduced: (() => void) | undefined;
    if (reduced) {
      frame(false);
      const redraw = () => frame(false);
      window.addEventListener("resize", redraw);
      window.addEventListener("scroll", redraw, { passive: true });
      cleanupReduced = () => {
        window.removeEventListener("resize", redraw);
        window.removeEventListener("scroll", redraw);
      };
    } else {
      raf = requestAnimationFrame(loop);
    }

    const onVisibility = () => {
      if (reduced) return;
      cancelAnimationFrame(raf);
      if (!document.hidden) {
        last = performance.now() / 1000;
        raf = requestAnimationFrame(loop);
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
      cleanupReduced?.();
      [nodes, pulses].forEach(({ geo, mat }) => {
        geo.dispose();
        mat.dispose();
      });
      lineGeo.dispose();
      lineMat.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_right,black_0%,rgba(0,0,0,0.5)_14%,rgba(0,0,0,0.08)_30%,rgba(0,0,0,0.08)_70%,rgba(0,0,0,0.5)_86%,black_100%)] sm:opacity-60"
    />
  );
}
