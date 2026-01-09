import { EnrollHero } from "@/components/enroll-hero"
import { EnrollForm } from "@/components/enroll-form"
import { ContactInfo } from "@/components/contact-info"
import { Newsletter } from "@/components/newsletter"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Enroll Now - Harvard Learning",
  description: "Start your learning journey with Harvard Learning. Enroll in our courses today.",
}

export default function EnrollPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <EnrollHero />
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <EnrollForm />
          <ContactInfo />
        </div>
      </div>
      <Newsletter />
      <Footer />
    </main>
  )
}
