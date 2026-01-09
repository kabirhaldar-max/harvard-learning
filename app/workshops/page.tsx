import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkshopsPageHero } from "@/components/workshops-page-hero"
import { WorkshopsList } from "@/components/workshops-list"

export default function WorkshopsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        <WorkshopsPageHero />
        <WorkshopsList />
      </main>
      <Footer />
    </div>
  )
}
