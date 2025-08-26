# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Ateko AI Consulting Website

A modern, responsive recreation of the Ateko website template built with React, TypeScript, Tailwind CSS, and Shadcn/UI components.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Shadcn/UI component library
- **Responsive Design**: Mobile-first approach
- **Modular Architecture**: Clean, reusable component structure
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: ARIA labels and keyboard navigation

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Layout components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Footer.tsx   # Footer with links
│   │   └── Layout.tsx   # Main layout wrapper
│   ├── sections/        # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── TeamSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/              # Reusable UI components
│       ├── ServiceCard.tsx
│       ├── TestimonialCard.tsx
│       ├── TeamMemberCard.tsx
│       └── [shadcn components]
├── types/               # TypeScript type definitions
└── lib/                 # Utility functions
```

## 🛠️ Development

### Prerequisites

- Node.js 20.19+ (recommended)
- npm or yarn

### Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors

- **Primary**: Blue gradient (blue-600 to purple-600)
- **Text**: Gray scale (gray-900, gray-700, gray-600)
- **Background**: White with gray-50 sections
- **Accent**: Black for CTAs

### Typography

- **Headlines**: Bold, tracking-tight
- **Body**: Regular weight, relaxed leading
- **Small text**: Medium weight for labels

### Components

All UI components are built with Shadcn/UI and customized for the design:

- Buttons with hover states
- Cards with subtle shadows
- Form inputs with proper labeling
- Accordion for FAQ section

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## 🚀 Deployment

The app is configured for modern deployment platforms:

- **Vercel**: Zero-config deployment
- **Netlify**: Build command: `npm run build`, publish directory: `dist`
- **GitHub Pages**: Use `npm run build` and deploy `dist` folder

## 🔧 Key Technologies

- **React 19**: Latest React with concurrent features
- **TypeScript**: Type safety and better DX
- **Vite**: Fast build tool and dev server
- **Tailwind CSS v4**: Utility-first CSS framework
- **Shadcn/UI**: High-quality component library
- **React Router**: Client-side routing (ready for SPA)

## 📈 Performance Optimizations

- Vite's optimized bundling
- Tree-shaking for smaller bundles
- Lazy loading ready for route-based splitting
- Optimized images and assets

## 🎯 Next Steps

To enhance the application further, consider:

1. **Add animations**: Framer Motion for page transitions
2. **CMS integration**: Strapi or Sanity for content management
3. **SEO optimization**: React Helmet for meta tags
4. **Analytics**: Google Analytics or Mixpanel integration
5. **Testing**: Jest and React Testing Library
6. **Internationalization**: i18next for multi-language support

## 📄 License

This project is created for educational purposes based on the Ateko website template.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
