import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Hero Text Content - Clean white background for maximum readability */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-primary">UPVED Foundation</p>
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Ancient Wisdom,
            <br />
            Modern Rituals.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A Vedic spiritual community rooted in the Arya Samaj tradition. We gather to practice timeless rituals that
            illuminate the path to self-knowledge.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#visit"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:scale-105 shadow-sm"
            >
              Plan Your Visit
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#gatherings"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-8 py-4 text-sm font-medium text-foreground transition-all hover:bg-muted shadow-sm"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
          <div className="aspect-[21/9] w-full">
            <Image
              src="/upved-havan.webp"
              alt="UPVED community gathering around sacred havan fire"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-white/20">
            <div className="flex flex-col justify-between gap-6 px-8 py-6 sm:flex-row sm:items-center">
              <div className="flex gap-12">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Next Gathering</p>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-foreground">Sunday, 10:00 AM</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Location</p>
                  <p className="mt-1 text-lg font-semibold text-foreground">San Mateo, CA</p>
                </div>
              </div>
              <p className="text-sm text-primary font-semibold uppercase tracking-wider">All Are Welcome</p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-24 bg-gradient-to-b from-background to-muted/30" />
    </section>
  )
}
