"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Clock, Route, Users, Award } from "lucide-react"

export function PromisesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const promises = [
    {
      icon: Clock,
      title: "Flexible, Self-Paced Learning",
      description: "Learn at your own pace, on your own schedule, from anywhere in the world.",
    },
    {
      icon: Route,
      title: "Customized Learning Journeys",
      description: "Personalized pathways designed specifically for your individual goals and aspirations.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Guidance from certified and experienced professionals who are leaders in their fields.",
    },
    {
      icon: Award,
      title: "Recognized Certifications",
      description: "Tangible outcomes with globally recognized digital certifications upon completion.",
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-24 md:py-32 bg-gradient-to-br from-secondary/5 via-background to-primary/5"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-2 text-sm font-semibold text-primary-foreground shadow-lg mb-6"
          >
            Our Promises
          </motion.div>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            What Sets Us{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Apart
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((promise, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.15,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group relative"
            >
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />

              <div className="relative flex flex-col items-center gap-4 rounded-3xl border border-border/50 bg-card/80 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <promise.icon className="h-8 w-8 text-primary" />
                </motion.div>

                <h3 className="text-lg font-bold text-foreground">{promise.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{promise.description}</p>

                {/* Animated accent line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-1 rounded-full bg-gradient-to-r from-primary via-accent to-secondary"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
