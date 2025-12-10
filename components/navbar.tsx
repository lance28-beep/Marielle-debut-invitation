"use client"

import { useState, useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/content/site"
import StaggeredMenu from "./StaggeredMenu"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#countdown", label: "Countdown" },
  { href: "#messages", label: "Messages" },
  { href: "#details", label: "Details" },
  { href: "#entourage", label: "Entourage" },
  { href: "#guest-list", label: "RSVP" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#home")

  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      if (rafIdRef.current != null) return
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null
        setIsScrolled(window.scrollY > 50)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      if (rafIdRef.current != null) cancelAnimationFrame(rafIdRef.current)
      window.removeEventListener("scroll", onScroll as EventListener)
    }
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const sectionIds = navLinks.map(l => l.href.substring(1))
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio - a.intersectionRatio))
        if (visible.length > 0) {
          const topMost = visible[0]
          if (topMost.target && topMost.target.id) {
            const newActive = `#${topMost.target.id}`
            setActiveSection(prev => (prev === newActive ? prev : newActive))
          }
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const menuItems = useMemo(() => navLinks.map((l) => ({ label: l.label, ariaLabel: `Go to ${l.label}`, link: l.href })), [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-700 ease-out ${
        isScrolled
          ? "bg-gradient-to-r from-[#0b1a2f]/95 via-[#111f3a]/92 to-[#132849]/95 backdrop-blur-2xl shadow-[0_12px_40px_rgba(5,10,25,0.65)] border-b border-white/10"
          : "bg-gradient-to-r from-[#0b1a2f]/92 via-[#0f2036]/88 to-[#13213f]/90 backdrop-blur-xl border-b border-white/5"
      }`}
    >
      {/* Subtle aurora/galaxy tint to mirror hero/loading backdrop */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-black/30 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 relative">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <Link href="#home" className="flex-shrink-0 group relative z-10">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
              <Image
                src="/monogram/monogramnew.png"
                alt={`${siteConfig.couple.groomNickname} & ${siteConfig.couple.brideNickname} Monogram`}
                width={200}
                height={200}
                sizes="(min-width: 1024px) 80px, (min-width: 768px) 64px, (min-width: 640px) 56px, 48px"
                className="w-full h-full object-contain group-hover:scale-110 group-active:scale-105 transition-all duration-500 drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)] group-hover:drop-shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
                style={{
                  objectFit: "contain",
                  filter:
                    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(222deg) brightness(112%) contrast(98%)",
                }}
                priority
              />
            </div>
            
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
          </Link>

          <div className="hidden md:flex gap-1 items-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 lg:px-4 py-2 text-xs lg:text-sm ${cormorant.className} font-medium rounded-lg transition-all duration-500 relative group ${
                    isActive
                      ? "text-white bg-white/12 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.45)] border border-white/25"
                      : "text-white/80 hover:text-white hover:bg-white/10 hover:border hover:border-white/20 hover:shadow-[0_6px_18px_rgba(0,0,0,0.38)] hover:scale-105 active:scale-95 bg-white/0 border border-transparent"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white via-white to-white transition-all duration-500 rounded-full ${
                      isActive
                        ? "w-full shadow-[0_0_12px_rgba(255,255,255,0.7)]"
                        : "w-0 group-hover:w-full group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                    }`}
                  />
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                  )}
                  {/* Subtle accent on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </Link>
              )
            })}
          </div>

          <div className="md:hidden flex items-center h-full">
            {/* Decorative halo to improve tap target and visual affordance */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/10 via-[#E0CFB5]/14 to-transparent blur-md pointer-events-none" />
              <StaggeredMenu
                position="left"
                items={menuItems}
                socialItems={[]}
                displaySocials={false}
                displayItemNumbering={true}
                menuButtonColor="#E5ECFF"
                openMenuButtonColor="#E5ECFF"
                changeMenuColorOnOpen={true}
                colors={["#0b1a2f", "#132849", "#E5ECFF", "#9db8ff", "#d2e1ff"]}
                accentColor="#8bb7ff"
                isFixed={true}
                onMenuOpen={() => {}}
                onMenuClose={() => {}}
              />
            </div>
          </div>
        </div>

      </div>
    </nav>
  )
}
