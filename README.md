# 🎌 Manga Store - Web Application

A modern, responsive web application for browsing and discovering manga titles. Built with HTML, CSS, and JavaScript, the Manga Store provides an interactive platform for manga enthusiasts to explore popular titles, latest releases, and trending content.

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Features in Detail](#features-in-detail)
- [Demo](#demo)
- [File Descriptions](#file-descriptions)
- [JavaScript Functionality](#javascript-functionality)
- [Responsive Design](#responsive-design)
- [Future Enhancements](#future-enhancements)
- [License](#license)
- [Author](#author)

---

## ✨ Features

- **Responsive Navigation Bar** - Clean, modern navigation with logo, category links, and action buttons
- **Hero Carousel** - Interactive image carousel with auto-play and manual navigation
- **Popular Today Section** - Animated infinite scroll carousel for trending manga
- **Latest Releases** - Grid layout showing newest manga with chapter information
- **Most Popular Section** - Top 9 ranked manga with ratings and genres
- **Mobile-Responsive Design** - Fully responsive on all device sizes (mobile, tablet, desktop)
- **Dark Theme** - Modern dark interface with red accent colors
- **Smooth Animations** - CSS transitions and JavaScript-powered interactions
- **Discord, Search, Notifications, Profile** - Action buttons for community engagement

---

## 📁 Project Structure

```
manga-store/
├── index.html          # Main HTML page
├── index.css           # Main styling and responsive design
├── script.js           # Carousel and slider functionality
├── ham.js              # Hamburger menu functionality
├── main.js             # Animation utilities (utility file)
├── index.js            # Alternative carousel implementation
├── Gotham/             # Custom font files directory
│   └── Gotham-BoldItalic.otf
├── image/              # Manga cover images
│   ├── Absolute Sword Sense.webp
│   ├── Demonic Master of Mount Kunlun.webp
│   ├── Doctor's Rebirth.webp
│   ├── Father, Unrivaled.webp
│   ├── Fist Demon of Mount Hua.webp
│   ├── Heavenly Demon Reborn!.webp
│   ├── Heavenly Inquisition Sword.webp
│   ├── Murim Login.webp
│   ├── Murim RPG Simulation.webp
│   ├── Nano Machine.webp
│   ├── Reborn as a Scholar.webp
│   ├── Return of the Mad Demon.webp
│   ├── The Legend of the Northern Blade.webp
│   ├── The Undefeatable Swordsman.webp
│   └── Volcanic Age.webp
├── logo/               # Brand logo and images
│   └── Dragon.jpeg
└── README.md           # Project documentation
```

---

## 🚀 Installation

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required - vanilla HTML, CSS, and JavaScript

### Setup Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd manga-store
   ```

2. **Open the Application**
   - Double-click `index.html` to open in your default browser, OR
   - Use a local server for better performance:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js http-server
     npx http-server
     ```

3. **Access the Application**
   - Direct: Open `index.html` in your browser
   - With Server: Navigate to `http://localhost:8000` (or appropriate port)

---

## 📖 Usage

### Navigation
- **Home** - Returns to the main page
- **Manga** - Browse all manga titles (link to manga.html)
- **Contact** - Contact page (link to contact.html)
- **About** - About the store (link to about.html)
- **Help** - Help and FAQ page (link to help.html)

### Interactive Elements

#### Hero Carousel
- Auto-plays every 2.5 seconds
- Click **Previous (◀)** and **Next (▶)** buttons to navigate
- Supports mouse drag to scroll
- Infinite loop scrolling

#### Popular Today Section
- Animated carousel that continuously scrolls
- Hover to pause animation
- Click navigation buttons to browse
- Shows 5 featured manga titles

#### Latest Releases
- Browse newest manga releases
- Filter by **Hot** (popular) and **New** (recently added)
- View chapter information and upload times
- Click "See All" to view more

#### Most Popular
- Top 9 ranked manga on the platform
- Displays rank, title, and genre tags
- Hover effects for better interactivity

#### Action Buttons (Top Right)
- **Discord** - Join the community server
- **Search** - Search for manga titles
- **Notifications** - View updates and alerts
- **Profile** - User account management

---

## 🛠 Technologies Used

### Frontend Stack
| Technology | Purpose |
|-----------|---------|
| **HTML5** | Semantic markup and structure |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (Vanilla)** | Interactive features and DOM manipulation |

### Fonts
- **Gotham Font** - Custom elegant typography (Bold Italic variant)

### Image Format
- **WebP** - Modern, optimized image format for manga covers

### Design Patterns
- **Mobile-First Responsive Design** - Works seamlessly on all screen sizes
- **CSS Grid & Flexbox** - Modern layout techniques
- **CSS Variables** - Dynamic theming and color management

---

## 🎨 Features in Detail

### 1. **Navigation System**
- Fixed navigation bar with logo and site branding
- Responsive hamburger menu for mobile devices (below 768px)
- Active link highlighting (HOME with red underline)
- Smooth hover animations on navigation links

### 2. **Carousel Components**

#### Hero Carousel (`script.js`)
- **Implementation**: Infinite scroll with drag support
- **Features**: 
  - Auto-play with 2.5s interval
  - Mouse drag to scroll functionality
  - Infinite loop effect
  - Smooth transitions (0.5s ease-in-out)

#### Popular Today Carousel
- **Implementation**: Continuous animated scroll with duplicated content
- **Features**:
  - Animation pause on hover
  - Infinite looping carousel
  - Navigation buttons for manual control

#### Most Popular Grid
- **Implementation**: Responsive grid layout
- **Features**:
  - 9 items displayed in grid format
  - Hover scale effect (1.04x zoom)
  - Rank badges
  - Genre tags

### 3. **Responsive Breakpoints**

| Breakpoint | Device | Changes |
|-----------|--------|---------|
| `>1280px` | Desktop | Full navigation, all elements visible |
| `1024px - 1280px` | Large Tablet | Adjusted spacing and font sizes |
| `769px - 1024px` | Tablet | Modified grid layouts, stacked sections |
| `481px - 768px` | Mobile Landscape | Hamburger menu active, reduced padding |
| `≤480px` | Mobile Portrait | Full mobile optimization, single-column layout |
| `≤360px` | Small Mobile | Further optimization for extra-small screens |

### 4. **Color Scheme**

```css
Primary Red: #dc2626      /* Accent color for highlights */
Secondary: #111111        /* Dark backgrounds */
Text: #ffffff            /* Primary text color */
Background: #000000      /* Main dark background */
```

### 5. **Animation Effects**

- **Hover Underlines** - Navigation links animate on hover
- **Scale Transforms** - Manga items scale up on hover (1.04x)
- **Smooth Transitions** - All interactions use 0.3s-0.5s transitions
- **Carousel Scroll** - Infinite loop with smooth scrolling

---

## 🖼 Demo

### Website Demo Images

> **Note**: Replace these placeholder sections with actual screenshots of your website:

```
┌─────────────────────────────────────────────────┐
│           HERO CAROUSEL SECTION                 │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  │   [Manga Cover] [Manga Cover] [etc...]   │  │
│  │   ◀            Navigation Buttons         ▶  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

### Homepage Layout Preview

```
HEADER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐉 Manga Store    [Home] [Manga] [Contact]  🔍🔔👤
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

HERO CAROUSEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    [Featured Manga Carousel with navigation]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

POPULAR TODAY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Popular Today
    [Manga1] [Manga2] [Manga3] [Manga4] [Manga5]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

LATEST RELEASES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Latest Releases    [Hot] [New]    See All →
    [Item1]  [Item2]  [Item3]
    [Item4]  [Item5]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MOST POPULAR
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⭐ Most Popular
    [1] [2] [3] [4] [5] [6] [7] [8] [9]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

FOOTER
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🐉 Manga Store
Description & Links
© 2024 Manga Store. All rights reserved.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Screenshots to Add

To enhance your README, add screenshots by creating a `docs/screenshots/` folder and including:

1. **Homepage Desktop View** - Full page layout
2. **Homepage Mobile View** - Mobile responsive version
3. **Hero Carousel** - Featured carousel section
4. **Navigation Menu** - Hamburger menu on mobile
5. **Manga Item Hover** - Interactive hover effects

Example Markdown for images:
```markdown
![Homepage Desktop](docs/screenshots/homepage-desktop.png)
![Mobile View](docs/screenshots/mobile-view.png)
```

---

## 📄 File Descriptions

### HTML (`index.html`)
- **Purpose**: Main page structure and content
- **Contains**: Navigation, hero carousel, popular today section, latest releases, most popular ranking, footer
- **Lines**: ~450
- **Key Sections**: NAV, MAIN-CONTENT (5 major sections), FOOTER

### CSS (`index.css`)
- **Purpose**: Complete styling and responsive design
- **Features**: 
  - Custom font integration (Gotham)
  - CSS variables for theming
  - Responsive breakpoints (1280px, 1024px, 768px, 480px, 360px, 375px)
  - Animations and transitions
- **Lines**: ~1330
- **Components**: Navigation, Hero, Carousels, Grid layouts, Footer, Media queries

### JavaScript - `script.js` (Main Carousel)
```javascript
Key Functions:
- dragStart()         : Initiate drag functionality
- dragging()          : Handle mouse movement while dragging
- dragStop()          : End drag operation
- autoPlay()          : Auto-play carousel every 2.5s
- InfinityScroll()    : Handle infinite loop scrolling
- Navigation buttons  : Previous/Next button handlers
```

### JavaScript - `ham.js` (Mobile Menu)
```javascript
Key Functions:
- Toggle hamburger menu on click
- Toggle mobile navigation menu
- Prevent body scroll when menu is open
- Handle active states for menu items
```

### JavaScript - `main.js` (Animation Utils)
```javascript
Key Functions:
- addAnimation()      : Apply animations to slides
- Reduced motion support for accessibility
```

### JavaScript - `index.js` (Alternative Implementation)
```javascript
Alternative carousel implementation with:
- Infinite loop using cloned slides
- Transform-based positioning
- Smooth transitions with edge case handling
```

---

## 🎯 JavaScript Functionality

### Carousel System (`script.js`)

**Auto-Play Feature**
- Automatically scrolls carousel every 2.5 seconds
- Stops on hover
- Resumes when mouse leaves

**Drag & Scroll**
- Calculate drag distance: `scrollLeft = scrollLeft - (e.pageX - startX)`
- Works across desktop browsers
- Touch support via pointer events

**Infinite Loop**
- Detects start/end positions
- Clones items dynamically
- Seamless wrapping with `no-transition` class

**Code Snippet**
```javascript
const autoPlay = () => {
    if(window.innerWidth < 200) return;
    timeOutId = setTimeout(() => 
        slidesWrapper.scrollLeft += firstItemWidth, 2500);
};
```

### Mobile Menu (`ham.js`)

**Toggle Functionality**
```javascript
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = 
        navMenu.classList.contains('active') ? 'hidden' : 'auto';
});
```

---

## 🧾 Changelog (local edits)

_Generated: 2025-12-03_

The following entries summarize local changes detected in the working tree (files shown as modified or untracked). These changes were not part of the remote `origin/main` branch at the time of inspection.

- ham.js (modified)
  - Added search overlay UI controls and search behavior: open/close handlers, search input handling, clear button, search results rendering.
  - Kept and improved the hamburger menu logic (toggles `active` classes and prevents body scroll when menu or overlay are open).

- script.js (modified)
  - Carousel/slider updates: refined drag start/stop logic, autoplay behavior and timeout handling, and infinite scroll wrapping.
  - Minor renames and debug logging added for drag events.

- main.js (modified)
  - Adjustments to slide initialization and autoplay timing; small fixes related to duplicated slide cloning and timeout variable naming.

- index.css (modified)
  - New styles for search overlay and input UI (overlay layout, input styles, clear icons).
  - Continued refinements to carousel and responsive rules (scroll snapping, transitions, button styles).

- index.html (modified)
  - Replaced static slide markup with dynamic placeholders (`<div class="slides-wrapper" id="slidesWrapper"> <!--dynamic--> </div>`) for JS-driven population.
  - Added search overlay markup and wiring points (search icon, overlay container, inputs and results container).

- dynamic.js (untracked — new)
  - New dynamic DOM builder to populate the hero carousel and "Popular Today" wrappers from a JS data source.

- item.js (untracked — new)
  - Provides `MANGA_DATA` array (metadata for each manga cover, author, genre, description). Used by `dynamic.js` to render items.

- .vscode/ (untracked)
  - Local editor settings (workspace configuration). Typically safe to ignore in commits; consider adding to `.gitignore` if you don't want to push these.

Notes & next steps:

- If the changes above are intended to be included in the repository, commit the modified files (`ham.js`, `script.js`, `main.js`, `index.css`, `index.html`) and add the new files (`dynamic.js`, `item.js`).
- If `.vscode/` contains personal/editor settings, add a `.gitignore` entry to avoid committing it.
- I will commit only this `README.md` update now (so there's an on-repo record of the local changes). If you want, I can also stage and commit the other files and push everything in one go — but that requires a successful authenticated push.


---

## 📱 Responsive Design

### Design Strategy
- **Mobile-First Approach** - Start with mobile, enhance for larger screens
- **Flexible Grid System** - Uses CSS Flexbox and Grid
- **Responsive Images** - WebP format with object-fit
- **Adaptive Typography** - Font sizes scale with viewport

### Breakpoints Overview

| Screen Size | Target | Key Changes |
|------------|--------|-------------|
| `> 1280px` | Desktop | Full nav, 3-column grid, max-width layouts |
| `1023px - 1280px` | Large Tablets | Adjusted padding, 2-column grid |
| `769px - 1024px` | Tablets | Hamburger menu, responsive grid |
| `481px - 768px` | Mobile Landscape | Single column, optimized spacing |
| `< 480px` | Mobile Portrait | Stacked layout, hamburger menu |
| `< 360px` | Small Mobile | Maximum compression, readable fonts |

### Mobile Optimizations
✅ Hamburger menu for navigation
✅ Single-column layout for content
✅ Touch-friendly button sizes (≥44px)
✅ Optimized font sizes for small screens
✅ Reduced padding and margins

---

## 🚀 Future Enhancements

### Planned Features
- [ ] Backend API integration for dynamic manga data
- [ ] User authentication system (login/register)
- [ ] Search functionality with filters
- [ ] User ratings and reviews
- [ ] Manga reading chapter viewer
- [ ] Wishlist/Bookmark feature
- [ ] Dark/Light theme toggle
- [ ] Manga recommendations engine
- [ ] Admin panel for content management
- [ ] Payment integration for purchases

### Performance Improvements
- [ ] Image lazy loading
- [ ] Code splitting and bundling (Webpack/Vite)
- [ ] Caching strategies
- [ ] CDN integration for assets
- [ ] Service Worker for offline support

### Accessibility Enhancements
- [ ] ARIA labels for screen readers
- [ ] Keyboard navigation support
- [ ] High contrast mode
- [ ] Reduced motion preferences

---

## 📝 License

This project is open source and available under the **MIT License**.

---

## 👤 Author

**Manga Store Development Team**

- GitHub: [Your GitHub Profile]
- Discord: [Your Discord Server]
- Email: contact@mangastore.com

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Support & Feedback

For issues, suggestions, or feedback:
- Open an [Issue](link-to-issues) on GitHub
- Join our [Discord Community](link-to-discord)
- Email: support@mangastore.com

---

## 🎌 Manga Titles Featured

Currently showcasing 15 popular manga:

1. Absolute Sword Sense
2. Demonic Master of Mount Kunlun
3. Doctor's Rebirth
4. Father, Unrivaled
5. Fist Demon of Mount Hua
6. Heavenly Demon Reborn!
7. Heavenly Inquisition Sword
8. Murim Login
9. Murim RPG Simulation
10. Nano Machine
11. Reborn as a Scholar
12. Return of the Mad Demon
13. The Legend of the Northern Blade
14. The Undefeatable Swordsman
15. Volcanic Age

---

## 📊 Project Statistics

```
Project Duration:        In Development
Total Files:             9 (HTML, CSS, JS)
Lines of Code:           ~1800+ lines
Responsive Breakpoints:  6 major breakpoints
Manga Titles:            15 featured
Animations:              15+ CSS animations
JavaScript Modules:      4 files
Custom Fonts:            1 (Gotham)
Image Format:            WebP (optimized)
```

---

**Last Updated**: November 19, 2025

**Version**: 1.0.0

For the latest updates and features, visit the [GitHub Repository](link-to-repo).

