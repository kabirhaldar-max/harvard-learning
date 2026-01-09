"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, Award, Users } from "lucide-react"

export function EnrollHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      {/* Animated background orbs */}
      <motion.div
        className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm sm:px-6 sm:py-3 sm:text-base"
          >
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
            Join 10,000+ Learners
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-7xl"
          >
            Start Your Learning
            <br />
            Journey with Us!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-12 max-w-2xl text-base text-white/90 sm:text-lg lg:text-xl"
          >
            Embark on the learning adventure. Fill out the form below and let's get started on your path to success.
          </motion.p>

          {/* Feature cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-4 sm:grid-cols-3 sm:gap-6"
          >
            {[
              { icon: BookOpen, label: "Expert-Led Courses", value: "50+" },
              { icon: Users, label: "Active Students", value: "10K+" },
              { icon: Award, label: "Certifications", value: "100%" },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-white/20 p-3">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-white">{item.value}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
