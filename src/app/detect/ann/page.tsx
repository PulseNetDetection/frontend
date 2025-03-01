'use client'

import Header from '../../../components/Header'
import ColoredFooter from '../../../components/ColoredFooter'
import StarsAnimation from '../../../components/StarsAnimation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'

export default function ANNDetectionPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_#0d1d31_0%,_#0c0d13_100%)]">
      <Header />
      {mounted && <StarsAnimation />}
      <main className="flex-grow pt-16 relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row items-start text-white">
            <div className="lg:w-3/5 mb-8 lg:mb-0 lg:pr-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                ANN Detection Method
              </h1>
              <p className="text-xl mb-6">
                Artificial Neural Network (ANN) is a powerful machine learning technique used for pulsar detection. It mimics the human brain&apos;s neural structure to identify patterns in astronomical data, enabling accurate classification of pulsar candidates.
              </p>
              <p className="text-lg mb-6">
                The ANN method analyzes various features of the pulsar signal, including characteristics of the Integrated Profile and the Dispersion Measure-Signal to Noise Ratio (DM-SNR) Curve. Input the required parameters to start the detection process.
              </p>
            </div>
            <div className="lg:w-2/5 lg:pl-8">
              <form className="bg-white bg-opacity-10 p-4 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Input Parameters</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="mean_profile" className="block text-xs font-medium mb-1">Mean (Integrated Profile)</label>
                    <Input id="mean_profile" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="std_profile" className="block text-xs font-medium mb-1">Std Dev (Integrated Profile)</label>
                    <Input id="std_profile" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="kurtosis_profile" className="block text-xs font-medium mb-1">Excess Kurtosis (Integrated Profile)</label>
                    <Input id="kurtosis_profile" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="skewness_profile" className="block text-xs font-medium mb-1">Skewness (Integrated Profile)</label>
                    <Input id="skewness_profile" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="mean_curve" className="block text-xs font-medium mb-1">Mean (DM-SNR Curve)</label>
                    <Input id="mean_curve" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="std_curve" className="block text-xs font-medium mb-1">Std Dev (DM-SNR Curve)</label>
                    <Input id="std_curve" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="kurtosis_curve" className="block text-xs font-medium mb-1">Excess Kurtosis (DM-SNR Curve)</label>
                    <Input id="kurtosis_curve" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                  <div>
                    <label htmlFor="skewness_curve" className="block text-xs font-medium mb-1">Skewness (DM-SNR Curve)</label>
                    <Input id="skewness_curve" type="number" step="any" placeholder="Enter value" className="text-sm" />
                  </div>
                </div>
                <Button type="submit" className="w-full mt-4">
                  Run ANN Detection
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

