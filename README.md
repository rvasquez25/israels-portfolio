# Israel Vasquez — Music Lessons Portfolio

A fast, static portfolio site for Israel Vasquez's music lessons (piano, marching/keyboard/Latin percussion, drumset). Built with **Astro + Tailwind CSS v4**, deployed on **Netlify**, with a no-backend contact form via **Netlify Forms**.

## Tech stack

| Layer        | Choice                          |
| ------------ | ------------------------------- |
| Framework    | Astro (static output)           |
| Styling      | Tailwind CSS v4 (`@theme` tokens) |
| Fonts        | Playfair Display + Inter (Google Fonts) |
| Contact form | Netlify Forms                   |
| Video / Social | YouTube / Vimeo embeds · Instagram link-out cards |
| Hosting      | Netlify (Git auto-deploy)       |

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Editing content (no code knowledge needed)

All site content lives in plain JSON under [`src/data/`](src/data/):

| File           | Controls                                            |
| -------------- | --------------------------------------------------- |
| `site.json`    | Name, tagline, phone, Instagram, location           |
| `about.json`   | About Me bio, photo, credentials                    |
| `lessons.json` | The five lesson types + "what's included" perks     |
| `pricing.json` | Lesson rates ($25 / $30 / $35)                      |
| `gallery.json` | Photos, YouTube/Vimeo embeds, and Instagram links   |

Edit the values, commit, and Netlify redeploys automatically.

### Adding photos

Drop image files into [`public/images/`](public/images/) and reference them by
path (e.g. `/images/israel-marching.jpg`). Replace these placeholders:

- `public/images/israel-marching.jpg` — hero + about portrait
- `public/images/gallery/performance-1.jpg`, `performance-2.jpg` — gallery
- `public/images/og-image.jpg` — social share preview (1200×630)

Image areas degrade gracefully to a navy gradient if a file is missing.

### Adding demo videos and Instagram links

The gallery supports three video providers in `gallery.json`:

**YouTube** — set `videoId` to the ID from the URL (`https://youtu.be/dQw4w9WgXcQ` → `dQw4w9WgXcQ`):
```json
{ "type": "video", "provider": "youtube", "videoId": "dQw4w9WgXcQ", "caption": "Snare solo" }
```

**Vimeo** — set `videoId` to the numeric ID from the Vimeo URL:
```json
{ "type": "video", "provider": "vimeo", "videoId": "123456789", "caption": "Marimba excerpt" }
```

**Instagram** — Instagram doesn't allow embedding, so this renders a branded link-out card.
Set `url` to the full post or reel URL:
```json
{ "type": "video", "provider": "instagram", "url": "https://www.instagram.com/reel/XXXXXX/", "caption": "Watch on Instagram" }
```
Leave `url` empty and the card shows "Coming soon on Instagram" as a placeholder.

### Instagram links

The `@e_zmusic` Instagram handle appears in:
- **Nav** — icon button (desktop) and menu item (mobile)
- **Hero** — inline below the phone number
- **Gallery** — "More performances on Instagram" footer link
- **Contact** — direct contact row
- **Footer** — right-hand links

To update the handle, edit `instagram` and `instagramUrl` in `src/data/site.json` — all locations update automatically.

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** → pick the repo.
3. Build settings are auto-detected from `netlify.toml` (`npm run build` → `dist`).
4. After the first deploy, go to **Forms** in the Netlify dashboard and add a
   notification email so Israel gets each inquiry.
5. (Optional) Add a custom domain + free HTTPS under **Domain settings**.

## Future: no-code CMS (Decap)

A Decap CMS scaffold is included but **not yet wired up** so Israel can edit
content from a browser dashboard instead of editing JSON. To enable it later:

1. Enable **Netlify Identity** and **Git Gateway** on the site.
2. Uncomment/confirm the collections in [`public/admin/config.yml`](public/admin/config.yml).
3. Invite Israel as a user; he logs in at `/admin` to edit content visually.

Until then, JSON editing + git push is the workflow.
