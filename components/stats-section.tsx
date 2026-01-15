"use client"

import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: 3000 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest))
    })
  }, [springValue])

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { value: 50000, suffix: "+", label: "Active Students", description: "Learning worldwide" },
    { value: 200, suffix: "+", label: "Expert Courses", description: "Across all disciplines" },
    { value: 150, suffix: "+", label: "Countries", description: "Global presence" },
    { value: 98, suffix: "%", label: "Success Rate", description: "Student satisfaction" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background py-16 sm:py-20 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <img
          src="/images/educational-pattern-background.jpg"
          alt="Educational pattern"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Our Impact in{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Join a thriving community of learners and professionals achieving their goals every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-border/50 bg-card p-5 text-center shadow-lg transition-all hover:border-primary/30 hover:shadow-2xl sm:rounded-3xl sm:p-6 lg:p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative space-y-1.5 sm:space-y-2">
                <div className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl xl:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-foreground sm:text-base lg:text-lg">{stat.label}</div>
                <div className="text-xs text-muted-foreground sm:text-sm">{stat.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
