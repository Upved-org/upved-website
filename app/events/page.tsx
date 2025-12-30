import { Metadata } from "next"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Events | UPVED",
  description: "Join our upcoming gatherings, rituals, and community events.",
}

/**
 * Event Data Structure
 * ====================
 * To add/remove events, simply modify the `events` array below.
 * - `id`: Unique identifier.
 * - `name`: Display name of the event.
 * - `date`: Human-readable date string (e.g., "Every Sunday", "Jan 15, 2025", "Coming Soon").
 * - `time`: Time of the event, or "TBD" / "Varies".
 * - `location`: Physical location.
 * - `description`: Short event description.
 * - `type`: "ritual" | "discourse" | "fellowship" | "community" (for visual categorization).
 * - `status`: "upcoming" | "past".
 * - `recurring`: (Optional) If true, this is a repeating event.
 * - `detailsHref`: (Optional) Link to more details (e.g., `/gatherings?tab=sunday-havan`).
 */
type Event = {
  id: string
  name: string
  date: string
  time: string
  location: string
  description: string
  type: "ritual" | "discourse" | "fellowship" | "community"
  status: "upcoming" | "past"
  recurring?: boolean
  detailsHref?: string
}

const events: Event[] = [
  {
    id: "agnihotra",
    name: "Brahmavarta Agnihotra",
    date: "Every Sunday",
    time: "10:00 AM",
    location: "San Mateo Sanctuary",
    description: "Traditional Haryanvi-style fire ritual. Open to all.",
    type: "ritual",
    status: "upcoming",
    recurring: true,
    detailsHref: "/gatherings?tab=sunday-havan",
  },
  {
    id: "siddha-vani",
    name: "Siddha-Vani Discourse",
    date: "Every Sunday",
    time: "11:30 AM",
    location: "San Mateo Sanctuary",
    description: "Practical application of Vedic wisdom for modern life.",
    type: "discourse",
    status: "upcoming",
    recurring: true,
    detailsHref: "/gatherings?tab=siddha-vani",
  },
  {
    id: "rocketarm",
    name: "Rocketarm Fellowship",
    date: "Weekly (Sat/Sun)",
    time: "Varies",
    location: "Outdoor Field",
    description: "The Rite of Urdhva Kanduka. Kinetic worship practice.",
    type: "fellowship",
    status: "upcoming",
    recurring: true,
    detailsHref: "/gatherings?tab=rocketarm",
  },
  {
    id: "wellness-walk",
    name: "Community Wellness Walk",
    date: "Coming Soon",
    time: "TBD",
    location: "Coyote Point",
    description: "Mindful walking meditation in nature. Join us for Parikrama.",
    type: "community",
    status: "upcoming",
    recurring: true,
    detailsHref: "/community?tab=wellness-walks",
  },
  {
    id: "winter-solstice",
    name: "Winter Solstice Havan",
    date: "Dec 21, 2024",
    time: "5:00 PM",
    location: "San Mateo Sanctuary",
    description: "Special gathering to celebrate the return of the light.",
    type: "ritual",
    status: "past",
  },
]

export default function EventsPage() {
  const upcomingEvents = events.filter((e) => e.status === "upcoming")
  const pastEvents = events.filter((e) => e.status === "past")

  return (
    <div className="container mx-auto py-12 px-4 md:px-6 max-w-5xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground mt-2">
            Join our community in prayer, practice, and fellowship.
          </p>
        </div>
        <Button asChild>
           <Link href="https://calendar.google.com/calendar/r" target="_blank">
            Subscribe to Calendar
          </Link>
        </Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-6 md:mb-8 flex justify-center flex-wrap">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="pt-6 space-y-4 animate-in fade-in-50 duration-300">
          <div className="rounded-md border border-border">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={cn(
                  "flex flex-col md:flex-row md:items-center gap-4 p-6 transition-colors hover:bg-muted/50",
                  index !== upcomingEvents.length - 1 && "border-b border-border"
                )}
              >
                <div className="md:w-1/4">
                    <p className="text-[15px] font-semibold text-foreground">{event.name}</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                        <span className="inline-block w-2 h-2 rounded-full bg-primary/60"></span>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        {event.recurring && <span className="text-xs opacity-70">(Recurring)</span>}
                    </div>
                </div>
                
                <div className="md:w-1/4">
                    <p className={cn("text-sm font-medium", event.date === "Coming Soon" ? "text-primary" : "text-muted-foreground/80")}>{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.time}</p>
                </div>

                <div className="md:w-2/4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                    <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground/70">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                    </div>
                </div>

                <div className="md:w-auto flex items-center gap-3 mt-2 md:mt-0">
                    <Link 
                        href="#" 
                        className="text-sm font-medium text-primary hover:text-primary/80 whitespace-nowrap"
                    >
                        Add to Calendar
                    </Link>
                    {event.detailsHref ? (
                      <Button size="sm" variant="outline" className="h-8" asChild>
                        <Link href={event.detailsHref}>View Details</Link>
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" className="h-8" disabled>
                        View Details
                      </Button>
                    )}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4 animate-in fade-in-50 duration-300">
            <div className="rounded-md border border-border bg-muted/20">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id} 
                className={cn(
                  "flex flex-col md:flex-row md:items-center gap-4 p-6 opacity-75",
                  index !== pastEvents.length - 1 && "border-b border-border"
                )}
              >
                <div className="md:w-1/4">
                    <p className="text-[15px] font-semibold text-foreground">{event.name}</p>
                </div>
                
                <div className="md:w-1/4">
                    <p className="text-sm font-medium text-muted-foreground/80">{event.date}</p>
                </div>

                <div className="md:w-2/4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                </div>

                <div className="md:w-auto">
                    <Button size="sm" variant="outline" className="h-8" disabled>
                        Archived
                    </Button>
                </div>
              </div>
            ))}
            {pastEvents.length === 0 && (
                <div className="p-12 text-center text-muted-foreground">
                    No past events to show.
                </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
