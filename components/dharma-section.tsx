import Link from "next/link"
import { ArrowRight } from "lucide-react"

const metrics = [{value:"42", label:"acres under restoration"},{value:"18K", label:"native plants established"},{value:"2.4M", label:"gallons of runoff managed"},{value:"1,260", label:"volunteer hours activated"}]

export function DharmaSection() {
  return <section className="bg-[#173f32] py-24 text-white lg:py-32"><div className="mx-auto max-w-7xl px-6 lg:px-12"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c8e18f]">Impact, accounted for</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Measure what matters. Share what we learn.</h2></div><div><p className="text-lg leading-8 text-white/70">We track ecological outcomes, community participation, and long-term resilience—not just activities completed. Our methods evolve with the evidence and the people closest to the work.</p><Link href="/dharma" className="mt-7 inline-flex items-center gap-2 font-semibold text-[#c8e18f]">How our model works <ArrowRight className="h-4 w-4" /></Link></div></div><div className="mt-16 grid grid-cols-2 border-y border-white/15 md:grid-cols-4">{metrics.map(m => <div key={m.label} className="border-white/15 p-6 first:pl-0 md:border-r"><div className="text-4xl font-semibold text-[#c8e18f]">{m.value}</div><p className="mt-2 text-sm text-white/65">{m.label}</p></div>)}</div><p className="mt-5 text-xs text-white/45">Illustrative 2026 program targets; verified results are published in annual impact reports.</p></div></section>
}
