import { Button } from "@/components/ui/button"
import { Github, Rocket } from 'lucide-react'
import HomeHeader from '../components/HomeHeader'
import Footer from '../components/Footer'
import Image from 'next/image'
import StarsAnimation from '../components/StarsAnimation'
import Link from 'next/link'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <HomeHeader />
      <main className="flex-grow">
        <section className="relative bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)] overflow-hidden">
          <StarsAnimation />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
              PulseNet: Enhancing Pulsar Detection through Deep Learning
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-300">
              Revolutionizing astronomical research with cutting-edge AI technology for precise pulsar identification and analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/yourusername/pulsenet" target="_blank" rel="noopener noreferrer">
                <Button 
                  className="bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
              <Link href="/detect">
                <Button 
                  className="bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
                  style={{
                    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                  }}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="bg-white py-16">
          <div className="container mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Advancing Pulsar Detection</h2>
                <p className="text-gray-600 mb-4">
                  PulseNet leverages state-of-the-art deep learning algorithms to revolutionize pulsar detection in astronomical data. Our innovative approach significantly improves the accuracy and efficiency of identifying these elusive cosmic objects.
                </p>
                <p className="text-gray-600 mb-4">
                  By combining expertise in astrophysics with cutting-edge AI technology, we&apos;re pushing the boundaries of what&apos;s possible in radio astronomy. PulseNet is not just a tool; it&apos;s a gateway to new discoveries in our understanding of the universe.
                </p>
                <Button 
                  className="bg-[#0d1421] text-white hover:bg-[#1a2a42] transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Learn More
                </Button>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Image
                  src="/6.jpeg?height=400&width=600"
                  alt="Pulsar Detection Visualization"
                  width={600}
                  height={400}
                  className=""
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

