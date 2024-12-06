import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Three() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="w-20 h-1 bg-purple-600" />
              <h2 className="text-xl text-gray-600">Leading companies trust us</h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">to develop software</h1>
              <p className="text-gray-600 text-lg">
                We <span className="text-purple-600">add development capacity</span> to tech teams. Our value isn't limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.
              </p>
            </div>
            <Link
              href="#"
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold group"
            >
              See more Informations
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="data:image/jpeg;base64,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"
                alt="Team working together"
                width={600}
                height={400}
                className="w-full h-auto"
              />
              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 rounded-full p-4 text-white hover:bg-purple-700 transition-colors"
                aria-label="Play video"
              >
                <Play className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the People Section */}
      <div className="py-12">
        <div className="space-y-4">
          <div className="w-20 h-1 bg-purple-600" />
          <h2 className="text-2xl font-medium text-gray-600">Meet the People</h2>
          <div className="flex items-center justify-between">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">We are Working With</h3>
            <div className="flex gap-4">
              <button
                className="p-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}