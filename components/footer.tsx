"use client"

import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

    const quickLinks = [
    { href: "/courses", label: "All Courses" },
    { href: "/about", label: "About Us" },
    { href: "/persona", label: "Persona" },
  ]

    const legals = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Contact Support", href: "/enroll" },
    { label: "FAQ", href: "#" },
  ]

  return (
    <footer className="relative overflow-hidden border-t border-border bg-gradient-to-b from-muted/30 to-background">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 md:px-6 md:py-20 lg:px-8">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 sm:space-y-6 lg:col-span-2"
          >
            <div className="flex items-center">
              <div className="flex h-9 w-auto items-center justify-center rounded-lg sm:h-10 sm:w-auto sm:rounded-xl">
                <img src='/images/hl_logo.png' className="h-16 w-auto text-primary-foreground" />
              </div>
              <div className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">Harvard Learning</div>
            </div>
            <p className="max-w-md text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              Empowering professionals worldwide with accessible, high-quality education designed for the modern
              learner. Join our global community and transform your future.
            </p>

            {/* Newsletter */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground sm:text-sm">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Join Our Newsletter
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border-2 text-sm sm:max-w-xs sm:text-base"
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-accent text-sm shadow-lg sm:text-base"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-1.5 pt-1 sm:space-y-2 sm:pt-2">
              {/* <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <Phone className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                +91 7451920703
              </div> */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
                <MapPin className="h-3.5 w-3.5 text-primary sm:h-4 sm:w-4" />
                Office No. 1044, Gaur City Mall,<br></br>
                Greater Noida W Rd, Gaur City-1, Sector 4,<br></br>
                Greater Noida West (Noida Extension), Gautam Buddha Nagar,<br></br>
                Uttar Pradesh 201318, India
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="text-sm font-semibold text-foreground sm:text-base">Quick Links</div>
            <ul className="space-y-2.5 text-xs sm:space-y-3 sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="text-sm font-semibold text-foreground sm:text-base">Legal</div>
            <ul className="space-y-2.5 text-xs sm:space-y-3 sm:text-sm">
              {legals.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="inline-flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 border-t border-border pt-6 sm:mt-12 sm:pt-8"
        >
          <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:gap-4 sm:text-sm md:flex-row">
            <div>© 2025 Harvard Learning. All rights reserved.</div>
            <div className="flex items-center gap-2">
              Made with <span className="inline-block animate-pulse text-red-500">❤</span> for learners worldwide
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
