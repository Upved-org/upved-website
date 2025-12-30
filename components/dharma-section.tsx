import { Check } from "lucide-react"

const principles = [
  "God is the primary source of all true knowledge",
  "God is existence, intelligence, and bliss",
  "The Vedas are the scriptures of all true knowledge",
  "We should always be ready to accept truth",
  "We should always be ready to renounce untruth",
  "All actions should be performed with righteousness",
  "The goal is to do good to the world",
  "We should treat all with love, righteousness, and justice",
  "We should dispel ignorance and promote knowledge",
  "We should not be satisfied with our own advancement alone",
  "We should follow the social laws for the benefit of all",
  "Individual liberty should not harm social welfare",
  "Social welfare should enhance individual liberty",
  "All persons should practice what is beneficial for all",
]

export function DharmaSection() {
  return (
    <section id="dharma" className="bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary-foreground/70">The Path</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Our Dharma</h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            UPVED stands in the lineage of Vedanta and the Arya Samaj tradition, founded on the eternal principles
            revealed in the Vedas. Our practice emphasizes direct knowledge, ethical conduct, and the unity of all
            existence.
          </p>
        </div>

        {/* Lineage Section */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">The Upved/Vedanta Lineage</h3>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              Our spiritual foundation rests upon the Arya Samaj movement, which seeks to return to the pure,
              monotheistic teachings of the Vedas. We honor the reformist vision of Swami Dayananda Saraswati while
              adapting these timeless teachings for contemporary seekers.
            </p>
            <p className="mt-4 leading-relaxed text-primary-foreground/80">
              The term "Upved" points to the auxiliary knowledge systems that support Vedic understanding—integrating
              philosophy, practice, and community service into a coherent spiritual path.
            </p>
            <div className="mt-8 flex gap-8 border-t border-primary-foreground/20 pt-8">
              <div>
                <p className="text-3xl font-semibold tabular-nums">14</p>
                <p className="mt-1 text-sm text-primary-foreground/70">Vedic Principles</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tabular-nums">1875</p>
                <p className="mt-1 text-sm text-primary-foreground/70">Tradition Founded</p>
              </div>
              <div>
                <p className="text-3xl font-semibold tabular-nums">∞</p>
                <p className="mt-1 text-sm text-primary-foreground/70">Vedic Wisdom</p>
              </div>
            </div>
          </div>

          {/* 14 Principles */}
          <div className="rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 p-8">
            <h3 className="text-lg font-semibold">The 14-Point Vedic Tradition</h3>
            <div className="mt-6 space-y-3">
              {principles.map((principle, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-primary-foreground/20">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <p className="text-sm leading-relaxed text-primary-foreground/90">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
