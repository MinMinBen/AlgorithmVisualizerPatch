# Algorithm Visualizer

A comprehensive interactive visualization platform for learning algorithms through step-by-step visual demonstrations. Built with modern web technologies to make algorithm learning engaging and intuitive.

# Live At https://algorithm-visualizer-sepia.vercel.app/
## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation & Running Locally

```bash
# 1. Clone the repository
git clone https://github.com/Fritzcoding/AlgorithmVisualizer.git
cd AlgorithmVisualizer

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The application will be available at: `http://localhost:3000`

### Build for Production

```bash
# Build the optimized production bundle
npm run build

# Start the production server
npm start
```

## 📚 Project Overview

Explore **20+ algorithms** across **8 different segments** with step-by-step visualization, simplifying the learning process and making it more engaging for better understanding.

### Algorithm Segments

1. **Pathfinder** - Graph traversal and shortest path algorithms
2. **Sorting Algorithms** - Comparison and exchange-based sorting techniques
3. **Prime Numbers** - Prime generation and number theory algorithms
4. **N Queen** - Backtracking algorithm visualization
5. **Convex Hull** - Computational geometry algorithms
6. **Binary Search** - Interactive binary search game and visualizations
7. **Recursion Tree** - Recursive algorithm tree visualization
8. **15-Puzzle** - Classic sliding puzzle game and solution algorithms

## 📋 Implemented Algorithms

### Graph Algorithms
- **Depth-First Search (DFS)**
- **Breadth-First Search (BFS)**
- **Dijkstra's Algorithm**
- **A* Search**
- **Recursive Maze Generation**

### Sorting Algorithms
- **Bubble Sort**
- **Selection Sort**
- **Insertion Sort**
- **Heap Sort**
- **Merge Sort**
- **Quick Sort**

### Number Algorithms
- **Sieve of Eratosthenes** (Prime generation)
- **Archimedes Spiral** (Prime visualization)

### Computational Geometry
- **Graham Scan** (Convex Hull)

### Search Algorithms
- **Binary Search**

### Recursion Algorithms
- **Fibonacci Sequence**
- **Binomial Coefficient**
- **Derangement**
- **Fast Exponentiation**
- **Stirling Number of Second Kind**

### Backtracking
- **N-Queens Problem**

### Puzzle & Game Algorithms
- **15-Puzzle Solver** (Sliding puzzle with A* pathfinding)

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 15.1.0** - React-based full-stack framework with server-side rendering
- **React 18.3.1** - Modern UI library for building interactive components
- **React DOM 18.3.1** - React rendering engine for web applications

### UI & Styling
- **TailwindCSS 3.4.16** - Utility-first CSS framework for responsive design
- **Tailwind Merge** - Merge Tailwind CSS classes efficiently
- **Tailwind Animate** - Animation utilities for Tailwind CSS
- **shadcn/ui** - High-quality React component library
- **Radix UI** - Unstyled, accessible component primitives
  - `@radix-ui/react-select` - Accessible select component
  - `@radix-ui/react-slider` - Range slider component
  - `@radix-ui/react-switch` - Toggle switch component
- **Lucide React** - Icon library with 400+ customizable icons
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

### Animation & Interaction
- **React Flip Move** - Smooth flip animations for list changes
- **react-mt-svg-lines** - SVG line drawing animations
- **Tailwind Animate** - CSS animation utilities

### Utilities & Libraries
- **Lodash 4.17.21** - Utility library for common programming tasks
- **query-string 7.1.1** - Parse and stringify URL query strings
- **class-variance-authority** - Type-safe CSS class composition
- **clsx** - Conditional CSS class constructor

### Development Tools
- **ESLint 8.56.0** - JavaScript linting and code quality
- **ESLint Next.js Config** - Next.js-specific ESLint rules

### Deployment
- **gh-pages** - Deploy static content to GitHub Pages

## 📁 Project Structure

