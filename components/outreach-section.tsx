import Image from "next/image"
import Link from "next/link"

export function OutreachSection() {
  return <section className="bg-secondary/55 py-24"><div className="mx-auto max-w-7xl px-6 lg:px-12"><div className="grid items-center gap-12 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Built locally</p><h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">The people closest to a place should shape its future.</h2><p className="mt-6 text-lg leading-8 text-muted-foreground">Our chapters bring residents, schools, scientists, and civic groups around the same table. We provide grants, training, tools, and a shared measurement framework; local teams lead the work.</p><Link href="/community" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">Meet the community</Link></div><div className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src="/group-hiking-nature-trail-morning-sunshine.webp" alt="Community members working together outdoors" fill className="object-cover" /></div></div></div></section>
}
