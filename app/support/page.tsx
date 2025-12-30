
"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, MapPin, ArrowRight, Check, Heart, Shield } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

const donationAmounts = [25, 50, 100, 250, 500]

export default function SupportPage() {
  // Connect Form State
  const [connectSubmitted, setConnectSubmitted] = useState(false)
  const [connectData, setConnectData] = useState({
    name: "",
    email: "",
    interest: "general",
    message: "",
  })

  // Donate Form State
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50)
  const [customAmount, setCustomAmount] = useState("")
  const [isMonthly, setIsMonthly] = useState(false)
  const [donateSubmitted, setDonateSubmitted] = useState(false)

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setConnectSubmitted(true)
  }

  const handleDonateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would integrate with Stripe
    setDonateSubmitted(true)
  }

  const displayAmount = selectedAmount === "custom" ? customAmount : selectedAmount

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Support & Connect</h1>
        <p className="text-muted-foreground">
          Whether you want to join our community or support our mission, we are glad you are here.
        </p>
      </div>

      <Tabs defaultValue="connect" className="w-full space-y-8">
        <TabsList className="bg-transparent p-0 gap-2">
          <TabsTrigger 
            value="connect" 
            className="px-6 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
          >
            Connect
          </TabsTrigger>
          <TabsTrigger 
            value="donate" 
            className="px-6 border border-transparent data-[state=active]:border-black data-[state=active]:bg-transparent data-[state=active]:shadow-none rounded-none border-b-2 data-[state=active]:border-primary data-[state=inactive]:border-b-transparent transition-all font-semibold"
          >
            Donate
          </TabsTrigger>
        </TabsList>

        <TabsContent value="connect" className="animate-in fade-in-50 duration-300">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-primary">Get in Touch</p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Connect With Us
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We'd love to hear from you. Whether you're interested in attending a gathering, have questions about our
                community, or want to get involved, reach out to us.
              </p>

              {/* Contact Info */}
              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:info@upved.org" className="mt-1 text-primary hover:underline">
                      info@upved.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Locations</h3>
                    <p className="mt-1 text-muted-foreground">San Mateo, CA</p>
                    <p className="text-muted-foreground">Austin, TX (Coming Soon)</p>
                  </div>
                </div>
              </div>

               {/* All Welcome Banner */}
              <div className="mt-12 rounded-2xl bg-primary/5 border border-primary/20 p-8 text-foreground">
                <h3 className="text-2xl font-semibold text-primary">All Are Welcome</h3>
                <p className="mt-3 text-muted-foreground">
                  Whether you're exploring spirituality for the first time or deepening an existing practice, our
                  community embraces diversity and encourages authentic seeking.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm">
              {connectSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-6">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">Thank You</h3>
                  <p className="mt-3 text-muted-foreground">
                    We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConnectSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={connectData.name}
                      onChange={(e) => setConnectData({ ...connectData, name: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={connectData.email}
                      onChange={(e) => setConnectData({ ...connectData, email: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground">
                      I'm Interested In
                    </label>
                    <select
                      id="interest"
                      value={connectData.interest}
                      onChange={(e) => setConnectData({ ...connectData, interest: e.target.value })}
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="havan">Sunday Havan</option>
                      <option value="sandhya">Sandhya Practice</option>
                      <option value="study">Vedic Study Circle</option>
                      <option value="wellness">Wellness Walks</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donate">Making a Donation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={connectData.message}
                      onChange={(e) => setConnectData({ ...connectData, message: e.target.value })}
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 text-base font-medium">
                    Send Message <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    By submitting, you agree to receive communications from UPVED.
                  </p>
                </form>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="donate" className="animate-in fade-in-50 duration-300">
           <div className="mx-auto max-w-3xl">
              {/* Header */}
              <div className="text-center mb-10">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-6">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Support UPVED
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Your generous contribution helps us maintain our gathering spaces, support community programs, and spread
                  the timeless wisdom of the Vedas.
                </p>
              </div>

              {donateSubmitted ? (
                <div className="mt-12 rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-foreground">Thank You</h3>
                  <p className="mt-3 text-muted-foreground">
                    Your donation of ${displayAmount} has been received. You will receive a tax receipt via email.
                  </p>
                  <Button 
                    className="mt-8 rounded-full px-8"
                    onClick={() => setDonateSubmitted(false)}
                  >
                    Donate Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleDonateSubmit} className="mt-8">
                  {/* Donation Type Toggle */}
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex rounded-full border border-border p-1 bg-muted/30">
                      <button
                        type="button"
                        onClick={() => setIsMonthly(false)}
                        className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                          !isMonthly ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        One-time
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsMonthly(true)}
                        className={`rounded-full px-6 py-2 text-sm font-medium transition-colors ${
                          isMonthly ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        Monthly
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
                    <label className="block text-sm font-medium text-foreground">Select Amount</label>
                    <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {donationAmounts.map((amount) => (
                        <button
                          key={amount}
                          type="button"
                          onClick={() => setSelectedAmount(amount)}
                          className={`rounded-xl border py-4 text-center font-semibold tabular-nums transition-colors ${
                            selectedAmount === amount
                              ? "border-black bg-primary/5 text-foreground ring-1 ring-black"
                              : "border-border text-foreground hover:border-black/50"
                          }`}
                        >
                          ${amount}
                        </button>
                      ))}
                      <button
                        type="button"
                        onClick={() => setSelectedAmount("custom")}
                        className={`rounded-xl border py-4 text-center font-medium transition-colors sm:col-span-5 ${
                          selectedAmount === "custom"
                            ? "border-black bg-primary/5 text-foreground ring-1 ring-black"
                            : "border-border text-foreground hover:border-black/50"
                        }`}
                      >
                        Custom Amount
                      </button>
                    </div>

                    {selectedAmount === "custom" && (
                      <div className="mt-4">
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                          <input
                            type="number"
                            min="1"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="w-full rounded-xl border border-border bg-background py-4 pl-8 pr-4 text-lg font-semibold tabular-nums text-foreground placeholder:text-muted-foreground focus:border-black focus:outline-none focus:ring-0"
                            placeholder="Enter amount"
                          />
                        </div>
                      </div>
                    )}

                    {/* Donor Info */}
                    <div className="mt-8 space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground">
                            First Name
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            required
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-black focus:outline-none focus:ring-0"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground">
                            Last Name
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            required
                            className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-black focus:outline-none focus:ring-0"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="donorEmail" className="block text-sm font-medium text-foreground">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="donorEmail"
                          required
                          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground focus:border-black focus:outline-none focus:ring-0"
                          placeholder="For your tax receipt"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={selectedAmount === "custom" && !customAmount}
                      className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Heart className="h-5 w-5" />
                      Donate ${displayAmount || "0"} {isMonthly && "Monthly"}
                    </button>

                    {/* Security Note */}
                    <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>Secure payment processing via Stripe</span>
                    </div>
                  </div>

                  {/* Tax Info */}
                  <div className="mt-8 rounded-xl bg-secondary/50 border border-border p-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Tax Deductible:</strong> UPVED is a registered 501(c)(3) religious
                      organization. Your donation is tax-deductible to the extent allowed by law. You will receive an email
                      receipt for your records.
                    </p>
                  </div>
                </form>
              )}
           </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
