# Icon Library Reference

This document provides a reference for the Heroicon icons used throughout the Buisbuild website.

## Icon Library: Heroicons

We use [Heroicons](https://heroicons.com/) - a beautiful hand-crafted SVG icon set created by the makers of Tailwind CSS.

### Why Heroicons?
- ✅ **Consistent Design**: All icons follow the same design principles
- ✅ **Perfect Integration**: Made specifically for Tailwind CSS projects
- ✅ **Accessibility**: Optimized for screen readers and keyboard navigation
- ✅ **Performance**: Lightweight SVG format
- ✅ **Customizable**: Easy to modify colors, sizes, and styles

## Icons Used in Website

### Homepage (index.html)
1. **Operational Chaos** - Exclamation Triangle
   - **Icon**: `exclamation-triangle`
   - **Color**: Red (`text-red-600`, `bg-red-100`)
   - **Context**: Business problems section

2. **Stalled Growth** - Trending Down
   - **Icon**: `trending-down`
   - **Color**: Yellow/Orange (`text-yellow-600`, `bg-yellow-100`)
   - **Context**: Business problems section

3. **Marketing Guesswork** - Question Mark Circle
   - **Icon**: `question-mark-circle`
   - **Color**: Blue (`text-blue-600`, `bg-blue-100`)
   - **Context**: Business problems section

### About Page (about.html)
1. **Team Collaboration** - Users
   - **Icon**: `users`
   - **Color**: White on gradient background
   - **Context**: Team/partnership representation

### Contact Page (contact.html)
1. **Phone** - Phone
   - **Icon**: `phone`
   - **Color**: Blue (`text-blue-600`, `bg-blue-100`)
   - **Context**: Contact information

2. **Email** - Mail
   - **Icon**: `mail`
   - **Color**: Blue (`text-blue-600`, `bg-blue-100`)
   - **Context**: Contact information

3. **Location** - Location Marker
   - **Icon**: `location-marker`
   - **Color**: Blue (`text-blue-600`, `bg-blue-100`)
   - **Context**: Contact information

## CSS Classes for Icons

### Basic Icon Sizes
```css
.icon-sm    /* 1rem (16px) */
.icon-md    /* 1.5rem (24px) - default */
.icon-lg    /* 2rem (32px) */
.icon-xl    /* 2.5rem (40px) */
.icon-2xl   /* 3rem (48px) */
```

### Icon Containers
```css
.icon-container-sm    /* 2rem container */
.icon-container-md    /* 3rem container */
.icon-container-lg    /* 4rem container */
.icon-container-xl    /* 5rem container */
```

### Color Variants
```css
.icon-primary   /* Blue theme */
.icon-success   /* Green theme */
.icon-warning   /* Yellow theme */
.icon-danger    /* Red theme */
.icon-info      /* Cyan theme */
```

## Usage Examples

### Basic Icon
```html
<svg class="icon icon-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>
</svg>
```

### Icon with Container
```html
<div class="icon-container icon-container-lg icon-primary">
    <svg class="icon icon-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>
    </svg>
</div>
```

### Custom Styled Icon
```html
<div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
    <svg class="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="..."></path>
    </svg>
</div>
```

## Common Heroicons Reference

### Business & Communication
- `office-building` - Company/business
- `users` - Team/collaboration
- `user-group` - Community
- `chart-bar` - Analytics/growth
- `trending-up` - Growth/success
- `trending-down` - Decline/problems
- `phone` - Contact/call
- `mail` - Email
- `chat` - Communication

### Actions & Status
- `check-circle` - Success/completed
- `x-circle` - Error/failed
- `exclamation-triangle` - Warning/attention
- `information-circle` - Information/help
- `question-mark-circle` - Questions/uncertainty
- `lightning-bolt` - Fast/efficient
- `cog` - Settings/configuration

### Navigation & Interface
- `menu` - Mobile menu
- `chevron-down` - Dropdown/expand
- `chevron-right` - Next/forward
- `arrow-right` - Continue/proceed
- `external-link` - External links
- `download` - Downloads
- `search` - Search functionality

## Accessibility Guidelines

### Alt Text and ARIA
```html
<!-- For decorative icons -->
<svg aria-hidden="true" class="icon">...</svg>

<!-- For functional icons -->
<svg class="icon" role="img" aria-labelledby="icon-title">
    <title id="icon-title">Description of icon function</title>
    ...
</svg>

<!-- With screen reader text -->
<button>
    <svg class="icon" aria-hidden="true">...</svg>
    <span class="sr-only">Button description</span>
</button>
```

### Color Contrast
- Ensure icons meet WCAG AA contrast requirements (4.5:1)
- Don't rely solely on color to convey meaning
- Provide text alternatives for important information

## Adding New Icons

### Steps to Add a New Heroicon
1. Visit [heroicons.com](https://heroicons.com/)
2. Find the desired icon
3. Copy the SVG code (use outline style for consistency)
4. Apply appropriate CSS classes
5. Ensure proper accessibility attributes
6. Test across different browsers and devices

### Icon Naming Convention
- Use descriptive names that match the icon's purpose
- Follow kebab-case for CSS classes
- Use semantic names rather than visual descriptions

## Best Practices

### Do's ✅
- Use consistent icon sizes within sections
- Maintain proper spacing around icons
- Apply hover states for interactive icons
- Use semantic colors (red for errors, green for success)
- Optimize SVG code for performance

### Don'ts ❌
- Mix different icon styles (outline vs solid)
- Use too many different icon sizes on one page
- Rely only on icons without text labels
- Use decorative icons for functional elements
- Forget to test with screen readers

## Performance Considerations

### Optimization Tips
- Remove unnecessary SVG attributes
- Use CSS for styling instead of inline styles
- Consider icon fonts for frequently used icons
- Implement lazy loading for non-critical icons
- Compress SVG files when possible

### Bundle Size
- Current icons add minimal overhead (~2-3KB total)
- Each icon is approximately 100-200 bytes
- No external dependencies required
- Can be cached effectively

---

**Last Updated**: September 2025  
**Icon Library Version**: Heroicons v2  
**Maintained By**: Buisbuild Development Team