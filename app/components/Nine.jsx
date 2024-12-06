'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function Nine() {
  const categories = [
    'All',
    'Backend',
    'Frontend',
    'Databases',
    'CMS',
    'Cloud Testing',
    'DevOps',
  ]

  const technologies = [
    {  logo: '/images/nine/nodejs.png', category: 'Backend' },
    {  logo: '/images/nine/php.png?height=60&width=60', category: 'Backend' },
    {  logo: '/images/nine/mysqli.png', category: 'Databases' },
    {  logo: '/images/nine/Java.png', category: 'Backend' },
    {  logo: '/images/nine/NETCore.png', category: 'Backend' },
    {  logo: '/images/nine/Python.png', category: 'Backend' },
    {  logo: '/images/nine/RubyOnRails.png', category: 'Backend' },
    {  logo: '/images/nine/Go.png', category: 'CMS' },
    {  logo: '/images/nine/mon 1.png', category: 'Databases' },
    {  logo: '/images/nine/react.png?height=60&width=60', category: 'Frontend' },
    {  logo: '/images/nine/vue.png?height=60&width=60', category: 'Frontend' },
    {  logo: '/images/nine/wordpress.png?height=60&width=60', category: 'CMS' },
    {  logo: '/images/nine/selenium.png?height=60&width=60', category: 'Cloud Testing' },
    {  logo: '/images/nine/JMetter.png?height=60&width=60', category: 'Cloud Testing' },
    {  logo: '/images/nine/Docker.png?height=60&width=60', category: 'DevOps' },
    {  logo: '/images/nine/Kubernetes.png?height=60&width=60', category: 'DevOps' },
  ]

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTechnologies = activeCategory === 'All'
    ? technologies
    : technologies.filter((tech) => tech.category === activeCategory)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h3 className="text-3xl sm:text-4xl font-bold">Our Tech Stack</h3>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 transition-colors duration-200 ease-in-out
              ${
                activeCategory === category
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8">
        {filteredTechnologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-2 sm:p-4 transition-all duration-200 ease-in-out hover:scale-105"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative mb-2 sm:mb-4">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground text-center">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

