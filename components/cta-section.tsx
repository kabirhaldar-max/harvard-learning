"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8])

  return (
    <section ref={ref} className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div style={{ y }} className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="container relative mx-auto max-w-5xl px-4 sm:px-6 md:px-6 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 shadow-2xl backdrop-blur-sm sm:rounded-3xl sm:p-10 md:p-12 lg:p-16">
          <div className="absolute inset-0 opacity-5">
            <img
              src="/images/learning-success-celebration.jpg"
              alt="Success celebration"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-2xl"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-accent/10 blur-2xl"
          />

          <div className="relative space-y-6 text-center sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg sm:px-4 sm:py-2 sm:text-sm"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Limited Time Offer
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Start Your Learning Journey{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Today
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Join over 50,000 professionals who have transformed their careers with Harvard Learning. Get instant
              access to 200+ courses, expert mentorship, and a global community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            >
              <Button
                size="lg"
                className="w-full group gap-2 bg-gradient-to-r from-primary to-accent text-base shadow-lg hover:shadow-xl sm:w-auto sm:text-lg"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 sm:h-5 sm:w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 text-base hover:bg-primary/5 bg-transparent sm:w-auto sm:text-lg"
              >
                View Pricing
              </Button>
            </motion.div>

            {/* Benefits list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-6 text-xs sm:gap-6 sm:pt-8 sm:text-sm"
            >
              {["30-Day Money Back", "Lifetime Access", "Expert Support"].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-1.5 text-foreground sm:gap-2"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                  <span className="font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
