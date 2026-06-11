import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="05"
          eyebrow="deployed nodes"
          title={
            <>
              Shipped, deployed, <span className="accent-serif">still running</span>.
            </>
          }
          lead="Real products serving real users — built primarily on the Elixir & Phoenix stack."
        />

        <div>
          {featured.map((project, i) => {
            const inner = (
              <article className="group grid gap-3 border-t border-line py-10 transition-colors last:border-b sm:grid-cols-[200px_1fr_auto] sm:gap-8">
                <div>
                  <div className="font-mono text-xs text-muted-2">0{i + 1}</div>
                  <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[11.5px] text-muted">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.url ? "bg-accent" : "bg-muted-2"
                      }`}
                      aria-hidden
                    />
                    {project.node}
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold transition-colors group-hover:text-accent">
                    {project.name}
                  </h3>
                  <div className="mt-1 font-mono text-xs text-accent">
                    {project.category}
                  </div>
                  <p className="mt-3.5 max-w-2xl text-[15px] leading-relaxed text-muted">
                    {project.description}
                  </p>
                  {project.impact && (
                    <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed">
                      <span className="font-mono text-xs text-accent">[ok] </span>
                      {project.impact}
                    </p>
                  )}
                  <div className="mt-4 font-mono text-xs text-muted-2">
                    {project.tags.join(" · ")}
                  </div>
                </div>
                <div className="self-start sm:pt-1">
                  {project.url ? (
                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-line-2 px-4 py-2.5 font-mono text-[13px] font-medium transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                      visit
                      <ArrowUpRight
                        size={14}
                        strokeWidth={2.5}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  ) : (
                    <span className="inline-flex rounded-xl border border-line px-4 py-2.5 font-mono text-[13px] text-muted-2">
                      private
                    </span>
                  )}
                </div>
              </article>
            );
            return (
              <Reveal key={project.name}>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.name}`}
                    className="block"
                  >
                    {inner}
                  </a>
                ) : (
                  inner
                )}
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-14">
          <div className="mb-6 flex items-center gap-3 font-mono text-xs text-muted-2">
            <span className="text-accent">+</span>
            <span className="uppercase tracking-[0.18em]">more nodes</span>
            <span className="h-px flex-1 bg-line" aria-hidden />
          </div>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {more.map((project, i) => (
            <Reveal key={project.name} delay={i * 80} className="h-full">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-line-2 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between font-mono text-[11.5px] text-muted-2">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                    {project.node}
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-muted-2 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </div>
                <h4 className="font-display mt-4 text-lg font-semibold transition-colors group-hover:text-accent">
                  {project.name}
                </h4>
                <div className="mt-0.5 font-mono text-[11px] text-accent">
                  {project.category}
                </div>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 font-mono text-[11px] text-muted-2">
                  {project.tags.join(" · ")}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
