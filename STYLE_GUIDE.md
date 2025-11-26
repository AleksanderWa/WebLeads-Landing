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
- **Hero Headlines**: `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-primary` with `leading-tight tracking-tight`
- **Section Headings**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary` or `text-brand-secondary`
- **Subheadings**: `text-base sm:text-lg md:text-xl text-gray-600`
- **Body Text**: `text-base sm:text-lg text-gray-600`
- **Small Text**: `text-xs sm:text-sm text-gray-600`

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

#### Hero Badge (Primary Badge)
```tsx
<Badge className="bg-brand-secondary text-white mb-4 sm:mb-6 text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2 animate-in fade-in zoom-in duration-500">
  Free Email Discovery Tool
</Badge>
```
- **Background**: `bg-brand-secondary` (dark blue-gray)
- **Text**: `text-white`
- **Responsive sizing**: `text-sm sm:text-base`
- **Responsive padding**: `px-3 sm:px-4 py-1.5 sm:py-2`
- **Animation**: `animate-in fade-in zoom-in duration-500`
- **Use for**: Hero section badges, primary feature announcements

#### Secondary Badge (Accent Badge)
```tsx
<Badge className="bg-brand-accent text-brand-secondary mb-4 sm:mb-6 text-sm sm:text-base px-3 sm:px-4 py-1.5 sm:py-2">
  Starting at $1.00 per 1,000 leads
</Badge>
```
- **Background**: `bg-brand-accent` (gold/tan)
- **Text**: `text-brand-secondary` (dark blue-gray)
- **Use for**: Pricing badges, promotional messages

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

#### Modern Dark CTA Card (Rectangular Container)
**Standard pattern for final CTA sections on landing pages**

```tsx
<section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="relative bg-[#1e2330] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-24 overflow-hidden text-center shadow-2xl">
      {/* Gradient & Shape Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e2330] via-[#2d3142] to-[#1e2330] opacity-100" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
      
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight tracking-tight px-2">
          Headline
        </h2>
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
          Subtext description
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-2">
          <Button className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl border border-white/10 w-full sm:w-auto">
            Primary CTA
          </Button>
          <Button variant="outline" className="text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 h-auto border-2 border-white/20 text-white bg-transparent hover:bg-white/10 hover:border-white/40 transition-all rounded-xl w-full sm:w-auto">
            Secondary CTA
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>
```

**Key Characteristics:**
- **Container**: White background section with padding
- **Card Background**: Dark Slate (`#1e2330`) with gradient overlay
- **Responsive Radius**: `rounded-2xl sm:rounded-3xl md:rounded-[2.5rem]`
- **Responsive Padding**: `p-6 sm:p-8 md:p-12 lg:p-24`
- **Blur Shapes**: Responsive sizes for background effects
- **Typography**: White headings (`text-white`), Blue-tinted subtext (`text-blue-100/80`)
- **Responsive Typography**: Headings scale from `text-2xl` to `xl:text-6xl`
- **Buttons**: 
  - Primary: `bg-brand-primary` with white text
  - Secondary: Transparent with white border (`border-white/20`)
- **Shadow**: `shadow-2xl` for depth
- **Use for**: Final CTA sections, promotional cards, feature highlights

**Optional Pro Feature Badge:**
```tsx
<div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-blue-100 mb-6 sm:mb-8 border border-white/10 shadow-sm">
  <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-200" />
  <span className="font-medium tracking-wide uppercase text-xs">Pro Feature</span>
</div>
```
- Dark glass effect (`bg-white/10 backdrop-blur-md`)
- Blue-tinted text (`text-blue-100`)
- No gold accents in dark mode

#### Pricing Cards Pattern
**Standard pattern for subscription pricing cards**

```tsx
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
  {/* Discover Plan (Usage-Based) */}
  <Card className="border-2 border-gray-200 hover:border-orange-500 transition-all rounded-xl shadow-sm hover:shadow-md relative">
    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs sm:text-sm px-3 py-1 font-semibold">
      USAGE-BASED
    </Badge>
    <CardHeader className="p-6 pt-8">
      <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Discover</CardTitle>
      <div className="mt-4">
        <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$0.00</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">500 credits</p>
      <p className="text-xs text-gray-500 mt-1">According to top ups prices per 1K leads</p>
    </CardHeader>
    <CardContent className="p-6 pt-0">
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">1 active search</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
        </li>
        <li className="flex items-start gap-2">
          <XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
        </li>
      </ul>
      <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
        <Link href="/#waitlist-form">Select Plan</Link>
      </Button>
    </CardContent>
  </Card>

  {/* Starter Plan */}
  <Card className="border-2 border-gray-200 hover:border-green-500 transition-all rounded-xl shadow-sm hover:shadow-md relative">
    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs sm:text-sm px-3 py-1 font-semibold">
      POPULAR
    </Badge>
    <CardHeader className="p-6 pt-8">
      <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Starter</CardTitle>
      <div className="mt-4">
        <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$9.99</span>
        <span className="text-sm sm:text-base text-gray-600"> per month</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">10,000 credits</p>
      <p className="text-xs text-green-600 font-semibold mt-1">$1.00 per 1K leads</p>
    </CardHeader>
    <CardContent className="p-6 pt-0">
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">1 active search</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
        </li>
      </ul>
      <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
        <Link href="/#waitlist-form">Select Plan</Link>
      </Button>
    </CardContent>
  </Card>

  {/* Growth Plan (Best Value) */}
  <Card className="border-4 border-purple-500 relative shadow-xl rounded-xl bg-gradient-to-br from-purple-50/50 to-pink-50/50">
    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs sm:text-sm px-3 py-1 font-semibold flex items-center gap-1 shadow-md">
      <Gem className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
      BEST VALUE
    </Badge>
    <CardHeader className="p-6 pt-8">
      <CardTitle className="text-xl sm:text-2xl font-bold text-brand-secondary">Growth</CardTitle>
      <div className="mt-4">
        <span className="text-3xl sm:text-4xl font-bold text-brand-primary">$24.99</span>
        <span className="text-sm sm:text-base text-gray-600"> per month</span>
      </div>
      <p className="text-xs sm:text-sm text-gray-600 mt-2">28,000 credits</p>
      <p className="text-xs text-purple-600 font-semibold mt-1">$0.89 per 1K leads</p>
    </CardHeader>
    <CardContent className="p-6 pt-0">
      <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs sm:text-sm text-purple-600 font-semibold">Up to 3 active searches</span>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 shadow-sm">
              <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white" />
              PREMIUM
            </Badge>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Export to CSV/Excel</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Business name & category</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Address & location data</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Google Maps ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Number of Google ratings</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Email addresses</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Social media links</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Decision makers (names & roles)</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Can buy more credits</span>
        </li>
        <li className="flex items-start gap-2">
          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-gray-700">Priority support</span>
        </li>
      </ul>
      <Button asChild className="w-full bg-gradient-to-r from-brand-primary to-brand-primary-hover hover:from-brand-primary-hover hover:to-brand-primary text-white rounded-xl shadow-lg">
        <Link href="/#waitlist-form">Select Plan</Link>
      </Button>
    </CardContent>
  </Card>
