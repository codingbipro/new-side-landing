import { Code, ShieldCheck, Sparkles, Star, TestTube, Zap } from 'lucide-react'

export default function Eight() {
  const approaches = [
    {
      icon: Zap,
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-pink-100",
    },
    {
      icon: Code,
      title: "Developing Shared Understanding",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-blue-100",
    },
    {
      icon: Sparkles,
      title: "Proven Experience and Expertise",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-pink-100",
    },
    {
      icon: ShieldCheck,
      title: "Security & Intellectual Property (IP)",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-green-100",
    },
    {
      icon: Star,
      title: "Code Reviews",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-orange-100",
    },
    {
      icon: TestTube,
      title: "Quality Assurance & Testing",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
      color: "bg-purple-100",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Our design and</h2>
      <h2 className="text-3xl font-bold text-center mb-12">development approach</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {approaches.map((approach, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className={`w-12 h-12 ${approach.color} rounded-lg flex items-center justify-center mb-4`}>
              <approach.icon className="w-6 h-6 text-gray-800" />
            </div>
            <h3 className="text-xl font-semibold mb-2">{approach.title}</h3>
            <p className="text-gray-600">{approach.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}