"use client"

import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
})

export function Welcome() {
  return (
    <Section
      id="welcome"
      className="relative overflow-hidden bg-transparent py-12 sm:py-16 md:py-20"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[2rem] border border-white/12 bg-gradient-to-br from-[#0b1a2f]/90 via-[#0f2541]/85 to-[#122f52]/88 backdrop-blur-2xl shadow-[0_24px_80px_rgba(3,6,18,0.65)] px-5 sm:px-8 md:px-10 py-8 sm:py-10 md:py-12">
          {/* Layered glass + light accents for readability */}
          <div className="pointer-events-none absolute inset-0">
            {/* Solid primary background with slight transparency */}
            <div
              className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]"
            />
            {/* Subtle radial highlights */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 bg-[radial-gradient(circle_at_center,rgba(180,210,255,0.25),transparent_60%)] opacity-80 blur-sm" />
            <div className="absolute bottom-[-6rem] right-[-2rem] w-64 h-64 bg-[radial-gradient(circle_at_center,rgba(110,160,255,0.28),transparent_60%)] opacity-70 blur-sm" />
            {/* Inner border glow */}
            <div className="absolute inset-[1px] rounded-[inherit] border border-white/10" />
          </div>

          <div className="relative text-center space-y-6 sm:space-y-7 md:space-y-8">
          {/* Main heading */}
          <div className="space-y-1.5 sm:space-y-2.5">
            <p
              className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white/75`}
              style={{ textShadow: "0 2px 10px rgba(0,0,0,0.65)" }}
            >
              Moonlit Masquerade
            </p>
            <h2
              className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] text-white"
              style={{ textShadow: "0 4px 18px rgba(0,0,0,0.9)" }}
            >
              Welcome to Marielle&apos;s Debut
            </h2>
            <p
              className={`${cormorant.className} text-[0.75rem] sm:text-sm md:text-base text-white/85 tracking-[0.12em] uppercase`}
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
            >
              A night of elegance beneath a starlit sky
            </p>
          </div>

          {/* Body text */}
          <div
            className={`${cormorant.className} text-[0.9rem] sm:text-sm md:text-base leading-relaxed sm:leading-7 text-white/95 space-y-3 sm:space-y-4`}
          >
            <p>
              Step into Marielle&apos;s Moonlit Masquerade as she celebrates eighteen—an evening crafted with
              shimmering blues, soft lights, and timeless grace.
            </p>
            <p>
              Discover the details, share a message, and join us in honoring her debut under the glow of the
              night.
            </p>
          </div>
          </div>
        </div>
      </div>
    </Section>
  )
}


