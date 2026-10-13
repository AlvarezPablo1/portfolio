import type { Project, ProjectStatus } from '../data/types'
import { useLang } from '../i18n'
import { ArrowUpRightIcon } from './icons'
import { Card, Reveal, Section, Tag } from './ui'

const statusStyles: Record<ProjectStatus, string> = {
  production: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
  'in-progress': 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300',
  delivered: 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300',
}

/** "Banco Galicia" → "BG", "nurseIA" → "NU" */
function initials(name: string) {
  const words = name.split(/\s+/)
  return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase()
}

function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang()

  return (
    <Card className="transition-shadow hover:shadow-lg hover:shadow-zinc-900/5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          {project.logo && project.logoWide ? (
            <img src={project.logo} alt="" className="h-12 w-24 shrink-0 rounded-xl border border-zinc-200 bg-white object-cover dark:border-zinc-700" />
          ) : project.logo ? (
            <img src={project.logo} alt="" className="size-12 shrink-0 rounded-xl border border-zinc-200 bg-white object-contain p-1.5 dark:border-zinc-700" />
          ) : (
            <div className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-bold text-white">
              {initials(project.name)}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-zinc-900 sm:text-2xl dark:text-white">{project.name}</h3>
            <p className="text-zinc-500">{project.tagline}</p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${statusStyles[project.status]}`}>{t.ui.status[project.status]}</span>
      </div>

      <p className="mt-6 leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
      <p className="mt-3 font-mono text-xs text-indigo-600 dark:text-indigo-400">{project.role}</p>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group mt-5 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        >
          {t.ui.liveDemo}
          <ArrowUpRightIcon width={16} height={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      )}

      {project.metrics && (
        <dl className="mt-6 grid grid-cols-3 gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-stone-50 px-3 py-3 sm:px-4 dark:bg-zinc-950/50">
              <dd className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{m.value}</dd>
              <dt className="mt-0.5 text-xs text-zinc-500 sm:text-sm">{m.label}</dt>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-500" />
            {h}
          </li>
        ))}
      </ul>

      {project.subprojects && (
        <div className="mt-8">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{t.ui.platformsInProduction(project.subprojects.length)}</h4>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {project.subprojects.map((sp) => {
              const content = (
                <>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-zinc-900 dark:text-white">{sp.name}</span>
                    {sp.url && (
                      <ArrowUpRightIcon
                        width={16}
                        height={16}
                        className="text-zinc-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-indigo-500"
                      />
                    )}
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">{sp.client}</p>
                  <p className="mt-2 text-sm text-zinc-500">{sp.description}</p>
                </>
              )
              const className =
                'group block rounded-xl border border-zinc-200 bg-stone-50 p-4 transition-colors dark:border-zinc-800 dark:bg-zinc-950/50'
              return sp.url ? (
                <a key={sp.name} href={sp.url} target="_blank" rel="noreferrer" className={`${className} hover:border-indigo-300 dark:hover:border-indigo-500/40`}>
                  {content}
                </a>
              ) : (
                <div key={sp.name} className={className}>
                  {content}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {project.roadmap && (
        <div className="mt-8">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{t.ui.nextSteps}</h4>
          <ol className="mt-3 grid gap-3 sm:grid-cols-3">
            {project.roadmap.map((step, i) => (
              <li key={step.label} className="rounded-xl border border-dashed border-zinc-300 p-4 dark:border-zinc-700">
                <span className="font-mono text-xs text-zinc-400">0{i + 1}</span>
                <p className="font-semibold text-zinc-900 dark:text-white">{step.label}</p>
                <p className="mt-1 text-sm text-zinc-500">{step.stack.join(' · ')}</p>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-2 border-t border-zinc-100 pt-6 dark:border-zinc-800">
        {project.stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {project.note && <p className="mt-4 text-xs text-zinc-400 italic dark:text-zinc-500">{project.note}</p>}
    </Card>
  )
}

export function Projects() {
  const { t } = useLang()

  return (
    <Section id="proyectos" {...t.ui.sections.projects}>
      <div className="space-y-8">
        {t.projects.map((p) => (
          <Reveal key={p.slug}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
