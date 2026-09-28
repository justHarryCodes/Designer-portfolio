# Jerry Awaghor: Design Portfolio

The portfolio website of **Jerry Awaghor**, a graphic designer, multimedia team lead and video editor. It showcases brand identity, motion graphics, print, social media and video work.

## Sections

| Page | Content |
|---|---|
| **Home** | Introduction, experience and featured work |
| **Branding** | Brand identity case studies: logos, colour palettes and packaging |
| **Motion Graphics** | Animated work and showreels |
| **Printing** | Print and packaging design |
| **Social Media** | Social campaign designs |
| **Video Editing** | A video gallery of edited work |
| **Contact** | Get in touch |

## Tech stack

- React 18 and Vite 6
- React Router for client-side pages
- Plain CSS components (glass cards, image grids, collages, full-bleed media, video galleries)

## Development

```bash
git clone https://github.com/justHarryCodes/Designer-portfolio.git
cd Designer-portfolio
npm install
npm run dev       # http://localhost:5173
npm run build     # static build in dist/
npm run preview
```

## Content

- Case studies: [`src/data/brandCaseStudies.js`](src/data/brandCaseStudies.js)
- Videos: [`src/data/videos.js`](src/data/videos.js)
- Images and video files: `public/`

## Deployment

`npm run build` produces a static site in `dist/` that you can host anywhere. On Apache hosting, the included [`public/.htaccess`](public/.htaccess) rewrites client-side routes (such as `/branding`) to `index.html`, so refreshes and direct links work.
