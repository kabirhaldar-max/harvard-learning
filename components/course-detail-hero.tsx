"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"

interface CourseDetailHeroProps {
  title: string
  tagline: string
  image: string
}

export function CourseDetailHero({ title, tagline, image }: CourseDetailHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden sm:h-[70vh] lg:h-[80vh]">
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={image || "/placeholder.svg"} alt={title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/85 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-20 top-20 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -left-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl space-y-6 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 px-4 py-2 backdrop-blur-sm sm:px-6 sm:py-3"
          >
            <Sparkles className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
            <span className="text-sm font-semibold text-primary sm:text-base">Transform Your Future</span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl"
          >
            {tagline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Button
              size="lg"
              className="group gap-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-8 py-6 text-base font-bold shadow-2xl shadow-primary/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-primary/50 sm:text-lg"
              onClick={() => {
                document.getElementById("enroll-form")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Enroll Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
