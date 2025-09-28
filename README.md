# SPH Squad Server Rules

A responsive web application for displaying SPH Squad server rules and guidelines with bilingual support.

## Features

- **Bilingual Support**: Spanish (default) and English
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Dark theme
- **Fast Performance**: Built with Vite and React 18
- **Type Safety**: Full TypeScript implementation

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- React i18next (internationalization)
- React Router DOM (routing)

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm

### Installation

```bash
git clone <repository-url>
cd sph-sq-rules
pnpm install
pnpm dev
```

Open `http://localhost:3000` in your browser.

### Build

```bash
pnpm build
```

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation and language selector
│   ├── RuleSection.tsx # Collapsible rule sections
│   ├── RuleList.tsx    # Rule list display
│   └── __tests__/      # Component tests
├── pages/              # Route components
│   ├── Home.tsx
│   ├── Rules.tsx
│   ├── Sanctions.tsx
│   ├── Support.tsx
│   └── __tests__/      # Page tests
├── i18n/               # Internationalization
│   ├── index.ts
│   ├── locales/
│   │   ├── es.json     # Spanish translations
│   │   └── en.json     # English translations
│   └── __tests__/      # i18n tests
├── __tests__/          # App-level tests
├── assets/             # Images and icons
├── test/               # Test setup
├── App.tsx             # Main application
└── main.tsx            # Entry point
```

## Development

### Available Scripts

- `pnpm dev` - Development server
- `pnpm build` - Production build
- `pnpm test` - Run tests
- `pnpm test:coverage` - Test coverage report
- `pnpm lint` - Code linting

### Adding Content

1. Edit translation files in `src/i18n/locales/`
2. Update both `es.json` and `en.json` files
3. Add new pages in `src/pages/` if needed

## License

MIT License
