# # Lumina | Premium Light Glassmorphism UI Kit

**Lumina** is a radiant, light-mode-first Authentication UI Kit crafted by **Zero Bloat UI**. It features an ethereal glassmorphism aesthetic, organic living backgrounds, and robust real-time form validation—all built with utility-first CSS and a performance-first mindset.

**"Clarity in design. Fluidity in motion."**

## ## Key Features

### ### Ethereal Visuals

* **Organic Mesh Gradients:** Three distinct, animated color blobs (Indigo, Purple, Pink) that float and blend in real-time using `mix-blend-multiply` to create a living, breathing background.
* **Premium Glassmorphism:** A multi-layered frosted glass effect (`backdrop-filter: blur`) that provides depth while maintaining perfect text readability.
* **Micro-Interactions:** Subtle button shines, hover lifts, and ripples that make the UI feel alive under the user's touch.

### ### Zero Bloat Architecture

* **Vanilla Stack:** Built with pure HTML5, Tailwind CSS (v3.4), and optimized Vanilla JavaScript.
* **No Dependencies:** Zero reliance on jQuery, React, or heavy external libraries.
* **Single-File Logic:** All behavior is encapsulated in clean, readable scripts within the HTML or separated assets.

### ### Advanced Interactivity

* **Fluid Slider Transitions:** A smooth, hardware-accelerated sliding mechanism to switch between Login and Register views instantly without page reloads.
* **Smart Floating Labels:** Intelligent input labels that center vertically when empty and float elegantly to the border on focus, ensuring perfect alignment.
* **Haptic Validation:** The UI utilizes "Shake" physics to communicate errors and glowing success rings for valid inputs.
* **Dynamic Loading States:** Buttons transform into high-fidelity SVG spinners during API simulation to provide immediate feedback.

### ### Responsive Engineering

* **"No-Scroll" Design:** Specifically engineered with `100dvh` to fit entirely within the viewport height on mobile devices, preventing keyboard layout shifts.
* **Social Integration:** Pre-styled, compact grid buttons for Google and GitHub authentication.

## ## Quick Start

### ### Option 1: Direct Usage (CDN)

This template is pre-configured with the Tailwind CSS CDN for instant deployment without a complex build step.

1. Clone the repository.
2. Open `index.html` (contains Login & Register) or `forgot-password.html` in your browser.
3. That's it!

### ### Option 2: Production Integration

To integrate this into a modern web project (React, Vue, Laravel, etc.):

1. Copy the `tailwind.config` script object from `index.html` into your project's `tailwind.config.js`.
2. Extract the HTML structure inside `.glass-panel` into your specific framework components.
3. Migrate the JavaScript logic for `switchTab()` and `validateField()` into your component state managers.

## ## Customization

### ### Changing the Color Scheme

**Lumina** uses a **Violet/Indigo** brand palette by default. To change the brand color globally, locate the Tailwind script config in the `<head>` and modify the `brand` colors:

javascript
colors: {
    brand: { 
        500: '#6366f1', // Primary Action Color
        600: '#4f46e5', // Hover State
    },
}


### ### Modifying Validation Logic

Global validation rules (Regex for email), password matching, and strength meter thresholds are centrally managed in the `validateField` and `checkStrength` functions within the `<script>` tags.

## ## Browser Support

Lumina utilizes modern CSS features like `backdrop-filter`, `mix-blend-mode`, and `100dvh`.

  Browser   Support 
**Chrome**  Latest 
**Firefox** Latest 
**Safari**  Latest 
**Edge**    Latest 

**© 2026 Zero Bloat UI.** Built for speed. Designed for light.