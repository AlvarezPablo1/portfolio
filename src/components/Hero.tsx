import { useLang } from '../i18n'
import { DownloadIcon, GithubIcon, LinkedinIcon, PinIcon } from './icons'
import { Reveal } from './ui'

export function Hero() {
  const { t } = useLang()
  const { profile, stats } = t

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* Fondo: grilla sutil + brillo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgb(0_0_0/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(0_0_0/0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dark:[background-image:linear-gradient(to_right,rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.05)_1px,transparent_1px)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-600/15"
      />

      <div className="relative mx-auto max-w-5xl px-4 pt-36 pb-20 sm:px-6 sm:pt-44 sm:pb-28">
        <Reveal>
          {profile.available && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availabilityText}
            </span>
          )}
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-6xl md:text-7xl dark:text-white">
            {t.ui.hero.greeting} {profile.name.split(' ')[0]}.
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-violet-400">
              {profile.role}.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl dark:text-zinc-400">{profile.intro}</p>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <PinIcon width={16} height={16} />
              {profile.location}
            </span>
            <span className="font-mono whitespace-nowrap">{profile.headline}</span>
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#contacto"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {t.ui.hero.cta}
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-500"
            >
              <DownloadIcon width={18} height={18} />
              {t.ui.hero.downloadCv}
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-lg p-2.5 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <dl className="mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-zinc-200 pt-8 dark:border-zinc-800">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">{s.value}</dd>
                <dd className="mt-1 text-sm text-zinc-500">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
