"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { ChevronRight, ArrowLeft, Heart, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"
import { useSidebar } from "./sidebar-provider"

/**
 * SIDEBAR NAVIGATION DESIGN
 * =========================
 * 
 * Two-level navigation with URL-based tab sync.
 * 
 * Single-Level Items: Direct links, highlighted when pathname matches
 * Multi-Level Items: Click navigates to page with tab query param
 * 
 * Subpages sync with horizontal tabs via ?tab= query parameter
 * Parent labels are lighter color (not clickable navigation)
 */

type SubPage = {
  label: string
  tabId: string // Maps to horizontal tab value
  description?: string
}

type NavItem = {
  label: string
  href: string
  icon?: React.ReactNode
  subpages?: SubPage[]
}

const navItems: NavItem[] = [
  {
    label: "Gatherings",
    href: "/gatherings",
    subpages: [
      { label: "Sunday Havan", tabId: "sunday-havan", description: "Sunday 1:00 PM" },
      { label: "Sandhya Practice", tabId: "sandhya-practice", description: "Wednesday 6:00 PM" },
    ],
  },
  {
    label: "Events",
    href: "/events",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    label: "Our Dharma",
    href: "/dharma",
    subpages: [
      { label: "The Path", tabId: "path" },
      { label: "Upved Principles", tabId: "principles" },
      { label: "Vedic Texts", tabId: "texts" },
      { label: "FAQ", tabId: "faq" },
    ],
  },
  {
    label: "Upved Teachings",
    href: "/teachings",
  },
  {
    label: "Community",
    href: "/community",
    subpages: [
      { label: "Wellness Walks", tabId: "wellness-walks" },
      { label: "Community Games", tabId: "community-games" },
    ],
  },
  {
    label: "Support",
    href: "/support",
    subpages: [
      { label: "Donate", tabId: "donate" },
      { label: "Contact", tabId: "contact" },
      { label: "Governance", tabId: "governance" },
    ],
  },
  {
    label: "Join Us",
    href: "/join",
  },
  {
    label: "About Us",
    href: "/about",
  },
]

const SIDEBAR_WIDTH = 220

export function Sidebar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { isOpen, setIsOpen } = useSidebar()
  const [expandedParent, setExpandedParent] = useState<string | null>(null)

  const currentTab = searchParams.get("tab")

  // Auto-expand parent menu based on current URL
  useEffect(() => {
    const parentItem = navItems.find(
      (item) => pathname === item.href || pathname.startsWith(item.href + "/")
    )
    if (parentItem?.subpages) {
      setExpandedParent(parentItem.label)
    } else {
      setExpandedParent(null)
    }
  }, [pathname])

  // Check if a nav item is active (current page)
  const isItemActive = (item: NavItem) => {
    return pathname === item.href || pathname.startsWith(item.href + "/")
  }

  // Check if a specific subpage tab is active
  const isSubpageActive = (item: NavItem, subpage: SubPage) => {
    if (pathname !== item.href && !pathname.startsWith(item.href + "/")) {
      return false
    }
    // If no tab param, first subpage is active by default
    if (!currentTab) {
      return item.subpages?.[0]?.tabId === subpage.tabId
    }
    return currentTab === subpage.tabId
  }

  // Check if we're NOT on the homepage
  const isNotHomepage = pathname !== "/"

  const closeSidebarOnMobile = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setIsOpen(false)
    }
  }

  const handleNavClick = (item: NavItem) => {
    if (item.subpages) {
      setExpandedParent(item.label)
    }
    closeSidebarOnMobile()
  }

  const renderMainNav = () => (
    <nav className="space-y-1 px-3">
      {/* Home button - shown when NOT on homepage */}
      {isNotHomepage && (
        <Link
          href="/"
          onClick={closeSidebarOnMobile}
          className="flex items-center gap-2 px-4 py-2.5 text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-primary/8 rounded-md transition-colors mb-3"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Home</span>
        </Link>
      )}

      {/* Main nav items */}
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={() => handleNavClick(item)}
          className={cn(
            "group flex items-center justify-between px-4 py-2.5 text-[15px] font-medium rounded-md transition-all duration-200 relative z-10",
            isItemActive(item)
              ? "bg-primary/10 text-foreground border-2 border-primary"
              : "text-muted-foreground hover:text-black hover:bg-primary/5 border border-transparent"
          )}
        >
          <div className="flex items-center gap-2">
            {item.icon && <span className="text-muted-foreground group-hover:text-black transition-colors">{item.icon}</span>}
            <span>{item.label}</span>
          </div>
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-opacity",
              isItemActive(item) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
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
        {/* Back to Home button */}
        <Link
          href="/"
          onClick={() => {
            setExpandedParent(null)
            closeSidebarOnMobile()
          }}
          className="flex items-center gap-2 px-4 py-2.5 text-[15px] font-medium text-muted-foreground hover:text-foreground hover:bg-primary/8 rounded-md transition-colors mb-2"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Home</span>
        </Link>

        {/* Parent label - LIGHT colored, not a link */}
        <div className="px-4 py-2 text-xs font-medium text-muted-foreground/60 uppercase tracking-wider">
          {parentItem.label}
        </div>

        {/* Subpage links - sync with horizontal tabs via ?tab= */}
        <div className="space-y-1">
          {parentItem.subpages.map((subpage) => (
            <Link
              key={subpage.tabId}
              href={`${parentItem.href}?tab=${subpage.tabId}`}
              onClick={closeSidebarOnMobile}
              className={cn(
                "group flex items-center justify-between px-4 py-2.5 text-[15px] font-medium rounded-md transition-all duration-200 relative z-10",
                isSubpageActive(parentItem, subpage)
                  ? "bg-primary/10 text-foreground border-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-primary/8 border border-transparent"
              )}
            >
              <div className="flex flex-col">
                <span>{subpage.label}</span>
                {subpage.description && (
                  <span className="text-xs text-muted-foreground/70">{subpage.description}</span>
                )}
              </div>
              <ChevronRight
                className={cn(
                  "h-4 w-4 transition-opacity",
                  isSubpageActive(parentItem, subpage) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                )}
              />
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
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-14 left-0 z-50 h-[calc(100vh-3.5rem)] bg-background transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{ width: `min(75vw, ${SIDEBAR_WIDTH}px)` }}
      >
        <div className="flex-1 flex flex-col h-full w-full">
          {/* Top Pattern Area - ~10% height, shrinks first if space is tight */}
          <div
            className="shrink h-[10%] min-h-0 rounded-xl mx-3 mt-3 border border-border/30 overflow-hidden z-0"
            style={{
              backgroundImage: "url(/pattern-image.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.85,
            }}
            aria-hidden="true"
          />

          {/* Nav Items Container - Grows to fill available space, buttons top-aligned */}
          <div className="flex-1 shrink-0 pt-4 relative z-10 flex flex-col justify-start">
            {expandedParent ? renderSubpageNav() : renderMainNav()}
          </div>

          {/* Bottom Pattern Area - ~25% height, fills remaining space, shrinks if needed */}
          <div
            className="shrink h-[25%] min-h-0 mx-3 mb-3 rounded-xl border border-border/30 overflow-hidden z-0"
            style={{
              backgroundImage: "url(/pattern-image.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
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
