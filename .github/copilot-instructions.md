<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->

This project is a small static website (HTML + Tailwind CSS + a tiny JS file). The guidance below highlights the concrete, discoverable conventions and workflows an AI agent should follow to be immediately productive.

1) Big picture
- Static site: top-level HTML files (e.g. `index.html`, `about.html`, `contact.html`) are the entry points. There is no bundler or framework. Changes are made directly to HTML, CSS source and a small `assets/js/main.js`.
- CSS pipeline: Tailwind source lives in `assets/css/input.css` → compiled to `assets/css/styles.css` via Tailwind CLI (see `package.json` scripts). Do NOT edit `assets/css/styles.css` directly (it is generated).

2) Key files and where to look
- `package.json` — npm scripts for building, watching, serving and deploying. Use these scripts rather than guessing commands.
  - `npm run build:css` — build & minify Tailwind CSS for production
  - `npm run build:css:dev` — build non-minified CSS
  - `npm run watch:css` — watch and rebuild CSS automatically
  - `npm run dev` — builds dev CSS and starts the dev server
  - `npm run deploy` — uses `gh-pages` to publish the repository root
- `TAILWIND-SETUP.md` — explicit instructions on the CSS workflow and the canonical advice: edit `assets/css/input.css`, run `build:css` before deploy.
- `SETUP-GUIDE.md` — contains contact form options, content and image guidance, and other maintenance notes. Useful when adding or changing the contact page behavior.
- `tailwind.config.js` — content paths and theme extensions. Note content includes `./*.html` and `./assets/**/*.js` (so classes in JS matter).
- `postcss.config.js` — shows PostCSS + Autoprefixer usage.
- `assets/ICON-LIBRARY.md` — icon conventions, check this when adding or changing icons.

3) Project-specific conventions (do not assume common defaults)
- CSS edits: always make style changes in `assets/css/input.css` (which contains Tailwind directives). Rebuild the compiled CSS instead of editing `styles.css`.
- Tailwind content scanning: because `tailwind.config.js` only scans top-level HTML and JS in `assets/`, when adding new files with classes, ensure they match those paths or update `tailwind.config.js`.
- Fonts: `tailwind.config.js` extends `fontFamily.sans` with `Inter`. Keep consistent spacing and utility-first approach — prefer Tailwind utilities over writing new longform CSS unless justified.
- JavaScript: `assets/js/main.js` is the single place for client-side behavior. Look here first when debugging interactions.

4) Build / dev / debug workflows (concrete)
- Preview locally (recommended):
  1. Install devDependencies: `npm install` (runs on Windows and *nix)
  2. Start watch & server: `npm run dev` — this runs a dev CSS build and starts a simple static server.
     - The `serve` script uses `python3 -m http.server 8000`. On Windows where `python3` isn't available, use `python -m http.server 8000` instead.
  3. OR run `npm run watch:css` (rebuilds CSS on change) and open `http://localhost:8000`.
- Production build: `npm run build:css` (then `npm run deploy` if publishing with `gh-pages`). Always run `build:css` before deploying.

5) Deployment and hosting notes
- `npm run deploy` uses `gh-pages` to publish the repository root. The site is a static HTML site — no server-side build is required beyond CSS compilation.

6) Common tasks and examples
- Add/change styles: edit `assets/css/input.css` -> `npm run build:css` (or `npm run watch:css` during active development). Do not edit `assets/css/styles.css` directly.
- Add HTML that uses Tailwind classes: ensure the file lives at the repo root (or update `tailwind.config.js` content paths) so Tailwind picks up the classes.
- Update contact form handling: see `SETUP-GUIDE.md` for three supported options (simple PHP mail, EmailJS client-only, or external services like Formspree).

7) Tests / CI
- There are no automated tests configured. The `test` script in `package.json` is a placeholder. For changes that affect layout, run the dev server and visually validate critical pages (mobile + desktop).

8) Safety and non-destructive edits
- Preserve file structure and relative paths in HTML (assets are referenced relative to root). When editing HTML, prefer minimal diffs — keep existing IDs/classes unless renaming deliberately.
- When changing Tailwind config or content paths, always run a full CSS build and check pages for missing styles (missing classes are the most common breakage after content path changes).

9) Where to look for more context
- `package.json`, `TAILWIND-SETUP.md`, `SETUP-GUIDE.md`, `tailwind.config.js`, `postcss.config.js`, `assets/css/input.css`, `assets/js/main.js`, `assets/ICON-LIBRARY.md`.

If anything in this file looks incomplete or you want more detail (e.g. preferred code style, naming rules for new HTML pages, or CI deployment preferences), tell me which part to expand and I will iterate.
