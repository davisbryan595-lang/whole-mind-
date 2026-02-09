import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal type="fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8">Terms, Conditions & Services</h1>
            <p className="text-muted-foreground mb-12">Last Updated: October 2023</p>
          </ScrollReveal>

          <div className="prose prose-slate max-w-none space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the WholeMind Behavioral Health & Wellness website, scheduling services, or engaging in care, you agree to these Terms, Conditions & Services. If you do not agree, please refrain from using this website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Services Provided</h2>
              <h3 className="text-xl font-semibold mb-3">2. Scope of Services</h3>
              <p>WholeMind Behavioral Health & Wellness provides outpatient mental health services, which may include but are not limited to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Psychiatric evaluations</li>
                <li>Medication management</li>
                <li>Mental health assessments</li>
                <li>Follow-up visits</li>
                <li>Treatment planning</li>
                <li>Care coordination</li>
                <li>Telepsychiatry services (where permitted by law)</li>
              </ul>
              <p className="mt-4">
                Services are provided by licensed psychiatric mental health professionals and are intended for non-emergency care.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">3. No Emergency Services</h3>
              <p>WholeMind Behavioral Health & Wellness does not provide emergency or crisis services.</p>
              <p className="mt-2 font-semibold text-destructive">
                If you are experiencing a psychiatric emergency or are at risk of harming yourself or others, call 911, go to the nearest emergency room, or contact the 988 Suicide & Crisis Lifeline immediately.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">4. Patient Eligibility</h3>
              <p>Services are provided to individuals who:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Are residents of states where the provider is licensed</li>
                <li>Are appropriate for outpatient psychiatric care</li>
                <li>Can participate safely in treatment</li>
              </ul>
              <p className="mt-4">
                The practice reserves the right to refer patients to a higher level of care if clinically indicated.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Website Use & Medical Disclaimer</h2>
              <h3 className="text-xl font-semibold mb-3">5. Informational Use Only</h3>
              <p>
                Content on this website is for educational and informational purposes only and does not constitute medical advice, diagnosis, or treatment.
              </p>
              <p className="mt-2">
                Engaging with this website does not establish a provider-patient relationship unless a formal intake and consent process has been completed.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">6. No Guarantees</h3>
              <p>
                Mental health treatment outcomes vary. WholeMind Behavioral Health & Wellness does not guarantee specific results from treatment or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Appointments, Payments & Policies</h2>
              <h3 className="text-xl font-semibold mb-3">7. Appointments</h3>
              <p>
                Appointments may be scheduled online, by phone, or through a patient portal. Timeliness and attendance are expected to ensure quality care.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">8. Fees & Payments</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment is due at the time of service unless otherwise arranged</li>
                <li>Accepted payment methods include Self-Pay, Venmo, Apple Pay, Zelle, and Credit/Debit Cards</li>
                <li>Patients are responsible for understanding their insurance benefits, if applicable</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-3">9. Cancellations & No-Shows</h3>
              <p>
                Cancellations must be made within the practice’s stated timeframe. Late cancellations or missed appointments may result in a fee.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Telehealth Services</h2>
              <h3 className="text-xl font-semibold mb-3">10. Telepsychiatry</h3>
              <p>Telehealth services are provided using secure, HIPAA-compliant platforms. By participating in telehealth, you acknowledge:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Possible technical limitations</li>
                <li>Privacy risks inherent in electronic communication</li>
                <li>Your responsibility to participate from a private, secure location</li>
              </ul>
              <p className="mt-4">Telehealth may not be appropriate for all conditions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Privacy & Confidentiality</h2>
              <h3 className="text-xl font-semibold mb-3">11. HIPAA Compliance</h3>
              <p>WholeMind Behavioral Health & Wellness complies with the Health Insurance Portability and Accountability Act (HIPAA).</p>
              <p className="mt-2">Protected Health Information (PHI) is safeguarded and disclosed only as permitted by law, including:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Treatment coordination</li>
                <li>Payment processing</li>
                <li>Healthcare operations</li>
                <li>Situations involving safety or legal obligations</li>
              </ul>
              <p className="mt-4">A separate Notice of Privacy Practices is available upon request.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Patient Responsibilities</h2>
              <h3 className="text-xl font-semibold mb-3">12. Patient Conduct</h3>
              <p>Patients agree to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Provide accurate and complete information</li>
                <li>Act respectfully toward staff and providers</li>
                <li>Follow treatment recommendations</li>
                <li>Use services appropriately</li>
              </ul>
              <p className="mt-4">Disruptive, abusive, or unsafe behavior may result in termination of services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide text-sm">Limitation of Liability</h2>
              <h3 className="text-xl font-semibold mb-3">13. Liability</h3>
              <p>WholeMind Behavioral Health & Wellness is not liable for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Technical failures or website interruptions</li>
                <li>Third-party platform issues</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
