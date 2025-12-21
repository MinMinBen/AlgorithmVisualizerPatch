import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'



const algorithms = [
  {
    id: 'pathfinder',
    title: "Pathfinder",
    description: "Visualize graph algorithms like dijkstra, BFS, DFS",
    image: '/images/graph.png?height=200&width=300'
  },
  {
    id: 'recursion-tree',
    title: 'Recursion Tree',
    description: "The process in which a function calls itself directly or indirectly is called recursion",
    image: '/images/recursion.jpg?height=200&width=300'
  },
  {
    id: 'sorting',
    title: 'Sorting Algorithm',
    description: "Compare different sorting algorithms",
    image: '/images/sort.png?height=200&width=300'
  },
  {
    id: 'n-queen',
    title: 'N Queen',
    description: "The N queens puzzle is the problem of placing N chess queens on an N*N chessboard so that no two queens threaten each other",
    image: '/images/queen.PNG?height=200&width=300'
  },
  {
    id: 'prime-numbers',
    title: 'Prime Numbers',
    description: "Visualize how Seive is better than brute force",
    image: '/images/primes.jpg?height=200&width=300'
  },
  {
    id: 'convex-hull',
    title: 'Convex Hull',
    description: "The convex hull of a set of points is the smallest convex polygon that contains all the points of it",
    image: '/images/convex-hull.png?height=200&width=300'
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    description: "Binary search is an efficient algorithm for finding an item from a sorted list of item",
    image: '/images/binary-search.png?height=200&width=300'
  },
  // {
  //   id: '15-puzzle',
  //   title: '15 Puzzle',
  //   description: "The 15-puzzle is a sliding puzzle that consists of a frame of numbered square tiles in random order with one tile missing",
  //   image: '/AlgorithmVisualizer/images/15puzzle.PNG?height=200&width=300'
  // }
]

// Add animation styles
const animationStyles = `
@keyframes orbit1 {
  0% { transform: rotate(0deg) translateY(-300px) rotate(0deg); filter: drop-shadow(0 0 10px rgba(147, 51, 234, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.6)); }
  100% { transform: rotate(360deg) translateY(-300px) rotate(-360deg); filter: drop-shadow(0 0 10px rgba(147, 51, 234, 0.3)); }
}

@keyframes orbit2 {
  0% { transform: rotate(51.43deg) translateY(-300px) rotate(-51.43deg); filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.6)); }
  100% { transform: rotate(411.43deg) translateY(-300px) rotate(-411.43deg); filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3)); }
}

@keyframes orbit3 {
  0% { transform: rotate(102.86deg) translateY(-300px) rotate(-102.86deg); filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)); }
  100% { transform: rotate(462.86deg) translateY(-300px) rotate(-462.86deg); filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)); }
}

@keyframes orbit4 {
  0% { transform: rotate(154.29deg) translateY(-300px) rotate(-154.29deg); filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6)); }
  100% { transform: rotate(514.29deg) translateY(-300px) rotate(-514.29deg); filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3)); }
}

@keyframes orbit5 {
  0% { transform: rotate(205.71deg) translateY(-300px) rotate(-205.71deg); filter: drop-shadow(0 0 10px rgba(147, 51, 234, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(147, 51, 234, 0.6)); }
  100% { transform: rotate(565.71deg) translateY(-300px) rotate(-565.71deg); filter: drop-shadow(0 0 10px rgba(147, 51, 234, 0.3)); }
}

@keyframes orbit6 {
  0% { transform: rotate(257.14deg) translateY(-300px) rotate(-257.14deg); filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(99, 102, 241, 0.6)); }
  100% { transform: rotate(617.14deg) translateY(-300px) rotate(-617.14deg); filter: drop-shadow(0 0 10px rgba(99, 102, 241, 0.3)); }
}

@keyframes orbit7 {
  0% { transform: rotate(308.57deg) translateY(-300px) rotate(-308.57deg); filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)); }
  50% { filter: drop-shadow(0 0 20px rgba(139, 92, 246, 0.6)); }
  100% { transform: rotate(668.57deg) translateY(-300px) rotate(-668.57deg); filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)); }
}

@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.5), 0 0 40px rgba(99, 102, 241, 0.3); }
  50% { box-shadow: 0 0 40px rgba(147, 51, 234, 0.8), 0 0 60px rgba(99, 102, 241, 0.5); }
}

@keyframes twinkle {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

.orbit-1 { animation: orbit1 20s linear infinite; }
.orbit-2 { animation: orbit2 20s linear infinite; }
.orbit-3 { animation: orbit3 20s linear infinite; }
.orbit-4 { animation: orbit4 20s linear infinite; }
.orbit-5 { animation: orbit5 20s linear infinite; }
.orbit-6 { animation: orbit6 20s linear infinite; }
.orbit-7 { animation: orbit7 20s linear infinite; }

.planet-glow {
  animation: pulse-glow 3s ease-in-out infinite;
}

.space-bg {
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  position: relative;
  overflow: hidden;
}

.stars {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle var(--duration) infinite;
}

.nebula-glow-1 {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%);
  border-radius: 50%;
  top: 10%;
  left: 10%;
  filter: blur(80px);
  animation: float-slow-1 20s ease-in-out infinite;
}

.nebula-glow-2 {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  bottom: 10%;
  right: 10%;
  filter: blur(80px);
  animation: float-slow-2 25s ease-in-out infinite;
}

@keyframes float-slow-1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(30px, 30px); }
}

@keyframes float-slow-2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-40px, -40px); }
}
`;

