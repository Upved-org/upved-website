import Image from "next/image"
import { Calendar, Clock, MapPin } from "lucide-react"

const services = [
  {
    name: "Sunday Havan",
    description: "Sacred fire ceremony with Vedic mantras and offerings",
    time: "10:00 AM",
    duration: "90 min",
    recurring: "Every Sunday",
  },
  {
    name: "Sandhya Practice",
    description: "Twilight meditation and mantra recitation",
    time: "6:00 PM",
    duration: "60 min",
    recurring: "Wed & Fri",
  },
  {
    name: "Vedic Study Circle",
    description: "Deep dive into Upanishadic texts and Vedanta philosophy",
    time: "11:30 AM",
    duration: "45 min",
    recurring: "First Sunday",
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
  name: "Your Name", // Replace with your actual name
  role: "Founder & Lead Organizer",
  image: "/professional-headshot.png", // Replace with your photo path
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
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
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
                        <span className="rounded-full bg-accent/50 px-3 py-0.5 text-xs font-medium text-accent-foreground">
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
                        className="rounded-full object-cover"
                      />
                      <div>
                        <p className="text-sm font-medium text-foreground">{organizer.name}</p>
                        <p className="text-xs text-muted-foreground">{organizer.role}</p>
                      </div>
                    </div>

                    {/* RSVP Button - fixed to single row */}
                    <a
                      href="/connect"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
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
