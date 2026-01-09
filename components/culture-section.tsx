"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Zap, Trophy, Target } from "lucide-react"

export function CultureSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const values = [
    {
      icon: Heart,
      title: "Empathy",
      description: "Every idea is valued with compassion and understanding",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly pushing boundaries with creative solutions",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Every success is celebrated, big or small",
    },
    {
      icon: Target,
      title: "Integrity",
      description: "Built on shared values and honest collaboration",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"
    >
      {/* Animated grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(oklch(0.55 0.22 260) 1px, transparent 1px), linear-gradient(90deg, oklch(0.55 0.22 260) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg mb-6"
            >
              Our Culture
            </motion.div>

            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
              Innovation with{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Empathy
              </span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Harvard Learning, our culture blends innovation with empathy. We believe that a great team isn't just built
              on skill — it's built on shared values, integrity, and collaboration.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">10+</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Years of Leadership Experience</p>
                  <p className="text-sm text-muted-foreground">
                    Driven by seasoned professionals who bring years of industry expertise
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Values grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + idx * 0.1,
                  type: "spring",
                  bounce: 0.4,
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="group relative"
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-0 blur-md group-hover:opacity-50"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />

                <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card/90 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-xl">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
                  >
                    <value.icon className="h-7 w-7 text-primary" />
                  </motion.div>
                  <h3 className="font-bold text-foreground">{value.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 px-8 py-4 backdrop-blur-sm"
          >
            <p className="text-lg font-semibold text-foreground">
              Every challenge is embraced. Every idea is celebrated.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
