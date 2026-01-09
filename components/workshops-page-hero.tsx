"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, Award, TrendingUp } from "lucide-react"

export function WorkshopsPageHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-accent/5 to-background py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-1/4 top-40 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 backdrop-blur-sm sm:mb-8"
          >
            <Sparkles className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm font-semibold text-primary sm:text-base">Professional Development Courses</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 text-balance text-3xl font-extrabold leading-tight text-foreground sm:mb-6 sm:text-4xl lg:text-6xl"
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Professional Courses
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mb-8 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground sm:mb-12 sm:text-lg lg:text-xl"
          >
            At Harvard Learning Education, we believe career growth begins with continuous learning. Our professional
            courses are thoughtfully designed to help individuals enhance their skills, strengthen their confidence, and
            achieve measurable growth in both personal and professional settings. Each program is 100% online, flexible,
            and can be completed within 60-90 days, making it ideal for working professionals and lifelong learners.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 lg:gap-8"
          >
            {[
              { icon: BookOpen, title: "100% Online", description: "Learn at your own pace" },
              { icon: Award, title: "60-90 Days", description: "Complete in 2-3 months" },
              { icon: TrendingUp, title: "Career Growth", description: "Measurable results" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
