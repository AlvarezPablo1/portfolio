// English content. Keep the same structure as es.ts.
import type { Content } from './types'

export const en: Content = {
  ui: {
    meta: {
      title: 'Pablo Alvarez · Frontend Developer',
      description:
        'Pablo Alvarez — Frontend Developer (React, Next.js, TypeScript) based in Mar del Plata, Argentina. Benefits platforms, e-commerce and AI-powered products.',
    },
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    themeToLight: 'Switch to light mode',
    themeToDark: 'Switch to dark mode',
    switchLanguage: 'Cambiar a español',
    hero: { greeting: "Hi, I'm", cta: "Let's talk", downloadCv: 'Download CV' },
    sections: {
      about: { eyebrow: '01 · About', title: 'Interfaces that feel simple' },
      projects: { eyebrow: '02 · Projects', title: 'Featured work' },
      experience: { eyebrow: '03 · Experience', title: "Where I've worked" },
      skills: { eyebrow: '04 · Skills & education', title: 'What I work with' },
    },
    status: { production: 'In production', 'in-progress': 'In progress', delivered: 'Delivered' },
    platformsInProduction: (n) => `${n} platforms in production`,
    nextSteps: 'Next steps',
    liveDemo: 'Try the platform',
    languagesLabel: 'Languages',
    testimonialNote: 'Translated from Spanish',
    contact: {
      eyebrow: '05 · Contact',
      title: 'Shall we work together?',
      text: "I'm looking for new Frontend Developer or Software Engineer roles, and I'm open to freelance projects. I reply fast.",
      copy: 'Copy email',
      copied: 'Copied!',
    },
    footer: 'Built with React, TypeScript and Tailwind CSS',
  },

  profile: {
    name: 'Pablo Alvarez',
    role: 'Frontend Developer',
    headline: 'React · Next.js · TypeScript',
    location: 'Mar del Plata, Argentina',
    available: true,
    availabilityText: 'Available for new projects',
    intro:
      'I build web apps, benefits platforms and digital products for banks and international brands. 3+ years turning Figma designs into fast, accessible and maintainable interfaces.',
    email: 'pipualvarez1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pablopalvarez/',
    github: 'https://github.com/AlvarezPablo1',
    cv: '/CV_Pablo_Alvarez_EN.pdf',
  },

  about: [
    "I'm a Frontend Developer focused on React, Next.js and TypeScript. Most recently I built loan flows for Banco Galicia, and as a freelancer at MK5 I lead the frontend of benefits platforms for banks in Costa Rica and Guatemala.",
    'I trained as a Certified Tech Developer at Digital House (together with Globant and MercadoLibre), graduating as a Full-Stack Developer specialized in Front End. That gives me a solid base to also work on the backend and databases when a project needs it.',
    'I use Figma, Docker and AI tools like Claude Code every day to ship quality code, fast.',
  ],

  stats: [
    { value: '+3', label: 'years of experience' },
    { value: '10+', label: 'brands and banks' },
    { value: '7', label: 'countries with campaigns' },
  ],

  projects: [
    {
      slug: 'banco-galicia',
      name: 'Banco Galicia',
      tagline: 'Loans: new flow, redesign and overview',
      description:
        "As part of the OneDemand team, I worked on the loans experience at Banco Galicia, one of Argentina's largest private banks: I built a new product, revamped the application flow end to end and built the screen where customers see and manage all their loans.",
      status: 'production',
      role: 'Frontend Developer (OneDemand) · Mar 2025 — Oct 2026',
      logo: '/galicia-logo.png',
      logoWide: true,
      metrics: [
        { value: '1', label: 'new loan product' },
        { value: '100%', label: 'of the application flow revamped' },
        { value: '3', label: 'loan types in the overview' },
      ],
      highlights: [
        'Built the flow for a new loan product from scratch.',
        'Revamped the full loan application flow, both the visual design and the logic behind each step.',
        "Overview screen showing the customer's active loans and any mortgage or secured loans held with other institutions.",
        'Entry points from the overview to the flow for each loan type: personal, mortgage and secured loans.',
      ],
      stack: ['React', 'Next.js', 'TypeScript'],
      note: 'Screenshots and internal details are omitted for confidentiality.',
    },
    {
      slug: 'nurseia',
      name: 'nurseIA',
      tagline: 'AI clinical copilot for nurses',
      description:
        'An app that supports nursing staff during their shift: it detects NANDA diagnoses from a free-text clinical description, prioritizes them with the ABCDE scheme and generates AI-written nursing progress notes in PAC format.',
      status: 'in-progress',
      role: 'Personal project · full design and development',
      logo: '/nurseia-logo.png',
      liveUrl: 'https://nurse-ia.vercel.app/',
      highlights: [
        'NANDA matching engine with High/Medium/Low priority and alerts for life-threatening findings (A-B, C, D).',
        'PAC progress notes (Assessment, Diagnosis, NOC, NIC, Evaluation) generated with Gemini, with a static fallback if the AI is unavailable.',
        'Configurable ward triage map: rooms, beds and patient status recalculated automatically.',
        'Clinical chat assistant and shift history. The API key never reaches the browser: everything goes through our own endpoints.',
      ],
      stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Gemini API', 'Vitest'],
      roadmap: [
        { label: 'Backend', stack: ['Node.js', 'Express', 'PostgreSQL'] },
        { label: 'Responsive web', stack: ['Next.js', 'TypeScript'] },
        { label: 'Mobile app', stack: ['Swift'] },
      ],
    },
    {
      slug: 'nutrition-forum',
      name: 'Nutrition Forum',
      tagline: 'Online events platform for Danone Mexico',
      description:
        'Bilingual platform for a two-day online nutrition conference: registration, live streaming with chat and questions for speakers, games, virtual booths and certificates. Each edition is redesigned from scratch.',
      status: 'delivered',
      role: 'Frontend (freelance at MK5) · 2024, 2025 and 2026 editions',
      logo: '/nutrition-forum-logo.png',
      logoWide: true,
      metrics: [
        { value: '3', label: 'editions' },
        { value: '2', label: 'languages (ES / EN)' },
        { value: '3', label: 'games with leaderboard' },
      ],
      highlights: [
        'Responsive live page with video, chat, questions for speakers and info about the current talk.',
        'Each edition redesigned from Figma: home, sign-up, login, profile and "coming soon" pages.',
        'Gamification with trivia, a memory game and a product hunt game, all feeding a points leaderboard.',
        'Virtual booth fair, talk schedule, per-talk recordings and downloadable certificates.',
      ],
      stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Vimeo', 'Figma'],
    },
    {
      slug: 'mk5-incentives',
      name: 'MK5 Incentives',
      tagline: 'Benefits platforms for Latin American banks',
      description:
        'Multi-project codebase with a shared admin panel and one public site per client, each with its own domain, visual identity and email marketing campaigns.',
      status: 'production',
      role: 'Frontend lead (freelance at MK5)',
      logo: '/mk5-logo.jpg',
      logoWide: true,
      highlights: [
        'Merchant catalog, coupon purchase and redemption, spending goals and customer tiers.',
        'Reusable trivia with points leaderboard, timer and attempt limits, redesigned after a pentest so it never trusts the browser.',
        'Stage-based campaigns with dates, voting, prize selection and transactional emails.',
        'Three sites with their own identity built on the same Tailwind CSS foundation.',
      ],
      stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'HTML5', 'MySQL', 'Docker', 'AWS', 'Mailchimp'],
      subprojects: [
        {
          name: 'Tarjeta Digital',
          client: 'BCR · Mastercard · UEFA Champions League',
          description: 'Benefits for Banco de Costa Rica customers.',
          url: 'https://promociones.bancobcr.com/tarjetadigital/',
        },
        {
          name: 'Bi Pasiones',
          client: 'Banco Industrial (Guatemala)',
          description: 'Monthly promotions, coupons, trivia and voting.',
          url: 'https://fanaticos.bi.com.gt/pasiones/',
        },
        {
          name: 'McLaren',
          client: 'GTC Racing (Guatemala)',
          description: 'Benefits platform for customers of a Guatemalan bank.',
          url: 'https://gtcracing.gtc.com.gt/mclaren/',
        },
      ],
    },
    {
      slug: 'scotiabank-emails',
      name: 'Scotiabank Caribbean',
      tagline: 'Email marketing campaigns for 7 countries',
      description:
        "Built and adapted the HTML templates for Scotiabank's Caribbean email journeys, with versions by country, card type and customer segment.",
      status: 'delivered',
      role: 'Email developer (freelance at MK5)',
      logo: '/scotiabank-logo.png',
      logoWide: true,
      metrics: [
        { value: '+100', label: 'HTML templates' },
        { value: '7', label: 'countries' },
        { value: '3', label: 'campaign types' },
      ],
      highlights: [
        'Week-by-week onboarding journeys (welcome, activation and usage) for Platinum, Standard and debit cards.',
        'Spend & Get and inactive-customer reactivation campaigns.',
        'Per-market adaptation: Dominican Republic, Barbados, Trinidad and Tobago, Guyana and more.',
        'HTML that renders well in the major email clients, Outlook included, with dynamic variables and country-specific legal copy.',
      ],
      stack: ['HTML', 'Inline CSS', 'Brevo', 'Mailchimp', 'Git'],
    },
  ],

  experience: [
    {
      company: 'OneDemand · HR & IT',
      role: 'Frontend Developer for Banco Galicia',
      period: 'Mar 2025 — Oct 2026',
      summary:
        'Banco Galicia loans: built the flow for a new loan product, revamped the design and logic of the application flow and built the customer loans overview.',
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      company: 'MK5',
      role: 'Frontend Developer (project-based)',
      period: 'Sep 2023 — Present',
      current: true,
      summary: 'Landing pages, platforms and email marketing campaigns for international brands.',
      bullets: [
        'BCR · Mastercard · UEFA Champions League, Bi Pasiones (Banco Industrial) and McLaren (GTC Racing): landing page, platform and emails.',
        'Nutrition Forum (Danone, Mexico): online events platform for the 2024, 2025 and 2026 editions.',
        'Scotiabank: built and adapted email campaigns for 7 countries.',
        'Riot Games: game launch landing page with an interactive prize wheel. Galilleo event: landing page and emails for a live stream.',
      ],
      tags: ['JavaScript', 'PHP', 'Tailwind CSS', 'Email'],
    },
    {
      company: 'UO-Solutions',
      role: 'Frontend Developer (project-based)',
      period: 'Feb 2024 — Dec 2024',
      summary:
        'E-commerce sites and landing pages from Figma designs for Cookies.co, RemedyCenter, Bio-soil, a distribution company and a law firm in Chile.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'WordPress'],
    },
  ],

  skills: [
    {
      group: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Astro', 'WordPress'],
    },
    { group: 'Backend & data', items: ['Node.js', 'Java', 'PHP', 'REST APIs', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { group: 'Testing', items: ['Vitest', 'JUnit', 'Selenium', 'Postman'] },
    { group: 'Tools', items: ['Figma', 'Git', 'GitHub', 'Docker', 'Vercel', 'Claude Code'] },
  ],

  education: [
    {
      title: 'Certified Tech Developer',
      school: 'Digital House · with Globant and MercadoLibre',
      period: '2022 — 2024',
      detail: 'Full-Stack Developer (semi-senior) specialized in Front End.',
    },
    {
      title: 'Web Development, JavaScript and React',
      school: 'Instituto Coderhouse',
      period: '2021',
      detail: 'Web Developer, Junior JavaScript Developer and Junior React Developer courses.',
    },
  ],

  languages: ['Spanish · native', 'English · B1 intermediate'],

  testimonial: {
    quote:
      "There are only a handful of devs I'd recommend. If you're looking for a Frontend Dev with native and backend knowledge, I recommend Pablo.",
    author: 'Matias Paterlini',
    role: 'Forward Deployed Product Engineer · Tribe AI',
  },
}
