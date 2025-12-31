# Layout Documentation - Personal Portfolio Website

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [File Structure](#file-structure)
3. [Desktop Layout System](#desktop-layout-system)
4. [Mobile Layout System](#mobile-layout-system)
5. [How to Add New Content](#how-to-add-new-content)
6. [CSS Architecture](#css-architecture)
7. [Best Practices](#best-practices)

---

## 🏗️ Architecture Overview

### Design Philosophy
- **Desktop-first approach** with mobile-specific overrides
- **Consistent max-width**: 1180px for content, 1440px for containers
- **Centered layouts** with `margin: 0 auto`
- **Mobile breakpoint**: 768px (max-width)

### Key Principles
1. **Desktop styles** in `styles/main.css` (base styles)
2. **Mobile overrides** in `styles/mobile-fixes.css` (using `@media (max-width: 768px)`)
3. **Design tokens** in `styles/tokens.css` (colors, spacing, typography)
4. **No desktop impact** from mobile changes (mobile uses `!important` when needed)

---

## 📁 File Structure

```
personal website/
├── index.html                 # Main HTML structure
├── styles/
│   ├── tokens.css            # Design tokens (colors, spacing, fonts)
│   ├── main.css              # Desktop styles (base styles)
│   └── mobile-fixes.css      # Mobile-specific overrides
├── scripts/
│   └── main.js               # JavaScript functionality
└── assets/                    # Images and media files
```

---

## 🖥️ Desktop Layout System

### Section Structure

Every section follows this pattern:

```html
<section id="section-name" class="section-class" data-section-title="title.">
  <div class="section-content">
    <!-- Intro text (optional) -->
    <div class="work-intro">
      Section introduction text here.
    </div>
    
    <!-- Main content -->
    <div class="content-container">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

### Standard Section Styling

**Base Section Styles** (`styles/main.css`):
```css
section {
    max-width: var(--max-width-content);  /* 1440px */
    margin: 0 auto;
    padding: 160px var(--space-lg) 120px;
    position: relative;
}

.section-content {
    position: relative;
    z-index: 1;
    max-width: var(--max-width-content);
    margin: 0 auto;
    width: 100%;
}
```

**Background Decorative Text**:
- Positioned absolutely, centered
- Uses `data-section-title` attribute
- Styled with `section::before` pseudo-element
- Opacity: 0.25, z-index: 0 (behind content)

### Content Width Standards

| Element Type | Max Width | Usage |
|-------------|-----------|-------|
| Section Container | 1440px | Outer section wrapper |
| Section Content | 1440px | Content wrapper |
| Grids (help, achievements, projects) | 1180px | Main content grids |
| Intro Text (.work-intro) | 1180px | Section introductions |
| Text Content (about, timeline) | 1180px | Long-form text |
| Contact Content | 1180px | Contact section |

### Grid Systems

**3-Column Grid** (Services/Help):
```css
.help-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
    max-width: 1180px;
    margin: 0 auto;
}
```

**4-Column Grid** (Achievements):
```css
.achievements-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-lg);
    max-width: 1180px;
    margin: 0 auto;
}
```

**2-Column Grid** (Projects):
```css
.projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
    max-width: 1180px;
    margin: 0 auto;
}
```

---

## 📱 Mobile Layout System

### Mobile Breakpoint
```css
@media (max-width: 768px) {
    /* Mobile-specific styles */
}
```

### Key Mobile Overrides

**Section Padding**:
```css
section {
    padding-left: var(--mobile-gutter) !important;  /* 1.5rem */
    padding-right: var(--mobile-gutter) !important;
    max-width: none !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
}
```

**Grids Convert to Single Column**:
```css
.help-grid,
.achievements-grid,
.projects-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
}
```

**Intro Text**:
- Remains centered
- Font size adjusted for mobile
- Maintains max-width: 1180px but with mobile padding

### Mobile-Specific Features

1. **Hamburger Menu**: Slides from right, fixed position
2. **Profile Image**: Positioned between tagline and CTA in hero
3. **Progressive Disclosure**: "See more" button for About section
4. **Floating Contact Button**: Bottom-right FAB for quick contact
5. **Touch Targets**: Minimum 44px height/width

---

## ➕ How to Add New Content

### Adding a New Section

#### Step 1: Add HTML Structure

```html
<section id="new-section" class="new-section" data-section-title="newsection.">
  <div class="section-content">
    <div class="work-intro">
      Your section introduction text here.
    </div>
    
    <div class="new-section-content">
      <!-- Your content here -->
    </div>
  </div>
</section>
```

#### Step 2: Add Desktop Styles (`styles/main.css`)

```css
/* ============================================
   NEW SECTION
   ============================================ */

.new-section {
    padding-top: 160px;
}

.new-section-content {
    max-width: 1180px;
    margin: 0 auto;
    /* Your styles here */
}
```

#### Step 3: Add Mobile Styles (`styles/mobile-fixes.css`)

```css
@media (max-width: 768px) {
    .new-section {
        padding-top: 3rem !important;
        padding-bottom: 2rem !important;
    }
    
    .new-section .work-intro {
        font-size: 16px !important;
        margin-bottom: 1.5rem !important;
        line-height: 1.6 !important;
    }
    
    /* Mobile-specific overrides */
}
```

#### Step 4: Add Navigation Link (if needed)

In `index.html` header navigation:
```html
<nav class="nav-menu">
  <!-- ... existing links ... -->
  <a href="#new-section" class="nav-link">New Section</a>
</nav>
```

### Adding a New Project Card

#### In Work Section:

```html
<article class="project-card">
  <img src="assets/project-image.jpg" alt="Project Name" class="project-image" loading="lazy">
  <div class="project-info">
    <p class="project-date">Date</p>
    <h3 class="project-title">Project Title</h3>
    <p class="project-description">
      Project description here.
    </p>
    <div class="project-impact">
      <strong>Impact:</strong> Impact description here.
    </div>
    <a href="https://link.com" target="_blank" rel="noopener" class="project-link">
      View Project →
    </a>
  </div>
</article>
```

**Note**: Project cards automatically use 2-column grid on desktop, 1-column on mobile.

### Adding a New Skill Item

#### In Skills Section:

```html
<div class="skill-item">
  <h3 class="skill-name">Skill Name</h3>
  <p class="skill-context">Context or experience where skill was used</p>
</div>
```

### Adding a New Achievement

#### In Achievements Section:

```html
<div class="achievement-item">
  <div class="achievement-number">Number/Text</div>
  <div class="achievement-label">Label</div>
  <div class="achievement-detail">Detail description</div>
</div>
```

### Adding a New Timeline Item

#### In About Section (Work Experience):

```html
<div class="timeline-item">
  <span class="timeline-bullet">●</span>
  <div class="timeline-content">
    <strong class="timeline-year">Date Range</strong>
    <p><strong>Job Title</strong> at Company</p>
    <p>Job description and responsibilities.</p>
  </div>
</div>
```

---

## 🎨 CSS Architecture

### Design Tokens (`styles/tokens.css`)

**Colors**:
- `--color-bg-primary`: #FFF9E5 (Background)
- `--color-bg-secondary`: #FFF5D6 (Secondary background)
- `--color-text-primary`: #03045E (Dark blue text)
- `--color-accent`: #F5EE84 (Yellow accent)
- `--color-border`: #474306 (Dark brown border)

**Spacing**:
- `--space-xs`: 0.5rem
- `--space-sm`: 1rem
- `--space-md`: 1.5rem
- `--space-lg`: 2rem
- `--space-xl`: 3rem
- `--space-2xl`: 4rem
- `--mobile-gutter`: 1.5rem (mobile only)

**Typography**:
- `--font-size-sm`: 18px
- `--font-size-base`: 24px
- `--font-size-md`: 28px
- `--font-size-lg`: 48px
- `--font-size-xl`: 64px

**Layout**:
- `--max-width-content`: 1440px
- `--max-width-text`: 900px

### CSS File Organization

**`styles/main.css`** Structure:
1. Base styles
2. Header & Navigation
3. Hero Section
4. Profile Photo
5. Sections (generic)
6. About Section
7. Work/Projects Section
8. Skills Section
9. Services/Help Section
10. Achievements Section
11. Contact Section
12. Footer
13. Utility classes

**`styles/mobile-fixes.css`** Structure:
1. Viewport fixes
2. Hero mobile styles
3. Profile photo mobile
4. About section mobile
5. Navigation mobile menu
6. Section-specific mobile overrides
7. Touch targets & accessibility
8. Performance optimizations

### CSS Naming Conventions

- **Sections**: `.section-name` (e.g., `.help`, `.work`)
- **Content wrappers**: `.section-content`
- **Grids**: `.-grid` (e.g., `.help-grid`, `.projects-grid`)
- **Items**: `.-item` (e.g., `.help-item`, `.skill-item`)
- **Intro text**: `.work-intro` (used across all sections)
- **Mobile overrides**: Use `!important` when necessary to override desktop

---

## ✅ Best Practices

### When Adding New Content

1. **Always use semantic HTML**: `<section>`, `<article>`, `<header>`, etc.
2. **Follow the max-width pattern**: 1180px for content, 1440px for containers
3. **Center everything**: Use `margin: 0 auto` for centering
4. **Add mobile styles**: Always add mobile-specific styles in `mobile-fixes.css`
5. **Use design tokens**: Reference CSS variables instead of hardcoded values
6. **Test on mobile**: Verify mobile layout after adding content
7. **Add loading="lazy"**: For all images
8. **Include alt text**: For accessibility

### Mobile Considerations

1. **Touch targets**: Minimum 44px × 44px
2. **Text size**: Minimum 16px on mobile
3. **Spacing**: Use `var(--mobile-gutter)` for horizontal padding
4. **Grids**: Convert to single column on mobile
5. **Images**: Ensure they're responsive and don't overflow
6. **Text wrapping**: Use `word-wrap: break-word` for long text

### Performance

1. **Lazy load images**: Always use `loading="lazy"`
2. **Optimize images**: Compress before adding
3. **Minimize CSS**: Don't duplicate styles
4. **Use CSS variables**: For consistent theming
5. **Mobile-first thinking**: Consider mobile impact when adding features

### Accessibility

1. **ARIA labels**: Add to interactive elements
2. **Alt text**: Descriptive alt text for images
3. **Focus states**: Ensure keyboard navigation works
4. **Color contrast**: Maintain WCAG AA standards
5. **Reduced motion**: Respect `prefers-reduced-motion`

---

## 🔍 Common Patterns

### Centered Content Pattern

```css
.content-container {
    max-width: 1180px;
    margin: 0 auto;
    width: 100%;
}
```

### Grid Pattern

```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(X, 1fr);  /* X = number of columns */
    gap: var(--space-lg);
    max-width: 1180px;
    margin: 0 auto;
}
```

### Mobile Grid Override

```css
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr !important;
        gap: 2rem !important;
    }
}
```

### Intro Text Pattern

```css
.work-intro {
    font-size: var(--font-size-sm);
    color: var(--color-text-primary);
    margin-bottom: var(--space-xl);
    max-width: 1180px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    text-align: center;
}
```

---

## 📝 Quick Reference

### Section Order in HTML

1. Hero (`#home`)
2. Services/Help (`#help`)
3. Impact/Achievements (`#achievements`)
4. Work (`#work`)
5. Skills (`#skills`)
6. About (`#about`)
7. Personal Work (`#personal-work`)
8. Updates/Activity (`#activity`)
9. Contact (`#contact`)

