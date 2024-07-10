
# Guil CLI Boilerplate

<p align="center">
  <img src="https://res.cloudinary.com/dfgjenml4/image/upload/v1720642021/jggk0zwejnbmsmlcd33g.png" alt="Guil CLI Logo" width="100" height="60">
</p>

Este es un boilerplate para React, configurado con herramientas de desarrollo modernas y una estructura de carpetas pensada para proyectos escalables.

## 🚀 Características

- ⚛️ React 18
- 🎨 Tailwind CSS para estilos
- 🧭 React Router para navegación
- 🛠 ESLint y Prettier para linting y formateo de código
- 🐶 Husky para git hooks
- 🚫 lint-staged para ejecutar linters en archivos staged
- 📱 Diseño responsive
- 🌐 Soporte para PWA (Progressive Web App)

## 🏁 Inicio rápido

### 🔧 Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/guil-cli-boilerplate.git
```

### 📂 Navegar al directorio
```bash
cd guil-cli-boilerplate
```

### 📦 Instalar dependencias
```bash
npm install
```

### 🚀 Iniciar el servidor de desarrollo
```bash
npm run dev
```

##### La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

------------

# 📁 Estructura de carpetas

```plaintext
src/
├── assets/               # Archivos estáticos (imágenes, fuentes, etc.)
├── components/           # Componentes reutilizables
├── common/               # Componentes comunes (botones, inputs, etc.)
├── layout/               # Componentes de layout (header, footer, etc.)
└── feature-specific/     # Componentes específicos de características
├── hooks/                # Custom hooks
├── pages/                # Componentes de páginas
├── services/             # Servicios (API, autenticación, etc.)
├── utils/                # Funciones de utilidad y constantes
├── context/              # Contextos de React
├── store/                # Configuración de estado global (si se usa Redux)
├── styles/               # Estilos globales y variables
├── App.jsx               # Componente principal de la aplicación
└── index.jsx             # Punto de entrada de la aplicación
```

------------

# 🤝 Contributing to CLI guil

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- 🐛 Reporting a bug
- 💬 Discussing the current state of the code
- 🛠 Submitting a fix
- 🌟 Proposing new features
- 👩‍💻 Becoming a maintainer

## We Develop with GitHub
We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [GitHub Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests
Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. 🍴 Fork the repo and create your branch from `main`.
2. ✅ If you've added code that should be tested, add tests.
3. 📖 If you've changed APIs, update the documentation.
4. ✔️ Ensure the test suite passes.
5. 🧹 Make sure your code lints.
6. 🔄 Issue that pull request!

## 📝 Any contributions you make will be under the MIT Software License
In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## 🐞 Report bugs using GitHub's [issues](https://github.com/yourusername/cli-guil/issues)
We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/yourusername/cli-guil/issues/new); it's that easy!

## 🐛 Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

## 🖥️ Use a Consistent Coding Style

* 2 spaces for indentation rather than tabs
* You can try running `npm run lint` for style unification

## 📜 License
By contributing, you agree that your contributions will be licensed under its MIT License.

## 📚 References
This document was adapted from the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/master/CONTRIBUTING.md)

------------

# 📝 Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Initial project setup with React and Tailwind CSS
- Implemented basic routing with React Router
- Created Home, About, and Features pages
- Added SEO component using React Helmet
- Implemented responsive design across all pages

### Changed
- Updated README with project overview and setup instructions

### Fixed
- Resolved issues with content overflow on smaller screens

## [0.1.0] - 2024-07-10

### Added
- Initial release of CLI guil
- Basic CLI functionality
- Project scaffolding capabilities

[Unreleased]: https://github.com/yourusername/cli-guil/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/yourusername/cli-guil/releases/tag/v0.1.0
