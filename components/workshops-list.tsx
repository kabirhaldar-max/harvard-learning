"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

const workshops = [
  {
    title: "Self-Confidence Building Training",
    price: "INR 25,000",
    image: "/confident-person-standing-strong.jpg",
    duration: "60-90 days",
    students: "500+",
    level: "Beginner to Advanced",
    description: "Build unshakeable self-confidence and develop a powerful presence in any situation.",
    slug: "self-confidence-building",
  },
  {
    title: "Resilience Coach Training",
    price: "INR 15,000",
    image: "/person-overcoming-obstacles.jpg",
    duration: "60-90 days",
    students: "350+",
    level: "Intermediate",
    description: "Learn to bounce back from setbacks and help others develop mental resilience.",
    slug: "resilience-coach",
  },
  {
    title: "Motivational Speaker Training",
    price: "INR 45,000",
    image: "/speaker-on-stage-inspiring-audience.jpg",
    duration: "60-90 days",
    students: "400+",
    level: "Advanced",
    description: "Master the art of inspiring and motivating audiences with powerful speeches.",
    slug: "motivational-speaker",
  },
  {
    title: "Body Language Expert Training",
    price: "INR 75,000",
    image: "/body-language-communication-gestures.jpg",
    duration: "60-90 days",
    students: "300+",
    level: "Advanced",
    description: "Decode and master non-verbal communication to enhance your influence.",
    slug: "body-language-expert",
  },
  {
    title: "Personal Branding Strategist Training",
    price: "INR 65,000",
    image: "/personal-brand-professional-image.jpg",
    duration: "60-90 days",
    students: "450+",
    level: "Intermediate to Advanced",
    description: "Create a powerful personal brand that stands out in today's competitive market.",
    slug: "personal-branding",
  },
  {
    title: "Mindset Mastery Training",
    price: "INR 20,000",
    image: "/mindset-growth-mental-strength.jpg",
    duration: "60-90 days",
    students: "600+",
    level: "Beginner to Intermediate",
    description: "Transform your mindset to unlock your full potential and achieve your goals.",
    slug: "mindset-mastery",
  },
  {
    title: "Relationship Coaching Training",
    price: "INR 15,000",
    image: "/couple-relationship-counseling.jpg",
    duration: "60-90 days",
    students: "280+",
    level: "Intermediate",
    description: "Help others build and maintain healthy, fulfilling relationships.",
    slug: "relationship-coaching",
  },
  {
    title: "Decision Making Mastery Training",
    price: "INR 25,000",
    image: "/decision-making-strategy-planning.jpg",
    duration: "60-90 days",
    students: "320+",
    level: "Intermediate",
    description: "Master the art of making effective decisions under pressure and uncertainty.",
    slug: "decision-making",
  },
  {
    title: "Adaptive Leadership Training",
    price: "INR 20,000",
    image: "/leader-guiding-team-forward.jpg",
    duration: "60-90 days",
    students: "380+",
    level: "Intermediate to Advanced",
    description: "Lead effectively in changing environments and inspire your team to excel.",
    slug: "adaptive-leadership",
  },
  {
    title: "AI Productivity Power-Up",
    price: "INR 60,000",
    image: "/artificial-intelligence-productivity-technology.jpg",
    duration: "60-90 days",
    students: "520+",
    level: "Beginner to Advanced",
    description: "Leverage AI tools and techniques to supercharge your productivity and efficiency.",
    slug: "ai-productivity-powerup",
  },
  {
    title: "The Everyday AI Toolkit",
    price: "INR 45,000",
    image: "/ai-tools-everyday-applications.jpg",
    duration: "60-90 days",
    students: "470+",
    level: "Beginner",
    description: "Master practical AI applications for everyday tasks and workflows.",
    slug: "everyday-ai-toolkit",
  },
  {
    title: "Confidence and Charisma Training",
    price: "INR 62,500",
    image: "/charismatic-person-confident-presence.jpg",
    duration: "60-90 days",
    students: "410+",
    level: "Intermediate to Advanced",
    description: "Develop magnetic charisma and commanding confidence in any social setting.",
    slug: "confidence-charisma",
  },
]

export function WorkshopsList() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background py-16 sm:py-20 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="mb-4 text-balance text-2xl font-extrabold text-foreground sm:text-3xl lg:text-4xl">
            Our{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Featured Courses
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            Choose from our comprehensive selection of professional development courses
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card shadow-lg transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />

              <div className="relative h-48 overflow-hidden bg-muted sm:h-56">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                <Badge className="absolute right-4 top-4 bg-gradient-to-r from-primary to-accent text-white shadow-lg">
                  {workshop.level}
                </Badge>
              </div>

              <div className="relative p-6">
                <h3 className="mb-3 text-balance text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                  {workshop.title}
                </h3>

                <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{workshop.description}</p>

                <div className="mb-4 flex flex-wrap gap-3 text-xs text-muted-foreground sm:text-sm">
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-accent" />
                    <span>{workshop.students}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Award className="h-4 w-4 text-secondary" />
                    <span>Certificate</span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-border/50 pt-4">
                  <div>
                    <p className="text-xs text-muted-foreground sm:text-sm">Investment</p>
                    <p className="text-xl font-bold text-foreground sm:text-2xl">{workshop.price}</p>
                  </div>
                  <Link href={`/courses/${workshop.slug}`}>
                    <Button
                      className="group/btn relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] font-bold text-white shadow-lg transition-all hover:bg-[position:100%_0] hover:shadow-xl hover:shadow-primary/30"
                      size="lg"
                    >
                      <span className="flex items-center gap-2">
                        Enroll Now
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </span>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 text-center sm:mt-16"
        >
          <div className="inline-flex flex-col items-center gap-4 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 p-8 backdrop-blur-sm sm:p-12">
            <h3 className="text-balance text-xl font-bold text-foreground sm:text-2xl">
              Ready to Start Your Learning Journey?
            </h3>
            <p className="max-w-xl text-pretty text-sm text-muted-foreground sm:text-base">
              Join thousands of professionals who have transformed their careers with our expert-led courses
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-8 py-6 text-base font-bold text-white shadow-2xl shadow-primary/30 transition-all hover:bg-[position:100%_0] hover:shadow-primary/50 sm:text-lg"
            >
              View All Courses
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
