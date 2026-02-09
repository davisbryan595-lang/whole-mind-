import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function About() {
  return (
    <section id="about" className="bg-white py-24 md:py-32 lg:py-40">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Header Section */}
        <div className="mb-24 lg:mb-32 max-w-4xl">
          <ScrollReveal type="slide-fade-left" delay={0}>
            <p className="about-tagline mb-6">Our Practice</p>
          </ScrollReveal>
          <ScrollReveal type="slide-fade-left" delay={100}>
            <h2 className="about-heading mb-8">
              Compassionate Care
              <br />
              for Whole Wellness
            </h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={200}>
            <p className="about-intro">
              At WholeMind Behavioral Health & Wellness, we believe that true healing begins when the mind, body, and spirit are nurtured together. Founded by Esther Amune, MSN, APRN, PMHNP-BC, our team offers compassionate, integrative care that restores balance, builds resilience, and empowers individuals to thrive.
            </p>
          </ScrollReveal>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start mb-32 lg:mb-40">
          {/* Left Column - Content */}
          <div className="space-y-12">
            {/* Mission */}
            <div className="space-y-3">
              <h3 className="about-section-heading">Our Mission</h3>
              <p className="about-body">
                To provide compassionate, evidence-based, and integrative behavioral health services that address the whole person—mind, body, and spirit—empowering individuals to achieve lasting wellness and emotional balance.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-3">
              <h3 className="about-section-heading">Our Vision</h3>
              <p className="about-body">
                To redefine mental health care by integrating holistic, nutritional, and inclusive approaches that restore wholeness and promote thriving, purpose-filled lives.
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-3">
              <h3 className="about-section-heading">Our Approach</h3>
              <p className="about-body">
                We combine evidence-based care with holistic and nutritional practices to create personalized treatment plans that honor your unique journey toward wellness and emotional wholeness. For those who value it, our team is also able to provide counseling that incorporates your personal faith and spiritual values.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <ScrollReveal type="rotate-3d" delay={150}>
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden sticky top-24">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="WholeMind clinicians collaborating on integrative care plans"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 480px, (min-width:768px) 45vw, 90vw"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
