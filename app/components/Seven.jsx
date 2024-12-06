import Image from "next/image"

export default function Seven() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-16">
        Way of building
        <span className="block text-primary">Great Software</span>
      </h1>

      <div className="space-y-24">
        {/* First Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Build the right team to scale</h2>
            <p className="text-muted-foreground">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your
              processes, and sticks with you long term (not the case with freelancers).
            </p>
            <p className="text-muted-foreground">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              &quot;Simform is quick to identify larger problem with the Software so we can together figure out how to
              solve them.&quot;
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/seven/seven2.jpg?height=40&width=40"
                alt="Profile"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="font-medium">Jeewa markram</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/seven/sevent1.png?height=300&width=400"
              alt="Team collaboration"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Build the right team to scale</h2>
            <p className="text-muted-foreground">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your
              processes, and sticks with you long term (not the case with freelancers).
            </p>
            <p className="text-muted-foreground">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              &quot;Simform is quick to identify larger problem with the Software so we can together figure out how to
              solve them.&quot;
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/seven/seven2.jpg?height=40&width=40"
                alt="Profile"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="font-medium">Jeewa markram</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/seven/sevent2.png?height=300&width=400"
              alt="Team working"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>

        {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold">Build the right team to scale</h2>
            <p className="text-muted-foreground">
              Finding the right talent is not easy. We help you find the talent that suits your needs, follows your
              processes, and sticks with you long term (not the case with freelancers).
            </p>
            <p className="text-muted-foreground">
              Our delivery model helps you cut costs and deliver within budget.
            </p>
            <div className="border-l-4 border-primary pl-4 italic text-muted-foreground">
              &quot;Simform is quick to identify larger problem with the Software so we can together figure out how to
              solve them.&quot;
            </div>
            <div className="flex items-center gap-4">
              <Image
                src="/images/seven/seven2.jpg?height=40&width=40"
                alt="Profile"
                className="rounded-full"
                width={40}
                height={40}
              />
              <span className="font-medium">Jeewa markram</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/seven/sevent3.png?height=300&width=400"
              alt="Team meeting"
              className="rounded-lg"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}