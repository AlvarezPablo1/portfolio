import { useLang } from '../i18n'
import { Card, Reveal, Section } from './ui'

export function Skills() {
  const { t } = useLang()
  const { education, languages, skills } = t

  return (
    <Section id="skills" {...t.ui.sections.skills}>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={i * 60}>
            <Card className="h-full !p-6">
              <h3 className="font-semibold text-zinc-900 dark:text-white">{s.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-zinc-100 px-3 py-1.5 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {education.map((e) => (
          <Reveal key={e.title}>
            <div className="h-full border-t-2 border-indigo-500 pt-4">
              <p className="font-mono text-xs text-zinc-500">{e.period}</p>
              <h3 className="mt-1 font-semibold text-zinc-900 dark:text-white">{e.title}</h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-400">{e.school}</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.detail}</p>
            </div>
          </Reveal>
        ))}
        <Reveal>
          <div className="h-full border-t-2 border-zinc-300 pt-4 dark:border-zinc-700">
            <p className="font-mono text-xs text-zinc-500">{t.ui.languagesLabel}</p>
            <ul className="mt-1 space-y-1">
              {languages.map((l) => (
                <li key={l} className="font-semibold text-zinc-900 dark:text-white">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
