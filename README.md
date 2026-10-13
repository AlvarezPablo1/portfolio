# Portfolio · Pablo Alvarez

Portfolio personal de Pablo Alvarez, Frontend Developer.

**🌐 [pabloalvarez.vercel.app](https://pabloalvarez.vercel.app)**

## Qué incluye

- Inicio con disponibilidad, links de contacto y CV descargable.
- Sobre mí, con una recomendación.
- Proyectos destacados: Banco Galicia, nurseIA, Nutrition Forum, MK5 Incentives y Scotiabank Caribe.
- Experiencia, skills, formación e idiomas.
- Contacto por email, con botón para copiarlo.
- Español (por defecto) e inglés, con un CV distinto para cada idioma.
- Modo claro y oscuro. Responsive desde 360px.

El idioma y el tema que elige el visitante se recuerdan entre visitas (`localStorage`).

## Stack

[Vite](https://vite.dev) · [React 19](https://react.dev) · [TypeScript](https://www.typescriptlang.org) ·
[Tailwind CSS v4](https://tailwindcss.com) · [oxlint](https://oxc.rs) · deploy en [Vercel](https://vercel.com).

Es un sitio estático, sin backend ni librerías extra: los íconos son SVG propios, las animaciones
son CSS y la traducción es un contexto de React.

## Desarrollo

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # chequea tipos y genera dist/
npm run preview  # sirve el build localmente
npm run lint     # oxlint
```

## Estructura

```
public/                 CV en PDF, logos de proyectos y favicon
src/
  data/
    types.ts            estructura del contenido (la comparten los dos idiomas)
    es.ts               contenido en español
    en.ts               contenido en inglés
  components/           secciones de la página (Hero, Projects, Experience…) y piezas comunes (ui.tsx)
  i18n.ts               hook useLang()
  LangProvider.tsx      idioma activo, persistencia y <title>/<meta> según el idioma
  index.css             Tailwind, modo oscuro y animación de aparición
```

## Editar contenido

Todo el texto vive en `src/data/es.ts` y `src/data/en.ts`; no hace falta tocar los componentes.

- **Los dos archivos deben coincidir.** Siguen la estructura de `types.ts`, así que si a uno le falta
  un campo obligatorio, `npm run build` falla y avisa dónde. Los opcionales (como `liveUrl`) no se
  chequean: si agregás uno, acordate de ponerlo en los dos idiomas.
- **Lo que no se traduce se repite en ambos archivos:** links, logos y stack. Por ejemplo, un proyecto
  nuevo se agrega en los dos.
- **Textos de la interfaz:** los del menú, los títulos de sección y los botones están en `ui`, al
  principio de cada archivo.

### Agregar un proyecto

Agregá un objeto a `projects` en `es.ts` y en `en.ts`. El orden de la lista es el orden en la página.

```ts
{
  slug: 'mi-proyecto',              // identificador único
  name: 'Mi Proyecto',
  tagline: 'Una línea que lo resume',
  description: 'Qué es y para quién.',
  status: 'production',             // 'production' | 'in-progress' | 'delivered'
  role: 'Mi rol · fechas',
  highlights: ['Logro 1', 'Logro 2'],
  stack: ['React', 'TypeScript'],

  // Opcionales
  logo: '/mi-proyecto-logo.png',    // sin logo, se muestran las iniciales
  logoWide: true,                   // logo horizontal (ver "Logos")
  liveUrl: 'https://…',             // muestra el botón "Probar la plataforma"
  metrics: [{ value: '3', label: 'ediciones' }],
  note: 'Aclaración al pie, ej. confidencialidad',
  roadmap: [{ label: 'Backend', stack: ['Node.js'] }],
  subprojects: [{ name: '…', client: '…', description: '…', url: '…' }],
}
```

### Logos

Van en `public/`. Hay dos formatos:

- **Cuadrado** (como el de nurseIA): se muestra a 48×48 sobre fondo blanco.
- **Horizontal** (con `logoWide: true`): se muestra a 96×48. La imagen tiene que ser 2:1 y traer su
  propio fondo; las actuales miden 480×240 px.

### CV

`public/CV_Pablo_Alvarez.pdf` (español) y `public/CV_Pablo_Alvarez_EN.pdf` (inglés). Para
actualizarlos, reemplazá el archivo manteniendo el nombre. La ruta de cada uno está en `profile.cv`.

## Deploy

El proyecto `pabloalvarez` de Vercel está conectado a este repositorio:

- **Cada push a `main`** se publica solo en producción, en un par de minutos.
- **Cada push a otra rama** genera una URL de preview, ideal para revisar cambios antes de publicarlos.

No hace falta configurar nada más: Vercel detecta Vite y usa `npm run build` con salida en `dist/`.
