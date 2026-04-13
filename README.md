# TerraCart (React + Vite + Tailwind)

Modern static rebuild of TerraCart with:
- React + Vite
- Tailwind CSS v4
- React Router DOM
- Framer Motion animations
- Swiper kiosk slider
- Route-level SEO via react-helmet-async
- Formspree-ready contact form

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Form setup

Create a `.env` file:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

Without this variable, forms render but show a configuration warning on submit.
