import { useState } from 'react'
import { useLang } from '../i18n'
import { CheckIcon, CopyIcon, GithubIcon, LinkedinIcon, MailIcon } from './icons'
import { Reveal } from './ui'

export function Contact() {
  const { t } = useLang()
  const { profile } = t
  const c = t.ui.contact
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-zinc-900 px-6 py-14 text-center sm:px-12 sm:py-20 dark:bg-zinc-900 dark:ring-1 dark:ring-zinc-800">
          <div aria-hidden className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/30 blur-3xl" />
          <p className="relative font-mono text-sm text-indigo-300">{c.eyebrow}</p>
          <h2 className="relative mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">{c.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-zinc-400">
            {c.text}
          </p>

          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:bg-zinc-200 sm:w-auto"
            >
              <MailIcon width={18} height={18} />
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 sm:w-auto"
            >
              {copied ? <CheckIcon width={18} height={18} /> : <CopyIcon width={18} height={18} />}
              {copied ? c.copied : c.copy}
            </button>
          </div>

          <div className="relative mt-8 flex justify-center gap-2">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-white">
              <LinkedinIcon width={18} height={18} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-zinc-400 hover:text-white">
              <GithubIcon width={18} height={18} /> GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
