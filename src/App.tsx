import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { useLang } from './i18n'

const year = new Date().getFullYear()

export default function App() {
  const { t } = useLang()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-zinc-200 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6 dark:border-zinc-800">
        <p>
          © {year} {t.profile.name}
        </p>
        <p>{t.ui.footer}</p>
      </footer>
    </>
  )
}
