# Quick Reference Guide

## 🎯 Most Common Tasks

### Add a New Project
```html
<!-- In Work Section (#work) -->
<article class="project-card">
  <img src="assets/image.jpg" alt="Project" class="project-image" loading="lazy">
  <div class="project-info">
    <p class="project-date">2024</p>
    <h3 class="project-title">Project Name</h3>
    <p class="project-description">Description here.</p>
    <div class="project-impact"><strong>Impact:</strong> Impact text.</div>
    <a href="https://link.com" target="_blank" rel="noopener" class="project-link">View →</a>
  </div>
</article>
```

### Add a New Skill
```html
<!-- In Skills Section (#skills) -->
<div class="skill-item">
  <h3 class="skill-name">Skill Name</h3>
  <p class="skill-context">Context or experience</p>
</div>
```

### Add a New Service/Help Item
```html
<!-- In Services Section (#help) -->
<div class="help-item">
  <h3 class="help-title">Service Title</h3>
  <p class="help-description">Service description here.</p>
</div>
```

### Add a New Achievement
```html
<!-- In Achievements Section (#achievements) -->
<div class="achievement-item">
  <div class="achievement-number">100+</div>
  <div class="achievement-label">Label</div>
  <div class="achievement-detail">Detail</div>
</div>
```

### Add a New Timeline Entry
```html
<!-- In About Section (#about), after "Work Experience" heading -->
<div class="timeline-item">
  <span class="timeline-bullet">●</span>
  <div class="timeline-content">
    <strong class="timeline-year">Date Range</strong>
    <p><strong>Title</strong> at Company</p>
    <p>Description here.</p>
  </div>
</div>
```

---

## 📐 Standard Widths

| Element | Width |
|---------|-------|
| Section Container | 1440px |
| Content Grids | 1180px |
| Intro Text | 1180px |
| Text Content | 1180px |

---

## 🎨 CSS Variables (Use These!)

```css
/* Colors */
var(--color-bg-primary)      /* Background */
var(--color-text-primary)    /* Text */
var(--color-accent)          /* Yellow accent */
var(--color-border)          /* Borders */

/* Spacing */
var(--space-sm)              /* 1rem */
var(--space-md)              /* 1.5rem */
var(--space-lg)              /* 2rem */
var(--space-xl)              /* 3rem */
var(--mobile-gutter)         /* 1.5rem (mobile only) */

/* Typography */
var(--font-size-sm)          /* 18px */
var(--font-size-base)        /* 24px */
var(--font-size-md)          /* 28px */
```

---

## 📱 Mobile Breakpoint

```css
@media (max-width: 768px) {
    /* Mobile styles here */
    /* Use !important if needed to override desktop */
}
```

---

## ✅ Checklist for New Content

- [ ] HTML structure added
- [ ] Desktop styles in `main.css`
- [ ] Mobile styles in `mobile-fixes.css`
- [ ] Images have `loading="lazy"` and alt text
- [ ] Tested on desktop (1180px+)
- [ ] Tested on mobile (768px-)
- [ ] Navigation updated (if needed)

---

## 🔗 File Locations

- **HTML**: `index.html`
- **Desktop CSS**: `styles/main.css`
- **Mobile CSS**: `styles/mobile-fixes.css`
- **Design Tokens**: `styles/tokens.css`
- **JavaScript**: `scripts/main.js`

---

## 📍 Section IDs (for navigation)

- `#home` - Hero section
- `#help` - Services section
- `#achievements` - Impact section
- `#work` - Work/Projects section
- `#skills` - Skills section
- `#about` - About section
- `#personal-work` - Personal Work section
- `#activity` - Updates section
- `#contact` - Contact section

---

## 🚨 Common Mistakes to Avoid

1. ❌ Don't hardcode widths - use CSS variables
2. ❌ Don't forget mobile styles
3. ❌ Don't skip `loading="lazy"` on images
4. ❌ Don't forget `target="_blank" rel="noopener"` on external links
5. ❌ Don't use inline styles
6. ❌ Don't forget alt text on images

---

For detailed documentation, see `LAYOUT_DOCUMENTATION.md`

