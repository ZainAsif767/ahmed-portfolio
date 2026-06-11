"use client";

import { useEffect, useRef, useState } from "react";

const WORKERS = [
  { id: 0, name: "Endpoint", x: 16 },
  { id: 1, name: "LiveView", x: 39 },
  { id: 2, name: "Repo", x: 62 },
  { id: 3, name: "PubSub", x: 85 },
];

const CAREER_START = new Date("2020-08-01T00:00:00Z").getTime();

function formatUptime(now: number) {
  let s = Math.floor((now - CAREER_START) / 1000);
  const years = Math.floor(s / 31_557_600);
  s -= years * 31_557_600;
  const days = Math.floor(s / 86_400);
  s -= days * 86_400;
  const hh = String(Math.floor(s / 3600)).padStart(2, "0");
  const mm = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return `${years}y ${days}d ${hh}:${mm}:${ss}`;
}

export default function SupervisionTree() {
  const [crashed, setCrashed] = useState<number | null>(null);
  const [restarts, setRestarts] = useState(0);
  const [uptime, setUptime] = useState("");
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setUptime(formatUptime(Date.now()));
    const tick = setInterval(() => setUptime(formatUptime(Date.now())), 1000);

    let timeout: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      if (reduced.current) return;
      const victim = Math.floor(Math.random() * WORKERS.length);
      setCrashed(victim);
      timeout = setTimeout(() => {
        setCrashed(null);
        setRestarts((r) => r + 1);
      }, 1300);
    }, 4600);

    return () => {
      clearInterval(tick);
      clearInterval(cycle);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-surface/80 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm">
      {/* window chrome */}
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2 whitespace-nowrap font-mono text-[11px] text-muted-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          observer
        </div>
        <span className="whitespace-nowrap font-mono text-[11px] text-muted-2">
          :one_for_one
        </span>
      </div>

      {/* tree canvas */}
      <div className="relative h-44 select-none sm:h-48">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          <line x1="50" y1="24" x2="50" y2="48" stroke="var(--color-line-2)" vectorEffect="non-scaling-stroke" />
          <line x1="16" y1="48" x2="85" y2="48" stroke="var(--color-line-2)" vectorEffect="non-scaling-stroke" />
          {WORKERS.map((w) => (
            <line
              key={w.id}
              x1={w.x}
              y1="48"
              x2={w.x}
              y2="66"
              stroke={crashed === w.id ? "var(--color-crash)" : "var(--color-line-2)"}
              strokeDasharray={crashed === w.id ? "3 3" : undefined}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* root node */}
        <div className="absolute left-1/2 top-[10%] -translate-x-1/2 whitespace-nowrap rounded-lg border border-line-2 bg-surface-2 px-3 py-1 font-mono text-[11px] text-fg sm:text-xs">
          Ahmed.Supervisor
        </div>

        {/* workers */}
        {WORKERS.map((w) => {
          const isDown = crashed === w.id;
          return (
            <div
              key={w.id}
              className={`absolute top-[66%] flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-md border px-2 py-1 font-mono text-[10px] transition-colors duration-300 sm:text-[11px] ${
                isDown
                  ? "border-crash/60 bg-crash/10 text-crash"
                  : "border-line bg-surface-2 text-muted"
              }`}
              style={{ left: `${w.x}%` }}
            >
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                  isDown ? "animate-ping bg-crash" : "bg-accent"
                }`}
                aria-hidden
              />
              {w.name}
            </div>
          );
        })}
      </div>

      {/* event log */}
      <div className="truncate border-t border-line px-4 py-2 font-mono text-[10.5px] sm:text-[11px]">
        {crashed !== null ? (
          <span className="text-crash">
            [error] {WORKERS[crashed].name} down — restarting child…
          </span>
        ) : (
          <span className="text-muted-2">
            <span className="text-accent">[info]</span> all children alive — system healthy
          </span>
        )}
      </div>

      {/* live metrics */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line px-4 py-2 font-mono text-[10.5px] text-muted-2 sm:text-[11px]">
        <span className="whitespace-nowrap">
          uptime{" "}
          <span className="text-accent" suppressHydrationWarning>
            {uptime || "—"}
          </span>
        </span>
        <span className="whitespace-nowrap">
          restarts <span className="text-fg">{restarts}</span> · downtime{" "}
          <span className="text-accent">0ms</span>
        </span>
      </div>
    </div>
  );
}
