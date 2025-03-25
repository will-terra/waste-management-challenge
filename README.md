# Waste Management Skip Hire Platform

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://waste-management-challenge.vercel.app/)  
**Live Demo:** [https://waste-management-challenge.vercel.app/](https://waste-management-challenge.vercel.app/)

A responsive web application designed to streamline skip selection for waste management, built as a technical assessment for a Software Engineer role. This solution demonstrates modern frontend architecture, robust error handling, and user-centric design.

## ✨ Key Features

- **Smart Filtering System**  
  Filter skips by size, hire duration, transport cost, road legality, and heavy waste capability.
  
- **Dynamic Content Handling**
  - Empty state illustrations for no-match filters
  - Error boundaries with user-friendly messaging

- **Cross-Device Optimization**  
  Mobile responsive design with breakpoint-specific layouts.

- **State Persistence**  
  Redux-powered state management maintains selections across navigation steps.

- **Accessibility Focus**  
  WCAG-compliant components with keyboard navigation and ARIA labels.

## 🛠 Technology Stack

### Core Architecture
| Category              | Technology                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| Framework             | Next.js 14 (App Router, Server Components)                                 |
| State Management      | Redux Toolkit with RTK Query                                               |
| Styling               | Tailwind CSS + CSS Modules                                                 |
| Component Library     | Material UI (v5) with custom Base UI extensions                            |
| Type Safety           | TypeScript 5                                                               |

### Quality Assurance
| Category              | Technology                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| Unit Testing          | Jest + React Testing Library                                               |
| E2E Testing           | Cypress 12                                                                 |
| Component Workshop    | Storybook 7                                                                |

### DevOps
| Category              | Technology                                                                 |
|-----------------------|----------------------------------------------------------------------------|
| Package Manager       | npm 9                                                                      |
| CI/CD                 | Vercel Edge Network (Automatic deployments via Git integration)            |
| Monitoring            | Next.js Analytics (Core Web Vitals tracking)                               |

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 9+

### Installation
```bash
git clone https://github.com/your-username/waste-management-challenge.git
cd waste-management-challenge
npm install
```

### Development
```bash
npm run dev
```

## Testing
### Unit tests
```bash
npm run test
```


### E2E tests (requires dev server running)
```bash
npm run cy:open
```

### Storybook
```bash
npm run storybook
```

# 🧠 Design Decisions

### Next.js App Router
Chosen for hybrid static & server rendering to optimize SEO and initial load performance.

### Redux Toolkit
Implemented with RTK Query for centralized API state management and automatic caching.

### Tailwind + MUI Synergy
Combines MUI's design system with Tailwind's utility-first flexibility for rapid iteration.

## Atomic Design Architecture
Adopted Atomic Design methodology to create a maintainable component hierarchy:

- **Atoms**: Foundational elements (buttons, inputs, icons) with strict prop-type contracts  
- **Molecules**: Functional combinations (search bars, filter groups) enforcing component relationships
- **Organisms**: Context-aware modules (header, filter section) handling business logic  

**Implementation Benefits**:
- ♻️ Strict parent-child dependency boundaries
- 🧩 Visual regression prevention through composition
- 🔍 Storybook-driven component development
- ⚡ Selective hydration with Next.js dynamic imports

Seamlessly integrates with:
- Tailwind's utility-class composition
- Storybook's component isolation
- Redux's state colocation principles

## ⚡ Performance Optimizations

- **Memoized State Management**  
  Strategic `useMemo` usage prevents unnecessary re-renders of filter results and complex UI components.

- **Modular Redux Architecture**  
  Split state slices with isolated responsibilities to optimize store updates and reduce reconciliation overhead.

- **Skeleton Loading States**  
  Content placeholders maintain layout stability during asynchronous data operations.

- **Critical Image Prioritization**  
  Next.js image component with lazy loading and priority pre-fetch for above-the-fold assets.
  

## Testing Pyramid

Comprehensive coverage strategy:

- **95%+ Unit test coverage (Jest)**

![unittest](https://github.com/user-attachments/assets/65f2ee59-289c-4550-9fa2-c24a96c686ae)


- **Critical path E2E tests (Cypress)**

- **Visual regression via Storybook**

## 📈 Performance Metrics

Lighthouse Scores (Desktop):

![lighthouse](https://github.com/user-attachments/assets/b558b8df-163d-4a10-ad17-ae142810760e)

