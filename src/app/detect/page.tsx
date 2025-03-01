'use client'

import { Button } from "@/components/ui/button"
import Header from '../../components/Header'
import ColoredFooter from '../../components/ColoredFooter'
import StarsAnimation from '../../components/StarsAnimation'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function DetectPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row items-center text-white">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Pulsar Detection
              </h1>
              <p className="text-xl mb-6">
                Choose a detection method to analyze astronomical data for pulsars using our advanced AI-powered tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link href="/detect/ann">
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    ANN
                  </Button>
                </Link>
                <Link href="/detect/cnn">
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    CNN
                  </Button>
                </Link>
                <Link href="/detect/multi-model">
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    Multi-Model
                  </Button>
                </Link>
                <Link href="/detect/phcx">
                  <Button 
                    className="w-full bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                    style={{
                      boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                    }}
                  >
                    PHCX
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src="/hero.png?height=600&width=600"
                alt="Pulsar Detection Illustration"
                width={600}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

