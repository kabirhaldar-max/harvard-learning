"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  const openingHours = [
    { day: "Monday", hours: "10:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
    { day: "Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {/* Contact Details Card */}
      <Card className="group relative overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background via-muted/30 to-background p-6 shadow-xl transition-all hover:border-primary/50 sm:p-8">
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent p-4 shadow-xl"
          >
            <MapPin className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Information</h2>

          <div className="space-y-6">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="group/item flex gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover/item:scale-110 group-hover/item:bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Office No. 1044, Gaur City Mall,
                  <br />
                  Greater Noida W Rd, Gaur City-1, Sector 4,
                  <br />
                  Greater Noida West (Noida Extension), Gautam Buddha Nagar,
                  <br />
                  Uttar Pradesh 201318, India
                </p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="group/item flex gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 transition-all group-hover/item:scale-110 group-hover/item:bg-accent/20">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Email</h3>
                <a href="mailto:support@harvardlearning.com" className="text-sm text-primary hover:underline">
                  support@harvardlearning.com
                </a>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="group/item flex gap-4"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover/item:scale-110 group-hover/item:bg-primary/20">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">Phone</h3>
                <a href="tel:+917969537567" className="text-sm text-primary hover:underline">
                  +91-7451920703
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </Card>

      {/* Opening Hours Card */}
      <Card className="group relative overflow-hidden border-2 border-border/50 bg-gradient-to-br from-background via-muted/30 to-background p-6 shadow-xl transition-all hover:border-accent/50 sm:p-8">
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-primary p-4 shadow-xl"
          >
            <Clock className="h-8 w-8 text-white" />
          </motion.div>

          <h2 className="mb-6 text-2xl font-bold text-foreground">Opening Hours</h2>

          <div className="space-y-3">
            {openingHours.map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.05 }}
                className="flex items-center justify-between rounded-lg bg-muted/50 p-3 transition-all hover:bg-muted"
              >
                <span className="font-medium text-foreground">{item.day}</span>
                <span className="text-sm text-muted-foreground">{item.hours}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="overflow-hidden rounded-2xl border-2 border-border/50 shadow-xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7847600028604!2d77.42593597511643!3d28.606233275679163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef6165728471%3A0xf027989e066991a4!2sGaur%20City%20Mall!5e0!3m2!1sen!2sin!4v1766996601433!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Harvard Learning Location"
        />
      </motion.div>
    </motion.div>
  )
}
