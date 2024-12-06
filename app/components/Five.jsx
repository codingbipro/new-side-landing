'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function Five() {
  const [activeIndex, setActiveIndex] = useState(2)

  const testimonials = [
    {
      name: "Romeena De Silva",
      role: "Janet Cosmetics",
      image: "/images/five/five1.jpg",
      quote: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."
    },
    {
      name: "Romeena De Silva",
      role: "Janet Cosmetics",
      image: "/images/five/five2.jpg",
      quote: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."
    },
    {
      name: "Imran Khan",
      role: "Software Engineer",
      image: "/images/five/five3.jpg",
      quote: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I've came across so far. Wouldn't be hesitated to introduce their work to someone else."
    }
  ]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why customers love
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
            working with us
          </h3>
        </div>

        {/* Quote */}
        <div className="relative max-w-3xl mx-auto mb-16 text-center">
          <Quote className="w-8 h-8 text-purple-600 mb-6 mx-auto" />
          <p className="text-lg text-gray-600">
            {testimonials[activeIndex].quote}
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="flex justify-center items-end gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "transition-all duration-300 flex flex-col items-center",
                  {
                    "scale-100 opacity-100": index === activeIndex,
                    "scale-90 opacity-50": Math.abs(index - activeIndex) === 1,
                    "scale-75 opacity-25": Math.abs(index - activeIndex) === 2,
                    "hidden": Math.abs(index - activeIndex) > 2
                  }
                )}
              >
                <div className="w-16 h-16 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-purple-600 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-purple-600 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Decorative Lines */}
          <div className="absolute bottom-0 left-1/4 w-16 h-16 border-l-2 border-b-2 border-dashed border-purple-300 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-1/4 w-16 h-16 border-r-2 border-b-2 border-dashed border-purple-300 rounded-br-3xl" />
        </div>
      </div>
    </div>
  )
}