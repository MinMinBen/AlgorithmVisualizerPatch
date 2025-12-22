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

**Algorithm Visualizer** is an interactive, educational web platform designed to demystify complex algorithms through real-time visual demonstrations. The platform makes learning engaging by allowing users to watch algorithms execute step-by-step, control animation speed, and adjust parameters to observe how different inputs affect algorithm behavior.

### Purpose
- **Learn by Visualization**: Understand algorithm mechanics through animated step-by-step execution
- **Interactive Exploration**: Adjust parameters and immediately see the visual impact
- **Comprehensive Coverage**: 24+ algorithms across 8 major computer science domains
- **Accessible Learning**: Suitable for students, educators, and algorithm enthusiasts of all levels

### Algorithm Segments

1. **Pathfinder** - Graph traversal and shortest path algorithms (DFS, BFS, Dijkstra, A*)
2. **Sorting Algorithms** - Comparison-based sorting techniques (Bubble, Quick, Merge, Heap, etc.)
3. **Prime Numbers** - Prime generation and visualization algorithms (Sieve, Archimedes Spiral)
4. **N-Queens Problem** - Backtracking algorithm for constraint satisfaction
5. **Convex Hull** - Computational geometry algorithms (Graham Scan)
6. **Binary Search** - Interactive binary search game and visualizations
7. **Recursion Tree** - Recursive algorithm tree visualization (Fibonacci, Binomial, etc.)
8. **15-Puzzle** - Classic sliding puzzle game with A* solution visualization

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

### Core Technologies

| Technology | Purpose | Version |
|---|---|---|
| **Next.js** | React meta-framework with server-side rendering and static export | 15.1.0 |
| **React.js** | Modern UI library for building interactive components | 18.3.1 |
| **Node.js & npm** | JavaScript runtime and package manager for dependencies | Latest |

### Frontend & Styling

| Technology | Purpose | Version |
|---|---|---|
| **Tailwind CSS** | Utility-first CSS framework for responsive, modern design | 3.4.16 |
| **shadcn/ui** | High-quality, pre-built React component library | Latest |
| **Radix UI** | Unstyled, accessible component primitives for building UIs | Latest |
| **PostCSS & Autoprefixer** | CSS processing and cross-browser vendor prefixing | 8.4.49 |
| **Lucide React** | Icon library with 400+ customizable SVG icons | 0.468.0 |

### React Hooks & State Management
- **React Hooks** - `useState`, `useEffect` for component state and lifecycle management
- **Context API** (as needed) - Global state management
- **Browser localStorage** - Client-side data persistence for user sessions

### Animation Libraries

| Library | Purpose | Version |
|---|---|---|
| **React Flip Move** | Smooth, physics-based animations for list item transitions | 3.0.5 |
| **Tailwind Animate** | CSS animation utilities for fade, slide, and spin effects | 1.0.7 |
| **react-mt-svg-lines** | SVG line drawing and animation utilities | 0.9.1 |

### Utility Libraries
- **Lodash** - JavaScript utility library for common programming tasks
- **clsx** - Conditional CSS class composition
- **class-variance-authority** - Type-safe CSS class variants
- **query-string** - URL parameter parsing and stringification

### Development & Quality Tools
- **ESLint** - JavaScript linting and code quality checking
- **ESLint Next.js Config** - Next.js-specific linting rules

### Deployment
- **GitHub Pages (gh-pages)** - Static site deployment
- **Vercel** - Recommended deployment platform for Next.js applications

## 📁 Project Structure

