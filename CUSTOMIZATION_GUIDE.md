# Customization Guide for Buon Gustaio

This guide will help you replace placeholder content with your actual restaurant information and images.

## 1. Adding Real Images

### Step 1: Prepare Your Images

Optimize your images before adding them:
- **Hero Image**: 1200 x 800px (landscape restaurant photo)
- **Menu Items**: 600 x 400px each (food photos)
- **Gallery**: 1920 x 1080px (high-quality interior/food shots)
- **Chef/Kitchen**: 800 x 600px

Use tools like [TinyPNG](https://tinypng.com/) to compress images without losing quality.

### Step 2: Add Images to Project

1. Place all images in the `public/images/` folder
2. Organize them into subfolders:
   ```
   public/
   └── images/
       ├── hero.jpg
       ├── chef-portrait.jpg
       ├── menu/
       │   ├── pasta-1.jpg
       │   ├── pasta-2.jpg
       │   └── ...
       └── gallery/
           ├── interior-1.jpg
           ├── food-1.jpg
           └── ...
   ```

### Step 3: Update Components with Real Images

#### Hero Section ([Hero.tsx](components/Hero.tsx))
Replace line 55-61 with:
```tsx
<Image
  src="/images/hero.jpg"
  alt="Buon Gustaio Restaurant"
  fill
  className="object-cover"
  priority
/>
```

Don't forget to add the import at the top:
```tsx
import Image from 'next/image';
```

#### About Section ([About.tsx](components/About.tsx))
Replace line 68-76 with:
```tsx
<Image
  src="/images/chef-portrait.jpg"
  alt="Chef Marco Rossi"
  fill
  className="object-cover"
/>
```

#### Menu Section ([Menu.tsx](components/Menu.tsx))
For each menu item, replace the gradient div (lines 162-168) with:
```tsx
<Image
  src={item.image}  // Update the menuItems array to use image paths
  alt={item.name}
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-110"
/>
```

Update the menuItems array to use actual image paths:
```tsx
const menuItems: MenuItem[] = [
  {
    name: 'Tagliatelle al Tartufo',
    description: '...',
    price: '$28',
    category: 'pasta',
    image: '/images/menu/tagliatelle.jpg',  // Changed from gradient
    // ...
  },
  // ...
];
```

#### Gallery Section ([Gallery.tsx](components/Gallery.tsx))
Update the images array to use real photos:
```tsx
const images: GalleryImage[] = [
  {
    id: 1,
    title: 'Dining Room',
    category: 'Interior',
    src: '/images/gallery/dining-room.jpg'  // Add src property
  },
  // ...
];
```

Then update the rendering (lines 126-142):
```tsx
<Image
  src={image.src}
  alt={image.title}
  fill
  className="object-cover"
/>
```

## 2. Updating Restaurant Information

### Contact Details ([Contact.tsx](components/Contact.tsx))

Update the `contactInfo` array (line 41):
```tsx
const contactInfo = [
  {
    icon: HiMapPin,
    title: 'Location',
    content: 'YOUR_ACTUAL_ADDRESS',  // Update this
    link: 'YOUR_GOOGLE_MAPS_LINK'    // Update this
  },
  {
    icon: HiPhone,
    title: 'Phone',
    content: 'YOUR_PHONE_NUMBER',    // Update this
    link: 'tel:YOUR_PHONE_NUMBER'    // Update this
  },
  // ...
];
```

### Restaurant Story ([About.tsx](components/About.tsx))

Update lines 85-103 with your restaurant's actual story:
```tsx
<p>
  Your restaurant's founding story...
</p>
<p>
  Your mission and values...
</p>
```

### Menu Items ([Menu.tsx](components/Menu.tsx))

Update the `menuItems` array starting at line 23 with your actual menu:
```tsx
{
  name: 'Your Dish Name',
  description: 'Your actual description',
  price: '$XX',
  category: 'pasta', // or 'antipasti', 'secondi', 'dolci'
  featured: true,    // Optional: mark as featured
  badge: '3D',       // Optional: '3D' or 'Video' badge
  image: '/images/menu/your-dish.jpg'
}
```

### Hours of Operation ([Footer.tsx](components/Footer.tsx))

Update lines 70-87 with your actual hours:
```tsx
<li className="flex justify-between">
  <span>Monday:</span>
  <span>YOUR_HOURS</span>
</li>
// ...
```

## 3. Adding Google Maps

In [Contact.tsx](components/Contact.tsx), find the map placeholder (line 135) and replace with:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  className="w-full h-full rounded-2xl"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
```

To get your embed code:
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your restaurant
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

## 4. Social Media Links ([Footer.tsx](components/Footer.tsx))

Update the `socialLinks` array (line 8):
```tsx
const socialLinks = [
  { icon: FaFacebook, href: 'https://facebook.com/yourpage', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com/yourhandle', label: 'Instagram' },
  { icon: FaTripadvisor, href: 'https://tripadvisor.com/yourpage', label: 'TripAdvisor' },
];
```

## 5. SEO & Metadata ([layout.tsx](app/layout.tsx))

Update lines 5-9:
```tsx
export const metadata: Metadata = {
  title: "Your Restaurant Name - Your Tagline",
  description: "Your actual description with keywords",
  keywords: ["your", "keywords", "here"],
};
```

## 6. Color Customization

If you want to adjust the color scheme, edit [tailwind.config.ts](tailwind.config.ts):

```ts
colors: {
  earth: {
    // Your brown/neutral tones
    500: '#YOUR_HEX_COLOR',
  },
  terracotta: {
    // Your primary accent color
    600: '#YOUR_HEX_COLOR',
  },
  // ...
}
```

## 7. Form Integration

The contact form needs backend integration. Options:

### Option A: Email Service (Recommended for MVP)
Use [Web3Forms](https://web3forms.com/) or [Formspree](https://formspree.io/):

```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  setFormStatus('submitting');

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: 'YOUR_API_KEY',
      ...formData
    })
  });

  if (response.ok) {
    setFormStatus('success');
  } else {
    setFormStatus('error');
  }
};
```

### Option B: Reservation System
Integrate with OpenTable, Resy, or build custom API endpoint.

### Option C: Serverless Function
Create `/app/api/reservation/route.ts`:
```tsx
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Send email, save to database, etc.
  return NextResponse.json({ success: true });
}
```

## 8. Testing Checklist

Before launching:
- [ ] All images load correctly
- [ ] Contact information is accurate
- [ ] Menu prices are current
- [ ] Hours of operation are correct
- [ ] Social media links work
- [ ] Google Maps shows correct location
- [ ] Form submissions work
- [ ] Mobile responsive on all pages
- [ ] Test on multiple browsers
- [ ] Check loading speed

## 9. Performance Tips

1. **Optimize Images**: Use Next.js Image component (already done for you)
2. **Enable Caching**: Configure in `next.config.ts`
3. **Lazy Loading**: Already implemented with Framer Motion viewport detection
4. **Analytics**: Add Google Analytics or Vercel Analytics

## 10. Deployment

### Quick Deploy to Vercel:
```bash
npm install -g vercel
vercel
```

Follow prompts to deploy. Your site will be live in minutes!

## Need Help?

- Check component comments for guidance
- Refer to [README.md](README.md) for technical details
- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
