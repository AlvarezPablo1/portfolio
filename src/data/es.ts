// Contenido en español (idioma por defecto). Mantené la misma estructura que en.ts.
import type { Content } from './types'

export const es: Content = {
  ui: {
    meta: {
      title: 'Pablo Alvarez · Frontend Developer',
      description:
        'Pablo Alvarez — Frontend Developer (React, Next.js, TypeScript) en Mar del Plata, Argentina. Plataformas de beneficios, e-commerce y productos con IA.',
    },
    nav: { about: 'Sobre mí', projects: 'Proyectos', experience: 'Experiencia', skills: 'Skills', contact: 'Contacto' },
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    themeToLight: 'Activar modo claro',
    themeToDark: 'Activar modo oscuro',
    switchLanguage: 'Switch to English',
    hero: { greeting: 'Hola, soy', cta: 'Hablemos', downloadCv: 'Descargar CV' },
    sections: {
      about: { eyebrow: '01 · Sobre mí', title: 'Interfaces que se sienten simples' },
      projects: { eyebrow: '02 · Proyectos', title: 'Trabajo destacado' },
      experience: { eyebrow: '03 · Experiencia', title: 'Dónde trabajé' },
      skills: { eyebrow: '04 · Skills y formación', title: 'Con qué trabajo' },
    },
    status: { production: 'En producción', 'in-progress': 'En desarrollo', delivered: 'Entregado' },
    platformsInProduction: (n) => `${n} plataformas en producción`,
    nextSteps: 'Próximos pasos',
    liveDemo: 'Probar la plataforma',
    languagesLabel: 'Idiomas',
    contact: {
      eyebrow: '05 · Contacto',
      title: '¿Trabajamos juntos?',
      text: 'Estoy buscando nuevas posiciones como Frontend Developer o Software Engineer, y abierto a proyectos freelance. Respondo rápido.',
      copy: 'Copiar email',
      copied: '¡Copiado!',
    },
    footer: 'Hecho con React, TypeScript y Tailwind CSS',
  },
  profile: {
    name: 'Pablo Alvarez',
    role: 'Frontend Developer',
    headline: 'React · Next.js · TypeScript',
    location: 'Mar del Plata, Argentina',
    available: true,
    availabilityText: 'Disponible para nuevos proyectos',
    intro:
      'Construyo aplicaciones web, plataformas de beneficios y productos digitales para bancos y marcas internacionales. Más de 3 años llevando diseños de Figma a interfaces rápidas, accesibles y mantenibles.',
    email: 'pipualvarez1@gmail.com',
    linkedin: 'https://www.linkedin.com/in/pablopalvarez/',
    github: 'https://github.com/AlvarezPablo1',
    cv: '/CV_Pablo_Alvarez.pdf',
  },

  about: [
    'Soy desarrollador Frontend con foco en React, Next.js y TypeScript. Mi experiencia más reciente fue en el área de préstamos de Banco Galicia, y como freelance en MK5 lidero el frontend de plataformas de beneficios para bancos de Costa Rica y Guatemala.',
    'Me formé como Certified Tech Developer en Digital House (junto a Globant y MercadoLibre), con título de Programador Full-Stack semi senior especializado en Front End. Eso me da una base sólida para moverme también en backend y bases de datos cuando el proyecto lo pide.',
    'Integro Figma, Docker y herramientas de IA como Claude Code en mi día a día para entregar código de calidad de forma ágil.',
  ],

  stats: [
    { value: '+3', label: 'años de experiencia' },
    { value: '10+', label: 'marcas y bancos' },
    { value: '7', label: 'países con campañas' },
  ],

  projects: [
    {
      slug: 'banco-galicia',
      name: 'Banco Galicia',
      tagline: 'Préstamos: nuevo flujo, rediseño y overview',
      description:
        'Como parte del equipo de OneDemand, trabajé en la experiencia de préstamos de Banco Galicia, uno de los bancos privados más grandes de Argentina: desarrollé un producto nuevo, renové el flujo de solicitud de punta a punta y construí la pantalla desde la que el cliente ve y gestiona todos sus préstamos.',
      status: 'production',
      role: 'Frontend Developer (OneDemand) · Mar 2025 — Oct 2026',
      logo: '/galicia-logo.png',
      logoWide: true,
      metrics: [
        { value: '1', label: 'producto de préstamo nuevo' },
        { value: '100%', label: 'del flujo de solicitud renovado' },
        { value: '3', label: 'tipos de préstamo en el overview' },
      ],
      highlights: [
        'Desarrollo desde cero del flujo de un nuevo producto de préstamo.',
        'Actualización del flujo completo para pedir un préstamo, tanto el diseño visual como la lógica detrás de cada paso.',
        'Pantalla de overview con los préstamos activos del cliente y sus préstamos hipotecarios o prendarios en otras entidades.',
        'Accesos desde el overview al flujo de cada tipo de préstamo: personal, hipotecario y prendario.',
      ],
      stack: ['React', 'Next.js', 'TypeScript'],
      note: 'Por confidencialidad no se muestran capturas ni detalles internos.',
    },
    {
      slug: 'nurseia',
      name: 'nurseIA',
      tagline: 'Copiloto clínico con IA para enfermería',
      description:
        'Aplicación que ayuda al personal de enfermería durante el turno: detecta diagnósticos NANDA a partir de una descripción clínica en texto libre, los prioriza con el esquema ABCDE y genera evoluciones en formato PAC con IA.',
      status: 'in-progress',
      role: 'Proyecto propio · diseño y desarrollo completo',
      logo: '/nurseia-logo.png',
    liveUrl: 'https://nurse-ia.vercel.app/',
      highlights: [
        'Motor de matching NANDA con priorización Alta/Media/Baja y alertas de compromiso vital (A-B, C, D).',
        'Generación de evoluciones PAC (Valoración, Diagnóstico, NOC, NIC, Evaluación) con Gemini y fallback estático si la IA no responde.',
        'Mapa de triaje del piso configurable: habitaciones, camas y estado del paciente recalculado automáticamente.',
        'Asistente de chat clínico e historial del turno. La API key nunca llega al navegador: todo pasa por endpoints propios.',
      ],
      stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Gemini API', 'Vitest'],
      roadmap: [
        { label: 'Backend', stack: ['Node.js', 'Express', 'PostgreSQL'] },
        { label: 'Web responsive', stack: ['Next.js', 'TypeScript'] },
        { label: 'App mobile', stack: ['Swift'] },
      ],
    },
    {
      slug: 'nutrition-forum',
      name: 'Nutrition Forum',
      tagline: 'Plataforma de eventos online para Danone México',
      description:
        'Plataforma bilingüe para un congreso de nutrición online de dos días: registro, transmisión en vivo con chat y preguntas a los speakers, juegos, stands virtuales y certificados. Cada edición se rediseña desde cero.',
      status: 'delivered',
      role: 'Frontend (freelance en MK5) · ediciones 2024, 2025 y 2026',
      logo: '/nutrition-forum-logo.png',
      logoWide: true,
      metrics: [
        { value: '3', label: 'ediciones' },
        { value: '2', label: 'idiomas (ES / EN)' },
        { value: '3', label: 'juegos con ranking' },
      ],
      highlights: [
        'Página en vivo responsive con video, chat, preguntas a los speakers e información de la charla en curso.',
        'Rediseño de cada edición a partir de Figma: home, registro, login, perfil y página de "próximamente".',
        'Gamificación con trivia, memorama y un juego de búsqueda de productos, sumando puntos a un ranking.',
        'Kermesse de stands virtuales, agenda de charlas, grabaciones por charla y certificados descargables.',
      ],
      stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'GSAP', 'Vimeo', 'Figma'],
    },
    {
      slug: 'mk5-incentives',
      name: 'MK5 Incentives',
      tagline: 'Plataformas de beneficios para bancos de Latinoamérica',
      description:
        'Codebase multi-proyecto con un panel de administración compartido y un sitio público por cliente, cada uno con su dominio, su identidad visual y sus campañas de email marketing.',
      status: 'production',
      role: 'Frontend lead (freelance en MK5)',
      logo: '/mk5-logo.jpg',
      logoWide: true,
      highlights: [
        'Catálogo de comercios, compra y canje de cupones, metas de consumo y niveles por cliente.',
        'Trivia reutilizable con ranking de puntos, temporizador y presupuesto de intentos, rediseñada tras un pentest para no confiar en el navegador.',
        'Campañas por etapas con fechas, votaciones, selección de premios y emails transaccionales.',
        'Tres sitios con identidad propia construidos sobre la misma base de Tailwind CSS.',
      ],
      stack: ['PHP', 'JavaScript', 'Tailwind CSS', 'HTML5', 'MySQL', 'Docker', 'AWS', 'Mailchimp'],
      subprojects: [
        {
          name: 'Tarjeta Digital',
          client: 'BCR · Mastercard · UEFA Champions League',
          description: 'Beneficios para clientes del Banco de Costa Rica.',
          url: 'https://promociones.bancobcr.com/tarjetadigital/',
        },
        {
          name: 'Bi Pasiones',
          client: 'Banco Industrial (Guatemala)',
          description: 'Promociones mensuales, cupones, trivias y votaciones.',
          url: 'https://fanaticos.bi.com.gt/pasiones/',
        },
        {
          name: 'McLaren',
          client: 'GTC Racing (Guatemala)',
          description: 'Plataforma de beneficios para clientes de un banco guatemalteco.',
          url: 'https://gtcracing.gtc.com.gt/mclaren/',
        },
      ],
    },
    {
      slug: 'scotiabank-emails',
      name: 'Scotiabank Caribe',
      tagline: 'Campañas de email marketing para 7 países',
      description:
        'Desarrollo y adaptación de los templates HTML de los journeys de email de Scotiabank en el Caribe, con versiones por país, tipo de tarjeta y segmento de cliente.',
      status: 'delivered',
      role: 'Email developer (freelance en MK5)',
      logo: '/scotiabank-logo.png',
      logoWide: true,
      metrics: [
        { value: '+100', label: 'templates HTML' },
        { value: '7', label: 'países' },
        { value: '3', label: 'tipos de campaña' },
      ],
      highlights: [
        'Journeys de onboarding semana a semana (bienvenida, activación y uso) para tarjetas Platinum, Standard y débito.',
        'Campañas de Spend & Get y de reactivación de clientes inactivos.',
        'Adaptación por mercado: República Dominicana, Barbados, Trinidad y Tobago, Guyana y más.',
        'HTML que se ve bien en los principales clientes de correo, incluido Outlook, con variables dinámicas y legales por país.',
      ],
      stack: ['HTML', 'CSS inline', 'Brevo', 'Mailchimp', 'Git'],
    },
  ],

  experience: [
    {
      company: 'OneDemand · HR & IT',
      role: 'Frontend Developer para Banco Galicia',
      period: 'Mar 2025 — Oct 2026',
      summary:
        'Préstamos de Banco Galicia: desarrollé el flujo de un nuevo producto de préstamo, renové el diseño y la lógica del flujo de solicitud y construí el overview de préstamos del cliente.',
      tags: ['React', 'Next.js', 'TypeScript'],
    },
    {
      company: 'MK5',
      role: 'Frontend Developer (por proyecto)',
      period: 'Sep 2023 — Presente',
      current: true,
      summary: 'Landings, plataformas y campañas de email marketing para marcas internacionales.',
      bullets: [
        'BCR · Mastercard · UEFA Champions League, Bi Pasiones (Banco Industrial) y McLaren (GTC Racing): landing, plataforma y emails.',
        'Nutrition Forum (Danone, México): plataforma de eventos online en las ediciones 2024, 2025 y 2026.',
        'Scotiabank: desarrollo y adaptación de campañas de email para 7 países.',
        'Riot Games: landing de lanzamiento con ruleta interactiva. Evento Galilleo: landing y emails para live streaming.',
      ],
      tags: ['JavaScript', 'PHP', 'Tailwind CSS', 'Email'],
    },
    {
      company: 'UO-Solutions',
      role: 'Frontend Developer (por proyecto)',
      period: 'Feb 2024 — Dic 2024',
      summary:
        'Sitios e-commerce y landing pages sobre diseños de Figma para Cookies.co, RemedyCenter, Bio-soil, una distribuidora y un estudio de abogados de Chile.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'WordPress'],
    },
  ],

  skills: [
    {
      group: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Astro', 'WordPress'],
    },
    { group: 'Backend y datos', items: ['Node.js', 'Java', 'PHP', 'APIs REST', 'MySQL', 'MongoDB', 'PostgreSQL'] },
    { group: 'Testing', items: ['Vitest', 'JUnit', 'Selenium', 'Postman'] },
    { group: 'Herramientas', items: ['Figma', 'Git', 'GitHub', 'Docker', 'Vercel', 'Claude Code'] },
  ],

  education: [
    {
      title: 'Certified Tech Developer',
      school: 'Digital House · junto a Globant y MercadoLibre',
      period: '2022 — 2024',
      detail: 'Programador Full-Stack semi senior con especialización en Front End.',
    },
    {
      title: 'Desarrollo Web, JavaScript y React',
      school: 'Instituto Coderhouse',
      period: '2021',
      detail: 'Desarrollador Web, Programador JavaScript Jr. y Programador React Jr.',
    },
  ],

  languages: ['Español · nativo', 'Inglés · B1 intermedio'],

  testimonial: {
    quote:
      'Hay sólo un puñado de devs que me animo a recomendar. Si estás buscando un Frontend Dev con conocimientos de native y backend, te recomiendo a Pablo.',
    author: 'Matias Paterlini',
    role: 'Forward Deployed Product Engineer · Tribe AI',
  },
}
