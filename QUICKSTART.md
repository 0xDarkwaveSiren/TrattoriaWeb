# Quick Start Guide

Get your Buon Gustaio website running in 3 minutes!

## 1. Install Dependencies (30 seconds)

```bash
npm install
```

## 2. Start Development Server (10 seconds)

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 3. What You'll See

A fully functional restaurant website with:
- ✅ Hero section with animated cards
- ✅ About section with restaurant story
- ✅ Menu with filtering and badges
- ✅ Interactive image gallery
- ✅ Contact form and map area
- ✅ Mobile-responsive design

## Next Steps

### Immediate Customization (5 minutes)

1. **Change Restaurant Name**
   - Open [app/layout.tsx](app/layout.tsx)
   - Update `title` and `description` (lines 5-6)

2. **Update Contact Info**
   - Open [components/Contact.tsx](components/Contact.tsx)
   - Edit `contactInfo` array (line 41)

3. **Add Your Colors** (Optional)
   - Open [tailwind.config.ts](tailwind.config.ts)
   - Modify color values in the `extend.colors` section

### Full Customization (1-2 hours)

See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for:
- Adding real images
- Updating menu items
- Configuring Google Maps
- Setting up form submission
- Social media links
- And much more...

## File Structure Overview

```
buongustaio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Site metadata & layout
│   └── page.tsx             # Main page (imports all sections)
│
├── components/              # All UI components
│   ├── Navigation.tsx       # Header + mobile menu
│   ├── Hero.tsx            # Landing section
│   ├── About.tsx           # Story section
│   ├── Menu.tsx            # Menu with filtering
│   ├── Gallery.tsx         # Image gallery + lightbox
│   ├── Contact.tsx         # Form + contact info
│   ├── Footer.tsx          # Footer
│   ├── Card.tsx            # Reusable card component
│   └── Badge.tsx           # 3D/Video badges
│
├── public/
│   └── images/             # Put your images here!
│
└── Config files
    ├── package.json        # Dependencies
    ├── tailwind.config.ts  # Design system
    ├── tsconfig.json       # TypeScript config
    └── next.config.ts      # Next.js config
```

## Available Commands

```bash
# Development server (with hot reload)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Quick Edits Cheat Sheet

### Change Hero Title
[components/Hero.tsx](components/Hero.tsx:43-45)

### Update Menu Items
[components/Menu.tsx](components/Menu.tsx:23-60)

### Modify Contact Form
[components/Contact.tsx](components/Contact.tsx:151-257)

### Edit Footer Hours
[components/Footer.tsx](components/Footer.tsx:70-87)

### Add Social Links
[components/Footer.tsx](components/Footer.tsx:8-12)

## Deployment (2 minutes)

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Follow prompts. Done! Your site is live.

### Other Options
- Netlify: Drop the `.next` folder
- AWS Amplify: Connect GitHub repo
- Self-host: Use `npm run build && npm start`

## Troubleshooting

### Port 3000 already in use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use different port
PORT=3001 npm run dev
```

### Missing dependencies
```bash
# Clear and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Restart TypeScript server in your editor
# Or rebuild
npm run build
```

## Getting Help

1. Check [README.md](README.md) for technical details
2. See [CUSTOMIZATION_GUIDE.md](CUSTOMIZATION_GUIDE.md) for step-by-step instructions
3. Review [FEATURES.md](FEATURES.md) for what's included
4. Next.js docs: https://nextjs.org/docs
5. Tailwind docs: https://tailwindcss.com/docs

## Pro Tips

- Use VS Code with Tailwind CSS IntelliSense extension
- Install React Developer Tools browser extension
- Test on real mobile devices, not just browser emulation
- Optimize images before adding (use TinyPNG)
- Keep your dependencies updated: `npm outdated`

## What's Next?

- [ ] Add your restaurant images
- [ ] Update menu with your dishes
- [ ] Configure contact form backend
- [ ] Add Google Maps embed
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Set up custom domain
- [ ] Add analytics (Google Analytics or Vercel Analytics)

Happy building! 🍝
