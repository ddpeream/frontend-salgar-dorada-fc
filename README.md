# ⚽💛 Salgar Dorada FC — Frontend Cosmic 🔥

![Salgar Dorada FC Banner](./src/assets/escudo-sd.jpg)

> **Objetivo:** Convertir a Salgar Dorada FC en un portal digital electrizante donde la afición vibra, la plantilla brilla y los nuevos talentos se inscriben con estilo digno de finalísima.

<p align="center">
	<img src="https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react" alt="React" />
	<img src="https://img.shields.io/badge/TypeScript-4.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
	<img src="https://img.shields.io/badge/Styled--Components-%F0%9F%92%85-DB7093?style=for-the-badge&logo=styled-components" alt="Styled Components" />
	<img src="https://img.shields.io/badge/Framer--Motion-%F0%9F%8C%88-8A2BE2?style=for-the-badge&logo=framer" alt="Framer Motion" />
</p>

---

## 🌟 Qué hace tan bacano a este proyecto

- 🎨 **Experiencia inmersiva**: Home page con héroes cinemáticos, highlights dinámicos y vibe dorado-azul.
- 🧢 **Plantilla glam**: Catálogo de jugadores con motion cards, stats sintetizadas y storytelling visual.
- 📝 **Formulario next-level**: Inscripción de talentos con UI glassmorphism, labels flotantes y feedback animado en tiempo real.
- 🛰️ **Arquitectura ligera**: SPA en React + Vite CRA-like, servicios centralizados y tipados a fuego lento.
- 📱 **Full responsive**: Diseñado mobile-first, optimizado para tablets y pantallas gigantes del estadio.

---

## 🚀 Setup rapidito

> Requisitos: Node.js ≥ 18, npm ≥ 8, conexión a internet para jalar los assets.

```bash
# 1. Instala dependencias
npm install

# 2. Corre en modo desarrollo (http://localhost:3000)


# 3. Ejecuta tests unitarios con Jest + Testing Library
npm test

# 4. Build de producción optimizado en /build
npm run build
```

> 🧭 Extra: Corre `npx update-browserslist-db@latest` de vez en cuando para tener targets frescos.

---

## 🔥 Vistas clave

| Vista | Moodboard | Highlights |
|-------|-----------|------------|
| 🏠 **Home** | Hero parallax, CTA torcido, testimonios de la hinchada | Scroll mágico, botones con glow, navegación simplificada |
| 🧑‍🤝‍🧑 **Plantilla** | Grid modulable, tarjetas con 3D hover | Stats precisas, quick filters, spotlight de jugadores clave |
| 📝 **Inscripción** | Formularios card-based, validación elegante | Secciones agrupadas, feedback inmediato, mensajes humanizados |

---

## 🧱 Arquitectura en dos toques

```
src/
├─ components/         # UI reusables (botón volver, layout, etc.)
├─ pages/
│  ├─ home/            # Landing vibrante + header/footer custom
│  ├─ players/         # Listado de jugadores y perfil individual
│  └─ form/            # Formulario animado de inscripción
├─ service/            # Axios services y DTOs tipados
├─ assets/             # Imágenes oficiales del club
└─ styles/             # Temas y helpers globales (CSS / styled)
```

---

## 🛠️ Stack con sabor a gol

- ⚛️ **React + TypeScript**: Componentes limpios, tipados sólidos.
- 💅 **Styled Components**: Temas dinámicos, glassmorphism y layout responsivo.
- 🪄 **Framer Motion**: Animaciones suaves, transiciones de página y microinteracciones.
- 🧪 **Testing Library + Jest**: Unit tests para asegurar la química del equipo.
- 🌐 **Axios**: Requests tipados a la API del club.

---

## 🌍 Variables de entorno

| Variable | Para qué sirve |
|----------|----------------|
| `REACT_APP_BASE_URL` | Endpoint HTTP del backend (ambiente local/desarrollo). |
| `REACT_APP_BASE_URL_PRO` | Endpoint HTTPS para producción. |

_Tip_: Usa `.env.local` para tus variables locales y `.env.production` para despliegues.

---

## 📡 Despliegue recomendado

1. Genera build: `npm run build`
2. Sube `/build` a tu hosting (Vercel, Netlify, GitHub Pages, Render...)
3. Configura HTTPS + dominio personalizado (`vercel.json` ya apunta a SPA).
4. Valida que las rutas públicas (`/`, `/plantilla`, `/inscripcion`) carguen sin fallback.

---

## 🤝 Cómo contribuir

1. Haz un fork y crea una branch con el feature: `git checkout -b feature/lo-que-sea`
2. Implementa tu magia (respeta los componentes y la estética dorada)
3. Corre `npm test` y `npm run build` antes de subir
4. Abre un PR describiendo el gol que marcaste 🙌

---

## 📬 Contacto del club

- 🌐 [Sitio oficial](https://salgar-dorada-fc-fr.vercel.app/) _(placeholder)_
- 📸 Instagram: `@salgar_dorada_fc`
- ✉️ Email: `contacto@salgar-dorada-fc.com`

---

> _“Salgar Dorada FC: donde la cancha vibra y el front te guiña el ojo.”_
