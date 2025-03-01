'use client'

import Header from '../../components/Header'
import ColoredFooter from '../../components/ColoredFooter'
import StarsAnimation from '../../components/StarsAnimation'
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'

export default function ResearchPage() {
  const [mounted, setMounted] = useState(false)
  const [pdfUrl] = useState('/Research.pdf')

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-white text-center">Our Research</h1>
          
          {/* Research Paper Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Latest Research Paper</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-lg">
              <iframe
                src={pdfUrl}
                className="w-full h-[600px] border-none"
                title="Research Paper PDF"
              />
            </div>
            <div className="mt-4">
              <Button className="bg-white text-black hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105">
                Download PDF
              </Button>
            </div>
          </section>

          {/* Citations and Resources Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-white">Citations and Resources</h2>
            <div className="bg-white bg-opacity-10 rounded-lg p-6 shadow-lg text-white">
              <h3 className="text-xl font-semibold mb-4">References</h3>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Smith, J. et al. (2023). &quot;Advanced Pulsar Detection Algorithms.&quot; Journal of Astrophysics, 45(2), 123-145.</li>
                <li>Johnson, A. & Brown, M. (2022). &quot;Machine Learning in Radio Astronomy.&quot; Computational Astronomy Review, 18(4), 78-92.</li>
                <li>Lee, S. et al. (2024). &quot;Deep Learning Approaches for Identifying Pulsars.&quot; ArXiv:2024.12345</li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">Additional Resources</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><a href="#" className="text-blue-300 hover:underline">PulseNet GitHub Repository</a></li>
                <li><a href="#" className="text-blue-300 hover:underline">Dataset: Pulsar Candidate Samples</a></li>
                <li><a href="#" className="text-blue-300 hover:underline">Tutorial: Getting Started with PulseNet</a></li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

