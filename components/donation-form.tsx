"use client"

import { useState } from "react"
import { Heart, Check, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DonationForm() {
  const [donateSubmitted, setDonateSubmitted] = useState(false)
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(108)
  const [customAmount, setCustomAmount] = useState("")
  const [isMonthly, setIsMonthly] = useState(false)

  const donationAmounts = [25, 50, 108, 250, 500]
  
  const displayAmount =
    selectedAmount === "custom"
      ? customAmount || "0"
      : selectedAmount.toString()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDonateSubmitted(true)
    // In production: integrate with Stripe or payment processor
  }

  return (
    <div className="mx-auto max-w-3xl">
      {donateSubmitted ? (
        <div className="rounded-[12px] border border-border bg-card p-12 text-center shadow-sm">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Check className="h-8 w-8 text-primary" />
          </div>
          <h3 className="mt-6 text-2xl font-semibold">Thank You</h3>
          <p className="mt-3 text-muted-foreground">
            Your donation of ${displayAmount} has been received.          </p>
          <Button className="mt-8" onClick={() => setDonateSubmitted(false)}>
            Donate Again
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-md border border-border p-1 bg-muted/30">
              <button
                type="button"
                onClick={() => setIsMonthly(false)}
                className={`rounded-[4px] px-6 py-2 text-sm font-medium transition-colors ${
                  !isMonthly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                One-time
              </button>
              <button
                type="button"
                onClick={() => setIsMonthly(true)}
                className={`rounded-[4px] px-6 py-2 text-sm font-medium transition-colors ${
                  isMonthly ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          <div className="rounded-[12px] border border-border bg-card p-8 shadow-sm">
            <label className="block text-sm font-medium mb-4">Select Amount</label>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 mb-4">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setSelectedAmount(amount)}
                  className={`rounded-md border py-3 text-center font-semibold transition-colors ${
                    selectedAmount === amount
                      ? "border-foreground bg-primary/10 border-2"
                      : "border-border hover:border-foreground/50"
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setSelectedAmount("custom")}
              className={`w-full rounded-md border py-3 text-center font-medium transition-colors ${
                selectedAmount === "custom"
                  ? "border-foreground bg-primary/10 border-2"
                  : "border-border hover:border-foreground/50"
              }`}
            >
              Custom Amount
            </button>

            {selectedAmount === "custom" && (
              <div className="mt-4 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                <input
                  type="number"
                  min="1"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full rounded-[4px] border border-border bg-background py-3 pl-8 pr-4 text-lg font-semibold focus:border-foreground focus:outline-none"
                  placeholder="Enter amount"
                />
              </div>
            )}

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                required
                className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                required
                className="rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <input
              type="email"
              required
              className="mt-4 w-full rounded-[4px] border border-border bg-background px-4 py-3 focus:border-foreground focus:outline-none"
              placeholder="Email (for tax receipt)"
            />

            <Button
              type="submit"
              disabled={selectedAmount === "custom" && !customAmount}
              className="mt-8 w-full h-12"
            >
              <Heart className="h-5 w-5 mr-2" />
              Donate ${displayAmount || "0"} {isMonthly && "Monthly"}
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              <span>Secure payment via Stripe</span>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              UPVED is a registered 501(c)(3) nonprofit. Your donation is tax-deductible.
            </p>
          </div>
        </form>
      )}
    </div>
  )
}
