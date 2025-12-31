# Deployment Guide

## 🚀 GitHub Pages Deployment

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
```

2. Add all files:
```bash
git add .
```

3. Commit:
```bash
git commit -m "Initial commit: Portfolio website"
```

4. Create repository on GitHub and add remote:
```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Your site will be available at:
   `https://yourusername.github.io/your-repo-name/`

### Step 3: Custom Domain (Optional)

1. Add a `CNAME` file in root directory:
```
yourdomain.com
```

2. Update DNS settings with your domain provider:
   - Type: `CNAME`
   - Name: `@` or `www`
   - Value: `yourusername.github.io`

3. In GitHub Pages settings, add your custom domain

## 🌐 Other Deployment Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Or connect GitHub repository for auto-deploy

### Vercel

1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy automatically

### Cloudflare Pages

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Connect GitHub repository
3. Build command: (leave empty)
4. Output directory: `/`

## 📝 Pre-Deployment Checklist

- [ ] Update all links (GitHub, LinkedIn, LeetCode, etc.)
- [ ] Update domain in README.md
- [ ] Test all external links
- [ ] Optimize all images
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify SEO meta tags
- [ ] Check accessibility
- [ ] Update resume.pdf if needed

## 🔄 Updating After Deployment

1. Make changes locally
2. Commit changes:
```bash
git add .
git commit -m "Update: Description of changes"
git push
```

3. GitHub Pages will automatically rebuild (may take a few minutes)

---

**Note**: For GitHub Pages, ensure your repository is public (or upgrade to GitHub Pro for private repos with Pages).

