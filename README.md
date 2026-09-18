# iyah.exe — Iyah Chavez's Devfolio

![Next.js](https://img.shields.io/badge/Next.js-16-111?logo=nextdotjs) ![React](https://img.shields.io/badge/React-19-111?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-111?logo=typescript)

An interactive, retro arcade / Y2K-inspired developer portfolio for **Mariyah Vanna Monique “Iyah” Chavez**. A pixel-art opening scene leads into a one-page, purple-glass desktop interface with a moving galaxy and a built-in music player.

## Preview

**Live portfolio:** https://devfolio-iyah-chavez.vercel.app/
**GitHub:** https://github.com/apcmcchavez/devfolio

> This README accompanies the redesigned build in this ZIP. The public live site updates only **after** you commit/push your changes and Vercel deploys them.

## Features

- Layered, responsive pixel-art opening scene with parallax, CRT effects, animated heart and pixel-heart loading transition.
- One scrolling portfolio with a fixed title bar, bottom status bar and centered section-jump navbar.
- Seven sections: About Me, Experience, Skills, Certifications, Featured Projects, Side Quests, and System Check.
- Animated galaxy canvas, glowing glass cards, neon hover states, custom pixel cursors and interaction SFX.
- A draggable **Cozy Corner** music widget with five *local* songs, real playlist switching, synchronized playback/seek progress and three volume levels. Music continues when the panel is closed.
- Click-to-blink Iyah character; player-stat bars, click sounds, and terminal-style blinking status.
- Mobile layout with adapted typography, cropped (not squashed) rooftop scene, and System Check order: Player Stats → Current Mission → Contact.
- Quit confirmation returns to the opening menu. Every entry starts at About Me.

## Getting started (VS Code)

Requirements: **Node.js 20.9+** and npm.

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser. Stop the server with `Ctrl+C` in the VS Code terminal.

Production check:

```bash
npm run build
npm run start
```

> Do not upload or commit `node_modules`, `.next`, or `.env` files. The ZIP intentionally omits generated caches and Git history; it contains project source, `package-lock.json`, and assets.

## Where to edit

| Task | File or folder |
| --- | --- |
| Change section descriptions, skills, labels, projects, and links | `src/app/page.tsx` |
| Change card layouts, spacing, colors, animation, and responsive rules | `src/app/globals.css` |
| Change navigation, loader, galaxy, sounds, and music-player behavior | `src/app/portfolio-runtime.ts` |
| Replace a portfolio image | `public/images/` then update its path in `page.tsx` |
| Insert project cover art | Add image under `public/images/projects/`, then update `project-preview` in `page.tsx` |
| Change songs | Replace files in `public/music/` and update the `tracks` list in `portfolio-runtime.ts` |
| Edit page title and description | `src/app/layout.tsx` |

**Project links:** The Devfolio live/site and repository buttons already work. The other projects’ site/source icons are disabled until you add their real URLs in `src/app/page.tsx`; no destinations were invented.

**Project cover images:** The preview areas deliberately say `LOADING...` until you supply the final four project screenshots. They are *placeholders*, not broken files.

**Future-use images:** The certificate and boba/matcha icons are retained under `public/images/future/`; they are not shown on the page yet.

**Fonts:** Press Start 2P for major headings; Courier Prime for body copy and labels; Silkscreen for cards; Sixtyfour Convergence for the special `iyah.exe` / `email me` text. Public web font CSS is requested at runtime; the project does **not** redistribute font files.

**Music attribution and rights:** The five MP3s were carried over from your original private Devfolio ZIP as supplied. Verify that you have the rights or licenses necessary to make these audio files publicly accessible before deploying or publishing this repository. Remove/replace tracks if needed.

## Putting this into your existing GitHub repository

1. Back up your current repository or create a new branch (e.g. `redesign/arcade-devfolio`).
2. Open your existing cloned `devfolio` repository in VS Code, and **copy the files and folders from this extracted ZIP into that repository**. Choose to replace corresponding source files. Do not copy a nested folder inside the repo by accident.
3. Run `npm install`, then `npm run dev` and test the page locally.
4. Run `npm run build`. When you are satisfied, use Git to review, commit, and push the changes:

```bash
git status
git add README.md src public package.json package-lock.json
# If you also modified config files, stage them separately after reviewing.
git commit -m "Redesign Iyah Devfolio with retro arcade interface"
git push
```

If your current branch is not the one Vercel deploys, merge the branch through your preferred workflow before expecting the live URL to update.

## Tech stack

Next.js 16 App Router · React 19 · TypeScript · HTML/CSS · Canvas · Web Audio API · HTMLAudioElement · Vercel.

---

Created by **Iyah Chavez** · [GitHub](https://github.com/apcmcchavez) · [LinkedIn](https://www.linkedin.com/in/mariyah-vanna-monique-chavez-4b309b285) · [Email](mailto:mariyah.chavez23@gmail.com)