```
AlgorithmVisualizer/
├── src/
│   ├── app/                          # Next.js App Router - All application pages
│   │   ├── layout.js                 # Root layout wrapper component
│   │   ├── page.js                   # Home page with algorithm cards
│   │   ├── globals.css               # Global styles and CSS variables
│   │   ├── fonts/                    # Custom fonts (Geist)
│   │   │
│   │   └── Algorithm Segments/ (Each has its own route)
│   │       ├── 15-puzzle/
│   │       │   ├── page.jsx          # 15-puzzle game and solver
│   │       │   └── style.css
│   │       ├── binary-search/
│   │       │   ├── page.jsx          # Binary search visualizer
│   │       │   ├── entryPoint.jsx    # Entry component
│   │       │   ├── guess.jsx         # Game guess component
│   │       │   ├── result.jsx        # Result display
│   │       │   ├── search.jsx        # Search logic
│   │       │   ├── search-visualization.jsx
│   │       │   └── custom-dual-slider.jsx
│   │       ├── convex-hull/
│   │       │   ├── page.jsx
│   │       │   ├── canvas.jsx        # Canvas visualization
│   │       │   ├── menu.jsx          # Algorithm menu
│   │       │   └── timer.jsx
│   │       ├── n-queen/
│   │       │   ├── page.jsx
│   │       │   ├── cell.jsx          # Individual cell component
│   │       │   ├── cells.jsx         # Grid of cells
│   │       │   ├── menu.jsx
│   │       │   └── style.css
│   │       ├── pathfinder/
│   │       │   ├── page.jsx          # Pathfinding visualizer
│   │       │   ├── grid.jsx          # Interactive grid
│   │       │   ├── node.jsx          # Grid node component
│   │       │   ├── menu.jsx          # Algorithm selection
│   │       │   ├── grid.css
│   │       │   └── node.css
│   │       ├── prime-numbers/
│   │       │   ├── page.jsx
│   │       │   ├── cells.jsx         # Prime grid
│   │       │   ├── cell.jsx
│   │       │   ├── spiral.jsx        # Archimedes spiral
│   │       │   ├── menu.jsx
│   │       │   ├── cell.css
│   │       │   └── cells.css
│   │       ├── recursion-tree/
│   │       │   ├── page.jsx          # Recursion tree visualizer
│   │       │   ├── canvasSVG.jsx     # SVG rendering
│   │       │   ├── Tree.js           # Tree data structure
│   │       │   ├── bst.js            # Binary search tree
│   │       │   ├── fib.jsx           # Fibonacci recursion
│   │       │   ├── vertex.jsx        # Tree vertex component
│   │       │   ├── edge.jsx          # Tree edge component
│   │       │   ├── details.jsx       # Algorithm details
│   │       │   └── menu.jsx
│   │       └── sorting/
│   │           ├── page.jsx          # Sorting algorithms visualizer
│   │           ├── rects.jsx         # Array visualization bars
│   │           ├── rect.jsx          # Individual bar component
│   │           ├── code-trace.jsx    # Code execution trace
│   │           ├── menu.jsx          # Algorithm selection
│   │           └── style.css
│   │
│   ├── components/
│   │   ├── navbar.jsx                # Top navigation bar
│   │   ├── footer.jsx                # Footer component
│   │   ├── hero.jsx                  # Hero section
│   │   ├── login-modal.jsx           # User login dialog
│   │   ├── streak-badge.jsx          # User streak display
│   │   ├── algorithm-cards.jsx       # Algorithm segment cards
│   │   │
│   │   ├── Custom Components/        # Reusable input components
│   │   ├── custom-input.jsx          # Text input wrapper
│   │   ├── custom-select.jsx         # Dropdown select wrapper
│   │   ├── custom-slider.jsx         # Range slider wrapper
│   │   ├── custom-toggle.jsx         # Toggle/switch wrapper
│   │   │
│   │   └── ui/                       # shadcn/ui component library
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       ├── select.jsx
│   │       ├── slider.jsx
│   │       └── switch.jsx
│   │
│   └── lib/
│       ├── utils.js                  # Common utility functions
│       │
│       ├── algorithms/               # Core algorithm implementations
│       │   ├── 15puzzle.js           # 15-puzzle solver
│       │   ├── Astar.js              # A* pathfinding
│       │   ├── bfs.jsx               # Breadth-first search
│       │   ├── dijkstra.js           # Dijkstra's algorithm
│       │   ├── grahamScan.js         # Convex hull
│       │   ├── heapSort.js           # Heap sort
│       │   ├── mergeSort.js          # Merge sort
│       │   ├── prime.js              # Prime number algorithms
│       │   ├── quickSort.js          # Quick sort (iterative)
│       │   ├── quickSortRecursive.js # Quick sort (recursive)
│       │   ├── randomMaze.js         # Random maze generation
│       │   ├── recursiveMaze.js      # Recursive maze generation
│       │   ├── sortingAlgorithms.js  # Bubble, selection, insertion sorts
│       │   └── turing.js             # Turing machine logic
│       │
│       └── helpers/
│           └── array_helpers.js      # Array utility functions
│
├── public/                           # Static assets
│   ├── images/                       # Images and graphics
│   ├── manifest.json                 # PWA manifest file
│   ├── robots.txt                    # SEO robots configuration
│   └── _redirects                    # URL redirect rules
│
├── Assets/                           # Project asset files (logos, banners)
├── build/                            # Production build output (generated)
├── .dist/                            # Distribution directory (generated)
│
├── Configuration Files
├── package.json                      # Dependencies and npm scripts
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
├── jsconfig.json                     # JavaScript path aliases
├── components.json                   # shadcn/ui component config
├── eslintrc.json                     # ESLint code quality rules
│
└── README.md                         # This documentation file
```

### Directory Hierarchy Explained

| Directory | Purpose | Key Files |
|---|---|---|
| **src/app/** | Next.js App Router - contains all pages and routes | `page.js` (route), `layout.js` (wrapper) |
| **src/app/[segment]/** | Individual algorithm visualization pages | Each segment has `page.jsx`, `menu.jsx`, visualization files |
| **src/components/** | Reusable React components used across the app | `navbar.jsx`, `footer.jsx`, `ui/*` (shadcn components) |
| **src/lib/algorithms/** | Core algorithm implementations | Pure JavaScript algorithm logic |
| **src/lib/helpers/** | Utility functions for common operations | Helper methods for arrays, calculations |
| **public/** | Static assets served directly by Next.js | Images, manifest, robots.txt |
| **build/** | Generated production build (created after `npm run build`) | Optimized output for deployment |

### Architecture Pattern

- **Route-based Organization**: Each algorithm segment is a separate route with its own directory
- **Component Composition**: Reusable UI components in `src/components/`
- **Algorithm Isolation**: Core algorithm logic in `src/lib/algorithms/`
- **Styling**: Global styles in `globals.css`, component-scoped CSS modules, and Tailwind utilities

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
