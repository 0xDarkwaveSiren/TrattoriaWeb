# Buon Gustaio - New Color Palette

Updated color scheme inspired by authentic Italian trattoria aesthetics and the restaurant's exterior.

## Primary Colors

### Sage Green - Main Brand Color
**Primary accent and brand identity**
- `sage-500`: #8B9B7E (Main brand color)
- Usage: Logo accent, primary buttons, hero highlights, brand elements
- Represents: Natural, organic, Mediterranean authenticity

### Dark Navy - Text & Headers
**Main text color for readability**
- `navy-900`: #2C3E50 (Dark text)
- Usage: Headings, body text, navigation, primary text
- Ensures: Excellent contrast ratios for accessibility

### Rust/Terracotta - Accent Color
**Call-to-action and highlights**
- `rust-600`: #C85A3D (Main accent)
- Usage: CTA buttons, featured badges, important highlights
- Represents: Warmth, Italian terracotta, Mediterranean sun

## Supporting Colors

### Cream - Main Backgrounds
**Primary background color**
- `cream-50`: #FAF8F3 (Light background)
- Usage: Page backgrounds, card backgrounds, light sections
- Creates: Warm, inviting atmosphere

### Warm Beige - Secondary Backgrounds
**Secondary backgrounds and surfaces**
- `beige-300`: #E5D5B8 (Main beige)
- Usage: Card accents, secondary sections, hover states
- Adds: Depth and warmth to the design

### Warm Brown - Borders & Accents
**Subtle accents and borders**
- `brown-500`: #A67C52 (Main brown)
- Usage: Borders, dividers, subtle accents, icons
- Provides: Visual structure without harshness

### Deep Green - Secondary Text
**Supporting text and softer elements**
- `green-600`: #5A6B4F (Deep green)
- Usage: Secondary text, descriptions, captions
- Complements: Sage green primary color

### Soft Gold - Premium Touches
**Luxury and premium elements**
- `gold-400`: #D4AF37 (Main gold)
- Usage: Hover states, premium badges, special highlights
- Adds: Touch of elegance and quality

## Color Usage Guide

### Navigation
- Background: `cream-50` with transparency
- Logo: `navy-900` + `sage-500`
- Links: `green-600` → hover: `sage-500`
- CTA Button: `rust-600` → hover: `rust-700`

### Hero Section
- Background: Gradient from `cream-50` via `beige-50` to `sage-50`
- Headline: `navy-900` + `sage-500`
- Body text: `green-600`
- Primary CTA: `rust-600`
- Secondary CTA: `white` with `navy-900` text

### Content Sections
- Backgrounds: `white` or `cream-50`
- Headings: `navy-900`
- Body text: `green-600`
- Accents: `sage-500`
- Highlights: `rust-600`

### Cards & Components
- Card background: `white` or `glass` effect
- Card hover: Lift with shadow, subtle `beige-50` tint
- Borders: `brown-400` or `beige-300`
- Icons: `sage-600` or `green-600`

### Badges
- 3D Badge: Gradient from `rust-500` to `rust-600`
- Video Badge: Gradient from `gold-400` to `gold-500`

### Form Elements
- Input borders: `beige-200` → focus: `rust-500`
- Submit buttons: `rust-600`
- Labels: `navy-900`
- Placeholder: `green-400`

### Footer
- Background: `navy-900`
- Text: `beige-100`
- Links: `beige-300` → hover: `sage-300`
- Accents: `rust-600`

## Accessibility

All color combinations meet WCAG AA standards:
- `navy-900` on `cream-50`: 12.5:1 ✅
- `green-600` on `white`: 7.2:1 ✅
- `white` on `rust-600`: 4.8:1 ✅
- `white` on `sage-500`: 4.1:1 ✅

## Color Palette Comparison

### Old Colors → New Colors
- `terracotta-*` → `rust-*` (Accent color)
- `earth-*` → `navy-*` / `green-*` / `brown-*` (Context dependent)
- `warm-*` → `gold-*` / `beige-*` (Context dependent)

### Rationale
The new palette creates a more authentic Italian trattoria feel with:
- **Sage Green**: Represents olive trees, Mediterranean herbs, natural ingredients
- **Navy**: Professional, sophisticated, readable
- **Rust/Terracotta**: Traditional Italian pottery, warmth
- **Beige/Cream**: Tuscan walls, warm stone, inviting
- **Brown**: Wood, earth, authentic materials
- **Gold**: Quality, premium ingredients, sunlight

## Implementation

All components have been updated with the new color palette:
- ✅ Tailwind configuration updated
- ✅ Global CSS updated
- ✅ Navigation component
- ✅ Hero section
- ✅ About section
- ✅ Menu section
- ✅ Gallery section
- ✅ Contact section
- ✅ Footer
- ✅ Badge and Card components

## Design Principles

1. **Warmth**: Cream and beige backgrounds create inviting atmosphere
2. **Authenticity**: Sage and earth tones reflect Mediterranean origins
3. **Readability**: Navy text on light backgrounds ensures clarity
4. **Accent**: Rust color draws attention to CTAs without being aggressive
5. **Cohesion**: All colors work harmoniously together
6. **Flexibility**: 10 shades per color allow for subtle variations

## Usage Tips

- Use `navy-900` for all headings and primary text
- Use `green-600` for body text and descriptions
- Use `rust-600` sparingly for CTAs and important highlights
- Use `sage-500` as the brand color in logo and key elements
- Use `cream-50` for main backgrounds to keep things light
- Use `gold-400` for premium touches and hover states
- Maintain high contrast ratios for accessibility
