# WebLeads Style Guide

[← Back to Main Specs](./SPECS.md)

## Iconography

### Icon Library
- **Lucide React**: Used throughout the app for UI actions, status, navigation, and visual elements. Imported from `lucide-react`.
- **Custom SVGs**: Used for loading spinners, empty/placeholder states, and feedback/bug report buttons.

### Common Icons Used
- `Search` — search/query fields, search functionality
- `Clock` — status/time, duration
- `MapPin` — location/coordinates, addresses
- `Building2` — business count/places, companies
- `Mail` — email addresses, contact
- `Phone` — phone numbers, contact
- `Star` — ratings, reviews, favorites
- `CheckCircle2` — success, completion, verified
- `Brain` — AI features, intelligence, validation
- `Sparkles` — fresh data, highlights, special features
- `Database` — data enrichment, data sources
- `Users` — user count, community, decision makers
- `TrendingUp` — growth, metrics, statistics
- `Pause`, `Play`, `RefreshCw` — animation controls
- `Loader2` — loading states, processing
- `ArrowDown` — scroll indicators, navigation
- `Send` — form submission, actions

### Icon Styling
- **Size**: Use Tailwind classes like `w-4 h-4`, `w-5 h-5`, `w-6 h-6`, `w-8 h-8` for consistent sizing.
- **Color**: Use semantic Tailwind color classes (`text-brand-primary`, `text-gray-400`, `text-green-500`, `text-red-500`, etc.) to match the context (success, error, info, etc.).
- **Fill**: For filled icons, use `fill-brand-primary` or `fill-current` classes. Icons can be filled with brand colors for emphasis.
- **Placement**: Icons are placed inline with text, inside buttons, or as visual indicators in cards, notifications, and empty states.
- **Accessibility**: Decorative icons should have `aria-hidden="true"` or be marked as presentational. Icons conveying meaning should have appropriate `aria-label` or be accompanied by text.

---

## Design System

### 1. Color Palette

#### Brand Colors
- **Primary**: `#8A3033` (`brand-primary`) - Main brand color (burgundy)
- **Primary Hover**: `#722629` (`brand-primary-hover`) - Darker burgundy for hover states
- **Secondary**: `#2D3142` (`brand-secondary`) - Dark blue-gray for text and accents
- **Secondary Hover**: `#252736` (`brand-secondary-hover`) - Darker secondary for hover states
- **Accent**: `#D8B26E` (`brand-accent`) - Gold/tan accent color
- **Accent Hover**: `#C9A05F` (`brand-accent-hover`) - Darker accent for hover states
- **Light**: `#F9F5F5` (`brand-light`) - Light background tint
- **Off-White**: `#FAFAFA` (`brand-off-white`) - Off-white background
- **Dark**: `#1A1A1A` (`brand-dark`) - Dark background

#### Text Colors
- **Primary Text**: `#2D3142` (`text-primary`) - Main body text
- **Secondary Text**: `#6B7280` (`text-secondary`) - Muted/secondary text
- **Light Text**: `#FFFFFF` (`text-light`) - Text on dark backgrounds

#### Semantic Colors (for status, not main palette)
- **Success**: `#10B981` (`emerald-500`, `green-500`) - Success states, completed actions
- **Warning**: `#F59E0B` (`amber-500`) - Warning states
- **Error**: `#EF4444` (`red-500`) - Error states
- **Info**: `#3B82F6` (`blue-500`) - Informational states

#### Usage Patterns
- Use `bg-brand-primary` for primary buttons and key CTAs
- Use `text-brand-primary` for links and primary text accents
- Use `border-brand-primary/10` or `border-brand-primary/20` for subtle borders
- Use `bg-brand-primary/5`, `bg-brand-primary/8` for subtle background tints
- Use gradients: `bg-gradient-to-br from-brand-primary to-brand-primary-hover` for depth
- Use backdrop blur: `backdrop-blur-sm` with semi-transparent backgrounds (`bg-white/90`, `bg-white/80`)

### 2. Typography

#### Font Family
- **Primary**: `'Inter'`, sans-serif - Used for all body text and headings
- **Monospace**: `'Fira Code'`, monospace - Used for code snippets

#### Font Sizes
- `xs`: 0.75rem (12px)
- `sm`: 0.875rem (14px)
- `base`: 1rem (16px)
- `lg`: 1.125rem (18px)
- `xl`: 1.25rem (20px)
- `2xl`: 1.5rem (24px)
- `3xl`: 1.875rem (30px)
- `4xl`: 2.25rem (36px)
- `5xl`: 3rem (48px) - Large hero text
- `6xl`: 3.75rem (60px) - Extra large hero text
- `7xl`: 4.5rem (72px) - Maximum hero text

