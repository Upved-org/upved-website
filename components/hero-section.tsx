import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, ShieldCheck } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#173f32] text-white">
      <Image src="/environment-forest-hero.jpg" alt="Sunlight moving through a healthy forest" fill priority className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#12382e] via-[#173f32]/85 to-[#173f32]/25" />
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-24 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm backdrop-blur">
            <Leaf className="h-4 w-4 text-[#c8e18f]" /> Science-led. Community-powered.
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            A livable future is something we build together.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
            UPVED funds and delivers practical environmental solutions—from habitat restoration and clean-water projects to climate education and local leadership.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/join" className="inline-flex items-center gap-2 rounded-full bg-[#c8e18f] px-6 py-3.5 font-semibold text-[#173f32] transition hover:bg-white">
              Take action <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/dharma" className="inline-flex items-center rounded-full border border-white/45 bg-white/5 px-6 py-3.5 font-semibold backdrop-blur transition hover:bg-white/15">
              Explore our impact model
            </Link>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/75">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#c8e18f]" /> Evidence-based programs</span>
            <span>Transparent reporting</span><span>Local partnerships</span>
          </div>
        </div>
      </div>
    </section>
  )
}
