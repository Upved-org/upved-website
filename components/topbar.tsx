"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, PanelLeftClose, PanelLeftOpen, Heart } from "lucide-react"
import { useSidebar } from "./sidebar-provider"

export function Topbar() {
  const { isOpen, toggle } = useSidebar()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background">
      <div className="flex h-full items-center px-4 lg:px-6 justify-between">
        {/* Left side: Logo + Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/upved-logo-nobg.webp" alt="UPVED Logo" width={40} height={40} className="h-10 w-10 object-contain" />
            <span className="text-xl font-bold tracking-tight text-foreground">UPVED</span>
          </Link>

          <button
            onClick={toggle}
            className="hidden md:flex items-center justify-center p-2 text-gray-500 hover:text-black dark:hover:text-white transition-colors rounded-md"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? <PanelLeftClose size={20} /> : <PanelLeftOpen size={20} />}
          </button>
        </div>

        {/* Center: Optional tagline on desktop */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          {/* <span className="text-sm text-muted-foreground">Ancient Wisdom, Modern Rituals</span> */}
        </div>

        {/* Right side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/#donate"
            className="hidden sm:inline-flex items-center gap-2 justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Heart size={16} />
            Donate
          </Link>

          {/* Mobile sidebar toggle */}
          <button
            onClick={toggle}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