### Navigation Links

Update in header `<nav class="nav-menu">`:
- Home → `#home`
- Services → `#help`
- Impact → `#achievements`
- Work → `#work`
- About → `#about`
- Contact → `#contact`

### Common CSS Classes

- `.section-content` - Content wrapper for all sections
- `.work-intro` - Section introduction text
- `.project-card` - Project card container
- `.skill-item` - Skill item container
- `.achievement-item` - Achievement item container
- `.timeline-item` - Timeline entry container
- `.help-item` - Service/help item container

---

## 🚀 Quick Start Checklist

When adding new content:

- [ ] Add HTML structure following section pattern
- [ ] Add desktop styles in `main.css`
- [ ] Add mobile styles in `mobile-fixes.css`
- [ ] Update navigation if needed
- [ ] Test on desktop (1180px+ width)
- [ ] Test on mobile (768px and below)
- [ ] Verify images have `loading="lazy"` and alt text
- [ ] Check accessibility (keyboard navigation, focus states)
- [ ] Verify text is readable and properly sized
- [ ] Ensure consistent spacing and alignment

---

## 📞 Support

For questions or issues:
1. Check this documentation first
2. Review existing sections for patterns
3. Test in both desktop and mobile views
4. Verify CSS specificity (mobile uses `!important` when needed)

---

**Last Updated**: 2024
**Version**: 1.0

