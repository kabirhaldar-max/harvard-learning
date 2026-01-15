"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Zap, Users, Award, BookOpen, Headphones, Globe2 } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description: "Access courses 24/7 and learn on your own schedule with lifetime access to all materials.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry leaders with years of real-world experience and proven track records.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Certified Programs",
    description: "Earn globally recognized certifications that boost your resume and career prospects.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description: "Deep-dive into topics with structured curriculum, practical exercises, and real projects.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it with our dedicated support team and community forums.",
    color: "from-red-500 to-rose-500",
  },
  {
    icon: Globe2,
    title: "Global Community",
    description: "Connect with learners worldwide, share experiences, and build lasting professional networks.",
    color: "from-indigo-500 to-violet-500",
  },
]

export function FeaturesSection() {
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
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      {/* Animated background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 md:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:mb-4 sm:text-4xl md:text-5xl lg:text-6xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Harvard Learning
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            We provide everything you need to succeed in your learning journey with cutting-edge tools and support.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full overflow-hidden rounded-2xl border-2 border-border/50 bg-card p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl sm:rounded-3xl sm:p-8"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="relative space-y-3 sm:space-y-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl`}
                    >
                      <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-foreground sm:text-xl">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{feature.description}</p>
                  </div>

                  {/* Animated border effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 transition-opacity duration-300 group-hover:opacity-20 sm:rounded-3xl`}
                    style={{ filter: "blur(20px)", transform: "scale(0.95)" }}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
