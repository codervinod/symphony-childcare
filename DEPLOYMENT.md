# Symphony Childcare - Cloudflare Pages Deployment Guide

## 🚀 Quick Deployment to Cloudflare Pages

### Prerequisites
- GitHub account (free)
- Cloudflare account (free)
- This repository pushed to GitHub

### Step 1: Push to GitHub Repository
```bash
# If not already done, create a GitHub repository and push
git remote add origin https://github.com/YOUR_USERNAME/symphony-childcare.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Navigate to **Pages** in the left sidebar
3. Click **Connect to Git** or **Create a project**
4. Select your **GitHub** account and repository
5. Choose the **symphony-childcare** repository

### Step 3: Configure Build Settings
When prompted, use these settings:
- **Project name**: `symphony-childcare`
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave blank)

### Step 4: Deploy
1. Click **Save and Deploy**
2. Wait for the build to complete (2-3 minutes)
3. Your site will be available at: `https://symphony-childcare.pages.dev`

### Step 5: Configure Custom Domain (symphonychildcare.com)
1. In Cloudflare Pages, go to your project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter `symphonychildcare.com`
5. Follow the DNS configuration instructions
6. Add a second domain for `www.symphonychildcare.com` (optional)

## 🎯 DNS Configuration for Custom Domain

### If your domain is already on Cloudflare:
- DNS records will be automatically configured

### If your domain is elsewhere:
Add these CNAME records at your domain registrar:
```
Type: CNAME
Name: symphonychildcare.com
Target: symphony-childcare.pages.dev

Type: CNAME
Name: www
Target: symphony-childcare.pages.dev
```

## 🔧 Build Configuration Details

The project is configured for static export with these key files:

### `next.config.js`
```javascript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

### `wrangler.toml`
```toml
name = "symphony-childcare"
compatibility_date = "2024-01-01"

[build]
command = "npm run build"
```

## 📧 Contact Form Setup

The contact form uses Formspree (free tier):
- **Endpoint**: `xpwwpqvr` (configured in `ContactForm.tsx`)
- **Emails sent to**: Director's email address
- **Monthly limit**: 50 submissions (free tier)
- **Upgrade**: $10/month for 1000 submissions if needed

## 🔄 Deployment Workflow

### For Future Updates:
1. Make changes to the code locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Cloudflare Pages automatically rebuilds and deploys

### Emergency Rollback:
1. Go to Cloudflare Pages dashboard
2. Click on **Deployments** tab
3. Find a previous successful deployment
4. Click **Rollback to this deployment**

## ⚡ Performance Features

- **Global CDN**: Content served from 280+ locations worldwide
- **Automatic HTTPS**: SSL certificate automatically provisioned
- **Asset optimization**: Images, CSS, and JS automatically compressed
- **Edge caching**: Static files cached at edge for faster loading

## 🔒 Security Features

- **DDoS protection**: Automatic protection against attacks
- **SSL/TLS**: Modern encryption (A+ rating)
- **HSTS**: HTTP Strict Transport Security enabled
- **CSP**: Content Security Policy headers (configurable)

## 📊 Analytics & Monitoring

### Built-in Cloudflare Analytics:
- Page views and unique visitors
- Performance metrics
- Geographic distribution
- Referral sources

### Optional: Google Analytics
Add your Google Analytics ID to `src/app/layout.tsx` if desired.

## 💰 Cost Breakdown

### Current Solution:
- **Cloudflare Pages**: $0/month (free tier)
- **Domain**: ~$15/year (if transferred to Cloudflare)
- **Formspree**: $0/month (50 submissions)
- **Total**: ~$1.25/month

### Previous Wix Costs:
- **Wix subscription**: $23-49/month
- **Annual savings**: $264-588/year

## 🆘 Troubleshooting

### Build Fails:
1. Check the build logs in Cloudflare Pages dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### Contact Form Not Working:
1. Check Formspree dashboard for submissions
2. Verify endpoint ID in `ContactForm.tsx`
3. Check email spam folder

### Images Not Loading:
1. Verify images exist in `/public/images/` directory
2. Check file paths are correct (case-sensitive)
3. Ensure images are optimized and < 10MB

### Domain Not Working:
1. Check DNS propagation: [DNS Checker](https://dnschecker.org)
2. Wait 24-48 hours for full propagation
3. Clear browser cache and try incognito mode

## 📞 Support

For technical issues:
- Cloudflare support: [Cloudflare Community](https://community.cloudflare.com)
- Repository issues: Create a GitHub issue
- Emergency: Contact the developer who set this up

---

**Last Updated**: February 4, 2026
**Version**: 1.0.0
**Status**: Ready for Production ✅