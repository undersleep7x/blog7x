# [sleepDeprived Blog](https://blog.undersleep7x.dev) (UNPUBLISHED)

Personal tech blog built with Astro

## Tech Stack

- **Astro 5** - Static site generator
- **React 18** - Interactive components
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Markdown** - Content (via Astro Content Collections)

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`

## Build

```bash
npm run build
npm run preview
```

## Adding Posts

Create a new folder in `src/content/posts/`:

```
src/content/posts/my-new-post/
├── index.md
└── images/  (optional)
```

Frontmatter format:

```md
---
title: 'Post Title'
tagline: 'Short description'
date: '2025-12-14'
tags: ['tag1', 'tag2']
---

Your content here...
```

## Features

- Dark/Light theme toggle
- File tree navigation by date
- Keyboard shortcuts (Ctrl+K search, Ctrl+H home, Ctrl+N latest)
- Syntax highlighting
- Responsive design

## License

Licensed under [GPL-3.0](https://www.gnu.org/licenses/gpl-3.0.en.html).

**You are free to:**

- Use, modify, and distribute this code
- Use it commercially

**Under these terms:**

- Any derivative work must also be open source under GPL-3.0
  Must preserve this license and provide source code
