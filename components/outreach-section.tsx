import Image from "next/image"
import Link from "next/link"
import { Calendar, ExternalLink, Users } from "lucide-react"

const programs = [
  {
    name: "Wellness Walks",
    description: "Monthly hikes connecting body, mind, and nature as spiritual practice",
    schedule: "First Saturday of each month",
    image: "/group-hiking-nature-trail-morning-sunshine.jpg",
    href: "/outreach/wellness-walks",
    cta: "Learn More",
  },
  {
    name: "RocketArm Challenge",
    description: "Community sports competition - who can throw the ball highest in the air?",
    schedule: "Quarterly Events",
    image: "/people-throwing-ball-sky-outdoor-sports.jpg",
    href: "https://rocketarm.org",
    external: true,
    cta: "Visit RocketArm.org",
  },
  {
    name: "Youth Sports",
    description: "Developing skills and character through team sports for young community members",
    schedule: "Coming Soon",
    image: "/youth-sports-kids-playing-outdoor-field.jpg",
    comingSoon: true,
    cta: "Coming Soon",
  },
]

export function OutreachSection() {
  return (
    <section id="outreach" className="bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
              <Users className="h-5 w-5 text-primary-foreground" />
            </div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Community Outreach</p>
          </div>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Physical Dharma & Fellowship
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The body is a temple. Our outreach programs combine physical activity with spiritual fellowship, building
            connections through wellness and community sports.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {programs.map((program) => (
            <div
              key={program.name}
              className={`group overflow-hidden rounded-2xl border border-border bg-background ${program.comingSoon ? "opacity-75" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={program.image || "/placeholder.svg"}
                  alt={program.name}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">{program.name}</h3>
                  {program.comingSoon && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Soon
                    </span>
                  )}
                </div>
                <p className="mt-2 text-muted-foreground">{program.description}</p>
                <div className="mt-4 flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium tabular-nums text-foreground">{program.schedule}</span>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  {program.comingSoon ? (
                    <span className="inline-flex items-center justify-center rounded-full border border-border px-5 py-2 text-sm font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  ) : program.external ? (
                    <a
                      href={program.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {program.cta}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <Link
                      href={program.href || "#"}
                      className="inline-flex items-center justify-center rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      {program.cta}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
