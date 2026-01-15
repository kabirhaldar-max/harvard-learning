"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { User, Mail, MapPin, BookOpen, Send } from "lucide-react"
import { useState } from "react"

export function EnrollForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget);

    const payload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      address: formData.get("address"),
      interest: formData.get("interest")
    }

    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const result = await res.json();
    setIsSubmitting(false)
    alert(result.message)
  }

  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
      <Card className="group relative overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background via-muted/30 to-background p-6 shadow-2xl transition-all hover:border-primary/50 sm:p-8 lg:p-10">
        {/* Animated gradient background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 transition-opacity group-hover:opacity-100"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />

        <div className="relative z-10">
          <div className="mb-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent p-4 shadow-xl"
            >
              <BookOpen className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="mb-2 text-2xl font-bold text-foreground sm:text-3xl">Enrollment Form</h2>
            <p className="text-sm text-muted-foreground sm:text-base">Fill out the details below to get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-2"
            >
              <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-semibold">
                <User className="h-4 w-4 text-primary" />
                First Name *
              </Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                required
                className="border-2 transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/20"
              />
            </motion.div>

            {/* Last Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-semibold">
                <User className="h-4 w-4 text-primary" />
                Last Name *
              </Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                required
                className="border-2 transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/20"
              />
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <Label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold">
                <Mail className="h-4 w-4 text-primary" />
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                required
                className="border-2 transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/20"
              />
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2"
            >
              <Label htmlFor="address" className="flex items-center gap-2 text-sm font-semibold">
                <MapPin className="h-4 w-4 text-primary" />
                Address
              </Label>
              <Textarea
                id="address"
                name="address"
                placeholder="Enter your address"
                rows={3}
                className="border-2 transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/20"
              />
            </motion.div>

            {/* Course Interest */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="space-y-2"
            >
              <Label htmlFor="topic" className="flex items-center gap-2 text-sm font-semibold">
                <BookOpen className="h-4 w-4 text-primary" />
                What Topic Are You Interested In? *
              </Label>
              <Textarea
                id="interest"
                name="interest"
                placeholder="Enter your Interest"
                rows={2}
                className="border-2 transition-all focus:border-primary focus:shadow-lg focus:shadow-primary/20"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] py-6 text-base font-bold text-white shadow-2xl shadow-primary/50 transition-all duration-300 hover:bg-[position:100%_0] hover:shadow-primary/70"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: isSubmitting ? ["-200%", "200%"] : "-200%",
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isSubmitting ? Number.POSITIVE_INFINITY : 0,
                    ease: "linear",
                  }}
                />
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </form>
        </div>
      </Card>
    </motion.div>
  )
}
