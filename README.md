# 🎵 Symphony Childcare Website

A modern, fast, and mobile-responsive website for Symphony Childcare's after-school program in Fremont, CA. Built with Next.js 14, TypeScript, and Tailwind CSS with a research-based color palette designed to build trust with parents.

## ✨ Key Features

- 🚀 **Lightning Fast**: Next.js static site generation with global CDN
- 📱 **Mobile First**: Fully responsive design optimized for parents on-the-go
- 💌 **Smart Contact Form**: Integrated with Formspree for reliable email delivery
- 🎨 **Modern Design**: Research-based color psychology for childcare trust-building
- 🔍 **SEO Optimized**: Structured data, meta tags, and local search optimization
- ♿ **Accessible**: WCAG compliant design for inclusive user experience
- 💰 **Cost Effective**: Free hosting saves $264-588/year vs Wix
- 🌈 **Professional Colors**: Sage green, soft blue, and warm coral palette (2025 research-based)

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Formspree
- **Hosting**: Cloudflare Pages
- **Analytics**: Google Analytics 4

## Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd symphony-childcare
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
symphony-childcare/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   ├── gallery/            # Photo gallery
│   │   ├── program-details/    # Program information
│   │   ├── parent-resources/   # Resources for parents
│   │   └── contact/            # Contact page
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # Basic UI components
│   │   └── layout/             # Layout components
│   ├── lib/                    # Utilities and data
│   │   └── data/               # JSON content files
│   └── styles/                 # CSS files
├── public/
│   └── images/                 # Static images
├── docs/                       # Documentation
└── .github/                    # GitHub workflows
```

## Content Management

Content is managed through JSON files in `src/lib/data/`:

- `programs.json` - Program information and pricing
- `testimonials.json` - Parent reviews and testimonials
- `contact.json` - Contact information and hours
- `announcements.json` - Current announcements and alerts

To update content:
1. Edit the relevant JSON file
2. Commit changes to Git
3. Site automatically updates via Cloudflare Pages

## 🚀 Deployment

The site is configured for automatic deployment to Cloudflare Pages. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

**Quick Deploy:**
1. Push to GitHub repository
2. Connect to Cloudflare Pages
3. Configure build settings: `npm run build` with output directory `out`
4. Deploy automatically on every commit

**Local build test:**
```bash
npm run build  # Builds static export to /out directory
```

**Cost Savings:**
- **Current**: $0/month (Cloudflare Pages free tier)
- **Previous**: $25-49/month (Wix subscription)
- **Annual savings**: $264-588/year

## Contact Information

**Symphony Childcare**
- Address: 681 Navajo Way, Fremont, CA 94539
- Phone: (510) 565-0226
- Director: Taruna Gupta

## License

© 2025 Symphony Childcare. All rights reserved.