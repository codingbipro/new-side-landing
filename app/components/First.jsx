import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function First() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Great <span className="text-purple-500">Product</span> is
            <br />
            <span className="text-gray-900">built by great </span>
            <span className="text-purple-400">teams</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            We help build and manage a team of world-class developers to bring your vision to life
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-md text-lg font-medium"
          >
            Let&apos;s get started!
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/images/1.png"
            alt="Team collaboration illustration"
            width={614}
            height={546}
            className="w-full h-auto"
            priority
          />
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-pulse" />
          <div className="absolute -right-4 bottom-1/4 w-6 h-6 bg-blue-500 rounded-full opacity-20 animate-pulse" />
          <div className="absolute left-1/4 -bottom-4 w-10 h-10 bg-pink-500 rounded-full opacity-20 animate-pulse" />
        </div>
      </div>
    </div>
  )
}