"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { User, Target, BookOpen } from "lucide-react"
import Image from "next/image"

export function PersonaIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: User,
      letter: "A",
      title: "One-on-One Counseling",
      description: "Personal guidance from expert counselors who understand your unique journey",
      gradient: "from-primary to-accent",
    },
    {
      icon: Target,
      letter: "B",
      title: "Goal-Aligned Modules",
      description: "Customized curriculum focusing only on what truly matters for your growth",
      gradient: "from-accent to-secondary",
    },
    {
      icon: BookOpen,
      letter: "C",
      title: "Flexible Learning Path",
      description: "Adapt your course structure as your career goals evolve and expand",
      gradient: "from-secondary to-primary",
    },
  ]

  return (
    <section id="persona-intro" className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Introducing{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Persona
            </span>
          </h2>
          <p className="text-lg font-semibold text-muted-foreground sm:text-xl">
            Empowering Growth Through Tailored Learning Experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-16 max-w-4xl sm:mb-20 lg:mb-24"
        >
          <div className="rounded-3xl border border-border/50 bg-gradient-to-br from-muted/50 to-muted/30 p-6 backdrop-blur-sm sm:p-8 lg:p-12">
            <p className="mb-6 text-pretty text-base leading-relaxed text-foreground sm:text-lg">
              At <span className="font-bold text-primary">Harvard Learning</span>, we understand that no two learners
              are the same. Everyone's career goals, professional background, and learning pace differ - and that's why
              we created Persona, a unique initiative designed to customize your learning journey based on your
              individual aspirations and skill needs.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-xl font-bold text-foreground sm:text-2xl">What Is Persona?</h3>
                <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Persona is more than a service—it's our promise to deliver training that fits you. Through a
                  one-on-one counseling session, our experts understand your profile, professional objectives, and areas
                  of improvement. Based on this, we design a customized course structure, selecting only the modules and
                  certifications that are truly relevant to your growth.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mb-16 max-w-4xl sm:mb-20"
        >
          <div className="relative aspect-video overflow-hidden rounded-3xl border-2 border-primary/20 shadow-2xl">
            <Image
              src="/modern-online-learning-digital-education.jpg"
              alt="Modern online learning environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-balance text-lg font-bold text-white sm:text-xl lg:text-2xl"
              >
                Your journey, personalized to perfection
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full overflow-hidden rounded-3xl border-2 border-border/50 bg-background p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl sm:p-8">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                {/* Letter badge */}
                <motion.div
                  className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-2xl font-bold text-primary sm:h-14 sm:w-14"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.letter}
                </motion.div>

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="relative mb-3 text-xl font-bold text-foreground sm:text-2xl">{feature.title}</h3>
                <p className="relative text-pretty text-base leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
