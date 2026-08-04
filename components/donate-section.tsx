import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"

export function DonateSection() {
  return <section id="donate" className="px-6 py-24 lg:px-12"><div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#c8e18f] p-9 md:p-14"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div className="max-w-3xl"><Heart className="h-8 w-8 text-primary"/><h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">Your gift becomes cleaner water, cooler streets, and living habitat.</h2><p className="mt-5 text-lg text-foreground/70">Fund practical work with long-term stewardship built in.</p></div><Link href="/support?tab=donate" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#173f32] px-6 py-3.5 font-semibold text-white">Fund impact <ArrowRight className="h-4 w-4" /></Link></div></div></section>
}
