# WebLeads Style Guide

[← Back to Main Specs](./SPECS.md)

## Iconography

### Icon Library
- **Heroicons (Outline)**: Used throughout the app for UI actions, status, and navigation. Imported from `@heroicons/react/24/outline`.
- **Custom SVGs**: Used for loading spinners, empty/placeholder states, and feedback/bug report buttons.

### Common Icons Used
- `MagnifyingGlassIcon` — search/query fields
- `ClockIcon` — status/time
- `MapIcon`, `MapPinIcon` — location/coordinates
- `CalendarIcon` — date/time
- `BuildingStorefrontIcon` — business count/places
- `XMarkIcon` — close, error, failed, dismiss
- `CheckCircleIcon` — success
- `ExclamationCircleIcon` — error, warning
- `InformationCircleIcon` — info

### Icon Styling
- **Size**: Use Tailwind classes like `h-4 w-4`, `h-5 w-5`, `h-6 w-6` for consistent sizing.
- **Color**: Use semantic Tailwind color classes (`text-primary`, `text-gray-400`, `text-green-500`, `text-red-500`, etc.) to match the context (success, error, info, etc.).
- **Placement**: Icons are placed inline with text, inside buttons, or as visual indicators in cards, notifications, and empty states.
- **Accessibility**: Decorative icons should have `aria-hidden="true"` or be marked as presentational. Icons conveying meaning should have appropriate `aria-label` or be accompanied by text.

---

## Design System
1. **Color Palette**
   - Primary: `#8A3033` (primary) - Main brand color
   - Primary Hover: `#722629` (primary-hover)
   - Secondary: `#2D3142` (secondary)
   - Secondary Hover: `#252736` (secondary-hover)
   - Accent: `#D8B26E` (accent)
   - Accent Hover: `#C9A05F` (accent-hover)
   - Neutral:
     - `#F9F5F5` (light)
     - `#FAFAFA` (off-white)
     - `#1A1A1A` (dark)
   - Text:
     - `#2D3142` (text-primary)
     - `#6B7280` (text-secondary)
     - `#FFFFFF` (text-light)
   - Semantic (for status, not main palette):
     - Success: `#10B981` (emerald-500)
     - Warning: `#F59E0B` (amber-500)
     - Error: `#EF4444` (red-500)
     - Info: `#3B82F6` (blue-500)
2. **Typography**
   - Font Family: 
     - Primary: 'Inter', sans-serif
     - Monospace: 'Fira Code', monospace (for code snippets)
   - Font Sizes:
     - xs: 0.75rem (12px)
     - sm: 0.875rem (14px)
     - base: 1rem (16px)
     - lg: 1.125rem (18px)
     - xl: 1.25rem (20px)
     - 2xl: 1.5rem (24px)
     - 3xl: 1.875rem (30px)
     - 4xl: 2.25rem (36px)
   - Font Weights:
     - normal: 400
     - medium: 500
     - semibold: 600
     - bold: 700
3. **Spacing**
   - Base unit: 0.25rem (4px)
   - Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px, 128px
4. **Shadows**
   - sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
   - md: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
   - lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
5. **Border Radius**
   - none: 0
   - sm: 0.125rem (2px)
   - DEFAULT: 0.25rem (4px)
   - md: 0.375rem (6px)
   - lg: 0.5rem (8px)
   - xl: 0.75rem (12px)
   - 2xl: 1rem (16px)
   - full: 9999px

## Component Design Patterns
1. **Buttons**
   - Primary: Solid background with the primary color
   - Secondary: Outlined with the primary color
   - Text: No background or border, just text color
   - Size variations: sm, md, lg
   - States: default, hover, active, disabled
2. **Forms**
   - Inputs with consistent padding and border radius
   - Clear focus states with primary color outline
   - Validation states with appropriate colors
   - Helpful error messages below inputs
3. **Cards**
   - Consistent padding and shadow
   - Optional header and footer sections
   - Hover effects for interactive cards
4. **Tables**
   - Zebra striping for better readability
   - Hover effect on rows
   - Responsive design for mobile viewing
   - Sortable columns with clear indicators
5. **Navigation**
   - Clear active states
   - Consistent hover effects
   - Mobile-friendly dropdown menus

## Tailwind CSS Configuration
The project uses a customized Tailwind configuration to implement the design system:
```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#8A3033',
        'secondary': '#2D3142',
        'accent': '#D8B26E',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'mono': ['Fira Code', 'ui-monospace', 'SFMono-Regular'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## Responsive Design
The application follows a mobile-first approach with these breakpoints:
- sm: 640px (Small devices)
- md: 768px (Medium devices)
- lg: 1024px (Large devices)
- xl: 1280px (Extra large devices)
- 2xl: 1536px (2X large devices)
All components should be designed to work well across these breakpoints, adapting their layout and functionality appropriately.

## Accessibility Guidelines
1. Ensure proper color contrast (WCAG AA compliance minimum)
2. Use semantic HTML elements
3. Include proper ARIA attributes when needed
4. Ensure keyboard navigation works properly
5. Provide text alternatives for non-text content

## Animation Guidelines
- Use subtle transitions for state changes (150-300ms)
- Avoid excessive animations that might cause distraction
- Respect user preferences for reduced motion 