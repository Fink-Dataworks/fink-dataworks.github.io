# Fink Dataworks — Website Starter

Static website for Fink Dataworks (`finkdataworks.com`). Uses plain HTML, CSS, and JavaScript — no build step, framework, or paid hosting required.

## Publish with GitHub Pages

1. Extract `Fink-Dataworks-Website.zip` on your computer.
2. In the public repository `Fink-Dataworks/fink-dataworks.github.io`, choose **Add file → Upload files**.
3. Upload **all items inside** the extracted `fink-dataworks-site` folder, including `index.html`, the `assets` folder, and the `samples` folder. Uploading the enclosing folder itself can put `index.html` in the wrong place. `index.html` must be in the root of the repository.
4. Commit the files to `main`.
5. Visit **Settings → Pages**. Choose **Deploy from a branch**, set branch to `main` and folder to `/ (root)`, and save.
6. After GitHub deploys, preview `https://fink-dataworks.github.io`.

## Connect the custom domain *after* verifying the preview

In **Settings → Pages → Custom domain**, enter `finkdataworks.com`. Follow GitHub's custom-domain instructions and configure apex `A` records in Porkbun as GitHub specifies. Remove **only conflicting web-related root records** such as Porkbun's default parking ALIAS if needed; retain all iCloud Mail MX, TXT, and DKIM records. Wait for DNS propagation and then enable **Enforce HTTPS** when available.

Visit https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site for current DNS guidance. Consider verifying your domain through GitHub organization settings for domain security.

## Included files

- `index.html` — entire one-page site
- `assets/site.css` — design, typography, and responsive styles
- `assets/main.js` — mobile navigation, animation, and before/after toggle
- `assets/logo-mark.svg` and `assets/favicon.svg` — original SVG versions inspired by the selected block/grid direction
- `samples/` — fully fictional, downloadable inventory demonstration records (54 source rows, 54 resulting rows, 29 exception/change notes; 11 rows need review)

## Notes

- The case-study data is synthetic, not customer or employer data.
- No client uploads: the contact button opens the visitor's email app.
- Don't publish secrets or private customer data in this public repository.
- Business inquiries go to `josh@finkdataworks.com`.
- Replace or refine the original SVG logo later once the final artwork is approved.
