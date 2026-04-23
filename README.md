# MindHub — Mental Wellness Platform

> N'Rub Job (น้องรับจบ) · AI-powered mental wellness companion for the workplace

## Project Structure

```
mindhub/
├── index.html          # Main HTML shell (no inline CSS or JS)
├── css/
│   └── styles.css      # All styles — variables, layout, components
├── js/
│   └── app.js          # All logic — i18n, auth, chat, sanctuary, charts
├── netlify.toml        # Netlify deploy config + security headers
└── README.md
```

## Features

- **N'Rub Job AI Chat** — 7-phase clinical assessment (PHQ-9, GAD-7, PSS) via Claude API
- **Wellness Sanctuary** — gamified garden that grows with each session
- **Personal Data Dashboard** — private mood/stress charts and clinical screening
- **HR Org Dashboard** — anonymized aggregate mental health intelligence
- **Bilingual** — EN / ไทย toggle with full i18n
- **Persistent sessions** — localStorage-based chat history

## Test Credentials

| Role     | Email                | Password   |
|----------|----------------------|------------|
| Employee | abc123@gmail.com     | 12345678   |
| HR Admin | admin999@gmail.com   | 99999999   |

## Deploy to Netlify

### Option 1 — Netlify UI (drag & drop)
1. Go to [app.netlify.com](https://app.netlify.com)
2. Drag the entire `mindhub/` folder onto the drop zone
3. Done — live in ~30 seconds

### Option 2 — GitHub + Netlify CI
1. Push this folder to a GitHub repo
2. In Netlify → "Add new site" → "Import from Git"
3. Select your repo, leave build command empty, set publish directory to `.`
4. Click Deploy

## Environment

No build step required — pure HTML/CSS/JS.  
The Claude API key is handled by the Anthropic proxy (if using claude.ai artifacts context).  
For standalone deploy, add your own key in `js/app.js` where the API fetch is called.

## Local Dev

```bash
# Serve locally (Python)
python3 -m http.server 3000

# Or use VS Code Live Server extension
```

Open `http://localhost:3000`
