'use client'

import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import ColoredFooter from '../../components/ColoredFooter'
import StarsAnimation from '../../components/StarsAnimation'
import { Button } from "@/components/ui/button"
import PHCXFileUpload from '../../components/PHCXFileUpload'

export default function PHCXDetectionPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDetection = () => {
    // Implement PHCX detection logic here
    console.log("Running PHCX detection on uploaded file")
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-start text-white">
            <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                PHCX Detection Method
              </h1>
              <p className="text-xl mb-6">
                PHCX (Pulsar Hunting with Convolutional eXpertise) is a specialized file format and detection method developed for efficient pulsar candidate classification. This approach combines traditional pulsar search techniques with advanced machine learning algorithms to process large-scale survey data.
              </p>
              <p className="text-lg mb-6">
                Upload a .phcx file containing pulsar candidate data to run our PHCX-based detection algorithm. Our model will analyze the file and provide a classification result, helping to identify potential pulsars with high accuracy.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">PHCX File Upload</h2>
                <PHCXFileUpload onFileUpload={(file) => {
                  setSelectedFile(file)
                }} />
                <Button
                  onClick={handleDetection}
                  className="w-full mt-6"
                  disabled={!selectedFile}
                >
                  Run PHCX Detection
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

