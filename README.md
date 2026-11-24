# floatzell.github.io

Source for William Karlsson's data science portfolio: a custom Jekyll site (no theme dependency) in soft silver gradients, a lime accent (#ECFFB3) and near-black text, set in Aptos.

## Publish it

1. Create a GitHub repo named exactly **`floatzell.github.io`** and push everything in this folder to its `main` branch.
2. In the repo go to **Settings → Pages → Build and deployment** and choose **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. After a minute the site is live at <https://floatzell.github.io>.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```

## Where to edit things

| What | Where |
|---|---|
| Site title, tagline, links, nav, URL | `_config.yml` |
| Home page text (hero, About, Currently, Contact) | `index.md` |
| Tech stack cards | `_data/skills.yml` |
| Education timeline | `_data/education.yml` |
| One project = one write-up page | `_projects/*.md` (front matter = card + buttons, body = write-up) |
| Colours, fonts, spacing | top of `assets/css/main.css` (`:root` variables) |
| CV | replace `assets/William_Karlsson_CV.pdf` (keep the filename) |

### Adding a project

Copy any file in `_projects/`, give it a new `order` number, a cover image in `assets/images/projects/`, and fill in the front matter. It appears on the home page automatically. Set `code_url` and `demo_url` when they exist; until then the buttons read "coming soon". Delete `placeholder: true` once the project is real.

## Placeholders still to replace

- Logo and favicon: `assets/images/logo.svg`, `assets/images/favicon.svg`
- Profile photo: upload a square image to `assets/images/` and set `profile_image:` in `_config.yml`
- Project cover images: upload to `assets/images/projects/`, then change the `cover:` line at the top of the project's file in `_projects/` (instructions are in each file)
- Project 3 and 4: `_projects/project-three.md`, `_projects/project-four.md`
- Every dashed, striped `class="todo"` snippet in `index.md` and `_projects/` (search for `class="todo"`)
- `code_url`, `demo_url`, `notebook_url` in each project's front matter

## Notes

- **Font:** Aptos is a Microsoft font and isn't available as a free web font, so the site uses it where it is installed (Windows with Microsoft 365, Word on Mac) and falls back to Segoe UI or the system font elsewhere. To change that, edit `--font` in `main.css`.
- **Your CV is public:** the PDF in `assets/` is downloadable by anyone who visits the site, so check it only contains contact details you're happy to share.
- **Accessibility:** animations switch off for visitors who prefer reduced motion, and the colour pairs used for text meet WCAG AA contrast.
