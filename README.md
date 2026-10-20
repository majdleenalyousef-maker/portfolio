# Majdleen Alyousef Portfolio

An updated React + Vite portfolio bringing together front-end development and UI/UX work.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the localhost URL printed by Vite in the terminal.

## Build for production

```bash
npm run build
npm run preview
```

## Edit the portfolio

- Home / hero: `src/component/2-hero/Hero.jsx`
- About: `src/pages/1-about/About.jsx`
- Project entries: `src/data.js`
- Project card/grid styles: `src/component/3-main/main.css`
- Theme and global styles: `src/index.css`
- Contact form: `src/component/4-contact/Contact.jsx`
- Portrait: `public/profile-portfolio.png`

When adding screenshots, place them under `public/images/` and reference them from `src/data.js` using root-relative paths such as `/images/example.png`.

The HR and ERP galleries currently use their existing cover images because the gallery screenshots and video referenced by the original project were **not** included in the uploaded ZIP. Add the screenshots later when available.

The contact form uses the Formspree form ID from the original project (`mbgdvgea`); verify that the account and destination email are still correct before publishing.

The name, contact links, and descriptions should be reviewed before deployment. The portfolio preserves the user's existing projects and leaves room for new front-end work.

## Little Learners Academy (new)

The React + TypeScript + Props kindergarten website is listed as the **first project** in the portfolio.
Its seven supplied screenshots and a cropped cover image are saved in `public/images/little-learners/`.
The project entry in `src/data.js` includes its technology tags, description, and highlights.
The Projects page also includes a new **TypeScript** filter.

To add links to this project's live demo or GitHub source later, supply the verified URLs; these have not been invented or inserted.

**Note:** Only the *portfolio* source code is included here. The seven Little Learners screenshots were provided, but the source code of the Little Learners project itself was not uploaded.
