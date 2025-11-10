# Step-by-Step Deployment Guide

## ✅ Step 1: Initialize Git (I'll help you with this)

Run these commands in your terminal:

```bash
cd "/Users/will/Documents/untitled folder"
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

## ✅ Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon in the top right → **New repository**
3. Name it: `william-tjandra-portfolio` (or any name you like)
4. Make it **Public** (or Private if you prefer)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **Create repository**

## ✅ Step 3: Push to GitHub

After creating the repo, GitHub will show you commands. Run these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

(Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repo name)

## ✅ Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** → Choose **Continue with GitHub**
3. Authorize Vercel to access your GitHub
4. Click **Add New Project**
5. Find and select your repository (`william-tjandra-portfolio`)
6. Vercel will auto-detect settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Click **Deploy**
8. Wait 1-2 minutes for deployment
9. You'll get a URL like: `william-tjandra-portfolio.vercel.app`

## ✅ Step 5: Connect Your Domain (williamtjandra.com)

### In Vercel:
1. Go to your project dashboard
2. Click **Settings** → **Domains**
3. Enter: `williamtjandra.com`
4. Click **Add**
5. Vercel will show you DNS configuration

### In Squarespace:
1. Log into [squarespace.com](https://squarespace.com)
2. Go to **Settings** → **Domains**
3. Click on `williamtjandra.com`
4. Click **DNS Settings** (or **DNS Records**)
5. You'll see existing records

**Add/Edit these DNS records:**

**Option A - CNAME (Easier):**
- **Type:** CNAME
- **Host:** `@` (or leave blank for root domain)
- **Points to:** `cname.vercel-dns.com`
- **TTL:** 3600 (or default)

**Option B - A Record (If CNAME doesn't work):**
- **Type:** A
- **Host:** `@` (or leave blank)
- **Points to:** `76.76.21.21` (Vercel will show you the exact IP)
- **TTL:** 3600

**For www subdomain:**
- **Type:** CNAME
- **Host:** `www`
- **Points to:** `cname.vercel-dns.com`

6. **Save** the DNS records
7. Wait 5-60 minutes for DNS to propagate

## ✅ Step 6: Verify in Vercel

1. Go back to Vercel dashboard
2. Vercel will automatically verify your domain
3. Once verified (green checkmark), your site is live!

## 🎉 Done!

Your website will be live at:
- `https://williamtjandra.com`
- `https://www.williamtjandra.com`

Both will work automatically with HTTPS!

---

## Need Help?

If you get stuck at any step, let me know which step and I'll help you through it!

