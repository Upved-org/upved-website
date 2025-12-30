"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, Mail, Phone, CheckCircle2 } from "lucide-react"

export function NewsletterSection() {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="bg-primary/5 py-12 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">You're on the list!</h3>
            <p className="text-muted-foreground max-w-md">
              Thank you for subscribing. You'll receive updates about our upcoming gatherings and community events.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-primary/5 py-16 border-y border-primary/10 relative overflow-hidden">
        {/* Decorative background elements */ }
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" 
             style={{ 
               backgroundImage: "radial-gradient(circle at 10% 20%, rgba(var(--primary-rgb), 0.1) 0%, transparent 20%)" 
             }} 
        />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          
          <div className="flex-1 text-center lg:text-left space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm font-medium text-primary shadow-sm border border-primary/20 mb-2">
              <Bell className="h-4 w-4" />
              <span>Never miss a gathering</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Stay Connected with <span className="text-primary">UPVED</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Get notified about upcoming Havan ceremonies, special events, and community updates straight to your inbox or phone.
            </p>
          </div>

          <div className="w-full max-w-md bg-background rounded-xl shadow-lg border border-border p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <Mail className="h-4 w-4" /> Email Address
                  </label>
                  <Input 
                    type="email" 
                    id="email" 
                    placeholder="you@example.com" 
                    required 
                    className="h-11"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-4 w-4" /> Phone Number (Optional)
                  </label>
                  <Input 
                    type="tel" 
                    id="phone" 
                    placeholder="(555) 123-4567" 
                    className="h-11"
                  />
                </div>

                <Button type="submit" className="w-full h-11 text-base font-medium" disabled={isLoading}>
                  {isLoading ? "Subscribing..." : "Subscribe for Updates"}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground pt-2">
                  We respect your privacy. Unsubscribe at any time.
                </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
