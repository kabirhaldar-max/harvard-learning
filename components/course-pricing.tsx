"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, TrendingUp, ShieldCheck } from "lucide-react"

interface CoursePricingProps {
  pricing: {
    range: string
    description: string
  }
  duration: string
  level: string
}

export function CoursePricing({ pricing, duration, level }: CoursePricingProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: DollarSign,
      title: "Personalized Pricing",
      description: pricing.description,
      gradient: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Flexible Terms",
      description: "Fees are customized based on your specific needs, ensuring you pay only for what truly matters.",
      gradient: "from-accent to-secondary",
    },
    {
      icon: Clock,
      title: "Session Duration",
      description:
        "Each session is designed to deliver maximum value and clarity within a productive one-hour timeframe.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: ShieldCheck,
      title: "Refund Policy",
      description: "Enjoy peace of mind with a full refund available within 10 working days—no questions asked.",
      gradient: "from-primary to-accent",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-16 sm:py-20 lg:py-24">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/5 to-transparent" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-3 text-center sm:mb-16 sm:space-y-4"
        >
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Course Details
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transparent pricing and flexible terms designed with your success in mind
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col items-start gap-4 p-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </motion.div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-foreground sm:text-xl">{feature.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary sm:px-6 sm:py-3 sm:text-base">
            <Clock className="h-4 w-4" />
            Duration: {duration}
          </div>
          <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent sm:px-6 sm:py-3 sm:text-base">
            <TrendingUp className="h-4 w-4" />
            Level: {level}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
