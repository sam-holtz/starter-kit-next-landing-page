# Landing Page Starter Kit

A modern, composable landing page template built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), and [Contento](https://contento.io) CMS. Designed for rapid development of marketing sites with a page builder, header/footer navigation, and reusable content blocks.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **CMS:** Contento
- **UI:** Headless UI, Heroicons

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository and install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.sample .env
```

3. Configure your Contento credentials in `.env`:

   - `CONTENTO_API_KEY` — Create in [Contento Account Settings](https://app.contento.io/account/api-keys)
   - `CONTENTO_SITE_ID` — From the Sites screen in Contento
   - `SITE_MAIN_NAV_ID` — Main navigation content ID
   - `SITE_FOOTER_NAV_ID` — Footer navigation content ID
   - `CONTENTO_PREVIEW_SECRET` — Optional, for visual preview

4. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js App Router
├── components/          # React components
│   ├── blocks/          # Content blocks (Hero, CTA, Pricing, etc.)
│   └── pages/           # Page layouts
├── images/              # Static assets
├── lib/                 # Utilities and API clients
└── types/               # TypeScript types
```

## Available Scripts

| Command   | Description                    |
| --------- | ------------------------------ |
| `npm run dev`    | Start development server       |
| `npm run build`  | Build for production           |
| `npm run start`  | Start production server        |
| `npm run lint`   | Run ESLint                     |
| `npm run format` | Format code with Prettier      |

## Deploy on Vercel

Deploy with [Vercel](https://vercel.com/new). After deployment, update the preview URL in Contento Site Settings to your production domain.

## Contact

- **Email:** [samholtz1205@gmail.com](mailto:samholtz1205@gmail.com)
- **GitHub:** [github.com/sam-holtz](https://github.com/sam-holtz)

## License

MIT
