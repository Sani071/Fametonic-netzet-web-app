# 🚀 Fametonic - Social Media Career Platform (Test Task)

<div align="center">

![Fametonic Logo](public/log-fametonic.png)

**Turn Social Media Into a Profitable Career**

[![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[🌟 Live Demo](https://your-demo-url.vercel.app) • [📖 Documentation](#documentation) • [🐛 Report Bug](https://github.com/sani071/netzet-task/issues) • [✨ Request Feature](https://github.com/sani071/netzet-task/issues)

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

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/sani071/netzet-task.git
   cd netzet-task
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
│   ├── 🖼️ log-fametonic.png      # Logo
│   └── 🖼️ mobile-banner.png      # Banner image
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── 🎨 globals.css        # Global styles
│   │   ├── 📄 layout.tsx         # Root layout
│   │   └── 📄 page.tsx           # Home page
│   ├── 📁 components/
│   │   ├── 📁 layout/            # Layout components
│   │   │   ├── 🧩 Header.tsx     # Navigation header
│   │   │   ├── 🧩 Footer.tsx     # Footer with terms
│   │   │   ├── 🧩 Banner.tsx     # Hero banner
│   │   │   └── 🧩 FeatureSection.tsx # Main content
│   │   ├── 📁 ui/                # Reusable UI components
│   │   │   ├── 🧩 Button.tsx     # Custom button
│   │   │   └── 🧩 Typography.tsx # Typography system
│   │   └── 📁 pages/             # Page components
│   │       └── 🧩 HomePage.tsx   # Home page layout
│   └── 📁 types/                 # TypeScript definitions
├── ⚙️ next.config.ts             # Next.js configuration
├── 🎨 postcss.config.mjs         # PostCSS configuration
├── 📝 tsconfig.json              # TypeScript configuration
└── 📦 package.json               # Dependencies
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
- **Custom Utilities**: `.text-25` for 25px font size

### 🧩 Components

- **Responsive Design**: Mobile-first approach
- **Custom Button Variants**: Primary, secondary, outline, ghost, danger, warning
- **Typography System**: Consistent text styling across the app
- **Flexible Layout**: CSS Grid and Flexbox for responsive layouts

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

# Type Checking
npm run type-check   # Check TypeScript types
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

- Follow **TypeScript** best practices
- Use **Tailwind CSS** for styling
- Maintain **responsive design** principles
- Write **meaningful commit messages**
- Test on **multiple devices**

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sani071**
- GitHub: [@sani071](https://github.com/sani071)
- Project: [netzet-task](https://github.com/sani071/netzet-task)

---

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Vercel** for seamless deployment
- **Google Fonts** for beautiful typography

---

<div align="center">

**Made with ❤️ for aspiring influencers**

[⬆ Back to Top](#-fametonic---social-media-career-platform)

</div>