```
AlgorithmVisualizer/
├── src/
│   ├── app/
│   │   ├── layout.js                 # Root layout component
│   │   ├── page.js                   # Home page
│   │   ├── globals.css               # Global styles
│   │   ├── 15-puzzle/                # 15-puzzle game segment
│   │   ├── binary-search/            # Binary search visualizer
│   │   ├── convex-hull/              # Convex hull algorithm
│   │   ├── n-queen/                  # N-Queens problem
│   │   ├── pathfinder/               # Pathfinding algorithms (DFS, BFS, Dijkstra, A*)
│   │   ├── prime-numbers/            # Prime number algorithms
│   │   ├── recursion-tree/           # Recursion visualization
│   │   ├── sorting/                  # Sorting algorithms
│   │   ├── components/               # Shared app components
│   │   └── fonts/                    # Custom fonts
│   ├── components/
│   │   ├── custom-input.jsx          # Reusable input component
│   │   ├── custom-select.jsx         # Reusable select component
│   │   ├── custom-slider.jsx         # Reusable slider component
│   │   ├── custom-toggle.jsx         # Reusable toggle component
│   │   ├── navbar.jsx                # Navigation bar
│   │   └── ui/                       # shadcn/ui components
│   └── lib/
│       ├── utils.js                  # Utility functions
│       ├── algorithms/               # Core algorithm implementations
│       └── helpers/                  # Helper functions
├── public/
│   ├── images/                       # Static images and assets
│   ├── manifest.json                 # PWA manifest
│   ├── robots.txt                    # SEO robots file
│   └── _redirects                    # Redirect rules
├── Assets/                           # Project assets (banner, etc.)
├── build/                            # Build output (generated)
├── package.json                      # Project dependencies & scripts
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.js                # TailwindCSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── jsconfig.json                     # JavaScript configuration
├── components.json                   # Component library config
└── README.md                         # This file
```

### Key Directories Explained

- **src/app/** - Next.js App Router pages; each algorithm segment has its own directory with dedicated routes
- **src/components/** - Reusable UI components used across the application (inputs, selectors, toggles, navbar, etc.)
- **src/lib/algorithms/** - Core algorithm implementations and computational logic
- **src/lib/helpers/** - Utility helper functions used throughout the application
- **public/** - Static assets served directly by the web server (images, manifest, robots.txt)
- **build/** - Generated production build output (created after running `npm run build`)

## 🎯 Key Features

✨ **24+ Interactive Visualizations** - Explore algorithms with step-by-step animations  
📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile  
⚡ **Real-time Execution** - Control animation speed and pause/resume  
🎨 **Modern UI** - Built with TailwindCSS and shadcn/ui for a polished look  
♿ **Accessible Components** - Uses Radix UI for WCAG compliance  
🚀 **Performance Optimized** - Built with Next.js for fast load times  

## 📖 How to Use

1. **Navigate** to a specific algorithm segment using the navigation bar
2. **Adjust Parameters** using sliders, input fields, or other controls
3. **Watch** the step-by-step visualization of the algorithm
4. **Control Playback** with play/pause/reset buttons
5. **Modify Speed** to slow down or speed up animations

## 🤝 Contributing

Contributions are always welcome! Whether it's:
- Adding new algorithm visualizations
- Improving existing visualizations
- Fixing bugs
- Enhancing documentation

Please feel free to open a Pull Request or create an Issue!

## 📅 Release Timeline

- **Commit 16** - Added Flip Move animation to in-place sorting components
- **Commit 20** - Added Tree Structure visualization
- **13 Dec 2024** - **Release v2.0.0**: Major migration from legacy Create React App to Next.js with shadcn/ui components

## 🙏 Acknowledgements

This project draws inspiration from several excellent resources:

- **Pathfinder**: [The Projects That Got Me Into Google](https://youtu.be/n4t_-NjY_Sg)
- **Archimedes Spiral for Primes**: [Why do prime numbers make these spirals?](https://youtu.be/EK32jo7i5LQ)
- **Recursion Tree Visualizer**: [Recursion Tree Visualizer](https://github.com/brpapa/recursion-tree-visualizer)
- **15-Puzzle**: Classic puzzle game algorithm references

### Educational Resources & Inspiration

- [University of San Francisco Visualization Site](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [Algorithm Visualizer](https://github.com/algorithm-visualizer)
- [NUS VisuAlgo](https://visualgo.net/en)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Feedback & Support

If you encounter any issues or have suggestions for improvements, please:
- Open an Issue on the repository
- Create a Pull Request
- Star ⭐ this repository if you found it helpful - it keeps the development motivated!

---

**Educational visualization platform for algorithm learning**
