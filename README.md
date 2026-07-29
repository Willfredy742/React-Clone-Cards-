<div align="center">

# 🃏 React Clone Cards

**Tarjetas de testimonios construidas con React — Componentes reutilizables y Props**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

---

## 📝 Descripción

**React Clone Cards** es un proyecto desarrollado como parte de un taller práctico de React enfocado en los conceptos iniciales del framework. La aplicación presenta tarjetas de testimonios de profesionales de la industria tecnológica, construidas mediante **componentes reutilizables** y el uso eficiente de **props** para la transferencia de datos.

El proyecto demuestra cómo una misma estructura de componente puede renderizar contenido dinámico diferente, siguiendo los principios de **Clean Code** y buenas prácticas de desarrollo.

---

## 🖼️ Vista Previa

<div align="center">

![Vista previa de React Clone Cards](./preview.png.jpeg)

</div>

> 💡 Cada tarjeta muestra la foto del profesional, su nombre, país, cargo, empresa y un testimonio completo — todo renderizado dinámicamente a través de props.

---

## ✨ Características Clave

| Característica | Descripción |
|---|---|
| 🧩 **Componentes Reutilizables** | Un único componente `Testimony` se reutiliza para renderizar múltiples tarjetas con datos distintos. |
| 📦 **Props Dinámicas** | Cada tarjeta recibe `name`, `country`, `image`, `post`, `company` y `testimony` como props. |
| 🧹 **Clean Code** | Código organizado con separación clara de responsabilidades: componentes, estilos y assets en carpetas independientes. |
| 🏗️ **Arquitectura Modular** | Componentes `Header`, `Footer` y `Testimony` en directorios propios con sus estilos asociados. |
| 🖼️ **Carga Dinámica de Imágenes** | Uso de `import.meta.glob` de Vite para importar imágenes de forma dinámica y eficiente. |

---

## 🛠️ Tecnologías Utilizadas

<div align="center">

| Tecnología | Versión | Uso |
|---|---|---|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=flat-square) | 19.2 | Biblioteca principal para la UI |
| ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) | 8.1 | Bundler y servidor de desarrollo |
| ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black&style=flat-square) | ES6+ | Lenguaje de programación |
| ![CSS](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white&style=flat-square) | 3 | Estilos y diseño visual |
| ![ESLint](https://img.shields.io/badge/-ESLint-4B32C3?logo=eslint&logoColor=white&style=flat-square) | 10.6 | Linter para calidad de código |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white&style=flat-square) | — | Despliegue en producción |

</div>

---

## 📁 Estructura del Proyecto

```
mi-primer-proyecto/
├── public/
├── src/
│   ├── assets/
│   │   └── img/               # Imágenes de los testimonios
│   │       ├── Emma.png
│   │       ├── Shawn.png
│   │       └── Sarah.png
│   ├── components/
│   │   ├── header/
│   │   │   └── Header.jsx     # Componente de encabezado
│   │   ├── footer/
│   │   │   └── Footer.jsx     # Componente de pie de página
│   │   └── testimony/
│   │       ├── Testimony.jsx  # Componente reutilizable de tarjeta
│   │       └── Testimony.css  # Estilos de la tarjeta
│   ├── styles/
│   │   ├── App.css
│   │   └── index.css
│   ├── App.jsx                # Componente principal
│   └── main.jsx               # Punto de entrada
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

---

## 🚀 Instalación y Ejecución Local

### Prerrequisitos

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (incluido con Node.js)

### Pasos

**1. Clonar el repositorio**

```bash
git clone https://github.com/Willfredy742/React-Clone-Cards-.git
```

**2. Acceder al directorio del proyecto**

```bash
cd React-Clone-Cards-
```

**3. Instalar las dependencias**

```bash
npm install
```

**4. Ejecutar el servidor de desarrollo**

```bash
npm run dev
```

**5. Abrir en el navegador**

Abre tu navegador en [http://localhost:5173](http://localhost:5173) para ver la aplicación.

---

## 🔗 Enlaces del Proyecto

<div align="center">

| Recurso | Enlace |
|---|---|
| 📂 **Repositorio GitHub** | [github.com/Willfredy742/React-Clone-Cards-](https://github.com/Willfredy742/React-Clone-Cards-) |
| 🌐 **Demo en Vercel** | [react-clone-cards-pi.vercel.app](https://react-clone-cards-pi.vercel.app) |

</div>

> 📌 **Nota:** Reemplaza el enlace de Vercel con la URL de tu despliegue una vez disponible.

---

## 👤 Autor

**Willfredy** — [@Willfredy742](https://github.com/Willfredy742)

---


