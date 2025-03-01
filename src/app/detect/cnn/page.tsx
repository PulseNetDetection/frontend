'use client'

import { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import ColoredFooter from '../../../components/ColoredFooter'
import StarsAnimation from '../../../components/StarsAnimation'
import { Button } from "@/components/ui/button"
import ImageUploadBox from '../../../components/ImageUploadBox'

export default function CNNDetectionPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDetection = () => {
    // Implement CNN detection logic here
    console.log("Running CNN detection on uploaded image")
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-start text-white">
            <div className="lg:w-3/5 mb-8 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                CNN Detection Method
              </h1>
              <p className="text-xl mb-6">
                Convolutional Neural Network (CNN) is an advanced deep learning algorithm specifically designed for image-like data. In pulsar detection, CNNs excel at identifying spatial patterns in spectral and time-series data, making them highly effective for complex signal analysis.
              </p>
              <p className="text-lg mb-6">
                Upload an image of a pulsar candidate&apos;s signal or spectrogram to run our CNN-based detection algorithm. Our model will analyze the image and provide a classification result.
              </p>
            </div>
            <div className="lg:w-1/2 lg:pl-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Image Upload</h2>
                <ImageUploadBox onImageUpload={(file) => {
                  setSelectedImage(URL.createObjectURL(file))
                }} />
                <Button
                  onClick={handleDetection}
                  className="w-full mt-6"
                  disabled={!selectedImage}
                >
                  Run CNN Detection
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

