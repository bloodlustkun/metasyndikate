
# MetaSyndikate Architecture

<p align="center">
	<img src="public/logo.png" alt="MetaSyndikate Logo" width="120" />
</p>

## Overview
Syndikx is a modular, extensible framework designed and registered by MetaSyndikate Pvt. Ltd. The architecture emphasizes scalability, maintainability, and a cyberpunk brutalist design ethos.

## Key Principles
- **Modularity:** All features are organized as independent modules/components.
- **Extensibility:** New features can be added with minimal changes to the core.
- **UI/UX:** Brutalist, cyberpunk-inspired interface with custom UI components.
- **Separation of Concerns:** Clear separation between UI, logic, and assets.

## Directory Structure
- `src/app/` — Main application logic and React components
- `src/app/components/` — Reusable UI and functional components
- `src/app/components/ui/` — Atomic UI elements (buttons, dialogs, etc.)
- `src/app/components/figma/` — Figma asset integration
- `src/assets/` — Static assets (images, icons, etc.)
- `src/styles/` — CSS and theme files
- `public/` — Publicly served files

## Design Patterns
- **Component-based:** All UI is built from composable React components.
- **Theming:** Centralized theme management for consistent branding.
- **State Management:** Local state within components; global state via context/providers if needed.

## Copyright
All rights reserved to MetaSyndikate Pvt. Ltd.

---
For more details, see the README.md and in-code documentation.