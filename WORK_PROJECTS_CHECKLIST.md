# Work/Projects Section - Quick Checklist

## 🚀 Before Starting ANY Changes

### Pre-Work (5 minutes)
- [ ] **Backup**: Copy entire `<section id="work">` block
- [ ] **Prepare Content**: Title, description, impact, date ready
- [ ] **Prepare Image**: Optimized, saved in `assets/` folder
- [ ] **Get Link**: Project URL ready and tested

---

## ➕ Adding New Project

### Step 1: Add HTML (5 minutes)
- [ ] Open `index.html`
- [ ] Find `<div id="projects" class="projects-grid">` (line ~239)
- [ ] Add new `<article class="project-card">` block
- [ ] Use template from `WORK_PROJECTS_GUIDE.md`
- [ ] Fill in all fields:
  - [ ] Image src (check path: `assets/filename.jpg`)
  - [ ] Alt text (descriptive)
  - [ ] Date
  - [ ] Title
  - [ ] Description (2-3 sentences)
  - [ ] Impact statement
  - [ ] Link URL (with `target="_blank" rel="noopener"`)

### Step 2: Verify HTML (2 minutes)
- [ ] All tags closed properly
- [ ] Image has `loading="lazy"`
- [ ] Link has `target="_blank" rel="noopener"`
- [ ] All class names match exactly

### Step 3: Test Desktop (3 minutes)
- [ ] Open in browser
- [ ] Navigate to Work section
- [ ] Check: Project appears in 2-column grid
- [ ] Check: Image displays correctly
- [ ] Check: Text readable
- [ ] Check: Link works
- [ ] Check: Spacing consistent

### Step 4: Test Mobile (3 minutes)
- [ ] Open DevTools (F12)
- [ ] Toggle device toolbar (Ctrl+Shift+M)
- [ ] Select mobile device
- [ ] Navigate to Work section
- [ ] Check: Project in single column
- [ ] Check: Image responsive
- [ ] Check: Text readable
- [ ] Check: Link tappable
- [ ] Check: No horizontal scroll

**Total Time: ~15 minutes**

---

## ✏️ Updating Existing Project

### Step 1: Locate Project (1 minute)
- [ ] Search for project title in `index.html`
- [ ] Note line numbers

### Step 2: Backup (1 minute)
- [ ] Copy current project card HTML
- [ ] Save as comment or backup file

### Step 3: Update Content (5 minutes)
- [ ] Update date (if needed)
- [ ] Update title (if needed)
- [ ] Update description (if needed)
- [ ] Update impact (if needed)
- [ ] Update link (if needed)
- [ ] Update image (if needed - replace file or update src)

### Step 4: Test Both Views (6 minutes)
- [ ] Test desktop (follow Step 3 above)
- [ ] Test mobile (follow Step 4 above)

**Total Time: ~13 minutes**

---

## 🖼️ Image Requirements

### Before Adding Image
- [ ] File saved in `assets/` folder
- [ ] Filename: lowercase, hyphens (e.g., `my-project.jpg`)
- [ ] Dimensions: 1200px × 600px (2:1 ratio)
- [ ] File size: Under 500KB
- [ ] Format: JPG or PNG
- [ ] Quality: Clear, not pixelated

---

## ✅ Final Validation

### Before Publishing
- [ ] All HTML tags closed
- [ ] No typos in class names
- [ ] Image file exists and displays
- [ ] Alt text is descriptive
- [ ] Link URL is correct
- [ ] Link opens in new tab
- [ ] Desktop layout looks good
- [ ] Mobile layout looks good
- [ ] No horizontal scroll on mobile
- [ ] Text is readable on both views

---

## 🚨 Common Mistakes to Avoid

- ❌ **Don't forget** `loading="lazy"` on images
- ❌ **Don't forget** `target="_blank" rel="noopener"` on links
- ❌ **Don't forget** alt text on images
- ❌ **Don't use** spaces in image filenames
- ❌ **Don't change** CSS class names
- ❌ **Don't skip** mobile testing
- ❌ **Don't forget** to backup before changes

---

## 📍 File Locations

- **HTML**: `index.html` (line ~239 for projects grid)
- **Desktop CSS**: `styles/main.css` (line ~609)
- **Mobile CSS**: `styles/mobile-fixes.css` (line ~459)
- **Images**: `assets/` folder

---

## 🆘 Quick Troubleshooting

| Problem | Quick Fix |
|---------|-----------|
| Image not showing | Check path: `assets/filename.jpg` (not `./assets/`) |
| Layout broken on mobile | Check image size (max 1200px width) |
| Text overflowing | Reduce description length |
| Link not working | Check URL has `https://` |
| Project misaligned | Verify HTML structure matches other projects |

---

**For detailed instructions, see `WORK_PROJECTS_GUIDE.md`**

