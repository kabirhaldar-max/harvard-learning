"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { DollarSign, XCircle, CheckCircle, FileText, Mail, Clock, AlertCircle, Briefcase, UserCheck, ShieldAlert, ChevronRight } from "lucide-react"

const sections = [
  {
    title: "No Refund After Exam Attempt",
    icon: XCircle,
    content: (
      <div className="space-y-4">
        <div className="rounded-xl border-2 border-destructive/20 bg-destructive/5 p-6">
          <p className="text-muted-foreground">
            Once a candidate has attempted any exam whether it is the Pre-Board Exam or the Final Exam, no refund will
            be applicable under any circumstances.
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          This policy ensures the integrity of our course access and examination system, as study materials and
          evaluations are already utilized at that stage.
        </p>
      </div>
    ),
  },
  {
    title: "90% Refund Before Exam Attempt",
    icon: CheckCircle,
    content: (
      <div className="space-y-4">
        <div className="rounded-xl border-2 border-primary/20 bg-primary/5 p-6">
          <p className="mb-4 text-muted-foreground">
            If a candidate wishes to cancel their enrollment before attempting the pre-exam, they are eligible for a 90%
            refund of the total course fee.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Refund only within 24 hours of payment",
              "Must not have attended the exam",
              "Otherwise no refund will be initiated",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-background/50 p-3">
                <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "No 100% Refund Policy",
    icon: AlertCircle,
    content: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Please note that Harvard Learning does not offer a 100% refund under any condition.
        </p>
        <div className="rounded-xl border border-border/50 bg-muted/30 p-6">
          <p className="text-sm text-muted-foreground">
            This is due to administrative, processing, and content access costs incurred upon enrollment.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Refund Request Procedure",
    icon: FileText,
    content: (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Mail className="h-5 w-5" />
            </div>
            <h4 className="mb-2 font-bold text-foreground">How to Request</h4>
            <p className="text-sm text-muted-foreground">
              The refund request must be raised in writing via email to the official Harvard Learning support team at{" "}
              <span className="font-medium text-primary">support@harvardlearning.com</span>
            </p>
          </div>
          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Clock className="h-5 w-5" />
            </div>
            <h4 className="mb-2 font-bold text-foreground">Processing Time</h4>
            <p className="text-sm text-muted-foreground">
              Refund processing time is 5-7 working days. Once approved, it may take an additional 7 working days to
              get credited into the customer's bank account from which payment was made.
            </p>
          </div>
        </div>
        <div className="rounded-xl border-2 border-dashed border-border p-6">
          <h4 className="mb-3 font-bold text-foreground">Required Information:</h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {["Full name", "Registered email ID", "Course name", "Payment receipt", "Reason for cancellation"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </div>
              )
            )}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Requests without complete details may face delays in processing.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "10% Deduction on All Refunds",
    icon: DollarSign,
    content: (
      <div className="space-y-4">
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 p-6">
          <p className="mb-4 text-muted-foreground">
            All approved refunds will include a 10% deduction to cover costs associated with digital content delivery,
            study materials, and platform usage.
          </p>
          <p className="text-center text-sm font-medium text-primary">
            This deduction applies uniformly to all refund cases.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Special Note",
    icon: ShieldAlert,
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="mb-3 font-bold text-foreground">Refunds are not applicable in the following cases:</h4>
          <div className="grid gap-4">
            {[
              {
                title: "Partial Course Completion",
                text: "If a candidate has completed only a portion of the course, no refund will be issued for the remaining content.",
              },
              {
                title: "Delayed Course Progress",
                text: "Refunds will not be provided due to delays in completing the course at the candidate's own pace.",
              },
              {
                title: "Accessed Content",
                text: "Once study materials, training videos, or pre-board assessments have been accessed, refunds will not be applicable.",
              },
              {
                title: "Dissatisfaction with Course Content",
                text: "Refunds cannot be claimed solely based on personal preferences, expectations, or dissatisfaction with the course material.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border/50 bg-muted/30 p-4 transition-colors hover:border-destructive/30"
              >
                <h5 className="mb-1 font-bold text-foreground group-hover:text-destructive">{item.title}</h5>
                <p className="text-sm text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <UserCheck className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-foreground">Agreement to Policies</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              By enrolling in any course offered by Harvard Learning, candidates acknowledge and agree to comply with
              all policies, terms of service, and refund rules. Enrolling confirms that the candidate has read,
              understood, and accepted the terms outlined in the policies, including payment, course access, exam
              schedules, and refund rules.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Briefcase className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-foreground">Independent Organization</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Harvard Learning is an independent training and service provider. We are not affiliated, associated,
              authorized, endorsed by, or in any way officially connected with any other institute, organization, or
              governing body. All rights related to our services, content, and training materials are solely reserved by
              Harvard Learning.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <AlertCircle className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-foreground">No Guarantee of Employment or Monetary Benefit</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Our programs are designed for skill development and professional enhancement only. We do not guarantee any
              monetary benefit, job placement, promotion, or financial gain as a result of completing our training or
              certification programs.
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-muted/30 p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                <ShieldAlert className="h-4 w-4" />
              </div>
              <h4 className="font-bold text-foreground">Third-Party Recommendations</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Harvard Learning shall not be held responsible for any financial, personal, or professional loss incurred
              by customers who enroll in our services based on third-party recommendations, promotions, or
              representations. Any such engagement is strictly at the discretion and responsibility of the individual.
            </p>
          </div>
        </div>
      </div>
    ),
  },
]

export default function RefundPolicyPage() {
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
              <DollarSign className="h-8 w-8" />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Refund <span className="text-primary">Policy</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              At Harvard Learning, we strive for transparency in our refund policies. Please review the terms and
              conditions below.
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
