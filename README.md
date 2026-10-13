# Portfolio · Pablo Alvarez

Sitio personal hecho con **Vite + React + TypeScript + Tailwind CSS v4**.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve el build
```

## Editar contenido

La web está en español (por defecto) e inglés. Cada idioma tiene su archivo:

- `src/data/es.ts` — contenido en español
- `src/data/en.ts` — contenido en inglés

Los dos siguen la estructura definida en `src/data/types.ts`, así que si agregás o cambiás un campo
en uno, TypeScript te avisa si falta en el otro. Lo que no se traduce (links, logos, stack) hay que
mantenerlo igual en ambos archivos; por ejemplo, un proyecto nuevo se agrega en los dos.

El idioma elegido por el visitante se recuerda entre visitas (`localStorage`).

- CV descargable: `public/CV_Pablo_Alvarez.pdf` (español) y `public/CV_Pablo_Alvarez_EN.pdf` (inglés)
- Logos de proyectos: `public/*-logo.*`

## Deploy

Importá el repo en [Vercel](https://vercel.com) o [Netlify](https://netlify.com): detectan Vite solos
(build `npm run build`, output `dist`).
