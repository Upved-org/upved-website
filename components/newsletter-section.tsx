import { ArrowRight } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="border-b border-border bg-[#e5efd4] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 md:flex-row md:items-center">
        <div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Field notes</p><h2 className="mt-1 text-2xl font-semibold">One useful climate action, every month.</h2></div>
        <form className="flex w-full max-w-md gap-2"><label htmlFor="impact-email" className="sr-only">Email address</label><input id="impact-email" type="email" placeholder="you@example.com" className="min-w-0 flex-1 rounded-full border border-primary/20 bg-white px-5 py-3 outline-none focus:ring-2 focus:ring-primary" /><button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-medium text-primary-foreground">Subscribe <ArrowRight className="h-4 w-4" /></button></form>
      </div>
    </section>
  )
}
