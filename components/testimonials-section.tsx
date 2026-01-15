"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    company: "Tech Innovations Inc.",
    content:
      "Harvard Learning completely transformed my career trajectory. The courses are practical, engaging, and taught by industry leaders. I've gained skills that directly impacted my performance and opened new opportunities.",
    rating: 5,
    gradient: "from-primary to-accent",
    image: "/images/testimonial-sarah.jpg",
  },
  {
    name: "James Chen",
    role: "Software Engineer",
    company: "CloudScale Solutions",
    content:
      "The AI Productivity course alone saved me 15+ hours per week. The quality of instruction and real-world applications exceeded all my expectations. Best investment in my professional development.",
    rating: 5,
    gradient: "from-accent to-secondary",
    image: "/images/testimonial-james.jpg",
  },
  {
    name: "Emily Rodriguez",
    role: "Entrepreneur",
    company: "Verde Consulting",
    content:
      "As a business owner, the Adaptive Leadership program gave me frameworks I use daily. The flexible learning format let me balance coursework with running my company. Absolutely invaluable.",
    rating: 5,
    gradient: "from-secondary to-primary",
    image: "/images/testimonial-emily.jpg",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section id="testimonials" className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 space-y-3 text-center sm:mb-16 sm:space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-3 py-1.5 text-xs font-semibold text-primary sm:px-4 sm:py-2 sm:text-sm">
            <Star className="h-3 w-3 fill-primary sm:h-4 sm:w-4" />
            Student Success Stories
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Join thousands of professionals who have transformed their careers with Harvard Learning.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={itemVariants} whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
              <Card className="group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                {/* Quote icon */}
                <div className="absolute right-3 top-3 opacity-10 sm:right-4 sm:top-4">
                  <Quote className="h-12 w-12 text-primary sm:h-16 sm:w-16" />
                </div>

                <CardContent className="relative px-5 pt-6 sm:px-6 sm:pt-8">
                  <div className="space-y-5 sm:space-y-6">
                    {/* Stars */}
                    <div className="flex gap-0.5 sm:gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                        >
                          <Star className="h-5 w-5 fill-primary text-primary" />
                        </motion.div>
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
                      "{testimonial.content}"
                    </p>

                    {/* Author */}
                    <div className="border-t border-border pt-5 sm:pt-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                          <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-20`} />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-foreground sm:text-base">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground sm:text-sm">{testimonial.role}</div>
                          <div className="text-xs text-muted-foreground sm:text-sm">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
