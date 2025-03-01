'use client'

import { useState, useEffect } from 'react'
import Header from '../../../components/Header'
import ColoredFooter from '../../../components/ColoredFooter'
import StarsAnimation from '../../../components/StarsAnimation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ImageUploadBox from '../../../components/ImageUploadBox'

interface FormData {
  mean_profile: string;
  std_profile: string;
  kurtosis_profile: string;
  skewness_profile: string;
  mean_curve: string;
  std_curve: string;
  kurtosis_curve: string;
  skewness_curve: string;
}

export default function MultiModelDetectionPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState<FormData>({
    mean_profile: '',
    std_profile: '',
    kurtosis_profile: '',
    skewness_profile: '',
    mean_curve: '',
    std_curve: '',
    kurtosis_curve: '',
    skewness_curve: '',
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const isFormComplete = () => {
    return Object.values(formData).every(value => value.trim() !== '')
  }

  const handleDetection = () => {
    // Implement Multi-Model detection logic here
    console.log("Running Multi-Model detection", formData, selectedImage)
  }

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-center">
            Multi-Model Detection Method
          </h1>
          <p className="text-xl mb-8 text-white text-center max-w-3xl mx-auto">
            Our Multi-Model approach combines the strengths of Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN) to provide a comprehensive pulsar detection system. This method leverages both numerical parameters and image data for enhanced accuracy.
          </p>
          <div className="flex flex-col lg:flex-row items-start text-white gap-8">
            <div className="lg:w-1/2">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">ANN Parameters</h2>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                      <label htmlFor={key} className="block text-xs font-medium mb-1">
                        {key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                      </label>
                      <Input
                        id={key}
                        type="number"
                        step="any"
                        placeholder="Enter value"
                        className="text-sm"
                        value={value}
                        onChange={handleInputChange}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">CNN Image Upload</h2>
                <ImageUploadBox onImageUpload={(file) => {
                  setSelectedImage(URL.createObjectURL(file))
                }} />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Button
              onClick={handleDetection}
              className="px-8 py-3 text-lg"
              disabled={!isFormComplete() || !selectedImage}
            >
              Run Multi-Model Detection
            </Button>
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

