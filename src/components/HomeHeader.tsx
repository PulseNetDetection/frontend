'use client'

import Link from 'next/link'
import { Radio, Atom } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function HomeHeader() {
  const pathname = usePathname()

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white py-4 px-6">
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Radio className="h-8 w-8" />
          <Atom className="h-8 w-8" />
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                href="/" 
                className={`hover:text-blue-400 transition-colors ${pathname === '/' ? 'text-blue-400' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/detect" 
                className={`hover:text-blue-400 transition-colors ${pathname === '/detect' ? 'text-blue-400' : ''}`}
              >
                Detect
              </Link>
            </li>
            <li>
              <Link 
                href="/research" 
                className={`hover:text-blue-400 transition-colors ${pathname === '/research' ? 'text-blue-400' : ''}`}
              >
                Research
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className={`hover:text-blue-400 transition-colors ${pathname === '/about' ? 'text-blue-400' : ''}`}
              >
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

