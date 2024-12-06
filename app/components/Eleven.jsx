import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Eleven() {
  const resources = [
    {
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "/images/eleven/eleven1.png",
      link: "#",
    },
    {
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "/images/eleven/eleven2.png",
      link: "#",
    },
    {
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "/images/eleven/eleven1.png",
      link: "#",
    },
    {
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "/images/eleven/eleven3.png",
      link: "#",
    },
    {
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
      image: "/images/eleven/eleven1.png",
      link: "#",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="w-12 h-1 bg-purple-600 mx-auto mb-4"></div>
        <h2 className="text-3xl font-bold mb-2">Featured</h2>
        <h3 className="text-3xl font-bold">Resources</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              src={resource.image}
              alt={resource.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 line-clamp-2">{resource.title}</h4>
              <Link href={resource.link} className="text-purple-600 hover:text-purple-800 inline-flex items-center">
                Read More
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}