#### Font Weights
- `normal`: 400 - Body text
- `medium`: 500 - Emphasis, labels
- `semibold`: 600 - Subheadings, important text
- `bold`: 700 - Headings, strong emphasis

#### Typography Patterns
- **Hero Headlines**: `text-5xl md:text-7xl font-bold text-brand-primary` with `leading-tight tracking-tight`
- **Section Headings**: `text-3xl md:text-4xl font-bold text-brand-primary` or `text-brand-secondary`
- **Subheadings**: `text-xl md:text-2xl text-gray-600`
- **Body Text**: `text-base md:text-lg text-gray-600`
- **Small Text**: `text-sm text-gray-600`

### 3. Spacing
- Base unit: 0.25rem (4px)
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
- Common spacing classes: `gap-2`, `gap-3`, `gap-4`, `gap-6`, `p-4`, `p-6`, `p-8`, `py-12`, `py-20`

### 4. Shadows
- `sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- `md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- `lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- `xl`: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)` (`shadow-xl`)
- `2xl`: `0 25px 50px -12px rgba(0, 0, 0, 0.25)` (`shadow-2xl`)

### 5. Border Radius
- `none`: 0
- `sm`: 0.125rem (2px)
- `DEFAULT`: 0.25rem (4px)
- `md`: 0.375rem (6px)
- `lg`: 0.5rem (8px)
- `xl`: 0.75rem (12px)
- `2xl`: 1rem (16px) - Common for cards and containers
- `full`: 9999px - For pills and circular elements

### 6. Animations

#### Floating Blobs (Background)
- `animate-float-blob-1`: 25s ease-in-out infinite - Large background blob
- `animate-float-blob-2`: 30s ease-in-out infinite - Medium background blob
- `animate-float-blob-3`: 20s ease-in-out infinite - Small background blob
- Used for: Background decorative elements with `bg-brand-primary/8`, `bg-brand-accent/15` and `blur-3xl`

#### Orbital Animations
- `orbit-0`, `orbit-90`, `orbit-180`, `orbit-270`: 20s linear infinite
- Used for: Elements orbiting around a central point (flow visual)
- Classes: `.orbit-element` with transform-origin at center

#### Card & Element Animations
- `animate-card-appear`: 0.5s ease-out forwards - Cards fade in and scale up
- `animate-float`: 120s ease-in-out infinite - Subtle floating motion
- `animate-typing-cursor`: 1s infinite - Blinking cursor effect
- `animate-pulse-glow`: 2s ease-in-out infinite - Pulsing glow effect
- `animate-pulse-slow`: 3s infinite - Slow pulsing shadow

#### Progress & Loading
- `animate-spin`: Rotating loading indicators
- `animate-bounce`: Bouncing scroll indicators

#### Animation Guidelines
- Use subtle transitions for state changes (150-300ms)
- Prefer `transition-all duration-300` for smooth hover effects
- Use `ease-in-out` or `ease-out` timing functions
- Respect user preferences for reduced motion
- Animations should enhance UX, not distract

---

## Component Design Patterns

### 1. Buttons

#### Primary Button
```tsx
<Button className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
  Get Free Access
</Button>
```
- Solid background with brand-primary color
- Large padding (`py-6 px-8`)
- Rounded corners (`rounded-xl`)
- Shadow elevation (`shadow-lg hover:shadow-xl`)
- Smooth transitions

#### Secondary Button
- Outlined or with secondary background
- Similar padding and rounded corners
- Uses `border-brand-primary` or `bg-brand-secondary`

#### Icon Buttons
- Subtle controls: `p-2 hover:opacity-80 transition-opacity rounded-lg`
- Icons: `w-5 h-5 text-brand-primary fill-brand-primary` (for filled icons)
- Used for: Play, pause, restart controls

### 2. Forms

#### Input Fields
```tsx
<Input
  className="flex-1 px-5 py-6 text-lg border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl"
/>
```
- Large padding for better UX (`px-5 py-6`)
- Clear focus states with brand-primary color
- Border radius: `rounded-xl`
- Validation states with appropriate colors

#### Form Containers
- Background: `bg-white/95 backdrop-blur-sm`
- Padding: `p-8`
- Border radius: `rounded-2xl`
- Shadow: `shadow-xl`
- Border: `border border-brand-primary/10`

### 3. Cards

