import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Droplets, GraduationCap, Sprout } from "lucide-react"

const programs = [
  { icon: Sprout, title: "Restore", text: "Rebuild native habitats and reconnect fragmented ecosystems with long-term local stewardship." },
  { icon: Droplets, title: "Protect", text: "Improve watershed health through monitoring, cleanup, green infrastructure, and public advocacy." },
  { icon: GraduationCap, title: "Equip", text: "Give students and community leaders the tools to turn environmental knowledge into durable action." },
]

export function GatheringSection() {
  return (
    <section id="programs" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">What we do</p><h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">From good intentions to visible change.</h2></div>
          <p className="max-w-2xl text-lg leading-8 text-muted-foreground">We concentrate resources where community knowledge and environmental science meet. Every program has a defined outcome, local partner, and transparent way to measure progress.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">{programs.map(({icon: Icon, title, text}, index) => <article key={title} className="group rounded-3xl border bg-card p-7 transition hover:-translate-y-1 hover:shadow-xl"><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary"><Icon className="h-6 w-6 text-primary" /></span><span className="text-sm text-muted-foreground">0{index + 1}</span></div><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-3 leading-7 text-muted-foreground">{text}</p></article>)}</div>
        <div className="mt-8 overflow-hidden rounded-3xl bg-[#173f32] text-white"><div className="grid lg:grid-cols-2"><div className="relative min-h-80"><Image src="/environment-restoration.jpg" alt="Hands planting a young seedling" fill className="object-cover" /></div><div className="flex flex-col justify-center p-8 lg:p-14"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#c8e18f]">Featured program</p><h3 className="mt-3 text-3xl font-semibold">Neighborhood Canopy Initiative</h3><p className="mt-4 leading-7 text-white/75">A community-led effort to plant climate-ready trees in heat-vulnerable neighborhoods and care for them through their critical first three years.</p><Link href="/gatherings" className="mt-8 inline-flex items-center gap-2 font-semibold text-[#c8e18f]">See all programs <ArrowUpRight className="h-4 w-4" /></Link></div></div></div>
      </div>
    </section>
  )
}
