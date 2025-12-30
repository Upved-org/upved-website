"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type SidebarContextType = {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  toggle: () => void
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within SidebarProvider")
  }
  return context
}

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768
      if (mobile) {
        setIsOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const toggle = () => setIsOpen((prev) => !prev)

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, toggle }}>{children}</SidebarContext.Provider>
}
