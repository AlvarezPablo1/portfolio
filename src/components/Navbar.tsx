import { useEffect, useState } from 'react'
import { useLang } from '../i18n'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'))

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // sin storage (modo privado): el tema solo dura esta visita
    }
  }

  return { dark, toggle }
}

export function Navbar() {
  const { dark, toggle } = useTheme()
  const { lang, toggleLang, t } = useLang()
  const { profile } = t
  const links = [
    { href: '#sobre-mi', label: t.ui.nav.about },
    { href: '#proyectos', label: t.ui.nav.projects },
    { href: '#experiencia', label: t.ui.nav.experience },
    { href: '#skills', label: t.ui.nav.skills },
    { href: '#contacto', label: t.ui.nav.contact },
  ]
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-zinc-200/80 bg-stone-50/80 backdrop-blur-lg dark:border-zinc-800/80 dark:bg-zinc-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#inicio" className="font-semibold tracking-tight text-zinc-900 dark:text-white">
          {profile.name}
          <span className="text-indigo-600 dark:text-indigo-400">.</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleLang}
            aria-label={t.ui.switchLanguage}
            title={t.ui.switchLanguage}
            className="ml-1 flex items-center rounded-lg px-2 py-2 font-mono text-xs transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            {(['es', 'en'] as const).map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="px-1 text-zinc-300 dark:text-zinc-700">/</span>}
                <span className={lang === l ? 'font-semibold text-zinc-900 dark:text-white' : 'text-zinc-400 dark:text-zinc-500'}>
                  {l.toUpperCase()}
                </span>
              </span>
            ))}
          </button>

          <button
            onClick={toggle}
            aria-label={dark ? t.ui.themeToLight : t.ui.themeToDark}
            className="rounded-lg p-2.5 text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.ui.menuClose : t.ui.menuOpen}
            aria-expanded={open}
            className="rounded-lg p-2.5 text-zinc-600 hover:bg-zinc-100 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-900"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto max-w-5xl px-4 pb-4 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
