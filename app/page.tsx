"use client"

import { Suspense, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import LoadingScreen from "@/components/LoadingScreen"
import LandingHero from "@/components/Hero"
import { FadeIn } from "@/components/FadeIn"
import { AudioProvider } from "@/contexts/audio-context"
import { Hero as MainHero } from "@/components/sections/hero"
import { Welcome } from "@/components/sections/welcome"
import { Countdown } from "@/components/sections/countdown"
import { Messages } from "@/components/sections/messages"
import { Details } from "@/components/sections/details"
import { Entourage } from "@/components/sections/entourage"
import { BookOfGuests } from "@/components/sections/book-of-guests"
import { FAQ } from "@/components/sections/faq"
import { SnapShare } from "@/components/sections/snap-share"
import { Footer } from "@/components/sections/footer"
import BackgroundMusic from "@/components/background-music"

const Silk = dynamic(() => import("@/components/silk"), { ssr: false })
const GuestList = dynamic(() => import("@/components/sections/guest-list").then(mod => ({ default: mod.GuestList })), { ssr: false })

export default function Home() {
  const enableDecor = process.env.NEXT_PUBLIC_ENABLE_DECOR !== 'false'
  const [isLoading, setIsLoading] = useState(true)
  const [hasOpened, setHasOpened] = useState(false)

  return (
    <div className="relative">
      <AnimatePresence mode="sync">
        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[120]"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
          >
            <LoadingScreen onComplete={() => setIsLoading(false)} />
          </motion.div>
        )}

        {!hasOpened && (
          <motion.div
            key="landing-hero"
            className="fixed inset-0 z-[100] bg-rose-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
            style={{ pointerEvents: isLoading ? "none" : "auto" }}
          >
            <LandingHero onOpen={() => setHasOpened(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {hasOpened && (
        <AudioProvider>
          <FadeIn duration={0.9} className="block">
            <main className="relative">
              {enableDecor && <BackgroundMusic />}
              {/* Silk Background Animation */}
              {enableDecor && (
                <div className="fixed inset-0 z-0 pointer-events-none">
                  <Suspense fallback={<div className="w-full h-full bg-gradient-to-b from-primary/10 to-secondary/5" />}>
                    <Silk speed={5} scale={1.1} color="#006495" noiseIntensity={0.8} rotation={0.3} />
                  </Suspense>
                </div>
              )}

              {/* Content */}
              <div className="relative z-10">
                <MainHero />
                <Welcome />
                {/* <CoupleVideo /> */}
                <Countdown />
                <Messages />
                <Details />
                <Entourage />
                <GuestList />
                <BookOfGuests />
                <FAQ />
                <SnapShare />
                <Footer />
              </div>
            </main>
          </FadeIn>
        </AudioProvider>
      )}
    </div>
  )
}
