'use client'

import * as React from "react"
import { Code, Smartphone, TestTubes } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function Services() {
  const [activeSlide, setActiveSlide] = React.useState(0)
  
  const services = [
    {
      icon: <Smartphone className="h-6 w-6 text-purple-600" />,
      title: "Mobile App Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Web Design & Development",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: <TestTubes className="h-6 w-6 text-purple-600" />,
      title: "Software Testing Service",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    },
    {
      icon: <Code className="h-6 w-6 text-purple-600" />,
      title: "Software Testing",
      description: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
    }
  ]

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length)
  }

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="py-16 px-4 bg-white">
      <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">Services we offer</h1>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "min-w-full transition-transform duration-500 ease-in-out",
                { "-translate-x-full": activeSlide > index },
                { "translate-x-full": activeSlide < index }
              )}
            >
              <div className={cn(
                "mx-auto max-w-md p-6 rounded-lg",
                activeSlide === index ? "border-2 border-purple-600" : ""
              )}>
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="rounded-full p-4 border-2 border-purple-600">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-purple-600">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                activeSlide === index ? "bg-purple-600" : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="flex justify-between items-center mt-8">
          <div className="text-sm text-purple-600 font-semibold">
            {String(activeSlide + 1).padStart(2, '0')}
          </div>
          <div className="flex-1 mx-4">
            <div className="h-0.5 bg-gray-300">
              <div
                className="h-full bg-purple-600 transition-all duration-500"
                style={{ width: `${((activeSlide + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
          <div className="text-sm text-purple-600 font-semibold">
            {String(services.length).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}