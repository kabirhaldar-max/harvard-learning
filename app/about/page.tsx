import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutPageHero } from "@/components/about-page-hero"
import { MissionSection } from "@/components/mission-section"
import { PromisesSection } from "@/components/promises-section"
import { TeamSection } from "@/components/team-section"
import { CultureSection } from "@/components/culture-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutPageHero />
        <MissionSection />
        <PromisesSection />
        <TeamSection />
        <CultureSection />
      </main>
      <Footer />
    </div>
  )
}
