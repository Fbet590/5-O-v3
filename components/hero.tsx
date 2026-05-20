import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <Image
        src="/images/hero-turf.jpg"
        alt="Beautiful backyard with artificial turf and paver patio"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-56 lg:px-8 lg:pb-72">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground/80">
            Premium Outdoor Solutions
          </p>
          <h1 className="font-serif font-black text-5xl leading-tight tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl text-balance">
            $10K. More Turf. More Pavers.{" "}
            <span className="relative inline-block">
              More Outdoor Space.
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 sm:h-5" 
                viewBox="0 0 200 12" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M2 8C20 4 40 10 60 6C80 2 100 10 120 5C140 1 160 9 180 4C190 2 198 6 198 6" 
                  stroke="url(#underlineGradient)" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  className="drop-shadow-lg"
                />
                <defs>
                  <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#4ade80" />
                    <stop offset="50%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{" "}
            Done.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90 max-w-xl">
            We handle everything from design to install — you just enjoy the result.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild className="text-base px-8">
              <Link href="#free-quote">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
