"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, UserCheck, Layers, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function PersonaFeatures() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const benefits = [
    {
      icon: Target,
      title: "Goal-Aligned Learning",
      description: "Focus only on what matters for your career growth",
      gradient: "from-primary to-accent",
    },
    {
      icon: UserCheck,
      title: "Personal Counselor Support",
      description: "Dedicated guidance throughout your journey",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Layers,
      title: "Custom-Crafted Curriculum",
      description: "Designed uniquely for each learner",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Award,
      title: "Future-Ready Certification",
      description: "Get certified for skills that open real opportunities",
      gradient: "from-primary via-accent to-secondary",
    },
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-gradient-to-br from-accent/30 to-secondary/30 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Persona?
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Experience a learning journey tailored specifically to your professional goals and growth aspirations
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <div className="space-y-6 sm:space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden border-2 transition-all duration-500 hover:border-primary/50 hover:shadow-2xl">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                  />

                  <CardContent className="relative p-6 sm:p-8">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <motion.div
                        className={`flex-shrink-0 rounded-2xl bg-gradient-to-br ${benefit.gradient} p-4 shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <benefit.icon className="h-6 w-6 text-white sm:h-8 sm:w-8" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="mb-2 text-xl font-bold text-foreground sm:text-2xl">{benefit.title}</h3>
                        <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden space-y-6 lg:block"
          >
            <div className="relative h-64 overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl">
              <Image
                src="/students-studying-library-books.jpg"
                alt="Students learning together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl border-2 border-accent/20 shadow-2xl">
              <Image
                src="/online-education-digital-learning.jpg"
                alt="Digital learning platform"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="relative h-64 overflow-hidden rounded-3xl border-2 border-secondary/20 shadow-2xl">
              <Image
                src="/professional-training-workshop.jpg"
                alt="Professional training"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
