"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Linkedin, Mail } from "lucide-react"

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const team = [
    {
      name: "Nelam Joshi",
      role: "Chief Learning Officer (CLO)",
      description:
        "Ensuring each certification and course delivers value and measurable results. Her leadership fosters innovation and learner-centric design across all programs.",
      image: "/professional-woman-executive-leader.jpg",
    },
    {
      name: "Mohit Tiwari",
      role: "Head of Technology & Innovation",
      description:
        "With expertise in platform architecture and AI integration, he ensures the platform is seamless, secure, and future-ready with innovative interactive learning.",
      image: "/professional-technology-leader.png",
    },
    {
      name: "Alsa Khatun",
      role: "Creative Director - Content & Media",
      description:
        "Her content reflects quality, emotion, and clarity. Her designs help bridge the gap between technical learning and engaging presentation.",
      image: "/professional-woman-creative-director.jpg",
    },
    {
      name: "Dr. Param Verma",
      role: "Director - Training & Faculty Operations",
      description:
        "A leadership coach with 15+ years upskilling professionals across industries, ensuring every session is impactful, interactive, and aligned with global standards.",
      image: "/professional-man-training-director.jpg",
    },
    {
      name: "Arti Chawla",
      role: "Head of Learner Success & Operations",
      description:
        "Leading the learner success division with empathy and precision, ensuring every journey from enrollment to certification is smooth, supported, and fulfilling.",
      image: "/professional-woman-operations-leader.jpg",
    },
    {
      name: "Saurav Paul",
      role: "Head of Training",
      description:
        "With 14+ years in corporate training, he mentors both instructors and learners, ensuring outcomes that align with global standards and bridge knowledge with implementation.",
      image: "/professional-man-training-head.jpg",
    },
  ]

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 blur-3xl"
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
            Meet the{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Leadership Team
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            At Harvard Learning, we believe that success begins with people. Our team brings together passionate leaders,
            educators, innovators, and strategists dedicated to transforming learning into lifelong achievement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                type: "spring",
                bounce: 0.3,
              }}
              onHoverStart={() => setHoveredIndex(idx)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                {/* Image container */}
                <div className="hidden h-80 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    animate={{
                      scale: hoveredIndex === idx ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Overlay gradient */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === idx ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent"
                  />

                  {/* Social icons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === idx ? 1 : 0,
                      y: hoveredIndex === idx ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-4 right-4 flex gap-2"
                  >
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm transition-transform hover:scale-110">
                      <Linkedin className="h-5 w-5 text-primary" />
                    </button>
                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background/90 backdrop-blur-sm transition-transform hover:scale-110">
                      <Mail className="h-5 w-5 text-primary" />
                    </button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <motion.h3
                    animate={{
                      color: hoveredIndex === idx ? "oklch(0.55 0.22 260)" : "oklch(0.15 0.02 250)",
                    }}
                    className="text-xl font-bold mb-1"
                  >
                    {member.name}
                  </motion.h3>
                  <p className="text-sm font-semibold text-primary mb-3">{member.role}</p>
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === idx ? "auto" : 0,
                      opacity: hoveredIndex === idx ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                  >
                    {member.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
