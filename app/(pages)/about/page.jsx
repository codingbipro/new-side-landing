import Link from "next/link";

export default function About() {
    return (
        <div>
            <h1 className="text-2xl">About page</h1>
              <Link href="/"><img class="w-10 h-10 rounded-full" src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#"></img></Link>
        </div>
    );
}