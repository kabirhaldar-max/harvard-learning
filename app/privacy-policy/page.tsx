"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, Lock, Eye, FileText, Database, Cookie, Trash2, ExternalLink, ChevronRight } from "lucide-react"

const sections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          We collect the following types of information to ensure smooth operation of our services:
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              label: "Personal Information",
              text: "Your name, email address, contact number, and country of residence collected during registration or inquiries.",
            },
            {
              label: "Payment Information",
              text: "Transaction details (amount, date, and payment method). We do not store complete payment card or crypto wallet details.",
            },
            {
              label: "Course and Usage Data",
              text: "Information about the courses you enroll in, your progress, assessments, and interactions with our online learning platform.",
            },
            {
              label: "Technical Information",
              text: "Device type, IP address, browser version, and cookies to improve website performance and user experience.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-border/50 bg-muted/30 p-4 transition-colors hover:border-primary/30"
            >
              <h4 className="mb-1 font-bold text-foreground">{item.label}</h4>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "How We Use Your Information",
    icon: Eye,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">We use your information to:</p>
        <ul className="grid gap-3 sm:grid-cols-2">
          {[
            "Process your course enrollment and payments.",
            "Provide access to study materials, exams, and course completion certificates.",
            "Communicate important updates, reminders, and support-related information.",
            "Improve course quality, website functionality, and user experience.",
            "Maintain compliance with our internal policies and applicable laws.",
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {text}
            </li>
          ))}
        </ul>
        <p className="rounded-lg bg-primary/5 p-4 text-center text-sm font-medium text-primary">
          We do not sell, trade, or rent your personal information to any third party.
        </p>
      </div>
    ),
  },
  {
    title: "Data Storage and Security",
    icon: Lock,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          We prioritize the security of your data with industry-standard measures:
        </p>
        <div className="space-y-3">
          {[
            "All personal data is stored securely in encrypted databases.",
            "Only authorized Harvard Learning personnel have access to user data.",
            "We regularly update our systems and employ security measures such as SSL encryption to protect against unauthorized access, alteration, or disclosure.",
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg border border-border/50 p-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-3.5 w-3.5" />
              </div>
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Use of Cookies",
    icon: Cookie,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">Our website uses cookies to:</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Enhance browsing experience",
            "Save login preferences",
            "Analyze site traffic",
            "Improve user experience",
          ].map((tag, i) => (
            <span key={i} className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          You can choose to disable cookies from your browser settings; however, some website features may not function
          properly as a result.
        </p>
      </div>
    ),
  },
  {
    title: "Your Rights",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Access", icon: Eye, text: "Access the information we hold about you." },
            { label: "Correction", icon: FileText, text: "Request correction or deletion of inaccurate data." },
            { label: "Consent", icon: Trash2, text: "Withdraw consent for marketing communications." },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-3 rounded-xl border border-border/50 p-4 text-center"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium text-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-24 sm:pt-32 lg:pt-40">
        {/* Hero Section */}
        <section className="relative mb-12 overflow-hidden px-4 text-center sm:mb-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto max-w-4xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/20">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Privacy <span className="text-primary">Policy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              At Harvard Learning, we are committed to protecting your privacy and ensuring the security of your
              personal information.
            </p>
          </motion.div>
        </section>

        {/* Content Section */}
        <section className="container relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex flex-col gap-6 md:flex-row">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow space-y-4">
                    <h2 className="text-2xl font-bold tracking-tight text-foreground">{section.title}</h2>
                    <div className="prose prose-sm prose-invert max-w-none">{section.content}</div>
                  </div>
                </div>
                {index < sections.length - 1 && (
                  <div className="absolute -bottom-6 left-6 right-0 h-px bg-border/50 md:left-24" />
                )}
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl border-2 border-dashed border-border p-8 text-center"
            >
              <h3 className="mb-4 text-xl font-bold">Third-Party Links</h3>
              <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
                Our website may contain links to third-party websites (e.g., payment gateways or educational partners).
                Harvard Learning is not responsible for the privacy practices or content of these external sites.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm font-medium text-primary">
                Learn more about our partners <ExternalLink className="h-4 w-4" />
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
