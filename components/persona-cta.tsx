"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function PersonaCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-32">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border-2 border-primary/20"
        >
          <div className="absolute inset-0">
            <Image
              src="/artificial-intelligence-productivity-technology.jpg"
              alt="Learning technology"
              fill
              className="object-cover opacity-20"
            />
          </div>

          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-sm" />

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-primary/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}

          <div className="relative px-6 py-12 text-center sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to Start Your{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  Personalized Journey?
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                Join Harvard Learning's Persona program and unlock a learning experience designed exclusively for you.
                Let's transform your career together.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link href="/workshops">
                <Button
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-8 py-6 text-base font-bold text-white shadow-2xl shadow-primary/50 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-primary/70 sm:px-10 sm:py-7 sm:text-lg"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ["-200%", "200%"],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      repeatDelay: 1,
                    }}
                  />
                  <span className="relative flex items-center gap-2">
                    Explore Courses
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>

              <Link href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary/50 bg-background/50 px-8 py-6 text-base font-bold backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 sm:px-10 sm:py-7 sm:text-lg"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Get Counseling
                  </span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
