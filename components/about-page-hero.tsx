"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Sparkles, Target, Users } from "lucide-react"
import { useRef } from "react"

export function AboutPageHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10"
    >
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/20"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [null, Math.random() * 100 + "%"],
              y: [null, Math.random() * 100 + "%"],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="container relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent to-secondary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-2xl"
          >
            <Sparkles className="h-5 w-5" />
            About Harvard Learning
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-balance text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Empowering{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Success
            </span>{" "}
            Through Learning
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            At Harvard Learning (OPC) Pvt Ltd, we believe that personal and professional growth should be accessible to
            everyone, anywhere, at any time.
          </motion.p>

          {/* Animated icon grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 w-full max-w-4xl"
          >
            {[
              { icon: Target, label: "Mission Driven", color: "primary" },
              { icon: Users, label: "Student Focused", color: "accent" },
              { icon: Sparkles, label: "Innovation First", color: "secondary" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + idx * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
              >
                <div className={`flex h-14 w-14 items-center justify-center rounded-full bg-${item.color}/10`}>
                  <item.icon className={`h-7 w-7 text-${item.color}`} />
                </div>
                <p className="font-semibold text-foreground">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="h-12 w-8 rounded-full border-2 border-primary/50 p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="h-3 w-full rounded-full bg-primary/50"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
