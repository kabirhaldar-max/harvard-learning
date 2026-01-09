"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BookOpen, Check, Sparkles } from "lucide-react"
import { Card, CardContent } from "./ui/card"

interface CourseAboutProps {
  intro: string
  details: string
  highlights: Array<{ title: string; description: string }>
}

export function CourseAbout({ intro, details, highlights }: CourseAboutProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20 lg:py-28">
      {/* Background Pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="space-y-12 sm:space-y-16"
        >
          {/* Section Header */}
          <div className="space-y-4 text-center sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 px-4 py-2 sm:px-6 sm:py-3"
            >
              <BookOpen className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
              <span className="text-sm font-semibold text-primary sm:text-base">About This Course</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              What You'll Learn & Achieve
            </motion.h2>
          </div>

          {/* Content */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p className="text-pretty">{intro}</p>
                <p className="text-pretty">{details}</p>
              </div>
            </motion.div>

            {/* Highlights Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <Card className="group h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="flex h-full flex-col gap-3 p-5">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent"
                      >
                        <Check className="h-5 w-5 text-primary-foreground" />
                      </motion.div>
                      <h3 className="font-bold text-foreground">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mx-auto flex max-w-3xl items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 p-6 backdrop-blur-sm sm:gap-4 sm:p-8"
          >
            <Sparkles className="h-8 w-8 flex-shrink-0 text-primary sm:h-10 sm:w-10" />
            <p className="text-balance text-base font-medium text-foreground sm:text-lg lg:text-xl">
              Join thousands of learners who have transformed their careers and lives through our programs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
