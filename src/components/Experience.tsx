import { useLang } from '../i18n'
import { Reveal, Section, Tag } from './ui'

export function Experience() {
  const { t } = useLang()

  return (
    <Section id="experiencia" {...t.ui.sections.experience}>
      <ol className="relative space-y-10 border-l border-zinc-200 pl-6 sm:pl-10 dark:border-zinc-800">
        {t.experience.map((job) => (
          <li key={job.company} className="relative">
            <span
              aria-hidden
              className={`absolute top-1.5 -left-[31px] size-3 rounded-full ring-4 ring-stone-50 sm:-left-[47px] dark:ring-zinc-950 ${
                job.current ? 'bg-indigo-500' : 'bg-zinc-300 dark:bg-zinc-700'
              }`}
            />
            <Reveal>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {job.role} <span className="text-indigo-600 dark:text-indigo-400">@ {job.company}</span>
                </h3>
                <span className="shrink-0 font-mono text-sm text-zinc-500">{job.period}</span>
              </div>
              <p className="mt-3 max-w-3xl leading-relaxed text-zinc-600 dark:text-zinc-400">{job.summary}</p>
              {job.bullets && (
                <ul className="mt-3 max-w-3xl space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-zinc-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
