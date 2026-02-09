import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal type="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Privacy Policy</h1>
            <p className="text-muted-foreground mb-12">Last Updated: October 2023</p>
          </ScrollReveal>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Our Commitment to Privacy</h2>
              <p>
                WholeMind Behavioral Health & Wellness is committed to protecting your privacy and safeguarding your personal and health information. This Privacy Policy describes how we collect, use, and disclose your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">HIPAA Compliance</h2>
              <p>
                As a healthcare provider, we comply with the Health Insurance Portability and Accountability Act (HIPAA). Your Protected Health Information (PHI) is handled with the highest level of confidentiality and security.
              </p>
              <p className="mt-4">
                We disclose PHI only as permitted by law, including for treatment coordination, payment processing, healthcare operations, and situations involving safety or legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Information We Collect</h2>
              <p>
                We may collect information you provide directly to us, such as when you fill out a referral form, schedule an appointment, or contact us through our website. This may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Demographic information</li>
                <li>Health information relevant to your care</li>
                <li>Insurance information (if applicable)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide and improve our healthcare services</li>
                <li>Communicate with you regarding your care and appointments</li>
                <li>Process payments for services rendered</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your information from unauthorized access, disclosure, or misuse. This includes using secure, HIPAA-compliant platforms for telehealth and electronic communication.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
              <p>
                If you have any questions or concerns about our Privacy Policy or how your information is handled, please contact us at info@wholemindhealth.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
