# Netlify Deployment Guide

This project has been configured for deployment on Netlify. Follow these steps to deploy your portfolio website.

## Prerequisites

1. A Netlify account (free at [netlify.com](https://netlify.com))
2. Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### Option 1: Deploy via Git (Recommended)

1. **Push your code to a Git repository** (GitHub, GitLab, or Bitbucket)

2. **Connect to Netlify:**
   - Log in to your Netlify account
   - Click "New site from Git"
   - Choose your Git provider and authorize Netlify
   - Select your repository

3. **Configure build settings:**
   - Build command: `npm run build:netlify`
   - Publish directory: `dist/public`
   - Functions directory: `netlify/functions`
   
   (These should be auto-detected from `netlify.toml`)

4. **Deploy:**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

### Option 2: Manual Deploy

1. **Build the project locally:**
   ```bash
   npm install
   npm run build:netlify
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist/public` folder to the deploy area

## Features Included

✅ **Static Site Generation** - React app built with Vite
✅ **Contact Form** - Handled by Netlify Functions
✅ **SPA Routing** - Client-side routing with proper redirects
✅ **Resume Download** - PDF accessible from `/assets/`
✅ **Responsive Design** - Mobile-friendly portfolio
✅ **SEO Optimized** - Meta tags and proper HTML structure

## Configuration Files

- `netlify.toml` - Main Netlify configuration
- `client/public/_redirects` - SPA routing fallback
- `netlify/functions/` - Serverless functions for contact form

## Environment Variables (Optional)

If you want to add email notifications or database storage for contact forms, you can add environment variables in Netlify:

1. Go to Site settings > Environment variables
2. Add variables like:
   - `SENDGRID_API_KEY` (for email notifications)
   - `DATABASE_URL` (for storing contacts)

## Troubleshooting

### Build Fails
- Check that Node.js version is 18+ in build settings
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### Functions Not Working
- Verify functions are in `netlify/functions/` directory
- Check function logs in Netlify dashboard
- Ensure proper CORS headers are set

### Contact Form Issues
- Check browser console for errors
- Verify API endpoints are `/api/contact` and `/api/contacts`
- Test functions directly at `/.netlify/functions/contact`

## Custom Domain (Optional)

1. Go to Site settings > Domain management
2. Add your custom domain
3. Configure DNS settings as instructed by Netlify

## Performance Optimization

The site includes:
- Static asset caching (1 year)
- Gzip compression
- CDN distribution
- Optimized images and fonts

Your portfolio is now ready for production! 🚀
