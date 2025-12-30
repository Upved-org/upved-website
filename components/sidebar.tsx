"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, ArrowLeft, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"

type NavItem = {
  label: string
  href: string
  external?: boolean
  comingSoon?: boolean
  subpages?: { label: string; href: string; external?: boolean; comingSoon?: boolean }[]
}

const navItems: NavItem[] = [
  {
    label: "Gatherings",
    href: "#gatherings",
    subpages: [
      { label: "Sunday Havan", href: "#gatherings" },
      { label: "Sandhya Practice", href: "#gatherings" },
      { label: "Special Events", href: "#gatherings" },
    ],
  },
  {
    label: "Our Dharma",
    href: "#dharma",
    subpages: [
      { label: "The Path", href: "#dharma" },
      { label: "14 Vedic Principles", href: "#dharma" },
    ],
  },
  { label: "Vedic Teachers", href: "#teachers" },
  {
    label: "Community",
    href: "/community",
  },
  {
    label: "Support",
    href: "/support",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Governance",
    href: "/legal",
  },
]

const SIDEBAR_WIDTH = 220

export function Sidebar() {
  const { isOpen, setIsOpen } = useSidebar()
  const [expandedParent, setExpandedParent] = useState<string | null>(null)
  const [activeSection, setActiveSection] = useState<string>("")

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.flatMap((item) => (item.subpages ? item.subpages.map((sub) => sub.href) : [item.href]))

      for (const href of sections) {
        if (href.startsWith("/") || href.startsWith("http")) continue
        const id = href.replace("#", "")
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(href)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (item: NavItem) => {
    if (item.subpages) {
      return item.subpages.some((sub) => activeSection === sub.href)
    }
    return activeSection === item.href
  }

  const handleNavClick = (item: NavItem) => {
    if (item.subpages) {
      setExpandedParent(item.label)
    }
    // Close sidebar on mobile after clicking
    if (window.innerWidth < 768) {
      setIsOpen(false)
    }
  }

  const renderMainNav = () => (
    <nav className="space-y-1 px-3">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.subpages ? "#" : item.href}
          onClick={(e) => {
            if (item.subpages) {
              e.preventDefault()
            }
            handleNavClick(item)
          }}
          className={cn(
            "group flex items-center justify-between px-4 py-2.5 text-[15px] font-medium rounded-lg transition-all duration-200",
            isActive(item)
              ? "bg-primary/10 text-primary"
              : "text-foreground/70 hover:text-foreground hover:bg-accent/50",
          )}
        >
          <span>{item.label}</span>
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-opacity",
              isActive(item) ? "opacity-100" : "opacity-0 group-hover:opacity-100",
            )}
          />
        </Link>
      ))}
    </nav>
  )

  const renderSubpageNav = () => {
    const parentItem = navItems.find((item) => item.label === expandedParent)
    if (!parentItem || !parentItem.subpages) return null

    return (
      <nav className="space-y-1 px-3">
        {/* Back button */}
        <button
          onClick={() => setExpandedParent(null)}
          className="flex items-center gap-2 px-4 py-2.5 text-[15px] font-medium text-foreground/70 hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors w-full text-left mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </button>

        {/* Parent label */}
        <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          {parentItem.label}
        </div>

        {/* Subpage links */}
        <div className="space-y-1">
          {parentItem.subpages.map((subpage) => (
            <Link
              key={subpage.href}
              href={subpage.href}
              target={subpage.external ? "_blank" : undefined}
              rel={subpage.external ? "noopener noreferrer" : undefined}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsOpen(false)
                }
              }}
              className={cn(
                "group flex items-center justify-between px-4 py-2.5 text-[15px] font-medium rounded-lg transition-all duration-200",
                subpage.comingSoon
                  ? "text-muted-foreground/50 cursor-not-allowed"
                  : activeSection === subpage.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:text-foreground hover:bg-accent/50",
              )}
            >
              <span className="flex items-center gap-2">
                {subpage.label}
                {subpage.comingSoon && (
                  <span className="text-[10px] uppercase tracking-wider bg-muted px-1.5 py-0.5 rounded">Soon</span>
                )}
              </span>
              {subpage.external ? (
                <ExternalLink className="h-3.5 w-3.5 opacity-50" />
              ) : (
                <ChevronRight
                  className={cn(
                    "h-4 w-4 transition-opacity",
                    activeSection === subpage.href ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                  )}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-50 h-[calc(100vh-3.5rem)] bg-background transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{ width: `min(75vw, ${SIDEBAR_WIDTH}px)` }}
      >
        <div className="flex-1 flex flex-col h-full w-full">
          {/* Top Pattern Area */}
          <div
            className="flex-none h-[20%] md:h-[22%] rounded-xl mx-3 mt-3 border border-border/30 overflow-hidden"
            style={{
              backgroundImage: "url(/upved-pattern.jpeg)",
              backgroundRepeat: "repeat",
              backgroundSize: "120px 120px",
              backgroundPosition: "center",
              opacity: 0.85,
            }}
            aria-hidden="true"
          />

          {/* Nav Items Container */}
          <div className="flex-1 min-h-[50%] flex flex-col justify-center py-6">
            {expandedParent ? renderSubpageNav() : renderMainNav()}
          </div>

          {/* Bottom Pattern Area */}
          <div
            className="flex-none h-[22%] md:h-[25%] mx-3 mb-3 rounded-xl border border-border/30 overflow-hidden"
            style={{
              backgroundImage: "url(/upved-pattern.jpeg)",
              backgroundRepeat: "repeat",
              backgroundSize: "120px 120px",
              backgroundPosition: "center",
              opacity: 0.85,
            }}
            aria-hidden="true"
          />
        </div>
      </aside>

      {/* Content spacer - pushes content right when sidebar is open on desktop */}
      <div
        className={cn("hidden md:block transition-all duration-300 ease-in-out shrink-0")}
        style={{ width: isOpen ? SIDEBAR_WIDTH : 0 }}
      />
    </>
  )
}

export { SIDEBAR_WIDTH }
