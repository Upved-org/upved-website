"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X, PanelLeft } from "lucide-react"
import { useSidebar } from "./sidebar-provider"

export function Topbar() {
  const { isOpen, toggle } = useSidebar()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-background">
      <div className="flex h-full items-center px-4 lg:px-6 justify-between">
        {/* Left side: Logo + Sidebar Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/upved-logo.png" alt="UPVED Logo" width={32} height={32} className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold tracking-tight text-foreground">UPVED</span>
          </Link>

          {/* Desktop sidebar toggle */}
          <button
            onClick={toggle}
            className="hidden md:flex items-center justify-center p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md"
            aria-label="Toggle sidebar"
          >
            <PanelLeft size={18} className={isOpen ? "text-foreground" : "text-muted-foreground"} />
          </button>
        </div>

        {/* Center: Optional tagline on desktop */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
          {/* <span className="text-sm text-muted-foreground">Ancient Wisdom, Modern Rituals</span> */}
        </div>

        {/* Right side: CTA + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="#visit"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Plan Your Visit
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
