'use client'

// import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from "@/lib/utils"

export default function Four() {
  // const [scrollPosition, setScrollPosition] = useState(0)

  const logos = [
    {
      src: "/images/company/company1.png",
      width: 180,
      height: 60
    },
    {
      src: "/images/company/company2.png",
      width: 120,
      height: 60
    },
    {
      src: "/images/company/company3.png",
      width: 200,
      height: 60
    },
    {
      src: "/images/company/company4.png",
      width: 160,
      height: 60
    },
    {
      src: "/images/company/company5.png",
      width: 180,
      height: 60
    }
  ]

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setScrollPosition((prev) => (prev + 1) % logos.length)
  //   }, 3000)

  //   return () => clearInterval(interval)
  // }, [logos.length])

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="relative flex items-center justify-center gap-8 md:gap-12">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className={cn(
                  "shrink-0 transition-transform duration-500 ease-in-out",
                  "grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                )}
                // style={{
                //   transform: `translateX(-${scrollPosition * 100}%)`,
                // }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent" />
        </div>
      </div>
    </div>
  )
}