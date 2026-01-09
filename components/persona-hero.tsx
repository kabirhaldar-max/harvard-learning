"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function PersonaHero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden py-20 sm:min-h-[80vh] sm:py-24 lg:py-32">
      {/* Animated background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -left-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl sm:h-[600px] sm:w-[600px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -right-1/4 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-accent/40 to-secondary/40 blur-3xl sm:h-[600px] sm:w-[600px]"
        />
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute left-[10%] top-[20%] hidden lg:block"
      >
        <div className="rounded-2xl border border-primary/20 bg-background/50 p-4 backdrop-blur-sm">
          <Target className="h-8 w-8 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute right-[10%] top-[30%] hidden lg:block"
      >
        <div className="rounded-2xl border border-accent/20 bg-background/50 p-4 backdrop-blur-sm">
          <Zap className="h-8 w-8 text-accent" />
        </div>
      </motion.div>

      {/* Floating illustration images */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute left-[5%] top-[15%] hidden lg:block"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-primary/20 bg-background/50 p-2 shadow-2xl backdrop-blur-sm">
          <Image
            src="/abstract-geometric-education-illustration.jpg"
            alt="Education illustration"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute right-[5%] bottom-[15%] hidden lg:block"
      >
        <div className="relative h-40 w-40 overflow-hidden rounded-2xl border-2 border-accent/20 bg-background/50 p-2 shadow-2xl backdrop-blur-sm">
          <Image
            src="/abstract-modern-education-technology-illustration-.jpg"
            alt="Technology illustration"
            fill
            className="object-cover opacity-80"
          />
        </div>
      </motion.div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm sm:px-6 sm:py-3 sm:text-base">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
              Introducing Persona
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 max-w-5xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Learn, and overcome{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                the biggest challenges
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-xl"
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mb-8 sm:mb-12"
          >
            <Link href="#persona-intro">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-8 py-6 text-base font-bold text-white shadow-2xl shadow-primary/50 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-primary/70 sm:px-12 sm:py-7 sm:text-lg"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-200%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                    repeatDelay: 1,
                  }}
                />
                <span className="relative flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Persona</span>
            </div>
            <p className="mt-2 text-base text-muted-foreground sm:text-lg lg:text-xl">Your Learning, Personalized.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
