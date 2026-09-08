# NOVA — AI Productivity Platform

## Project Description

**NOVA** is a modern, high-performance SaaS landing page built for an AI-powered productivity platform. Designed for high-velocity teams, NOVA helps organizations manage projects, automate repetitive tasks, analyze performance metrics in real time, and collaborate seamlessly across distributed workspaces.

The project demonstrates front-end engineering fundamentals in **React.js, modern JavaScript (ES6+), semantic HTML5, pure CSS3 (no external frameworks), component architecture, and responsive UI/UX design**.

---

## Technologies Used

* **React.js** (v18) — Component-based architecture and state-driven interfaces
* **JavaScript (ES6+)** — Array operations, hooks, IntersectionObserver API, modular imports
* **HTML5 / JSX** — Accessible, semantic structure (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
* **CSS3** — Custom design tokens with CSS variables, Flexbox, CSS Grid, keyframes, fluid typography, glassmorphism
* **Vite** — Lightning-fast development server and optimized production bundler

> **Note:** Built completely from scratch without Tailwind CSS, Bootstrap, Material UI, jQuery, or third-party component libraries.

---

## Features

1. **Sticky Glassmorphic Navigation Bar**
   - Dynamic elevation and backdrop blur effect on scroll
   - Accessible animated hamburger toggle for mobile devices
   - Smooth navigation anchor links with auto-closing mobile drawer

2. **Immersive Hero Section**
   - High-contrast typography with gradient highlights
   - Call-to-action buttons ("Start Free", "Watch Demo")
   - Pure CSS/HTML interactive product dashboard mockup featuring live progress bars, activity charts, tasks list, and AI Copilot card

3. **Trusted Companies Showcase**
   - Brand proof section highlighting innovative fictional industry leaders (`Vertex`, `Orbit`, `Lumina`, `Pulse`, `Arc`, `Nexa`) with micro-interactions

4. **Everything You Need (Features Section)**
   - 6 custom feature cards rendered dynamically with `.map()`
   - Inline SVG icons with interactive hover lift and rotation effects
   - Scroll-triggered reveal animations via `IntersectionObserver`

5. **Deep-Dive Product Showcase**
   - Two-column visual layout showcasing an analytics telemetry dashboard
   - Real-time performance trend SVG chart and activity logs
   - Key platform value propositions with custom checklist indicators

6. **How It Works (3-Step Onboarding)**
   - Horizontal step timeline on desktop with dashed progress connectors
   - Staggered scroll-reveal animation
   - Seamless transition into a vertical stack on mobile screens

7. **Animated Statistics Counter**
   - Counts from zero to target values (50K+ Active Users, 120K+ Tasks Automated, 98% Satisfaction, 35% Productivity Boost)
   - Powered by `IntersectionObserver` and smooth ease-out `requestAnimationFrame`

8. **Dynamic Solutions & Use Cases**
   - Interactive tabbed interface for Startups, Marketing Teams, Software Teams, and Remote Teams
   - Managed via React `useState` with tailored benefits and metrics

9. **Responsive Testimonials Carousel**
   - Multi-card view on desktop transitioning smoothly to single-card swipe on mobile
   - Previous/Next button controls, dot pagination, and disabled state handling

10. **Flexible Pricing Calculator**
    - Monthly vs. Annual toggle with animated pill switch and 20% discount calculations
    - Highlighted "Most Popular" Pro plan badge

11. **Accordion FAQ**
    - Single-open accordion with smooth height and opacity transitions
    - Comprehensive questions addressing security, integrations, and trial policies

12. **High-Impact Final CTA Section**
    - Deep gradient card with radial glows and dual action buttons

13. **Footer & Working Newsletter**
    - Client-side regex email validation with instant success/error feedback
    - Structured multi-column directory with social media links and legal notice

14. **Interactive Demo Modal**
    - Simulated interactive video player with play/pause state and sprint generation walkthrough
    - Accessible backdrop dismissal and keyboard `Escape` key listeners

15. **Floating Back-to-Top Button**
    - Smart appearance after scroll threshold with smooth scrollback action

---

## Installation & Setup

1. **Clone the repository or navigate to project directory:**
   ```bash
   cd nova-landing
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## Project Structure

```
nova-landing/
├── public/
│   └── favicon.svg              # Custom brand SVG favicon
├── src/
│   ├── components/              # Modular, reusable UI components
│   │   ├── BackToTop.jsx & .css
│   │   ├── DemoModal.jsx & .css
│   │   ├── FAQ.jsx & .css
│   │   ├── FeatureCard.jsx & .css
│   │   ├── Features.jsx & .css
│   │   ├── FinalCTA.jsx & .css
│   │   ├── Footer.jsx & .css
│   │   ├── Hero.jsx & .css
│   │   ├── HowItWorks.jsx & .css
│   │   ├── Navbar.jsx & .css
│   │   ├── Pricing.jsx & .css
│   │   ├── PricingCard.jsx & .css
│   │   ├── Product.jsx & .css
│   │   ├── Solutions.jsx & .css
│   │   ├── Statistics.jsx & .css
│   │   ├── TestimonialCard.jsx & .css
│   │   ├── Testimonials.jsx & .css
│   │   └── TrustedCompanies.jsx & .css
│   ├── data/
│   │   └── data.js              # Centralized data structures for cards & links
│   ├── App.jsx                  # Main orchestration component
│   ├── App.css                  # Layout resets
│   ├── index.css                # Global design system & CSS variables
│   └── main.jsx                 # React root entry point
├── index.html                   # HTML5 document shell with SEO meta tags
├── package.json
└── vite.config.js               # Vite React configuration
```

---

## Responsive Design

The application is rigorously optimized across modern device breakpoints:
* **Desktop (1440px+)** — Spacious multi-column layouts with floating previews
* **Laptop (1024px)** — Compact grids and proportional typography
* **Tablet (768px)** — Two-column cards, collapsing dashboard flows, and hamburger menu
* **Mobile (375px - 480px)** — Touch-friendly buttons, full-width inputs, single-card carousel
* **Small Mobile (320px)** — Zero horizontal overflow, fluid font scaling

---

## Screenshots

| Desktop Hero & Mockup | Interactive Features & Solutions |
| :---: | :---: |
| ![Desktop Hero](https://via.placeholder.com/600x340/1e1b4b/ffffff?text=NOVA+Hero+Section) | ![Features & Solutions](https://via.placeholder.com/600x340/4f46e5/ffffff?text=NOVA+Features+%26+Solutions) |

| Pricing & FAQ Accordion | Mobile Experience & Menu |
| :---: | :---: |
| ![Pricing & FAQ](https://via.placeholder.com/600x340/0f172a/ffffff?text=NOVA+Pricing+%26+FAQ) | ![Mobile View](https://via.placeholder.com/300x500/2563eb/ffffff?text=NOVA+Mobile+Responsive) |

---

## Live Demo

Live Demo: [https://nova-modern-landing-page.vercel.app/]

---

## AI Tools Used

* AI assistance was used for brainstorming, UI ideas, code assistance and debugging.
* Final implementation and customization were reviewed and modified manually.
