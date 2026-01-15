"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Sparkles, TrendingUp, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          animate={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * 0.015,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * -0.01,
          }}
          transition={{ type: "spring", stiffness: 50 }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-32 lg:px-8">
        <div className="grid gap-8 lg:gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-sm">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                  World-Class Education
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Future
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl"
              >
                Harvard Learning empowers professionals worldwide with industry-leading courses, expert instructors, and
                globally recognized certifications—all accessible from anywhere, at any time.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row sm:gap-4"
            >
              <Button
                size="lg"
                className="group gap-2 bg-gradient-to-r from-primary to-accent text-base shadow-lg hover:shadow-xl sm:text-lg"
              >
                Explore Courses
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 text-base border-2 hover:bg-primary/5 bg-transparent sm:text-lg"
              >
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                Learn More
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-3 pt-6 sm:gap-6 sm:pt-8"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1 sm:gap-2">
                  <TrendingUp className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">50K+</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">Active Students</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Award className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">200+</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">Expert Courses</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Sparkles className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
                  <p className="text-2xl font-bold text-foreground sm:text-3xl">98%</p>
                </div>
                <p className="text-xs text-muted-foreground sm:text-sm">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative h-[400px] w-full max-w-[600px] sm:h-[500px] lg:h-[600px]">
              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute left-0 top-12 z-10 rounded-xl border border-border/50 bg-card/80 p-3 shadow-xl backdrop-blur-sm sm:top-20 sm:rounded-2xl sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 sm:h-10 sm:w-10">
                    <BookOpen className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground sm:text-sm">Upskilling</p>
                    <p className="text-[10px] text-muted-foreground sm:text-xs">Required Boost</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-0 top-32 z-10 rounded-xl border border-border/50 bg-card/80 p-3 shadow-xl backdrop-blur-sm sm:top-40 sm:rounded-2xl sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 sm:h-10 sm:w-10">
                    <Award className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground sm:text-sm">Certificates</p>
                    <p className="text-[10px] text-muted-foreground sm:text-xs">Get certified</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -25, 0] }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 left-6 z-10 rounded-xl border border-border/50 bg-card/80 p-3 shadow-xl backdrop-blur-sm sm:bottom-20 sm:left-10 sm:rounded-2xl sm:p-4"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/10 sm:h-10 sm:w-10">
                    <TrendingUp className="h-4 w-4 text-secondary sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground sm:text-sm">Career Growth</p>
                    <p className="text-[10px] text-muted-foreground sm:text-xs">Advance faster</p>
                  </div>
                </div>
              </motion.div>

              {/* Main illustration */}
              <div className="relative h-full w-full">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative flex h-full items-center justify-center rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card/50 to-card/30 p-6 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-8"
                >
                  <img
                    src="/abstract-modern-education-technology-illustration-.jpg"
                    alt="Education illustration"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block md:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <div className="h-8 w-5 rounded-full border-2 border-primary/50 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="h-2 w-full rounded-full bg-primary/50"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
