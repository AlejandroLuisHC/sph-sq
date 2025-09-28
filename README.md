# SPH Squad Rules Landing Page

A modern, responsive landing page for displaying video game server rules with internationalization support.

## Features

- 🌍 **Internationalization**: Spanish (default) and English support
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Dark theme with yellow accents inspired by gaming aesthetics
- ⚡ **Fast**: Built with Vite for optimal performance
- 🔧 **TypeScript**: Full type safety and better development experience
- 📦 **Easy to Manage**: Simple structure for easy content updates

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React i18next** - Internationalization
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd sph-sq-rules
```

2. Install dependencies:

```bash
npm install
or
pnpm install
```

3. Start the development server:

```bash
npm run dev
or
pnpm dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
or
pnpm build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/          # React components
│   ├── LanguageSelector.tsx
│   ├── RuleSection.tsx
│   └── RuleList.tsx
├── i18n/               # Internationalization
│   ├── index.ts
│   └── locales/
│       ├── es.json     # Spanish translations
│       └── en.json     # English translations
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization

### Adding New Rules

1. Edit the translation files in `src/i18n/locales/`
2. Add new rule sections to both `es.json` and `en.json`
3. Update the `App.tsx` component to include new `RuleSection` components

### Styling

- Global styles: `src/index.css` (includes Tailwind directives)
- Component styles: All styling is done with Tailwind utility classes
- Custom colors: Defined in `tailwind.config.js`

### Adding New Languages

1. Create a new translation file in `src/i18n/locales/`
2. Add the language to the `resources` object in `src/i18n/index.ts`
3. Update the `LanguageSelector` component to include the new language

## Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## License

MIT License - see LICENSE file for details.
