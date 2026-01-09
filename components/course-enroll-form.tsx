"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Send, User, Mail, MapPin, BookOpen } from "lucide-react"

interface CourseEnrollFormProps {
  courseTitle: string
}

export function CourseEnrollForm({ courseTitle }: CourseEnrollFormProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    topic: courseTitle,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="enroll-form"
      className="relative overflow-hidden bg-gradient-to-b from-muted/30 via-background to-muted/30 py-16 sm:py-20 lg:py-28"
    >
      {/* Animated Background Elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-gradient-to-br from-accent/30 to-transparent blur-3xl"
        />
      </div>

      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden border-2 shadow-2xl">
            <CardHeader className="relative space-y-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 pb-8 sm:space-y-6 sm:pb-10">
              {/* Floating Icons */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute right-10 top-10"
                >
                  <Sparkles className="h-8 w-8 text-primary/40" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute bottom-10 left-10"
                >
                  <BookOpen className="h-8 w-8 text-accent/40" />
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="flex items-center justify-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-accent to-primary shadow-xl">
                  <Sparkles className="h-8 w-8 text-primary-foreground" />
                </div>
              </motion.div>
              <CardTitle className="text-balance text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Start Your Learning Journey
              </CardTitle>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center text-base text-muted-foreground sm:text-lg"
              >
                Take the first step towards transformation. Enroll today!
              </motion.p>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="firstName" className="flex items-center gap-2 text-sm font-medium sm:text-base">
                      <User className="h-4 w-4 text-primary" />
                      First Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                      placeholder="Enter your first name"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="lastName" className="flex items-center gap-2 text-sm font-medium sm:text-base">
                      <User className="h-4 w-4 text-primary" />
                      Last Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="h-12 border-2 transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                      placeholder="Enter your last name"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="space-y-2"
                >
                  <Label htmlFor="email" className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <Mail className="h-4 w-4 text-primary" />
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="space-y-2"
                >
                  <Label htmlFor="address" className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <MapPin className="h-4 w-4 text-primary" />
                    Address
                  </Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="min-h-[100px] border-2 transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                    placeholder="Enter your address"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="space-y-2"
                >
                  <Label htmlFor="topic" className="flex items-center gap-2 text-sm font-medium sm:text-base">
                    <BookOpen className="h-4 w-4 text-primary" />
                    Course Selected <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="topic"
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    required
                    className="h-12 border-2 bg-muted/50 font-medium transition-all duration-300 focus:border-primary focus:shadow-lg focus:shadow-primary/20"
                    readOnly
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="group w-full gap-2 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] py-6 text-base font-bold shadow-2xl shadow-primary/30 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-primary/50 sm:text-lg"
                  >
                    Submit Application
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="text-center text-sm text-muted-foreground"
                >
                  By submitting this form, you agree to our Terms of Service and Privacy Policy
                </motion.p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
