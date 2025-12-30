import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, BookOpen, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[12px] bg-primary/10 mb-6">
          <Users className="h-7 w-7 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          About UPVED
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A Vedic spiritual community rooted in the Arya Samaj tradition, bringing ancient wisdom to modern life.
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-8">
        <CardContent className="pt-8 pb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            UPVED (Universal Path to Vedic Education and Devotion) is dedicated to preserving and sharing the timeless wisdom of the Vedas. We provide a welcoming space for spiritual seekers from all backgrounds to explore Vedic philosophy, engage in sacred rituals, and build meaningful community connections.
          </p>
        </CardContent>
      </Card>

      {/* Core Values */}
      <div className="grid gap-6 md:grid-cols-2 mb-12">
        <Card>
          <CardContent className="pt-6">
            <Heart className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Truth & Compassion</h3>
            <p className="text-sm text-muted-foreground">
              We uphold the Arya Samaj principles of seeking truth through knowledge and practicing compassion in all our interactions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <BookOpen className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Education & Learning</h3>
            <p className="text-sm text-muted-foreground">
              We provide accessible teachings from the Vedas, Upanishads, and other sacred texts to foster spiritual growth and understanding.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Users className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Inclusive Community</h3>
            <p className="text-sm text-muted-foreground">
              We welcome all seekers regardless of background, belief, or experience level. Everyone is invited to learn and grow with us.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <Globe className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Modern Adaptation</h3>
            <p className="text-sm text-muted-foreground">
              We honor tradition while adapting ancient wisdom for contemporary life, making Vedic teachings relevant and accessible today.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* History */}
      <Card className="mb-8">
        <CardContent className="pt-8 pb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              UPVED was founded with a vision to create accessible spiritual communities across the United States, rooted in the reformist principles of the Arya Samaj movement.
            </p>
            <p>
              Starting with weekly gatherings in San Mateo, California, we have grown into a vibrant community that practices Vedic rituals, studies sacred texts, and supports one another on the spiritual path.
            </p>
            <p>
              Today, we continue to expand our reach while maintaining the intimate, family-friendly atmosphere that defines our gatherings. We are committed to being a beacon of Vedic wisdom and community connection for generations to come.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Founder */}
      <Card className="mb-8">
        <CardContent className="pt-8 pb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <Image 
                  src="/narya.webp" 
                  alt="Nitin Arya - Founder" 
                  width={128} 
                  height={128} 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-semibold mb-2">Nitin Arya</h2>
              <p className="text-primary font-medium mb-3">Founder & Lead Organizer</p>
              <p className="text-muted-foreground leading-relaxed">
                Nitin founded UPVED with a vision to make Vedic wisdom accessible to modern seekers. 
                With deep roots in the Arya Samaj tradition, he leads our community gatherings and 
                teaches practical applications of Vedic philosophy.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Leadership */}
      <Card>
        <CardContent className="pt-8 pb-8">
          <h2 className="text-2xl font-semibold mb-4">Leadership & Governance</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            UPVED is a 501(c)(3) nonprofit organization governed by a dedicated board of directors who ensure our mission and values are upheld in all activities.
          </p>
          <Link
            href="/support?tab=governance"
            className="text-primary hover:underline font-medium"
          >
            Learn more about our governance →
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
