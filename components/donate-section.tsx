import { Heart } from "lucide-react"
import { DonationForm } from "@/components/donation-form"

export function DonateSection() {
  return (
    <section id="donate" className="relative py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center rounded-md bg-primary/10 px-4 py-2 mb-6">
            <Heart className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Support Our Mission</span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">
            Give the Gift of Vedic Wisdom
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
            Your generous support helps us maintain our sanctuary, host weekly gatherings, and spread the timeless teachings of the Vedas to communities across the United States.
          </p>
        </div>

        {/* Donation Form */}
        <DonationForm />
      </div>
    </section>
  )
}
