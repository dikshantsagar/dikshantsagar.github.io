# Dikshant Sagar — Personal Academic & Research Portfolio

Personal academic and research portfolio of **Dikshant Sagar**, Ph.D. Researcher in Artificial Intelligence and Machine Learning at the University of California, Irvine (advised by Dr. Pierre Baldi).

Hosted live at: **[dikshantsagar.github.io](https://dikshantsagar.github.io/)**

---

## 🛠️ Architecture & Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vite.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & Custom CSS Variables (Obsidian Dark Theme)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Canvas / WebGL Engine**: Custom high-performance interactive neural manifold & particle field simulation with full reduced-motion support
- **Hosting**: GitHub Pages (100% static, zero server dependencies)

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your browser.

### 3. Build for Production
```bash
npm run build
```
This runs TypeScript validation (`tsc`) and compiles the static site into `dist/`.

### 4. Preview Production Build Locally
```bash
npm run preview
```
Open [http://localhost:4173/](http://localhost:4173/) to verify the production bundle.

---

## 🌐 GitHub Pages Deployment

The repository includes a GitHub Actions workflow in [`.github/workflows/deploy.yaml`](.github/workflows/deploy.yaml).

### How It Works:
1. Every time you push to the `master` branch, GitHub Actions will:
   - Check out the repository.
   - Install dependencies via `npm ci`.
   - Run `npm run build` to generate the production static files in `./dist`.
   - Deploy the `./dist` folder directly to GitHub Pages.

### One-Time GitHub Settings Check:
1. In your GitHub repository, navigate to **Settings** → **Pages**.
2. Under **Build and deployment** → **Source**, ensure **GitHub Actions** is selected.

---

## 📂 Project Structure

```
dikshantsagar.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yaml         # Automated GitHub Actions Pages deployment
├── public/                     # Static assets (copied verbatim to build root)
│   ├── favicons/               # Site favicons
│   ├── files/                  # CV PDF and conference/journal paper PDFs
│   │   ├── CV_Dikshant_Sagar.pdf
│   │   ├── ACM-BCB_2023.pdf
│   │   ├── AIMHC_2024.pdf
│   │   ├── BigMM_2020.pdf
│   │   ├── CIBM_2022.pdf
│   │   └── ISVC_2023.pdf
│   └── images/                 # Profile photographs
│       ├── profile.jpg
│       └── profile.png
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.tsx          # Floating Apple-style glass navigation & status beacon
│   │   ├── Hero.tsx            # Hero section with stats, CTAs & profile card
│   │   ├── ScientificCanvas.tsx# Interactive neural manifold particle background
│   │   ├── ResearchFocus.tsx   # Problem → Innovation → Impact research pillars
│   │   ├── Publications.tsx    # Filterable & searchable research publication showcase
│   │   ├── BibtexModal.tsx     # 1-click citation copy modal
│   │   ├── Experience.tsx      # Laboratory appointments & quantified outcomes
│   │   ├── Projects.tsx        # Technical system breakdowns
│   │   ├── Skills.tsx          # Grouped technical competencies & certifications
│   │   ├── AwardsAndTeaching.tsx # Honors, fellowships, teaching & peer reviewing
│   │   ├── CVSection.tsx       # Direct CV access & download CTAs
│   │   ├── Contact.tsx         # Recruiter & collaborator inquiry portal
│   │   └── Footer.tsx          # Minimal footer with static deployment status
│   ├── data/
│   │   └── portfolioData.ts    # Single source of truth for all verified data
│   ├── styles/
│   │   └── index.css           # Global design system & theme variables
│   ├── App.tsx                 # Main layout
│   └── main.tsx                # React DOM mount point
├── index.html                  # HTML entry point with complete SEO metadata
├── vite.config.ts              # Vite configuration with relative base path
└── package.json
```

---

## 📝 Updating Content & Publications

To add a new publication, update your CV, or adjust experience entries:
1. **Update Data**: Edit `src/data/portfolioData.ts`. All entries are strongly typed.
2. **Update Files**: Place new PDFs into `public/files/` and update references in `portfolioData.ts`.
3. **Commit & Push**: Push changes to `master` and GitHub Actions will automatically rebuild and deploy!
