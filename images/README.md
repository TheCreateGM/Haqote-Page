# HaqotePad Landing Page - Images Directory

This directory contains all visual assets for the HaqotePad landing page.

## Directory Structure

```
images/
├── icons/           # Logo, favicon, and icon assets
│   ├── favicon.svg  # SVG favicon (current)
│   └── favicon.png  # PNG favicon (recommended to add)
│
└── screenshots/     # Application screenshots and mockups
    ├── main-interface.png      # Main app interface
    ├── ai-assistant.png        # AI chat interface
    ├── categories.png          # Category organization view
    └── notes-grid.png          # Notes card grid view
```

## Adding Images

### Favicon Files
For best browser compatibility, add the following favicon formats:
- `favicon.svg` - Modern browsers (already included)
- `favicon.png` - 32x32 PNG fallback
- `favicon.ico` - Legacy browser support
- `apple-touch-icon.png` - 180x180 for iOS devices

### Screenshots
When adding application screenshots:

1. **Optimize Images**: Compress images to reduce file size
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: Keep images under 500KB

2. **Recommended Dimensions**:
   - Main interface: 1920x1080 or 1600x900
   - Feature screenshots: 1200x800
   - Mobile screenshots: 375x812 or 414x896

3. **File Formats**:
   - Use PNG for screenshots with text (better quality)
   - Use WebP for better compression (with PNG fallback)
   - Use SVG for logos and icons

4. **Naming Convention**:
   - Use lowercase with hyphens: `feature-name.png`
   - Be descriptive: `ai-assistant-chat-interface.png`

## Image Guidelines

### Design Consistency
- Maintain the HaqotePad color scheme (blue: #2563EB)
- Use consistent borders/shadows matching the landing page design
- Ensure screenshots are up-to-date with current UI

### Accessibility
- Provide descriptive alt text in HTML
- Ensure sufficient contrast for text in images
- Don't rely solely on images to convey information

### Performance
- Implement lazy loading for below-the-fold images
- Serve responsive images using srcset
- Consider using a CDN for faster delivery

## Quick Setup

To quickly add placeholder images:

```bash
# Create placeholder screenshots (if you have ImageMagick)
convert -size 1920x1080 xc:#EEF2FF images/screenshots/main-interface.png
convert -size 1200x800 xc:#DBEAFE images/screenshots/ai-assistant.png
convert -size 1200x800 xc:#D1FAE5 images/screenshots/categories.png
```

Or download screenshots from the actual HaqotePad application and place them in this directory.

## Current Status

✅ favicon.svg - Created
⏳ favicon.png - To be added
⏳ Screenshots - To be added (currently using CSS placeholders)

## Notes

The landing page is designed to work with CSS placeholders until actual screenshots are added. Once you add real images:

1. Update the HTML img src attributes in `index.html`
2. Remove or hide CSS placeholder elements
3. Test image loading and responsiveness
4. Verify alt text is descriptive and accurate
