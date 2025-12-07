# Trattoria IL Buongustaio Restaurant Website

A modern, visually striking website for Trattoria IL Buongustaio, an authentic Italian restaurant. Built with a modular card-based design system inspired by prefab architecture aesthetics.

## Features

- **Modern Card-Based Design**: Overlapping cards and floating panels for a unique, architectural feel
- **Smooth Animations**: Framer Motion powers all scroll and interaction animations
- **Interactive Elements**: 3D and Video badges on menu items, hover effects on cards
- **Image Gallery**: Full-featured lightbox gallery with keyboard navigation
- **Responsive Design**: Mobile-first approach ensures great experience on all devices
- **Contact Form**: Fully validated reservation form with state management
- **Warm Color Palette**: Earth tones, terracotta, and warm oranges create an inviting atmosphere

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons (HeroIcons, Font Awesome)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
buongustaio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main home page
├── components/
│   ├── Navigation.tsx       # Sticky navigation with mobile menu
│   ├── Hero.tsx             # Hero section with floating cards
│   ├── About.tsx            # About/Story section
│   ├── Menu.tsx             # Menu with filtering and badges
│   ├── Gallery.tsx          # Image gallery with lightbox
│   ├── Contact.tsx          # Contact info and reservation form
│   ├── Footer.tsx           # Footer with social links
│   ├── Card.tsx             # Reusable card component
│   └── Badge.tsx            # 3D/Video badge component
├── public/
│   └── images/              # Place your restaurant images here
├── tailwind.config.ts       # Tailwind configuration with custom colors
└── next.config.ts           # Next.js configuration
```

## Customization

### Adding Your Own Images

Replace the placeholder gradients with your actual images:

1. Add images to `public/images/`
2. Update components to use actual image paths
3. Recommended sizes:
   - Hero image: 1200 x 800px
   - Menu items: 600 x 400px
   - Gallery images: 1920 x 1080px
   - Chef portrait: 800 x 600px

### Updating Colors

Edit `tailwind.config.ts` to modify the color palette:
- `earth`: Brown/neutral tones
- `terracotta`: Orange/red accent
- `warm`: Golden/yellow tones

### Updating Content

1. **Restaurant Info**: Edit text in each component
2. **Menu Items**: Update the `menuItems` array in [Menu.tsx](components/Menu.tsx:23)
3. **Contact Details**: Modify `contactInfo` in [Contact.tsx](components/Contact.tsx:41)
4. **Hours**: Update Footer hours in [Footer.tsx](components/Footer.tsx:70)

### Adding Google Maps

In [Contact.tsx](components/Contact.tsx:135), replace the map placeholder with:
```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  className="w-full h-full"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

### Form Integration

The reservation form currently has a simulated submission. To integrate with a real backend:

1. Add form submission handler in [Contact.tsx](components/Contact.tsx:25)
2. Options include:
   - Email service (SendGrid, Mailgun)
   - Reservation system API
   - Serverless function (Vercel, Netlify)
   - Form service (Formspree, Web3Forms)

## Design System

### Card Variants
- `default`: Standard white card with shadow
- `elevated`: Enhanced shadow for emphasis
- `overlay`: Semi-transparent with backdrop blur
- `glass`: Glassmorphism effect

### Badge Types
- `3D`: Red/terracotta gradient for interactive 3D content
- `Video`: Orange/warm gradient for video content

### Animation Patterns
- Scroll-triggered animations with viewport detection
- Hover states on interactive elements
- Smooth page transitions
- Floating animations for decorative elements

## Performance

- Optimized with Next.js App Router
- Lazy loading for images
- Framer Motion viewport detection
- Efficient re-renders with React state management

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
The app can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Digital Ocean
- Self-hosted with PM2

## License

This project is created for Trattoria IL Buongustaio restaurant. Customize as needed for your use.

## Support

For questions or customization help, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
