"use client"

import { Award, Globe, Users, Target, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm"
              >
                <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                Our Mission
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              >
                About{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Harvard Learning
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                At Harvard Learning, we are committed to democratizing world-class education. Our platform connects
                ambitious learners with expert instructors, cutting-edge curriculum, and a global community of
                professionals.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
              >
                Whether you're looking to advance your career, pivot to a new industry, or simply expand your knowledge,
                our comprehensive programs are designed to help you achieve your goals with flexibility and excellence.
              </motion.p>
            </div>

            {/* Key features */}
            <motion.div variants={itemVariants} className="space-y-2.5 pt-3 sm:space-y-3 sm:pt-4">
              {[
                "Industry-leading expert instructors",
                "Flexible learning at your own pace",
                "Globally recognized certifications",
                "Lifetime access to course materials",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-2.5 text-foreground sm:gap-3"
                >
                  <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-6 sm:w-6">
                    <CheckCircle2 className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                  </div>
                  <span className="text-sm sm:text-base">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative mt-6 overflow-hidden rounded-xl border-2 border-primary/20 sm:mt-8 sm:rounded-2xl"
            >
              <img
                src="/images/students-learning-online.jpg"
                alt="Students learning online"
                className="h-48 w-full object-cover sm:h-56 md:h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div variants={containerVariants} className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-card to-primary/5 p-6 shadow-lg sm:rounded-3xl sm:p-8"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/10 blur-2xl transition-all group-hover:scale-150 sm:h-24 sm:w-24" />
              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Users className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-3xl font-bold text-foreground sm:text-4xl">50,000+</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">Active Learners Worldwide</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5 p-6 shadow-lg sm:rounded-3xl sm:p-8"
            >
              <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-accent/10 blur-2xl transition-all group-hover:scale-150 sm:h-24 sm:w-24" />
              <div className="relative space-y-3 sm:space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-secondary shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Award className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-3xl font-bold text-foreground sm:text-4xl">200+</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">Expert-Led Courses</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative overflow-hidden rounded-2xl border-2 border-secondary/20 bg-gradient-to-br from-card to-secondary/5 p-6 shadow-lg sm:col-span-2 sm:rounded-3xl sm:p-8"
            >
              <div className="absolute -right-4 -top-4 h-28 w-28 rounded-full bg-secondary/10 blur-2xl transition-all group-hover:scale-150 sm:h-32 sm:w-32" />
              <div className="relative flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-primary shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Globe className="h-6 w-6 text-primary-foreground sm:h-7 sm:w-7" />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <div className="text-3xl font-bold text-foreground sm:text-4xl">150+ Countries</div>
                  <div className="text-xs text-muted-foreground sm:text-sm">
                    Global reach with students learning from every corner of the world
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-2xl border-2 border-primary/20 sm:col-span-2 sm:rounded-3xl"
            >
              <img
                src="/images/global-learning-network.jpg"
                alt="Global learning network"
                className="h-40 w-full object-cover sm:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex items-end p-4 sm:p-6">
                <p className="text-xs font-semibold text-foreground sm:text-sm">Connected learners across the globe</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
