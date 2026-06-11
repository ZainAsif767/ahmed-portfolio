import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, site } from "@/lib/data";

const principles = [
  {
    id: "01",
    title: "Failure is a design input",
    text: "Supervision trees, GenServer/GenStage flows and :one_for_one strategies — systems that heal themselves instead of paging you at 3am.",
  },
  {
    id: "02",
    title: "Real-time by default",
    text: "LiveView interfaces, Phoenix Channels and event-driven pipelines over Kafka and RabbitMQ — state that moves the moment the world does.",
  },
  {
    id: "03",
    title: "Owned end to end",
    text: "From PostgreSQL schema design and query optimization to the polished UI and the Docker/CI pipeline that ships it.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="01"
          eyebrow="about"
          title={
            <>
              Reliability isn&apos;t a feature.{" "}
              <span className="accent-serif">It&apos;s a discipline.</span>
            </>
          }
        />
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="space-y-5 text-[16.5px] leading-relaxed text-muted">
              <p>
                I&apos;m {site.fullName} — a{" "}
                <strong className="font-semibold text-fg">Senior Software Engineer</strong>{" "}
                from {site.location}, and I&apos;ve spent 5+ years inside the{" "}
                <strong className="font-semibold text-fg">Elixir / Phoenix</strong>{" "}
                ecosystem. The BEAM taught me a different way to think about
                software: don&apos;t prevent every failure — architect so failure
                doesn&apos;t matter.
              </p>
              <p>
                That philosophy has shipped production platforms across
                cybersecurity, SaaS, logistics and education: threat-monitoring
                dashboards, photography business suites, freight-tracking systems
                and learning platforms with 120+ table schemas behind Absinthe
                GraphQL APIs.
              </p>
              <p>
                I&apos;m active on the{" "}
                <a
                  href={site.socials.elixirForum}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent underline-offset-4 hover:underline"
                >
                  Elixir Forum
                </a>{" "}
                and Slack, contribute to open source, and spend free cycles
                helping new developers fall for Elixir&apos;s concurrency model.
              </p>
              <p className="border-t border-line pt-5 font-mono text-[13px] text-muted-2">
                {education.degree} — {education.school}, {education.period}
              </p>
            </div>
          </Reveal>
          <div>
            {principles.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div className="group border-t border-line py-6 transition-colors first:border-t-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">{p.id}</span>
                    <div>
                      <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-accent">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
