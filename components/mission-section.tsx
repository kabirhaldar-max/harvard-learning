"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Rocket, Users, Lightbulb, GraduationCap } from "lucide-react"

export function MissionSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Rocket,
      title: "Dynamic Learning Ecosystem",
      description:
        "Identify strengths, develop new skills, and confidently navigate personal and professional journeys.",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description:
        "Through our Persona initiative, we customize learning pathways based on individual goals with expert mentorship.",
    },
    {
      icon: Lightbulb,
      title: "Flexible Learning",
      description:
        "From working professionals upgrading skills to aspirants seeking self-improvement, designed to meet diverse needs.",
    },
    {
      icon: GraduationCap,
      title: "Tangible Outcomes",
      description:
        "Access curated study materials, self-paced video sessions, and structured assessments for measurable results.",
    },
  ]

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.3 : 0 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 0.3 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute top-1/2 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Mission
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Our mission is to empower individuals to unlock their full potential through flexible, high-quality learning
            experiences tailored to their unique goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col gap-4 rounded-2xl border border-border/50 bg-card/80 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20"
                >
                  <feature.icon className="h-7 w-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-card/50 to-card/30 p-8 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground mb-4">Committed to Your Success</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Harvard Learning, your success is at the heart of everything we do. We believe that education should do more than deliver knowledge—it should empower individuals to grow, adapt, and thrive in an ever-changing world. Our commitment is to create an inclusive learning ecosystem where every learner has access to the right tools, expert guidance, and practical resources needed to build confidence and achieve their goals.
                <br /><br />
                Through carefully designed programs, industry-relevant curricula, and continuous learner support, we help bridge the gap between learning and real-world application. We focus on nurturing skills that matter, encouraging lifelong learning, and fostering a mindset of innovation and resilience. By doing so, we enable learners to unlock their true potential, pursue meaningful careers, and lead more fulfilling personal and professional lives.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} className="flex-1">
              <img src="/professional-business-handshake-in-modern-office.jpg" alt="Harvard Learning Team" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
