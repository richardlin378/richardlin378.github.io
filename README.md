# richardlin378.github.io

Personal site for Richard Lin / 林煒哲 built with Astro, deployed to GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Structure

- `src/pages/` — site pages and routes
- `src/content/` — Markdown posts for Finance / Art / Music / Updates
- `public/portfolio/` — legacy portfolio site (integrated via git subtree)
- `site.config.json` — site settings + theme switcher

## Style Picker

Change `site.config.json` → `site.theme` to one of:

- `aurora`
- `mono`
- `citrus`
- `ink`
- `sand`
- `studio`
- `lake`

## Writing posts

Create a new Markdown file under one of these folders:

- `src/content/finance/`
- `src/content/art/`
- `src/content/music/`
- `src/content/updates/`

Template:

```markdown
---
title: "Post title"
date: 2026-01-29
description: "Short summary for listing cards and SEO."
tags: ["tag1", "tag2"]
---

Your content here.
```

### Music embeds (one-line shortcode)

```markdown
::spotify[https://open.spotify.com/track/xxxxx]
::youtube[https://youtu.be/VIDEO_ID]
```

## GitHub Pages

This repo uses GitHub Actions to build and deploy automatically on every push to `main`.

1. Go to **Settings → Pages**
2. Under **Source**, choose **GitHub Actions**
3. Push to `main` — deployment will run automatically

## Portfolio integration

Legacy portfolio lives at `public/portfolio/` and is served at `/portfolio/`.

If you need to update it from the original repo later:

```bash
git subtree pull --prefix public/portfolio https://github.com/richardlin378/weizhelinart.git main --squash
```
