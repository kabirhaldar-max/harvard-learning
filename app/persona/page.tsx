import { Header } from "@/components/header"
import { PersonaHero } from "@/components/persona-hero"
import { PersonaIntro } from "@/components/persona-intro"
import { PersonaFeatures } from "@/components/persona-features"
import { PersonaCTA } from "@/components/persona-cta"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Persona - Personalized Learning | Harvard Learning",
  description:
    "Your learning journey, personalized. Discover Persona - a tailored learning experience custom-crafted for your career goals and professional growth.",
}

export default function PersonaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        <PersonaHero />
        <PersonaIntro />
        <PersonaFeatures />
        <PersonaCTA />
      </main>
      <Footer />
    </div>
  )
}
