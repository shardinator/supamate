# Supamate

A modern React application built with Vite and ready for deployment on Vercel.

## Features

- ⚡️ Fast development with Vite
- ⚛️ React 18 with modern hooks
- 🎨 Beautiful, responsive UI
- ☁️ Optimized for Vercel deployment

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment to Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Vite and configure the build settings
6. Click "Deploy"

Vercel will automatically:
- Detect the build command (`npm run build`)
- Set the output directory to `dist`
- Configure the development command (`npm run dev`)

## Project Structure

```
supamate/
├── src/
│   ├── App.jsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies and scripts
└── vercel.json          # Vercel configuration
```

## License

MIT

