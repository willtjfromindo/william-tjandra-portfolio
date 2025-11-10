# Deployment Guide for williamtjandra.com

## Option 1: Deploy to Vercel (Recommended - Easiest)

### Step 1: Push your code to GitHub

1. Create a new repository on GitHub (if you haven't already)
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login with your GitHub account
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click "Deploy"
6. Wait for deployment to complete (usually 1-2 minutes)
7. You'll get a URL like: `your-project.vercel.app`

### Step 3: Connect Custom Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter `williamtjandra.com` and click "Add"
3. Vercel will show you DNS configuration instructions

### Step 4: Configure DNS in Squarespace

1. Log into your Squarespace account
2. Go to **Domains** → Select `williamtjandra.com` → **DNS Settings**
3. You need to add/edit these DNS records:

   **For the root domain (williamtjandra.com):**
   - **Type:** A Record
   - **Host:** @ (or leave blank)
   - **Points to:** `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)
   
   **OR use CNAME (easier):**
   - **Type:** CNAME Record
   - **Host:** @ (or www)
   - **Points to:** `cname.vercel-dns.com`

   **For www subdomain:**
   - **Type:** CNAME Record
   - **Host:** www
   - **Points to:** `cname.vercel-dns.com`

4. Save the DNS records
5. Wait 5-60 minutes for DNS propagation

### Step 5: Verify Domain in Vercel

1. Go back to Vercel dashboard
2. Vercel will automatically verify your domain once DNS propagates
3. Your site will be live at `williamtjandra.com`!

---

## Option 2: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click "Deploy site"

### Step 3: Add Custom Domain

1. Go to **Site settings** → **Domain management**
2. Click "Add custom domain"
3. Enter `williamtjandra.com`
4. Follow Netlify's DNS instructions

### Step 4: Configure DNS in Squarespace

Add these DNS records in Squarespace:

- **Type:** A Record
- **Host:** @
- **Points to:** `75.2.60.5` (Netlify's IP - check Netlify dashboard)

OR

- **Type:** CNAME Record
- **Host:** @
- **Points to:** `williamtjandra.netlify.app`

---

## Option 3: Deploy to GitHub Pages

### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

### Step 2: Update package.json

Add these scripts:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"
}
```

### Step 3: Update vite.config.js

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/YOUR_REPO_NAME/' // Change this to your repo name
})
```

### Step 4: Deploy

```bash
npm run deploy
```

### Step 5: Configure DNS

In Squarespace, add a CNAME record pointing to `YOUR_USERNAME.github.io`

---

## Important Notes:

1. **DNS Propagation:** Changes can take 5 minutes to 48 hours to propagate globally
2. **HTTPS:** Vercel and Netlify automatically provide SSL certificates
3. **Build Command:** Make sure `npm run build` works locally first
4. **Environment Variables:** If you add any API keys later, add them in your hosting platform's settings

---

## Quick Test Before Deploying:

1. Build locally: `npm run build`
2. Preview: `npm run preview`
3. Check that everything works correctly

---

## Recommended: Vercel

Vercel is recommended because:
- ✅ Automatic HTTPS
- ✅ Free tier is generous
- ✅ Easy custom domain setup
- ✅ Automatic deployments from GitHub
- ✅ Great performance
- ✅ Easy to configure DNS

