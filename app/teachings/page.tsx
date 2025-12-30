import { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Upved Teachings | UPVED",
  description: "Learn from our experienced teachers who guide the community in Vedic wisdom and spiritual practice.",
}

const teachers = [
  {
    name: "Acharya Vishwas",
    title: "Senior Acharya",
    description: "Leading the Agnihotra and guiding the community in the direct wisdom of the Vedas.",
    specialties: ["Vedic Scriptures", "Havan Rituals", "Sanskrit"],
  },
  {
    name: "Pandit Ramesh",
    title: "Ritual Specialist",
    description: "Pandit Ramesh brings deep knowledge of traditional ceremonies and helps community members perform sanskars and life rituals.",
    specialties: ["Sanskars", "Ceremonial Rituals", "Mantras"],
  },
  {
    name: "Dr. Priya Sharma",
    title: "Philosophy Teacher",
    description: "Dr. Sharma holds a PhD in Indian Philosophy and leads our Vedic Study Circle, making ancient wisdom accessible to modern seekers.",
    specialties: ["Vedanta", "Upanishads", "Comparative Religion"],
  },
]

export default function TeachingsPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      {/* Hero Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Upved Teachings
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Learn from ordained <strong>Acharyas</strong> who carry forward the lineage of the <strong>Brahmavarta Rishis</strong>.
        </p>
      </div>

      {/* Teachers Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {teachers.map((teacher) => (
          <Card key={teacher.name} className="overflow-hidden">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <span className="text-4xl font-bold text-primary/30">
                {teacher.name.split(" ").map(n => n[0]).join("")}
              </span>
            </div>
            <CardHeader>
              <CardTitle>{teacher.name}</CardTitle>
              <CardDescription>{teacher.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{teacher.description}</p>
              <div className="flex flex-wrap gap-2">
                {teacher.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-md"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Teaching Philosophy */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Teaching Philosophy</h2>
        <p className="text-muted-foreground mb-6">
          At UPVED, we follow the <strong>"Way of the Kurus"</strong>. True learning happens through study (<strong>Svadhyaya</strong>) 
          and vigorous action (<strong>Tapas</strong>). Our Acharyas act as mentors in the <strong>Akhada</strong> of life, 
          guiding you to become a "Warrior-Sage"—physically vital and spiritually awake.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/gatherings">Attend a Gathering</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/support">Contact Us</Link>
          </Button>
        </div>
      </div>

      {/* Study Programs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Vedic Study Circle</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Weekly group study of Vedic texts with discussion and Q&A. Perfect for those wanting deeper understanding.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Rocketarm Manual</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            Master the <strong>Rite of Urdhva Kanduka</strong> (Vertical Throw). A physical discipline to cultivate one-pointed focus.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Private Guidance</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground">
            One-on-one sessions with our teachers for personalized spiritual guidance and practice.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
