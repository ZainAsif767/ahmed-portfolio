import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="04"
          eyebrow="tech stack"
          title={
            <>
              A pragmatic <span className="accent-serif">toolkit</span>.
            </>
          }
          lead="Languages, frameworks, data stores and infrastructure — chosen for reliability, not résumé padding."
        />
        <div>
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 60}>
              <div className="grid gap-3 border-t border-line py-7 last:border-b sm:grid-cols-[200px_1fr] sm:gap-8">
                <div>
                  <h3 className="font-display text-[17px] font-semibold">{group.title}</h3>
                  <div className="mt-1 font-mono text-[11.5px] text-muted-2">
                    {group.subtitle}
                  </div>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-line bg-surface px-3 py-1.5 font-mono text-[13px] text-muted transition-colors duration-200 hover:border-accent/50 hover:text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
