"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Scale, Clock, MonitorPlay, CreditCard, FileCheck, ShieldAlert, Mail, ChevronRight, Info } from "lucide-react"

const sections = [
  {
    title: "Course Duration and Delivery",
    icon: Clock,
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>The complete course will be delivered within 60 to 90 days from the date of enrollment.</p>
        <ul className="grid gap-3">
          {[
            "Invoice, Study Materials, and video lectures delivered within 6 working hours of payment.",
            "Pre-Board Exam scheduled 24 to 48 hours after payment via official exam portal.",
            'Initial PC Softcopy (indicating "Training Ongoing") provided within 48 to 72 hours after pre-board exam.',
            "Final online exam must be attended between 60 to 90 days after enrollment.",
            'Final PC Softcopy emailed upon successful completion (indicating "Training Completed" and "Customer Certified").',
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-3 rounded-lg bg-muted/50 p-3 text-sm">
              <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Training Format",
    icon: MonitorPlay,
    content: (
      <div className="space-y-4 text-muted-foreground">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="flex items-center gap-2 text-sm font-medium text-red-500">
            <ShieldAlert className="h-4 w-4" /> No live training sessions will be provided.
          </p>
        </div>
        <p>Study material and training videos are shared once via email within 6 working hours after enrollment.</p>
        <p className="text-sm italic">
          Note: Training materials are non-transferable and intended solely for enrolled candidates.
        </p>
      </div>
    ),
  },
  {
    title: "Payment and Material Dispatch",
    icon: CreditCard,
    content: (
      <div className="space-y-4 text-muted-foreground">
        <p>Payment invoice and course materials shared within 6 hours of confirmation.</p>
        <div className="rounded-xl border border-border/50 bg-muted/30 p-4">
          <h4 className="mb-2 font-bold text-foreground">Certificate Naming Convention</h4>
          <p className="text-sm">
            Certificates use abbreviation formats. Example: "Resilience Coach Training" appears as "RCT" on the
            certificate.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Exam Policy",
    icon: FileCheck,
    content: (
      <div className="space-y-4 text-muted-foreground">
        <ul className="space-y-3">
          {[
            "Final Exam conducted online between 60 to 90 days from payment date.",
            "Multiple exam attempts are not permitted for pre-board or final exams.",
            "Final PC Softcopy issued within 15 days after final exam attempt.",
            "Digital format only—no hard copy certificates will be delivered.",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-3 rounded-lg border border-border/50 p-3">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileCheck className="h-3.5 w-3.5" />
              </div>
              <p className="text-sm">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Refund Policy",
    icon: ShieldAlert,
    content: (
      <div className="grid gap-4 sm:grid-cols-2">
        {[
          {
            label: "Pre-Exam Refund",
            text: "90% refund is applicable before attempting any exam.",
            highlight: "90% Refund",
          },
          {
            label: "Post-Exam Policy",
            text: "No refund applicable after attempting any exam (Pre-Board or Final).",
            highlight: "0% Refund",
          },
          {
            label: "Deductions",
            text: "10% deduction applies to cover digital study materials and content access.",
            highlight: "10% Fee",
          },
          {
            label: "Full Refund",
            text: "There is no 100% refund policy under any circumstances.",
            highlight: "No 100%",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-border/50 bg-muted/30 p-4 transition-colors hover:border-primary/30"
          >
            <div className="mb-2 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              {item.highlight}
            </div>
            <h4 className="mb-1 font-bold text-foreground">{item.label}</h4>
            <p className="text-sm text-muted-foreground">{item.text}</p>
          </div>
        ))}
      </div>
    ),
  },
]

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-grow pt-24 sm:pt-32 lg:pt-40">
        <section className="relative mb-12 overflow-hidden px-4 text-center sm:mb-20">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_50%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto max-w-4xl"
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-xl shadow-primary/20">
              <Scale className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Terms & <span className="text-primary">Conditions</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Please review our terms of service and enrollment policies to understand your rights and responsibilities.
            </p>
          </motion.div>
        </section>

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 border border-primary/10"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Info className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold">General Terms</h3>
              </div>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  All timelines mentioned are approximate and subject to variation depending on course type and customer
                  engagement.
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  Study materials and videos are shared once and cannot be reissued.
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  By enrolling, candidates agree to comply with the above terms and conditions.
                </li>
              </ul>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
                <p className="text-xs text-muted-foreground">Questions about our terms?</p>
                <a
                  href="mailto:support@harvardlearning.com"
                  className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  <Mail className="h-4 w-4" /> support@harvardlearning.com
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
