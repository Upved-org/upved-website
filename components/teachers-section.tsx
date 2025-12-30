import Image from "next/image"

const vedicTeachers = [
  {
    name: "Swami Dayananda Saraswati",
    title: "Founder of Arya Samaj",
    era: "1824–1883",
    contribution: "Pioneered the return to Vedic principles and established the foundation for modern Vedic reform",
    image: "/swami-dayananda-saraswati-portrait-historical.jpg",
  },
  {
    name: "Swami Vivekananda",
    title: "Vedanta Ambassador",
    era: "1863–1902",
    contribution: "Brought Vedantic philosophy to the global stage and emphasized practical spirituality",
    image: "/swami-vivekananda-portrait-historical.jpg",
  },
  {
    name: "Sri Aurobindo",
    title: "Integral Yoga Pioneer",
    era: "1872–1950",
    contribution: "Synthesized Eastern and Western philosophy, advancing integral approaches to spiritual evolution",
    image: "/sri-aurobindo-portrait-historical.jpg",
  },
  {
    name: "Pandit Guru Dutt Vidyarthi",
    title: "Arya Samaj Scholar",
    era: "1864–1890",
    contribution: "Authored foundational texts defending Vedic principles and advancing educational reform",
    image: "/pandit-guru-dutt-portrait-historical.jpg",
  },
]

const vedicTexts = [
  {
    name: "Rigveda",
    description: "The oldest Vedic text, containing hymns dedicated to the divine forces of nature and consciousness",
  },
  {
    name: "Yajurveda",
    description: "Contains the mantras and procedures for sacred rituals and ceremonies including Havan",
  },
  {
    name: "Samaveda",
    description: "The Veda of melodies, preserving the musical rendering of Vedic hymns",
  },
  {
    name: "Atharvaveda",
    description: "Practical wisdom for daily life, healing, and philosophical inquiry",
  },
]

export function TeachersSection() {
  return (
    <section id="teachers" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Our Lineage</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Vedic Teachers & Traditions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We honor the great teachers who preserved and transmitted Vedic wisdom through the ages. Their teachings
            form the foundation of our practice and community.
          </p>
        </div>

        {/* Vedic Texts */}
        <div className="mt-16">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">The Four Vedas</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vedicTexts.map((text) => (
              <div
                key={text.name}
                className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md"
              >
                <h4 className="text-lg font-semibold text-foreground">{text.name}</h4>
                <p className="mt-2 text-sm text-muted-foreground">{text.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="mt-20">
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Arya Samaj & Vedanta Teachers
          </h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {vedicTeachers.map((teacher) => (
              <div key={teacher.name} className="group">
                <div className="aspect-square overflow-hidden rounded-2xl bg-muted">
                  <Image
                    src={teacher.image || "/placeholder.svg"}
                    alt={teacher.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-foreground">{teacher.name}</h4>
                  <p className="text-sm text-primary">{teacher.title}</p>
                  <p className="text-xs text-muted-foreground tabular-nums">{teacher.era}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{teacher.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