#### Standard Card
```tsx
<div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
  {/* Content */}
</div>
```
- Background with backdrop blur: `bg-white/80 backdrop-blur-sm` or `bg-white/90 backdrop-blur-sm`
- Padding: `p-4`, `p-6`, or `p-8`
- Border radius: `rounded-xl`
- Shadow: `shadow-md` with `hover:shadow-lg`
- Border: `border border-brand-primary/5` or `border-brand-primary/10`

#### Feature Card (with icon)
```tsx
<div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md">
    <Icon className="w-6 h-6 text-white" />
  </div>
  {/* Content */}
</div>
```
- Gradient backgrounds for depth
- Icon containers with brand gradient
- Hover effects: `hover:scale-105` and `hover:shadow-lg`
- Group hover for coordinated effects

### 4. Stats Cards
```tsx
<div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
  <div className="flex flex-col items-center gap-2">
    <Icon className="w-6 h-6 text-brand-primary" />
    <div className="text-2xl font-bold text-brand-primary">[Value]</div>
    <div className="text-sm text-gray-600 text-center">Label</div>
  </div>
</div>
```
- Centered content with icon, value, and label
- Uses brand-primary for icons and values
- Responsive grid: `grid-cols-2 md:grid-cols-4`

### 5. Hero Section Patterns

#### Background Blobs
```tsx
<div className="absolute inset-0 pointer-events-none overflow-hidden">
  <div className="absolute top-10 left-10 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
  <div className="absolute top-40 right-20 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
  <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
</div>
```
- Multiple floating blobs with different sizes and positions
- Low opacity (`/8`, `/15`, `/6`) with heavy blur (`blur-3xl`)
- Animated with orbital or floating animations

#### Orbital Flow Visual
- Central element (search icon) with orbiting elements
- Elements appear sequentially with opacity transitions
- Uses CSS orbit animations (`orbit-0`, `orbit-90`, `orbit-180`, `orbit-270`)
- Distance: `translateY(-110px)` from center
- Each element has icon and label

#### Fresh Leads Badge
```tsx
<div className="flex items-center justify-center gap-2 text-base md:text-lg text-gray-600 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-lg px-5 py-3">
  <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0" />
  <span className="font-medium">Fresh leads collected on each search</span>
  <span className="text-gray-400">•</span>
  <span>No outdated database</span>
</div>
```
- Prominent messaging with icon
- Light blue background (`bg-blue-50/80`)
- Clear separation with bullet points

### 6. Product Demo Components

#### Search Bar Container
```tsx
<div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-brand-primary/20 relative flex-1">
  {/* Search input and button */}
</div>
```
- Large shadow (`shadow-2xl`)
- Border with brand color (`border-2 border-brand-primary/20`)
- Rounded corners (`rounded-2xl`)

#### Progress Stages
- Sequential stages with icons and labels
- Color states: gray (pending), blue (active), green (completed)
- Icons: `w-5 h-5` with appropriate colors
- Smooth transitions between states

#### Business Cards (Results)
- Full-width container: `w-full`
- Grid layout: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- Card appearance animation: `animate-card-appear`
- Styled with shadows and borders

### 7. Navigation
- Clear active states with brand-primary color
- Consistent hover effects: `hover:opacity-80` or `hover:bg-brand-primary/10`
- Mobile-friendly dropdown menus
- Smooth transitions

### 8. Feature Design Patterns

#### Modern Dark CTA Card
```tsx
<div className="relative bg-[#1e2330] rounded-[2.5rem] p-12 overflow-hidden shadow-2xl">
  {/* Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330]" />
  
  {/* Blur Shapes */}
  <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
  
  {/* Content */}
  <div className="relative z-10 text-white">
    <h2 className="text-4xl font-bold">Headline</h2>
    <p className="text-blue-100/80">Subtext</p>
  </div>
</div>
```
- **Background**: Dark Slate Gradient (`#1e2330` -> `#2d3142`)
- **Radius**: Extra large rounded corners (`rounded-[2.5rem]`)
- **Typography**: White headings, Blue-tinted subtext (`text-blue-100/80`)
- **Badges**: Dark glass effect (`bg-white/10 backdrop-blur-md text-blue-100`) - No gold accents in dark mode
- **Buttons**: Solid Brand Primary + Transparent Outline White

---

## Tailwind CSS Configuration

