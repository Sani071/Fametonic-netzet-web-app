# 🚀 Fametonic - Social Media Career Platform (Test Task)

<div align="center">

![Fametonic Logo](public/log-fametonic.png)

**Turn Social Media Into a Profitable Career**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌟 Live Demo](https://fametonic-web-443.netlify.app/p) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/Sani071/Fametonic-netzet-web-app/issues) • [✨ Request Feature](https://github.com/Sani071/Fametonic-netzet-web-app/issues)

</div>

---

## 📖 Overview

Fametonic is a modern, responsive web application designed to help aspiring influencers turn their social media presence into a profitable career. Built with cutting-edge technologies and featuring a sleek, user-friendly interface.

### ✨ Key Features

- 🎯 **Instant Growth**: Start growing your influence right away—no waiting required!
- 📱 **Viral Content Creation**: Create viral TikToks and Reels with step-by-step lessons
- 🤖 **Personal AI Worker**: Boost your content with intelligent AI assistance
- 🎓 **Expert-Led Courses**: Learn from courses designed for aspiring influencers
- 📊 **Personalized Insights**: 1-minute quiz for tailored recommendations
- 🎨 **Modern UI/UX**: Beautiful, responsive design with custom animations
- 🚀 **Performance Optimized**: Built with Next.js 15 App Router for lightning-fast loading
- 📱 **Mobile-First Design**: Responsive across all devices with Tailwind CSS
- 🎭 **Custom Components**: Reusable UI components with TypeScript support
- 🎨 **Design System**: Consistent typography and color palette

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 15.4.4 | React Framework with App Router |
| **React** | 19.1.0 | UI Library |
| **TypeScript** | 5.0+ | Type Safety |
| **Tailwind CSS** | 4.0 | Utility-First Styling |
| **Urbanist Font** | Latest | Primary Typography |
| **Figtree Font** | Latest | Secondary Typography |
| **Playwright** | Latest | End-to-End Testing |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sani071/Fametonic-netzet-web-app.git
   cd Fametonic-netzet-web-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
netzet-task/
├── 📁 public/                    # Static assets
│   ├── 🖼️ log-fametonic.png      # Company logo
│   ├── 🖼️ mobile-banner.png      # Hero banner image
│   ├── 🖼️ next.svg              # Next.js logo
│   ├── 🖼️ vercel.svg            # Vercel logo
│   └── 🖼️ window.svg            # Window icon
├── 📁 src/
│   ├── 📁 app/                   # Next.js 15 App Router
│   │   ├── 🎨 globals.css        # Global styles & Tailwind
│   │   ├── 📄 layout.tsx         # Root layout component
│   │   ├── 📄 page.tsx           # Home page
│   │   └── 🖼️ favicon.ico        # Site favicon
│   └── 📁 components/            # React components
│       ├── 📁 common/            # Shared components
│       │   └── 🧩 TopPromoBanner.tsx # Promotional banner
│       ├── 📁 layout/            # Layout components
│       │   ├── 🧩 AppLayout.tsx  # Main app layout wrapper
│       │   └── 🧩 Header.tsx     # Navigation header
│       ├── 📁 sections/          # Page sections
│       │   └── 📁 homePage/      # Home page specific sections
│       │       ├── 🧩 Banner.tsx     # Hero banner section
│       │       └── 🧩 FeatureSection.tsx # Features & CTA section
│       └── 📁 ui/                # Reusable UI components
│           ├── 🧩 Button.tsx     # Custom button component
│           └── 🧩 Typography.tsx # Typography system
├── 📁 tests/                     # Playwright test files
│   └── 🧪 home.spec.ts           # Home page E2E tests
├── 📁 .vscode/                   # VS Code settings
│   └── ⚙️ tasks.json             # Build tasks configuration
├── ⚙️ eslint.config.mjs          # ESLint configuration
├── ⚙️ next.config.ts             # Next.js configuration
├── 🧪 playwright.config.ts       # Playwright test configuration
├── 🎨 postcss.config.mjs         # PostCSS configuration
├── 📝 tsconfig.json              # TypeScript configuration
├── 📦 package.json               # Dependencies & scripts
└── 📝 README.md                  # Project documentation
```

---

## 🎨 Design System

### 🎨 Color Palette

```css
/* Primary Colors */
--primary-cyan: #00E7F9        /* Bright cyan for highlights */
--primary-pink: #FC004E        /* Vibrant pink for CTAs */
--text-gray: #ABABAB           /* Subtle gray for secondary text */

/* Gradients */
--gradient-pink-cyan: linear-gradient(90deg, #FC004E 0%, #00E7F9 100%);
```

### 📝 Typography

- **Primary Font**: Urbanist (700, 800 weights)
- **Secondary Font**: Figtree (400, 500, 600 weights)

### 🧩 Component Architecture

- **App Router Structure**: Leverages Next.js 15 App Router for optimal performance
- **Modular Components**: Organized by function and reusability
- **Layout System**: Centralized layout components for consistent UI
- **Section-Based**: Page sections organized by feature areas
- **UI Components**: Reusable design system components
- **Responsive Design**: Mobile-first approach with Tailwind CSS

#### Component Categories:

| Category | Purpose | Examples |
|----------|---------|----------|
| **`/app`** | Next.js App Router pages | `page.tsx`, `layout.tsx` |
| **`/common`** | Shared components | `TopPromoBanner` |
| **`/layout`** | Layout & navigation | `Header`, `AppLayout` |
| **`/sections`** | Page sections | `Banner`, `FeatureSection` |
| **`/ui`** | Design system | `Button`, `Typography` |

---

## 📱 Responsive Design

### Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| 📱 Mobile | < 768px | Stacked layout, centered logo |
| 💻 Tablet | 768px - 1024px | Responsive grid |
| 🖥️ Desktop | > 1024px | Side-by-side layout |

### Features

- ✅ **Mobile-First Design**
- ✅ **Touch-Friendly Interactions**
- ✅ **Adaptive Typography**
- ✅ **Flexible Grid System**
- ✅ **Optimized Images**

---

## 🧪 Testing

### End-to-End Testing with Playwright

This project uses **Playwright** for comprehensive end-to-end testing across multiple browsers and devices.

#### 🚀 Quick Test Commands

```bash
npm run test        # Run all tests
npm run test:head   # Run tests in headed mode (visible browser)
```

#### 🎯 Test Coverage

- **Home Page Functionality**: Verifies main heading and CTA button visibility
- **Cross-Browser Testing**: Chrome, Firefox, Safari (WebKit)
- **Mobile Responsiveness**: Tests on mobile viewports (Pixel 5, iPhone 12)
- **Automated CI/CD**: Ready for continuous integration

#### 📋 Test Structure

```
tests/
└── home.spec.ts     # Home page E2E tests
    ├── Main heading verification
    ├── CTA button presence
    └── Responsive behavior
```

#### 🛠️ Playwright Configuration

- **Multi-Browser Support**: Chromium, Firefox, WebKit
- **Mobile Testing**: Pixel 5 and iPhone 12 viewports
- **Auto Server**: Automatically starts dev server for testing
- **HTML Reports**: Detailed test reports with screenshots
- **Retry Logic**: Automatic retries for flaky tests

#### 🔍 Test Examples

```typescript
// Home page test example
test('homepage has correct heading and CTA button', async ({ page }) => {
  await page.goto('/');
  
  // Verify main heading
  await expect(page.getByRole('heading', { 
    name: 'Turn Social Media Into a Profitable Career' 
  })).toBeVisible();
  
  // Verify CTA button
  await expect(page.getByRole('button', { 
    name: 'Get Started' 
  })).toBeVisible();
});
```

#### 📊 Browser Matrix

| Browser | Desktop | Mobile |
|---------|---------|--------|
| Chrome | ✅ | ✅ (Pixel 5) |
| Firefox | ✅ | ❌ |
| Safari | ✅ | ✅ (iPhone 12) |

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Deploy** automatically on every push

### Other Platforms

- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **DigitalOcean**: Custom server deployment

---

## 🧪 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Testing
npm run test         # Run Playwright E2E tests
npm run test:ui      # Run tests with UI mode (visual debugging)
npm run test:head    # Run tests in headed mode (visible browser)

# Type Checking
npm run type-check   # Check TypeScript types (if configured)
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 📋 Development Guidelines

- Follow **TypeScript** best practices with strict type checking
- Use **Tailwind CSS** utility classes for consistent styling
- Maintain **component modularity** with clear separation of concerns
- Organize components by **functionality** (`ui/`, `layout/`, `sections/`)
- Write **meaningful commit messages** following conventional commits
- Test **responsive behavior** across multiple devices and screen sizes
- Use **barrel exports** for cleaner imports when applicable
- Implement **accessibility** features (ARIA labels, semantic HTML)
- Write **E2E tests** for critical user journeys using Playwright
- Ensure **cross-browser compatibility** through automated testing

#### Component Development:
```typescript
// Example component structure
import { ComponentProps } from '@/types'

interface MyComponentProps extends ComponentProps {
  title: string
  variant?: 'primary' | 'secondary'
}

export default function MyComponent({ 
  title, 
  variant = 'primary',
  className = '' 
}: MyComponentProps) {
  return (
    <div className={`base-styles ${variant} ${className}`}>
      {title}
    </div>
  )
}
```

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sani071**
- GitHub: [@sani071](https://github.com/sani071)
- Project: [netzet-task](https://github.com/Sani071/Fametonic-netzet-web-app)

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Playwright** for reliable cross-browser testing
- **Vercel** for seamless deployment
- **Google Fonts** for beautiful typography

---

<div align="center">

**Made with ❤️ for aspiring influencers**

[⬆ Back to Top](#-fametonic---social-media-career-platform)

</div>
