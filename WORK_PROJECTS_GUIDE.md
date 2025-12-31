# Work/Projects Section - Complete Guide

## 📋 Pre-Work Checklist (BEFORE YOU START)

### ⚠️ Critical Steps to Take First

1. **Backup Current State**
   - [ ] Copy the entire `<section id="work">` block from `index.html`
   - [ ] Save it in a backup file or comment it out
   - [ ] Note the current number of projects

2. **Prepare Your Content**
   - [ ] Write project title (clear and concise)
   - [ ] Write project description (2-3 sentences)
   - [ ] Write impact statement (1-2 sentences)
   - [ ] Prepare project image (optimized, max 1200px width)
   - [ ] Get project date/period
   - [ ] Get project link (GitHub, live site, etc.)

3. **Image Preparation**
   - [ ] Image dimensions: Recommended 1200px × 600px (2:1 ratio)
   - [ ] File format: JPG or PNG
   - [ ] File size: Under 500KB (optimize before adding)
   - [ ] File name: Use lowercase, hyphens (e.g., `my-project.jpg`)
   - [ ] Save in `assets/` folder

4. **Verify Current Structure**
   - [ ] Check how many projects currently exist
   - [ ] Understand the grid layout (2 columns desktop, 1 column mobile)
   - [ ] Review existing project cards for pattern

---

## 🏗️ Current Structure Overview

### HTML Location
**File**: `index.html`  
**Section**: Lines ~233-280 (Work section)

### Current Structure
```html
<section id="work" class="work" data-section-title="work.">
  <div class="section-content">
    <div class="work-intro">
      Professional work experience and projects showcase.
    </div>
    
    <div id="projects" class="projects-grid">
      <!-- Project cards go here -->
    </div>
  </div>
</section>
```

### CSS Files Involved
1. **Desktop Styles**: `styles/main.css` (lines ~609-680)
2. **Mobile Styles**: `styles/mobile-fixes.css` (lines ~459-520)

---

## ➕ Adding a New Project

### Step 1: Prepare Image
```bash
# Image requirements:
- Location: assets/your-project-name.jpg
- Size: Max 1200px width, 600px height (2:1 ratio)
- Format: JPG or PNG
- Optimize: Compress to <500KB
```

### Step 2: Add Project Card HTML

**Location**: Inside `<div id="projects" class="projects-grid">` in `index.html`

**Template**:
```html
<article class="project-card">
  <img src="assets/your-project-image.jpg" 
       alt="Descriptive alt text for accessibility" 
       class="project-image" 
       loading="lazy">
  <div class="project-info">
    <p class="project-date">Date or Period</p>
    <h3 class="project-title">Project Title Here</h3>
    <p class="project-description">
      First sentence describing what the project is about.
      Second sentence explaining key features or technologies used.
      Third sentence (optional) about the scope or complexity.
    </p>
    <div class="project-impact">
      <strong>Impact:</strong> Describe the impact, results, or learning outcomes from this project.
    </div>
    <a href="https://your-link.com" 
       target="_blank" 
       rel="noopener" 
       class="project-link">View on GitHub →</a>
  </div>
</article>
```

**Example**:
```html
<article class="project-card">
  <img src="assets/leetcode-solver.jpg" 
       alt="LeetCode Problem Solving Dashboard" 
       class="project-image" 
       loading="lazy">
  <div class="project-info">
    <p class="project-date">2024 - Present</p>
    <h3 class="project-title">LeetCode Problem Solving</h3>
    <p class="project-description">
      Actively solving algorithmic and data structure problems on LeetCode.
      Focus on Python-based solutions covering arrays, strings, trees, and dynamic programming.
      Regular practice to improve problem-solving skills and coding efficiency.
    </p>
    <div class="project-impact">
      <strong>Impact:</strong> Enhanced analytical thinking and improved ability to write efficient, scalable code.
    </div>
    <a href="https://leetcode.com/u/tvsdhanan009/" 
       target="_blank" 
       rel="noopener" 
       class="project-link">View LeetCode Profile →</a>
  </div>
</article>
```

### Step 3: Verify HTML Structure

**Checklist**:
- [ ] `<article class="project-card">` wrapper
- [ ] Image has `loading="lazy"` attribute
- [ ] Image has descriptive `alt` text
- [ ] Date in `<p class="project-date">`
- [ ] Title in `<h3 class="project-title">`
- [ ] Description in `<p class="project-description">`
- [ ] Impact in `<div class="project-impact">`
- [ ] Link has `target="_blank" rel="noopener"`

### Step 4: Test Desktop View

**What to Check**:
- [ ] Project appears in 2-column grid
- [ ] Image displays correctly (not stretched or cropped)
- [ ] Text is readable and properly formatted
- [ ] Link works and opens in new tab
- [ ] Spacing looks consistent with other projects
- [ ] Content doesn't overflow container

