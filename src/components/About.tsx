import { useLang } from '../i18n'
import { Reveal, Section } from './ui'

export function About() {
  const { t } = useLang()
  const { about, testimonial } = t

  return (
    <Section id="sobre-mi" {...t.ui.sections.about}>
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-600 md:col-span-3 dark:text-zinc-400">
          {about.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <figure className="relative rounded-2xl border border-indigo-200 bg-indigo-50/60 p-6 sm:p-8 dark:border-indigo-500/20 dark:bg-indigo-500/5">
            <span aria-hidden className="absolute -top-5 left-6 font-serif text-7xl leading-none text-indigo-300 dark:text-indigo-500/50">
              “
            </span>
            <blockquote className="text-zinc-700 dark:text-zinc-300">{testimonial.quote}</blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-zinc-900 dark:text-white">{testimonial.author}</span>
              <span className="block text-zinc-500">{testimonial.role}</span>
              {t.ui.testimonialNote && <span className="mt-2 block text-xs text-zinc-400 italic">{t.ui.testimonialNote}</span>}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </Section>
  )
}
