# Stithulf ERC Token (SULFERC): Official Token Page

Public, open-source reference page for the Stithulf ERC Token.

**Live site:** https://sulferc.stithulf.com
**Company and reports:** https://stithulf.com

> The only official page is the one at the domain above. Always verify contract addresses against this repository and the live site before interacting with any token.

## What this repo is

A static website: plain HTML, CSS and one small JavaScript file. It has no backend, no API endpoints, no database, no build step, no analytics and no third-party requests. There are no secrets in this repo and none are needed.

| File | Purpose |
| --- | --- |
| `index.html` | The page content |
| `styles.css` | Responsive design (smartwatch to 4K TV, light and dark, print) |
| `script.js` | "Copy" buttons only |
| `_headers` | Security headers for Cloudflare Pages |

## Before publishing

1. Replace every sample address, transaction hash, figure and audit detail in `index.html`.
2. Delete the yellow "Sample data" banner and the `sample` tags.
3. Replace `YOUR-USERNAME` in the footer GitHub link.
4. Update the "Last updated" date in the footer.

## Deploy

**Cloudflare Pages (recommended):** Workers and Pages, Create, Pages, Connect to Git, pick this repo. Leave the build command empty and the output directory as `/`. Then add `sulferc.stithulf.com` under Custom domains.

**GitHub Pages:** Settings, Pages, deploy from branch `main` and folder `/ (root)`. Add a `CNAME` file containing `sulferc.stithulf.com` and a CNAME DNS record for `sulferc` pointing to `YOUR-USERNAME.github.io`.

## Contributing and security

Keep `main` protected and merge only reviewed pull requests, since whatever is merged is what visitors see. To report a vulnerability, email the address listed on the live site. We will never ask for your seed phrase or private keys.

## License

Code is released under the MIT License. The Stithulf name, logo and branding are not covered by the license.

## Disclaimer

Not investment advice. For information only. Crypto assets are high risk and you may lose everything you invest.
