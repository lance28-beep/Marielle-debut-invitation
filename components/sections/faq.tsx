"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/section"
import { Cormorant_Garamond } from "next/font/google"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400"],
})

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "When is Marielle's debut?",
    answer:
      "December 17, 2025 at 6:00 PM. Please arrive a little early to enjoy the moonlit welcome.",
  },
  {
    question: "Where is the celebration?",
    answer:
      "Roy’s Hotel and Convention Center, Araneta Ave, Tangub, Bacolod. Tap “Get Directions” in Details to open Google Maps or copy the address.",
  },
  {
    question: "How do I RSVP?",
    answer:
      "Search your name in the RSVP section and confirm. If you don’t see your name, send a request there and we’ll review it.",
  },
  {
    question: "What time should I arrive?",
    answer:
      "Doors open before 6:00 PM. Please come a bit early so we can begin smoothly and you can enjoy portraits under the moonlight.",
  },
  {
    question: "What’s the dress code?",
    answer:
      "Formal or semi-formal in the Moonlit Masquerade palette (blues and silvers). Kindly avoid all-white looks, jeans, or shorts.",
  },
  {
    question: "Can I bring a plus one?",
    answer:
      "Seating is RSVP-based. Please bring only those included in your invitation or confirmed via RSVP.",
  },
  {
    question: "Is parking available?",
    answer:
      "Yes, parking is available at the venue. Arrive early to pick a comfortable spot.",
  },
  {
    question: "Is this unplugged?",
    answer:
      "During key moments, please stay present and limit phone use. Our team will capture and share highlights.",
  },
  {
    question: "Dietary needs?",
    answer:
      "Share any dietary notes in your RSVP message so we can prepare accordingly.",
  },
  {
    question: "Can children attend?",
    answer:
      "We love little guests, but seating is limited. Please bring only children noted on your invitation or confirmed via RSVP.",
  },
  {
    question: "What if I can’t attend?",
    answer:
      "Please still RSVP to let us know, and feel free to leave Marielle a note in the Messages section.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <Section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden bg-transparent"
    >
      {/* Moonlit backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0f2541] to-[#122f52]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(180,210,255,0.22),transparent_45%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_72%,rgba(120,170,255,0.18),transparent_55%)] opacity-70 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#081020]/65 via-transparent to-transparent" />
      </div>

      {/* Section Header */}
      <div className="relative z-30 text-center mb-6 sm:mb-9 md:mb-12 px-3 sm:px-4">
        {/* Small label */}
        <p
          className={`${cormorant.className} text-[0.7rem] sm:text-xs md:text-sm uppercase tracking-[0.28em] text-white mb-2`}
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.75)" }}
        >
          Moonlit Masquerade
        </p>

        <h2
          className="style-script-regular text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-1.5 sm:mb-3 md:mb-4"
          style={{ textShadow: "0 4px 18px rgba(0,0,0,0.85)" }}
        >
          FAQs for Marielle&apos;s Moonlit Debut
        </h2>

        <p className={`${cormorant.className} text-xs sm:text-sm md:text-base text-white/90 font-light max-w-2xl mx-auto leading-relaxed px-3 sm:px-4 mt-1`}>
          Quick answers for the Moonlit Masquerade—timing, attire, RSVP, and what to expect on Marielle&apos;s debut night.
        </p>

        {/* Simple divider */}
        <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_12px_rgba(255,255,255,0.7)]" />
          <div className="w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent via-white/60 to-transparent" />
        </div>
      </div>

      {/* FAQ content */}
      <div className="relative z-30 max-w-4xl mx-auto px-3 sm:px-5">
        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-md border border-[#7db7ff]/50 rounded-lg sm:rounded-xl md:rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] overflow-hidden">
          {/* FAQ items */}
          <div className="relative p-2.5 sm:p-4 md:p-5 lg:p-6">
            <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index
                const contentId = `faq-item-${index}`
                return (
                  <div
                    key={index}
                    className="rounded-lg sm:rounded-xl border border-[#7db7ff]/40 bg-white/5 backdrop-blur-sm hover:border-[#7db7ff]/70 hover:bg-white/10 transition-all duration-300 hover:shadow-md overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="group w-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 flex items-center justify-between text-left outline-none focus-visible:ring-2 focus-visible:ring-[#cfe7ff]/60 focus-visible:ring-offset-2 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={contentId}
                    >
                      <span className={`${cormorant.className} font-semibold text-white pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-base lg:text-lg leading-snug sm:leading-relaxed transition-colors duration-200 group-hover:text-[#cfe7ff]`}>
                        {item.question}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-white/70 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""} w-4 h-4 sm:w-5 sm:h-5`}
                        aria-hidden
                      />
                    </button>

                    <div
                      id={contentId}
                      role="region"
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 py-2 sm:py-2.5 md:py-3 lg:py-4 bg-white/5 border-t border-[#7db7ff]/40">
                          {item.answer.includes("[RSVP_LINK]") ? (
                            <p className={`${cormorant.className} text-white/95 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base whitespace-pre-line`}>
                              {item.answer.split("[RSVP_LINK]")[0]}
                              <a 
                                href="#guest-list" 
                                className="text-white underline font-semibold hover:text-[#F0F0EE] transition-colors"
                                onClick={(e) => {
                                  e.preventDefault()
                                  document.getElementById('guest-list')?.scrollIntoView({ behavior: 'smooth' })
                                }}
                              >
                                {item.answer.match(/\[RSVP_LINK\](.*?)\[\/RSVP_LINK\]/)?.[1]}
                              </a>
                              {item.answer.split("[/RSVP_LINK]")[1]}
                            </p>
                          ) : (
                            <p className={`${cormorant.className} text-white/95 leading-snug sm:leading-relaxed text-xs sm:text-sm md:text-base whitespace-pre-line`}>
                              {item.answer}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
