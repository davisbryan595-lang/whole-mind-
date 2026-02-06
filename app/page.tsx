import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ConditionsWeTreat } from "@/components/conditions-we-treat"
import { Providers } from "@/components/providers"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { ReferralForm } from "@/components/referral-form"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ConditionsWeTreat />
        <Providers />
        <Testimonials />
        <FAQ />
        <ReferralForm />
      </main>
      <Footer />
      <Toaster />
    </>
  )
}
