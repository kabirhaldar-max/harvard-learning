"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Sparkles, TrendingUp, Clock, BarChart } from "lucide-react"
import { motion, easeOut } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

const workshops = [
  {
    icon: Brain,
    title: "Confidence & Personal Growth",
    description:
      "Build unshakeable confidence through evidence-based techniques, positive psychology frameworks, and personalized coaching sessions designed to help you overcome self-doubt.",
    duration: "6 weeks",
    level: "All Levels",
    gradient: "from-primary to-accent",
    image: "/confident-person-standing-strong.jpg",
    slug: "confidence-personal-growth",
    price: "INR 25,000",
    students: "500+",
  },
  {
    icon: Sparkles,
    title: "AI Productivity Mastery",
    description:
      "Learn to harness AI tools to automate workflows, boost productivity, and work smarter. Transform how you approach daily tasks with cutting-edge AI strategies.",
    duration: "4 weeks",
    level: "Beginner",
    gradient: "from-accent to-secondary",
    image: "/artificial-intelligence-productivity-technology.jpg",
    slug: "ai-productivity-mastery",
    price: "INR 60,000",
    students: "520+",
  },
  {
    icon: TrendingUp,
    title: "Adaptive Leadership",
    description:
      "Master the art of leading through change with adaptive leadership frameworks. Develop resilience, inspire teams, and navigate complex challenges with confidence.",
    duration: "8 weeks",
    level: "Intermediate",
    gradient: "from-secondary to-primary",
    image: "/leader-guiding-team-forward.jpg",
    slug: "adaptive-leadership",
    price: "INR 20,000",
    students: "380+",
  },
]

export function WorkshopsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  }

  return (
    <section
      id="workshops"
      className="relative overflow-hidden bg-gradient-to-b from-muted/30 to-background py-16 sm:py-20 md:py-32"
    >
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent/5 to-transparent" />
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
            <BarChart className="h-3 w-3 sm:h-4 sm:w-4" />
            Top-Rated Programs
          </div>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Workshops
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Transform your skills with our expertly crafted workshops designed for real-world impact and career
            advancement.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {workshops.map((workshop, index) => {
            const Icon = workshop.icon
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="group relative h-full overflow-hidden border-2 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
                  {/* Hover gradient effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${workshop.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  <div className="relative h-48 w-full overflow-hidden sm:h-56">
                    <img
                      src={workshop.image || "/placeholder.svg"}
                      alt={workshop.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`absolute bottom-3 left-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${workshop.gradient} shadow-lg sm:bottom-4 sm:left-4 sm:h-16 sm:w-16 sm:rounded-2xl`}
                    >
                      <Icon className="h-7 w-7 text-primary-foreground sm:h-8 sm:w-8" />
                    </motion.div>
                    <div className="absolute right-3 top-3 rounded-full bg-gradient-to-r from-primary to-accent px-3 py-1 text-xs font-medium text-white shadow-lg sm:right-4 sm:top-4">
                      {workshop.level}
                    </div>
                  </div>

                  <CardHeader className="relative pb-3 pt-4 sm:pb-4 sm:pt-6">
                    <CardTitle className="text-xl transition-colors group-hover:text-primary sm:text-2xl">
                      {workshop.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative space-y-4 px-4 pb-4 sm:space-y-6 sm:px-6 sm:pb-6">
                    <CardDescription className="text-sm leading-relaxed sm:text-base">
                      {workshop.description}
                    </CardDescription>

                    <div className="flex flex-wrap gap-3 text-xs text-muted-foreground sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{workshop.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <BarChart className="h-4 w-4 text-accent" />
                        <span>{workshop.students}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4 text-secondary" />
                        <span>Certificate</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-border/50 pt-4">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting at</p>
                        <p className="text-lg font-bold text-foreground sm:text-xl">{workshop.price}</p>
                      </div>
                      <Link href={`/courses/${workshop.slug}`}>
                        <Button className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] font-bold text-white shadow-lg transition-all hover:bg-[position:100%_0] hover:shadow-xl">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 text-center sm:mt-16"
        >
          <Button
            size="lg"
            className="gap-2 bg-gradient-to-r from-primary to-accent text-base shadow-lg hover:shadow-xl sm:text-lg"
          >
            View All Courses
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