**How to Test**:
1. Open `index.html` in browser
2. Navigate to Work section
3. View at desktop width (1200px+)
4. Check all projects align properly

### Step 5: Test Mobile View

**What to Check**:
- [ ] Project appears in single column
- [ ] Image is responsive (doesn't overflow)
- [ ] Text is readable (not too small)
- [ ] Touch targets are large enough (44px minimum)
- [ ] Link is easily tappable
- [ ] Spacing is appropriate for mobile

**How to Test**:
1. Open browser DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Select mobile device (iPhone, etc.)
4. Navigate to Work section
5. Scroll through all projects

---

## ✏️ Updating an Existing Project

### Step 1: Locate the Project

**Find in HTML**:
- Search for project title in `index.html`
- Or search for unique text from description
- Note the line numbers

### Step 2: Backup Current Version

```html
<!-- BACKUP: Original version before changes -->
<article class="project-card">
  <!-- Original content here -->
</article>
```

### Step 3: Update Content

**What You Can Update**:
- ✅ Project date
- ✅ Project title
- ✅ Project description
- ✅ Impact statement
- ✅ Project link URL
- ✅ Project image (replace file, keep same name or update src)

**What NOT to Update**:
- ❌ HTML structure (keep classes as-is)
- ❌ CSS classes (don't change class names)
- ❌ Image loading attribute (keep `loading="lazy"`)

### Step 4: Update Image (if needed)

**If replacing image**:
1. Keep same filename: Update image file in `assets/` folder
2. OR change filename: Update `src` attribute in HTML

**Example**:
```html
<!-- Old -->
<img src="assets/old-image.jpg" ...>

<!-- New (option 1: same filename) -->
<!-- Just replace the file, no HTML change needed -->

<!-- New (option 2: new filename) -->
<img src="assets/new-image.jpg" ...>
```

### Step 5: Test Both Views

Follow same testing steps as "Adding a New Project" (Steps 4-5)

---

## 🎨 CSS Customization (Advanced)

### If You Need Custom Styling

**Desktop Styles** (`styles/main.css`):
```css
/* Add after line ~680 */
.project-card.your-custom-class {
    /* Custom styles */
}
```

**Mobile Styles** (`styles/mobile-fixes.css`):
```css
@media (max-width: 768px) {
    .project-card.your-custom-class {
        /* Mobile-specific custom styles */
    }
}
```

**⚠️ Warning**: Only customize if absolutely necessary. Default styles should work for most cases.

---

## 📱 Mobile-Specific Considerations

### Current Mobile Styles

**Location**: `styles/mobile-fixes.css` (lines ~459-520)

**What Happens on Mobile**:
- Grid converts to single column
- Image height set to 200px
- Font sizes adjusted for readability
- Spacing increased for touch targets
- Text wrapping enabled

### Mobile Image Requirements

**Recommended**:
- Width: 800px minimum (will scale down)
- Height: 400px minimum (will be cropped to 200px on mobile)
- Aspect ratio: 2:1 (width:height)

### Mobile Text Guidelines

**Title**:
- Keep under 60 characters
- Use clear, descriptive titles
- Avoid abbreviations

**Description**:
- 2-3 sentences maximum
- Keep each sentence under 20 words
- Use simple language

---

## 🖥️ Desktop-Specific Considerations

### Current Desktop Styles

**Location**: `styles/main.css` (lines ~609-680)

**Grid Layout**:
- 2 columns on desktop
- Equal width columns
- Gap between columns: 2rem (32px)

### Desktop Image Requirements

**Recommended**:
- Width: 1200px (max)
- Height: 600px (2:1 ratio)
- File size: Under 500KB

### Desktop Text Guidelines

**Title**:
- Can be longer (up to 80 characters)
- More descriptive allowed

**Description**:
- 3-4 sentences ideal
- Can include more technical details
- Longer impact statements acceptable

---

## ✅ Complete Testing Checklist

### Before Publishing

**HTML Validation**:
- [ ] All tags properly closed
- [ ] No broken HTML structure
- [ ] All attributes have values
- [ ] No typos in class names

**Content Validation**:
- [ ] Project title is clear and descriptive
- [ ] Description makes sense
- [ ] Impact statement is compelling
- [ ] Date/period is accurate
- [ ] Link URL is correct and working

**Image Validation**:
- [ ] Image file exists in `assets/` folder
- [ ] Image displays correctly
- [ ] Alt text is descriptive
- [ ] Image is optimized (not too large)
- [ ] Image doesn't break layout

**Desktop Testing**:
- [ ] Project appears in grid correctly
- [ ] Image displays properly
- [ ] Text is readable
- [ ] Link works
- [ ] Spacing is consistent
- [ ] No overflow issues

**Mobile Testing**:
- [ ] Project appears in single column
- [ ] Image is responsive
- [ ] Text is readable
- [ ] Link is tappable
- [ ] No horizontal scroll
- [ ] Touch targets are adequate

**Cross-Browser Testing**:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🚨 Common Issues & Solutions

### Issue 1: Image Not Displaying

**Symptoms**: Broken image icon or missing image

**Solutions**:
1. Check file path: `assets/filename.jpg` (not `./assets/` or `/assets/`)
2. Check filename: Case-sensitive, no spaces
3. Check file exists: Verify in `assets/` folder
4. Check file extension: `.jpg` or `.png` (not `.jpeg`)

### Issue 2: Layout Broken on Mobile

**Symptoms**: Content overflow, horizontal scroll

**Solutions**:
1. Check image size: Should be max 1200px width
2. Check text length: Reduce if too long
3. Verify mobile CSS is loading: Check `mobile-fixes.css` is linked
4. Clear browser cache: Hard refresh (Ctrl+F5)

### Issue 3: Project Not Aligning with Others

**Symptoms**: Project card misaligned or different size

**Solutions**:
1. Check HTML structure: Must match other project cards exactly
2. Check CSS classes: All class names must be identical
3. Check image aspect ratio: Should be 2:1 (width:height)
4. Verify grid structure: Should be inside `.projects-grid`

### Issue 4: Text Overflowing Container

**Symptoms**: Text going outside card boundaries

**Solutions**:
1. Reduce description length
2. Check for long words: Add `word-break: break-word` if needed
3. Verify container width: Should be within grid constraints
4. Check mobile styles: May need text wrapping adjustments

### Issue 5: Link Not Working

**Symptoms**: Link doesn't open or opens incorrectly

**Solutions**:
1. Check URL: Must include `https://` or `http://`
2. Check `target="_blank"`: Should be present
3. Check `rel="noopener"`: Should be present for security
4. Test link in browser: Copy URL and test directly

---

## 📝 Best Practices

### Content Writing

1. **Be Specific**: Use concrete details, not vague statements
2. **Show Impact**: Quantify results when possible
3. **Use Action Verbs**: "Built", "Developed", "Implemented"
4. **Keep It Concise**: 2-3 sentences for description
5. **Be Honest**: Only include what you actually did

### Image Selection

1. **Relevant**: Image should relate to project
2. **High Quality**: Clear, not pixelated
3. **Professional**: Appropriate for portfolio
4. **Optimized**: Compressed but still clear
5. **Consistent**: Similar style to other project images

### Link Management

1. **Always Include**: GitHub, live demo, or relevant link
2. **Test Links**: Verify they work before publishing
3. **Update Regularly**: Keep links current
4. **Use Descriptive Text**: "View on GitHub" not just "Link"

---

## 🔄 Maintenance Schedule

### Regular Updates

**Monthly**:
- [ ] Review all project links (ensure they still work)
- [ ] Update project dates if ongoing
- [ ] Check for new projects to add

**Quarterly**:
- [ ] Review and update descriptions
- [ ] Add new achievements or impacts
- [ ] Update images if project evolved
- [ ] Test all projects on mobile and desktop

**Before Job Applications**:
- [ ] Ensure all projects are current
- [ ] Verify all links work
- [ ] Update impact statements with latest results
- [ ] Add any new relevant projects

---

## 📞 Quick Reference

### File Locations
- **HTML**: `index.html` (lines ~233-280)
- **Desktop CSS**: `styles/main.css` (lines ~609-680)
- **Mobile CSS**: `styles/mobile-fixes.css` (lines ~459-520)
- **Images**: `assets/` folder

### Key Classes
- `.projects-grid` - Grid container
- `.project-card` - Individual project card
- `.project-image` - Project image
- `.project-info` - Project content wrapper
- `.project-date` - Date/period
- `.project-title` - Project title
- `.project-description` - Description text
- `.project-impact` - Impact statement
- `.project-link` - External link

### Grid Behavior
- **Desktop**: 2 columns, 1180px max-width
- **Mobile**: 1 column, full width with padding

---

## 🎯 Quick Start Template

Copy this template when adding a new project:

```html
<article class="project-card">
  <img src="assets/PROJECT-NAME.jpg" 
       alt="DESCRIPTIVE ALT TEXT" 
       class="project-image" 
       loading="lazy">
  <div class="project-info">
    <p class="project-date">DATE OR PERIOD</p>
    <h3 class="project-title">PROJECT TITLE</h3>
    <p class="project-description">
      First sentence about the project.
      Second sentence with key details.
      Third sentence (optional) about scope.
    </p>
    <div class="project-impact">
      <strong>Impact:</strong> Impact description here.
    </div>
    <a href="https://LINK-URL.com" 
       target="_blank" 
       rel="noopener" 
       class="project-link">View on Platform →</a>
  </div>
</article>
```

---

**Remember**: Always test on both desktop and mobile before considering the work complete!

**Last Updated**: 2024

