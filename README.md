# Sairaj Jadhav - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Deployed on Netlify.

## 🌐 Live Site

**https://sairaj-jadhav-portfolio.netlify.app/**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Vite** | Build tool & dev server |
| **React 18** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **shadcn/ui** | UI components |
| **Framer Motion** | Animations |
| **React Router** | Client-side routing |

---

## 📁 Project Structure

```
├── public/
│   ├── images/           # All portfolio images (profile, projects, certificates)
│   ├── _redirects        # Netlify SPA routing configuration
│   ├── 404.html          # Fallback for SPA routing
│   └── favicon.ico       # (unused - favicon uses Profile.jpeg)
├── src/
│   ├── components/
│   │   ├── sections/     # Page sections (Hero, About, Skills, Projects, etc.)
│   │   └── ui/           # Reusable UI components (shadcn/ui)
│   ├── pages/            # Route pages (Index, NotFound)
│   ├── assets/           # Static assets imported in code
│   ├── App.tsx           # Main app with routing
│   └── main.tsx          # Entry point
├── index.html            # HTML template with meta tags & favicon
├── vite.config.ts        # Vite configuration (base path = "/")
└── tailwind.config.ts    # Tailwind configuration
```

---

## 🚀 Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

---

## 📝 How to Make Changes

### Adding/Updating Images

1. Place images in `public/images/` folder
2. Reference them in code as `/images/filename.ext`
3. Example: `<img src="/images/Profile.jpeg" />`

### Updating Content

| Section | File |
|---------|------|
| Hero (name, bio, links) | `src/components/sections/HeroSection.tsx` |
| About | `src/components/sections/AboutSection.tsx` |
| Skills | `src/components/sections/SkillsSection.tsx` |
| Projects | `src/components/sections/ProjectsSection.tsx` |
| Certifications | `src/components/sections/CertificationsSection.tsx` |
| Contact | `src/components/sections/ContactSection.tsx` |

### Updating Meta Tags (SEO/Social Sharing)

Edit `index.html`:
- `<title>` - Browser tab title
- `<meta name="description">` - SEO description
- `<meta property="og:*">` - Social media preview (Facebook, LinkedIn)
- `<meta name="twitter:*">` - Twitter card
- `<link rel="icon">` - Favicon (uses Profile.jpeg)

---

## 🌐 Deployment (Netlify)

### First-time Setup (Already Done)

```bash
npm install -g netlify-cli
netlify login
netlify sites:create --name sairaj-jadhav-portfolio
```

### Deploy Updates

```bash
npm run build
netlify deploy --prod --dir=dist
```

### Important Configuration

- **Netlify Site Name**: `sairaj-jadhav-portfolio`
- **Site URL**: https://sairaj-jadhav-portfolio.netlify.app/
- **Build Output**: `dist/` folder
- **Base Path**: `/` (configured in `vite.config.ts`)

The `public/_redirects` file handles SPA routing on Netlify:
```
/*    /index.html   200
```

---

## ⚠️ Important Notes for AI Assistants

### Base Path Configuration

- **Netlify**: Base path is `/` (root)
- **GitHub Pages**: Would require `/repo-name/` base path
- Current config in `vite.config.ts`: `base: "/"`

### Image Paths

All images use **absolute paths** from root:
- ✅ Correct: `/images/Profile.jpeg`
- ❌ Wrong: `./images/Profile.jpeg` or relative paths

### SPA Routing

- Uses `BrowserRouter` from React Router (no basename needed for Netlify)
- Netlify handles routing via `_redirects` file

### Favicon

The favicon is set via `<link rel="icon">` in `index.html` pointing to `/images/Profile.jpeg`

---

## 📦 Netlify Project Details

```
Project Name: sairaj-jadhav-portfolio
Project ID: eac3f511-b066-404a-91e8-4c4ad072f2d9
Admin URL: https://app.netlify.com/projects/sairaj-jadhav-portfolio
Account: sairajj933@gmail.com
```

---

## 🔄 Quick Update Workflow

1. Make changes to the code
2. Test locally: `npm run dev`
3. Build: `npm run build`
4. Test build locally: `npm run preview`
5. Deploy: `netlify deploy --prod --dir=dist`

---

## 📞 Contact

- **Email**: sairajjadhav433@gmail.com
- **LinkedIn**: [linkedin.com/in/sairaj-jadhav-](https://www.linkedin.com/in/sairaj-jadhav-/)
- **GitHub**: [github.com/SairajJadhav08](https://github.com/SairajJadhav08)
