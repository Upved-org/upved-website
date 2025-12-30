"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    label: "Gatherings",
    href: "#gatherings",
    submenu: [
      { label: "Sunday Havan", href: "#gatherings" },
      { label: "Sandhya Practice", href: "#gatherings" },
      { label: "Special Events", href: "#gatherings" },
    ],
  },
  {
    label: "Our Dharma",
    href: "#dharma",
    submenu: [
      { label: "The Path", href: "#dharma" },
      { label: "14 Vedic Principles", href: "#dharma" },
      { label: "Vedic Teachers", href: "#teachers" },
    ],
  },
  { label: "Teachers", href: "#teachers" },
  { label: "RocketArm", href: "#rocketarm" },
  { label: "Visit", href: "#visit" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "glass border-b border-border/50 shadow-sm",
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Always visible with warm accent */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/upved-logo.png" alt="UPVED Logo" width={36} height={36} className="h-9 w-9 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-foreground">UPVED</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="h-3 w-3" />}
                </Link>

                {/* Submenu */}
                {item.submenu && openSubmenu === item.label && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="glass min-w-48 rounded-lg border border-border/50 p-2 shadow-lg">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - warm primary color */}
          <div className="hidden md:block">
            <Link
              href="#visit"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Plan Your Visit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="glass absolute left-0 right-0 top-16 border-b border-border/50 md:hidden">
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-foreground"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block rounded-md px-3 py-1.5 text-sm text-muted-foreground"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="#visit"
                  className="block rounded-full bg-primary px-5 py-2.5 text-center text-sm font-medium text-primary-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Plan Your Visit
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