export function AlgorithmCards() {
  const AlgorithmCard = ({ algorithm }) => (
    <Link href={`/${algorithm.id}`} className="block group w-full h-full">
      <Card className="overflow-hidden transition-shadow hover:shadow-lg h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={algorithm.image}
            alt={algorithm.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="flex-grow">
          <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
            {algorithm.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col justify-between">
          <p className="text-lg text-muted-foreground">{algorithm.description}</p>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <>
      <style>{animationStyles}</style>
      <div className="space-bg relative w-full h-full min-h-screen flex items-center justify-center px-4">
        {/* Star field background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="stars"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                '--duration': `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Nebula glow effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="nebula-glow-1"></div>
          <div className="nebula-glow-2"></div>
        </div>

        {/* Orbital background rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="absolute w-80 h-80 rounded-full border border-purple-400 opacity-30"></div>
          <div className="absolute w-96 h-96 rounded-full border border-indigo-400 opacity-20"></div>
          <div className="absolute w-[28rem] h-[28rem] rounded-full border border-purple-300 opacity-15"></div>
        </div>

        {/* Orbiting container - perfectly centered */}
        <div className="relative z-10 w-80 h-80 flex items-center justify-center">
          {/* Center Logo/Planet */}
          <div className="absolute z-20">
            <div className="planet-glow text-center p-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full w-56 h-56 flex flex-col items-center justify-center text-white shadow-2xl">
              <h2 className="text-4xl font-bold mb-2">Algorithms</h2>
              <p className="text-sm">Learn & Visualize</p>
              <div className="mt-4 text-6xl">🪐</div>
            </div>
          </div>

          {/* Algorithm 0 - Top (0°) */}
          <div className="absolute w-72 h-72 orbit-1">
            <AlgorithmCard algorithm={algorithms[0]} />
          </div>

          {/* Algorithm 1 - 51.43° */}
          <div className="absolute w-72 h-72 orbit-2">
            <AlgorithmCard algorithm={algorithms[1]} />
          </div>

          {/* Algorithm 2 - 102.86° */}
          <div className="absolute w-72 h-72 orbit-3">
            <AlgorithmCard algorithm={algorithms[2]} />
          </div>

          {/* Algorithm 3 - 154.29° */}
          <div className="absolute w-72 h-72 orbit-4">
            <AlgorithmCard algorithm={algorithms[3]} />
          </div>

          {/* Algorithm 4 - 205.71° */}
          <div className="absolute w-72 h-72 orbit-5">
            <AlgorithmCard algorithm={algorithms[4]} />
          </div>

          {/* Algorithm 5 - 257.14° */}
          <div className="absolute w-72 h-72 orbit-6">
            <AlgorithmCard algorithm={algorithms[5]} />
          </div>

          {/* Algorithm 6 - 308.57° */}
          <div className="absolute w-72 h-72 orbit-7">
            <AlgorithmCard algorithm={algorithms[6]} />
          </div>
        </div>
      </div>
    </>
  )
}

