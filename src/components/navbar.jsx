import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Github, Home } from 'lucide-react'

export default function Navbar(props) {
  return (
    <nav className="bg-slate-900 bg-opacity-80 backdrop-blur-md shadow-lg py-1 px-6 flex justify-between items-center border-b border-purple-500 border-opacity-30">
      <Link href="/" className="text-xl font-bold text-white">{props.title}</Link>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="lg" asChild className="text-white hover:text-purple-400">
          <Link href="/">
            <Home className="h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button variant="ghost" size="lg" asChild className="text-white hover:text-purple-400">
          <a href="https://www.canva.com/design/DAG4L7kOlBM/JMsDWZzmRWqDuGVEr6dNLw/edit?utm_content=DAG4L7kOlBM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">About</a>
        </Button>
        <Button size="icon" variant="ghost" className="text-white hover:text-purple-400">
          <a href="https://github.com/Fritzcoding" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5" />
          </a>
        </Button>
      </div>
    </nav>
  )
}