</div>
```

**Pricing Card Characteristics:**

**Discover Plan (Usage-Based):**
- **Badge**: Orange (`bg-orange-500`) with "USAGE-BASED" text
- **Border**: `border-2 border-gray-200 hover:border-orange-500`
- **Button**: Brand primary gradient (`bg-gradient-to-r from-brand-primary to-brand-primary-hover`) with "Select Plan" text
- **Price**: $0.00 (no "/month" suffix)
- **Credits**: 500 credits
- **Note**: Include "According to top ups prices per 1K leads" in gray text below credits
- **Features**: Full feature list with CheckCircle2 (green) for included features, XCircle (red) for excluded features
- **Use for**: Free/pay-as-you-go plans

**Starter Plan:**
- **Badge**: Green (`bg-green-600`) with "POPULAR" text
- **Border**: `border-2 border-gray-200 hover:border-green-500`
- **Button**: Brand primary gradient (`bg-gradient-to-r from-brand-primary to-brand-primary-hover`) with "Select Plan" text
- **Price**: $9.99 per month (with " per month" text)
- **Credits**: 10,000 credits
- **Price per 1K**: `text-green-600 font-semibold` for emphasis
- **Features**: Full feature list with CheckCircle2 (green) for all included features
- **Use for**: Entry-level subscription plans

**Growth Plan (Best Value):**
- **Badge**: Purple-to-pink gradient (`bg-gradient-to-r from-purple-600 to-pink-600`) with Gem icon
- **Border**: `border-4 border-purple-500` (thicker solid border for emphasis)
- **Background**: Subtle gradient (`bg-gradient-to-br from-purple-50/50 to-pink-50/50`)
- **Button**: Brand primary gradient (`bg-gradient-to-r from-brand-primary to-brand-primary-hover`) with "Select Plan" text
- **Price**: $24.99/month
- **Credits**: 28,000 credits
- **Price per 1K**: `text-purple-600` for emphasis
- **Shadow**: `shadow-xl` for elevated appearance
- **Premium Features**: Use gradient badges with Star icon (`bg-gradient-to-r from-purple-600 to-pink-600`) for premium features
- **Use for**: Recommended/highlighted plans

**Premium Feature Badge:**
```tsx
<div className="flex items-center gap-2 flex-wrap">
  <span className="text-xs sm:text-sm text-purple-600 font-semibold">Up to 3 active searches</span>
  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-md font-semibold flex items-center gap-1 shadow-sm">
    <Star className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-white" />
    PREMIUM
  </Badge>
</div>
```
- **Background**: Purple-to-pink gradient (`bg-gradient-to-r from-purple-600 to-pink-600`)
- **Icon**: White Star icon with `fill-white`
- **Text**: White uppercase "PREMIUM" text
- **Size**: `text-[10px] sm:text-xs` for responsive sizing
- **Use for**: Highlighting premium features in pricing cards

**Common Patterns:**
- **Card Padding**: `p-6` for header/content, `pt-8` for header when badge is present
- **Badge Position**: `absolute -top-3 left-1/2 -translate-x-1/2` (centered above card)
- **Feature Lists**: 
  - Use `CheckCircle2` (green, `text-green-500`) for included features
  - Use `XCircle` (red, `text-red-500`) for excluded features
  - Icon size: `h-4 w-4 sm:h-5 sm:w-5` with `mt-0.5 flex-shrink-0`
  - Text size: `text-xs sm:text-sm text-gray-700`
  - List spacing: `space-y-2 sm:space-y-3 mb-4 sm:mb-6`
- **Responsive Grid**: `grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6` for 3-column layout
- **Typography**: 
  - Price: `text-3xl sm:text-4xl font-bold text-brand-primary`
  - Credits: `text-xs sm:text-sm text-gray-600`
  - Price per 1K: `text-xs` with color matching plan theme (green for Starter, purple for Growth)
- **Buttons**: All plans use "Select Plan" button with brand primary gradient (`bg-gradient-to-r from-brand-primary to-brand-primary-hover`)
- **Button Link**: Use `asChild` with `Link` component pointing to `/#waitlist-form`

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
