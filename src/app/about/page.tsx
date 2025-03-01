'use client'

import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import Header from '../../components/Header'
import ColoredFooter from '../../components/ColoredFooter'
import StarsAnimation from '../../components/StarsAnimation'
import { useState, useEffect } from 'react'

const teamMembers = [
  {
    name: "Sparsh Prakash",
    role: "Lead Researcher",
    image: "/sp.png?height=300&width=300",
    github: "https://github.com/alicejohnson",
    linkedin: "https://linkedin.com/in/alicejohnson",
    email: "alice.johnson@pulsenet.com"
  },
  {
    name: "Ainain Aftab",
    role: "AI Engineer",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/bobsmith",
    linkedin: "https://linkedin.com/in/bobsmith",
    email: "bob.smith@pulsenet.com"
  },
  {
    name: "Nirnayika Rai",
    role: "Data Scientist",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/carolzhang",
    linkedin: "https://linkedin.com/in/carolzhang",
    email: "carol.zhang@pulsenet.com"
  },
  {
    name: "Yugal Chaudhary",
    role: "Software Developer",
    image: "/placeholder.svg?height=300&width=300",
    github: "https://github.com/davidlee",
    linkedin: "https://linkedin.com/in/davidlee",
    email: "david.lee@pulsenet.com"
  }
]

export default function AboutUs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)] text-white relative overflow-hidden">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow flex items-center justify-center relative z-10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Meet Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg p-6 flex flex-col items-center transform transition duration-500 hover:scale-105">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex space-x-4">
                  <Link href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                  <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                  <Link href={`mailto:${member.email}`}>
                    <Mail className="h-6 w-6 text-gray-400 hover:text-white transition-colors" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

