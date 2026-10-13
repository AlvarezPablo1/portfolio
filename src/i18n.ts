import { createContext, useContext } from 'react'
import type { Content, Lang } from './data/types'

export interface LangContextValue {
  lang: Lang
  toggleLang: () => void
  t: Content
}

export const LangContext = createContext<LangContextValue | null>(null)

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang debe usarse dentro de <LangProvider>')
  return ctx
}
