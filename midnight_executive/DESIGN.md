---
name: Midnight Executive
colors:
  surface: '#111319'
  surface-dim: '#111319'
  surface-bright: '#37393f'
  surface-container-lowest: '#0c0e13'
  surface-container-low: '#191b21'
  surface-container: '#1e1f25'
  surface-container-high: '#282a30'
  surface-container-highest: '#33353a'
  on-surface: '#e2e2e9'
  on-surface-variant: '#c6c6cc'
  inverse-surface: '#e2e2e9'
  inverse-on-surface: '#2e3036'
  outline: '#909096'
  outline-variant: '#45464b'
  surface-tint: '#c3c6d3'
  primary: '#c3c6d3'
  on-primary: '#2c303a'
  primary-container: '#10141d'
  on-primary-container: '#7b7e8a'
  inverse-primary: '#5a5e69'
  secondary: '#c4c7c9'
  on-secondary: '#2d3133'
  secondary-container: '#464a4b'
  on-secondary-container: '#b6b9bb'
  tertiary: '#c0c6da'
  on-tertiary: '#293040'
  tertiary-container: '#0d1422'
  on-tertiary-container: '#787e90'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dfe2ef'
  primary-fixed-dim: '#c3c6d3'
  on-primary-fixed: '#181c25'
  on-primary-fixed-variant: '#434751'
  secondary-fixed: '#e0e3e5'
  secondary-fixed-dim: '#c4c7c9'
  on-secondary-fixed: '#191c1e'
  on-secondary-fixed-variant: '#444749'
  tertiary-fixed: '#dce2f6'
  tertiary-fixed-dim: '#c0c6da'
  on-tertiary-fixed: '#141c2a'
  on-tertiary-fixed-variant: '#404757'
  background: '#111319'
  on-background: '#e2e2e9'
  surface-variant: '#33353a'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
  container-max: 1440px
---

## Brand & Style

The design system embodies a **Futuristic Dark** aesthetic that is both high-tech and professionally grounded. Drawing inspiration from the deep, authoritative tones of high-end tailoring, the brand personality is intellectual, precise, and sophisticated. It targets an audience that values power, clarity, and cutting-edge performance.

The visual language blends **Minimalism** with subtle **Glassmorphism**. Surfaces are dark and expansive, using high-quality typography and crisp white accents to guide the eye. This creates a sense of focused calm—a digital environment where information is prioritized and distraction is eliminated. The emotional response is one of confidence and reliability.

## Colors

The palette is derived directly from formal attire, emphasizing depth and contrast. 

- **Primary (#10141D):** A deep, midnight navy suit-inspired tone used for the main UI surfaces.
- **Secondary (#F8FAFC):** A crisp, starched-white highlight used for maximum contrast on text and critical actions.
- **Tertiary (#242B3A):** A lighter navy used for nested containers and interactive states.
- **Neutral (#080A0F):** An ultra-dark "true black" background that creates the void from which the UI emerges.

Functional colors (Success, Error, Warning) should be highly desaturated to maintain the sophisticated mood, utilizing glow effects rather than solid fills.

## Typography

This design system uses a mono-spaced influence for technical precision. **Geist** provides a clean, systematic feel for all primary content, while **JetBrains Mono** is reserved for metadata, labels, and status indicators to reinforce the futuristic, developer-grade aesthetic.

Typography should be treated as a structural element. Use pure white for primary content and 60% opacity white for secondary information. Headlines are tight and impactful, utilizing negative letter-spacing for a modern, high-density appearance.

## Layout & Spacing

The layout philosophy follows a **Fluid Grid** model with high internal density. On desktop, the system utilizes a 12-column grid with generous outside margins to center the focus. 

The spacing rhythm is strictly based on an 8px base unit. 
- **Desktop:** 64px margins, 24px gutters.
- **Tablet:** 32px margins, 16px gutters.
- **Mobile:** 20px margins, 12px gutters.

Large sections of content are separated by significant whitespace (64px+) to prevent the dark UI from feeling claustrophobic, whereas interactive components like form groups use tighter 16px increments to feel efficient.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Backdrop Blurs**. 

1. **Base Layer:** Pure black (#080A0F) background.
2. **Surface Layer:** Deep Navy (#10141D) containers.
3. **Elevated Layer:** Tertiary Navy (#242B3A) with a subtle 1px border at 10% white opacity.

Shadows are avoided in favor of "inner glow" effects—subtle, high-blur white outlines (2-4% opacity) that simulate light catching the edge of a physical object. Glassmorphic overlays (Background Blur 20px) are used for floating navigation and modals to maintain context of the underlying layers.

## Shapes

The shape language is **Soft (1)**, using precise, conservative radii. This mimics the sharp lines of a tailored suit jacket—clean and structured but not aggressive.

- Small components (Buttons, Inputs): 4px (0.25rem).
- Large components (Cards, Modals): 8px (0.5rem).
- Interactive indicators: 12px (0.75rem).

Avoid full pills or organic shapes; keep all elements strictly geometric to maintain the professional, futuristic tone.

## Components

### Buttons
Primary buttons use the Crisp White (#F8FAFC) background with Midnight Navy text. Secondary buttons are ghost-styled with a 1px border and a subtle hover fill.

### Input Fields
Inputs are deep navy with a 1px border that glows slightly (low-opacity white) on focus. Labels are always JetBrains Mono, positioned above the field in 60% opacity white.

### Chips & Badges
Small, monochromatic tags with subtle background tints. Use JetBrains Mono for the text to emphasize the technical nature of the data.

### Cards
Cards utilize the Tertiary Navy (#242B3A) and feature a 1px "rim light" border on the top and left edges to define depth against the darker background.

### Navigation
The sidebar or header should be semi-transparent with a heavy backdrop blur, allowing the dark tones of the background to bleed through, creating a sophisticated "glass" look.