import { ArrowRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import SupervisionTree from "./SupervisionTree";
import { heroStats, site, trustSectors } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pb-20 pt-36">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 font-mono text-xs text-muted">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {"{:ok, :available}"} — open to freelance &amp; full-time
            </div>

            <h1 className="font-display mb-6 text-[2.6rem] font-semibold leading-[1.05] sm:text-6xl">
              I build systems that{" "}
              <span className="accent-serif">refuse to go down</span>.
            </h1>

            <p className="mb-9 max-w-xl text-lg leading-relaxed text-muted">
              I&apos;m {site.name} — a {site.role} specializing in{" "}
              <span className="text-fg">Elixir, Phoenix &amp; OTP</span>. For five
              years I&apos;ve shipped real-time platforms that treat failure as a
              design input: supervised, concurrent, and still up when it matters.
            </p>

            <div className="mb-12 flex flex-wrap gap-3.5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-[15px] font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)]"
              >
                Hire me
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-xl border border-line-2 px-6 py-3 text-[15px] font-semibold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-muted-2 hover:bg-fg/5"
              >
                See deployed work
              </a>
              <a
                href={site.resumeFile}
                download="Ahmed-Ismail-Resume.pdf"
                className="inline-flex items-center gap-2 rounded-xl border border-line-2 px-6 py-3 text-[15px] font-semibold text-fg transition-all duration-200 hover:-translate-y-0.5 hover:border-muted-2 hover:bg-fg/5"
              >
                <Download size={16} />
                Résumé
              </a>
            </div>

            <div className="flex flex-wrap items-end gap-x-10 gap-y-4 border-t border-line pt-7">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-[26px] font-semibold leading-none">
                    {stat.value}
                  </div>
                  <div className="mt-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-2">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div className="ml-auto hidden text-right sm:block">
                <div className="font-mono text-[11px] uppercase tracking-wider text-muted-2">
                  shipped across
                </div>
                <div className="mt-1.5 font-mono text-xs text-muted">
                  {trustSectors.join(" · ")}
                </div>
              </div>
            </div>
          </div>

          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <SupervisionTree />
            <p className="mt-4 px-1 font-mono text-[11.5px] leading-relaxed text-muted-2">
              <span className="text-accent">//</span> live demo — a worker crashes,
              the supervisor restarts it, the system never blinks. That&apos;s how I
              build.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
