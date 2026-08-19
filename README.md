## Pixorely Production Setup

Use `https://pixorely.com` as the primary production domain.

Recommended Vercel settings:

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: leave empty so Vercel detects Next.js automatically
- Production domain: `pixorely.com`
- Redirect `www.pixorely.com` to `pixorely.com` using a permanent 308 redirect

DNS setup:

- Point `pixorely.com` to Vercel using the DNS records provided by Vercel.
- Keep `www.pixorely.com` connected to Vercel and configure it to redirect to `pixorely.com`.
- Keep the Google Search Console TXT verification record in Vercel DNS.
- After deployment, verify:
  - `https://pixorely.com/robots.txt`
  - `https://pixorely.com/sitemap.xml`

SEO setup:

- Primary canonical domain: `https://pixorely.com`
- Sitemap: `https://pixorely.com/sitemap.xml`
- Robots: `https://pixorely.com/robots.txt`
- Google Search Console property: `pixorely.com`