import { useEffect, useState, type ReactNode } from 'react'
import { en } from './data/en'
import { es } from './data/es'
import type { Content, Lang } from './data/types'
import { LangContext } from './i18n'

const content: Record<Lang, Content> = { es, en }
const STORAGE_KEY = 'lang'

/** Español por defecto; si el visitante eligió inglés antes, lo recordamos. */
function initialLang(): Lang {
  try {
    if (localStorage.getItem(STORAGE_KEY) === 'en') return 'en'
  } catch {
    // sin storage (modo privado): arranca en español
  }
  return 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = t.ui.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.ui.meta.description)
  }, [lang, t])

  const toggleLang = () => {
    const next = lang === 'es' ? 'en' : 'es'
    setLang(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // sin storage: el idioma solo dura esta visita
    }
  }

  return <LangContext.Provider value={{ lang, toggleLang, t }}>{children}</LangContext.Provider>
}
