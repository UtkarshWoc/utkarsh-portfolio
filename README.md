# Utkarsh's Desktop Portfolio (macOS / iOS Operating System Web Experience)

An award-winning interactive desktop portfolio experience cloned and engineered end-to-end from **Parinaz Kassemi** ([Awwwards Honorable Mention](https://www.awwwards.com/sites/parinazs-desktop-portfolio)).

This portfolio reimagines personal portfolios as an interactive desktop operating system with draggable windows, customizable wallpapers, custom cursors, a live lock screen, dock magnification, a digital reading shelf, music player, sticky notes, and a responsive mobile experience.

---

## 🌟 Features

- **Interactive Lock Screen**:
  - Live real-time clock and calendar date.
  - Interactive "Slide to Unlock" knob with smooth drag physics.
  - Ambient glowing gradient background with SVG noise texture.
- **Full macOS/iOS Desktop Simulation**:
  - Draggable, resizable, and stackable modal windows with focus management and z-index ordering.
  - Interactive Menu Bar with Apple logo, clock, status widgets, and system settings.
  - Animated App Dock with bounce effects, tooltip titles, and active dot indicators.
- **6 Dynamic Color Themes & Wallpapers**:
  - Blue, Purple, Pink, Green, Orange, and Midnight/Black.
  - Dynamic SVG custom cursors (arrow, pointer hand, grabbing) color-matched to each active theme.
- **Included Applications & Modules**:
  1. **About Me**: Interactive profile, experience, design/dev philosophy, awards, and skills.
  2. **Case Studies**: In-depth project showcase with embedded high-resolution videos, interaction prototypes, and system architecture breakdowns.
  3. **Studio / Playground**: Interactive experiments, 3D explorations, and creative coding artifacts.
  4. **Camera Roll / Photos**: iOS-inspired photo gallery with full-screen lightbox modal.
  5. **Digital Shelf**: Curated collection of books, essays, films, and podcasts with ratings and notes.
  6. **Synthesizer & Music**: Interactive Web Audio sound generator and Spotify playlist integration.
  7. **Stickies & Canvas**: Draggable sticky notes and canvas drawing tools.
  8. **Resume Viewer**: Instant PDF resume preview with download action.
- **100% Local & Offline Assets**:
  - All 83 media assets, icons, SVGs, posters, and videos downloaded into `public/assets/`.
  - Zero external image dependencies or broken links.
- **Mobile Responsive Drawer**:
  - Seamless adaptation for iOS/Android smartphones with a pull-up app drawer.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized production bundle inside `dist/`.

---

## 🛠️ How to Customize for Your Portfolio

All application markup, styles, and logic reside in [`index.html`](./index.html), while static media is stored in [`public/assets/`](./public/assets/).

### 1. Update Name, Role & Bio
In [`index.html`](./index.html), search for `Utkarsh` or `About`:
- **Lock Screen**: Change `<div class="lock-name">Utkarsh</div>` and `<div class="lock-role">Full-Stack Developer & Designer</div>`.
- **Menu Bar**: Change `<span class="mb-title">Utkarsh's Portfolio</span>`.
- **About Window**: Locate the `#win-about` section and customize the paragraphs, bio, and skill tags.

### 2. Add Your Projects / Case Studies
- Locate `#win-case-studies` or the case study data objects in [`index.html`](./index.html).
- Replace banner images and titles with your project screenshots.
- Place your project images or demo videos in `public/assets/` and link them via `/assets/your-file.png`.

### 3. Replace the Resume PDF
- Drop your resume into `public/assets/my_resume.pdf`.
- In [`index.html`](./index.html), search for `Parinaz_Kassemi_Resume.pdf` and update the link to `/assets/my_resume.pdf`.

### 4. Update Social & Contact Links
Search for `https://www.linkedin.com/` or `https://x.com/` in [`index.html`](./index.html) and replace them with your own links:
- GitHub
- LinkedIn
- Twitter / X
- Email / Contact Form

### 5. Change Photos & Reading Shelf
- **Camera Roll**: Search for `.ios-photo` in [`index.html`](./index.html) and swap the image paths with your own photography or project visuals.
- **Digital Shelf**: Search for `shelf-` to update the book covers and reading recommendations.

---

## 📁 Project Structure

```
utkarsh-portfolio/
├── index.html              # Complete Desktop Portfolio Application
├── vite.config.js          # Vite Configuration
├── package.json            # Project manifest & scripts
├── public/
│   ├── favicon.png         # Site favicon
│   └── assets/             # 83 local assets (wallpapers, icons, videos, photos)
├── build_portfolio.js      # Asset mapper and generator script
├── download_assets.js      # Asset downloader utility
├── analyze_site.js         # Forensic URL extractor utility
└── README.md               # Documentation & Customization Guide
```
