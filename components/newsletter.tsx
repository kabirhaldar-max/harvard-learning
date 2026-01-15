"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Send, Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!subscribed) return

    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
    setSubscribed(false)
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-primary py-16 sm:py-20 lg:py-24">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center justify-center rounded-full bg-white/20 p-4 backdrop-blur-sm"
          >
            <Mail className="h-8 w-8 text-white sm:h-10 sm:w-10" />
          </motion.div>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">Join Our Newsletter</h2>
          <p className="mb-8 text-lg text-white/90 sm:text-xl">
            Stay updated with the latest courses, tips, and exclusive offers
          </p>

          <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 flex-1 border-2 border-white/30 bg-white/10 text-white placeholder:text-white/60 backdrop-blur-sm focus:border-white focus:bg-white/20 sm:h-14"
              />
              <Button
                type="submit"
                disabled={!subscribed || isSubmitting}
                className="h-12 bg-white px-8 font-bold text-primary shadow-2xl transition-all hover:scale-105 hover:bg-white/90 disabled:opacity-50 sm:h-14"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                id="newsletter"
                checked={subscribed}
                onCheckedChange={(checked) => setSubscribed(checked as boolean)}
                className="border-2 border-white/50 data-[state=checked]:bg-white data-[state=checked]:text-primary"
              />
              <Label htmlFor="newsletter" className="cursor-pointer text-sm text-white/90 sm:text-base">
                Yes, subscribe me to your newsletter.
              </Label>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
