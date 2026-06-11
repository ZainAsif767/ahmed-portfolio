import { Mail } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

const socials = [
  { href: site.socials.github, label: "github" },
  { href: site.socials.linkedin, label: "linkedin" },
  { href: site.socials.elixirForum, label: "elixir forum" },
  { href: `mailto:${site.email}`, label: "email" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/70 px-8 py-16 text-center sm:px-14 sm:py-20">
            <div
              className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[560px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(74,222,128,0.16),transparent_70%)]"
              aria-hidden
            />
            <div className="relative">
              <div className="mb-6 inline-flex items-center gap-2.5 font-mono text-xs text-muted-2">
                <span className="text-accent">06</span>
                <span className="h-px w-8 bg-line-2" aria-hidden />
                <span className="uppercase tracking-[0.18em]">contact</span>
              </div>
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold leading-[1.12] sm:text-[2.6rem]">
                Let&apos;s build something that{" "}
                <span className="accent-serif">stays up</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[17px] leading-relaxed text-muted">
                I&apos;m available for freelance work, contracts and full-time
                roles. Tell me what you&apos;re building — I usually reply within
                24 hours.
              </p>
              <div className="mt-9">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex max-w-full items-center gap-2.5 rounded-xl bg-accent px-4 py-3.5 text-[13.5px] font-semibold text-accent-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(74,222,128,0.3)] sm:px-6 sm:text-[15px]"
                >
                  <Mail size={16} className="shrink-0" />
                  <span className="truncate">{site.email}</span>
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-[13px]">
                {socials.map((social, i) => (
                  <span key={social.label} className="flex items-center gap-2">
                    {i > 0 && <span className="text-muted-2" aria-hidden>/</span>}
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-muted underline-offset-4 transition-colors duration-200 hover:text-accent hover:underline"
                    >
                      {social.label}
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