The project uses a customized Tailwind configuration to implement the design system:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#8A3033",
          'primary-hover': "#722629",
          secondary: "#2D3142",
          'secondary-hover': "#252736",
          accent: "#D8B26E",
          'accent-hover': "#C9A05F",
          light: "#F9F5F5",
          'off-white': "#FAFAFA",
          dark: "#1A1A1A",
        },
        text: {
          primary: "#2D3142",
          secondary: "#6B7280",
          light: "#FFFFFF",
        },
        semantic: {
          success: "#10B981",
          warning: "#F59E0B",
          error: "#EF4444",
          info: "#3B82F6",
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        "pulse-slow": "pulse-slow 3s infinite",
        "card-appear": "card-appear 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

---

## Responsive Design

The application follows a mobile-first approach with these breakpoints:
- `sm`: 640px (Small devices)
- `md`: 768px (Medium devices)
- `lg`: 1024px (Large devices)
- `xl`: 1280px (Extra large devices)
- `2xl`: 1536px (2X large devices)

### Responsive Patterns
- Hero text: `text-5xl md:text-7xl`
- Section headings: `text-3xl md:text-4xl`
- Body text: `text-base md:text-lg`
- Grid columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Padding: `px-4 md:px-6 lg:px-8`
- Spacing: `gap-4 md:gap-6`

All components should be designed to work well across these breakpoints, adapting their layout and functionality appropriately.

---

## Accessibility Guidelines

1. **Color Contrast**: Ensure proper color contrast (WCAG AA compliance minimum)
   - Text on backgrounds should meet contrast ratios
   - Use `text-gray-600` for readable secondary text
   - Brand-primary on white meets contrast requirements

2. **Semantic HTML**: Use semantic HTML elements (`<section>`, `<article>`, `<nav>`, etc.)

3. **ARIA Attributes**: Include proper ARIA attributes when needed
   - `aria-label` for icon-only buttons
   - `aria-hidden="true"` for decorative icons
   - `aria-live` for dynamic content updates

4. **Keyboard Navigation**: Ensure keyboard navigation works properly
   - All interactive elements should be focusable
   - Focus states should be clearly visible (`focus:ring-2 focus:ring-brand-primary/20`)

5. **Text Alternatives**: Provide text alternatives for non-text content
   - Icons should have labels or aria-labels
   - Images should have alt text

6. **Motion Preferences**: Respect user preferences for reduced motion
   - Use `prefers-reduced-motion` media queries when appropriate
   - Provide static alternatives for complex animations

---

## Animation Guidelines

### Principles
- Use subtle transitions for state changes (150-300ms)
- Prefer `ease-in-out` or `ease-out` timing functions
- Avoid excessive animations that might cause distraction
- Respect user preferences for reduced motion

### Common Animation Patterns
- **Hover Effects**: `hover:shadow-lg transition-shadow` or `hover:scale-105 transition-all duration-300`
- **Loading States**: `animate-spin` for spinners, `animate-pulse` for skeletons
- **Card Appearances**: `animate-card-appear` for fade-in and scale-up
- **Background Elements**: Floating blobs with long-duration animations (20-30s)
- **Progress Indicators**: Smooth progress bars with percentage transitions

### Performance
- Use CSS animations over JavaScript when possible
- Limit simultaneous animations
- Use `transform` and `opacity` for best performance
- Avoid animating `width`, `height`, or `top/left` properties

---

## Design Tokens Summary

### Colors
- Primary: `#8A3033` (burgundy)
- Secondary: `#2D3142` (dark blue-gray)
- Accent: `#D8B26E` (gold/tan)

### Typography
- Font: Inter (sans-serif)
- Hero: 5xl-7xl, bold
- Headings: 3xl-4xl, bold
- Body: base-lg, normal-medium

### Spacing
- Base: 4px
- Common: 8px, 16px, 24px, 32px, 48px

### Border Radius
- Small: 8px (lg)
- Medium: 12px (xl)
- Large: 16px (2xl)

### Shadows
- Small: sm
- Medium: md-lg
- Large: xl-2xl

---

## Best Practices

1. **Consistency**: Use design tokens consistently across all components
2. **Responsiveness**: Always design mobile-first
3. **Performance**: Optimize animations and images
4. **Accessibility**: Test with screen readers and keyboard navigation
5. **Maintainability**: Use Tailwind utility classes, avoid custom CSS when possible
6. **Brand Identity**: Maintain burgundy brand colors throughout
7. **Visual Hierarchy**: Use size, weight, and color to establish clear hierarchy
8. **Whitespace**: Use generous spacing for breathing room
9. **Feedback**: Provide clear visual feedback for all interactions
10. **Progressive Enhancement**: Ensure core functionality works without JavaScript
