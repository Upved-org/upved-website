import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    name: "Agnihotra",
    description: "Traditional Haryanvi-style fire ritual and Siddha-Vani discourse",
    time: "10:00 AM",
    duration: "90 min",
    recurring: "Every Sunday",
    href: "/gatherings?tab=sunday-havan",
  },
  {
    name: "Siddha-Vani",
    description: "Dharma discourse on the Kshatriya virtues of discipline and vitality",
    time: "11:30 AM",
    duration: "30 min",
    recurring: "Every Sunday",
    href: "/gatherings?tab=siddha-vani",
  },
  {
    name: "Rocketarm Fellowship",
    description: "The Rite of Urdhva Kanduka - Kinetic worship and focus",
    time: "Sat & Sun",
    duration: "Var",
    recurring: "Weekly",
    href: "/gatherings?tab=rocketarm",
  },
]

const locations = [
  {
    name: "San Mateo, CA",
    status: "active",
    address: "Private residence — address provided upon RSVP",
  },
  {
    name: "Austin, TX",
    status: "coming-soon",
    address: "Coming Soon",
  },
]

const organizer = {
  name: "Nitin Arya", // Replace with your actual name
  role: "Founder & Lead Organizer",
  image: "/narya-small.webp", // Replace with your photo path
}

export function GatheringSection() {
  return (
    <section id="gatherings" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Regular Gatherings</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Sunday Havan & Sandhya
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Join us for weekly rituals that connect us to the eternal wisdom of the Vedas. Our gatherings are open to
            all seekers, regardless of background.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-[12px] border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 text-primary">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">{service.recurring}</span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-foreground">{service.name}</h3>
              <p className="mt-2 text-muted-foreground">{service.description}</p>

              <div className="mt-8 flex items-center gap-6 border-t border-border pt-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium tabular-nums text-foreground">{service.time}</span>
                </div>
                <div className="text-sm text-muted-foreground">{service.duration}</div>
              </div>

              {/* Learn More Button */}
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  <Link href={service.href} className="gap-2">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.name} className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <div className="flex flex-col gap-6">
                {/* Location Info */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                    <MapPin className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-foreground">{location.name}</h3>
                      {location.status === "coming-soon" && (
                        <span className="rounded-md bg-orange-200 px-2 py-1 text-xs font-medium text-orange-800 whitespace-nowrap">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-muted-foreground">{location.address}</p>
                  </div>
                </div>

                {/* Organizer and RSVP - only show for active locations */}
                {location.status === "active" && (
                  <div className="flex items-center justify-between border-t border-border pt-6">
                    {/* Organizer Info */}
                    <div className="flex items-center gap-3">
                      <Image
                        src={organizer.image || "/placeholder.svg"}
                        alt={organizer.name}
                        width={48}
                        height={48}
                        className="rounded-[12px] object-cover shadow-sm"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{organizer.name}</p>
                        <p className="text-xs text-muted-foreground">{organizer.role}</p>
                      </div>
                    </div>

                    {/* RSVP Button - fixed to single row */}
                    <a
                      href="/events"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
                    >
                      RSVP Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
