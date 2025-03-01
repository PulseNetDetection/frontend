import Header from './Header'
import ColoredFooter from './ColoredFooter'
import StarsAnimation from './StarsAnimation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from 'react'

interface DetectionMethodTemplateProps {
  title: string;
  description: string;
}

export default function DetectionMethodTemplate({ title, description }: DetectionMethodTemplateProps) {
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
                {title}
              </h1>
              <p className="text-xl mb-6">
                {description}
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <form className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Input Parameters</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="param1" className="block text-sm font-medium mb-1">Parameter 1</label>
                    <Input id="param1" type="text" placeholder="Enter parameter 1" />
                  </div>
                  <div>
                    <label htmlFor="param2" className="block text-sm font-medium mb-1">Parameter 2</label>
                    <Input id="param2" type="text" placeholder="Enter parameter 2" />
                  </div>
                  <div>
                    <label htmlFor="param3" className="block text-sm font-medium mb-1">Parameter 3</label>
                    <Input id="param3" type="text" placeholder="Enter parameter 3" />
                  </div>
                  <Button type="submit" className="w-full">
                    Run Detection
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
      <ColoredFooter />
    </div>
  )
}

