import Image from "next/image"

export function About() {
  return (
    <section id="about" className="section-cover section-about py-24 md:py-32">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Header Section */}
        <div className="mb-20 lg:mb-24">
          <p className="about-tagline mb-6">Our Practice</p>
          <h2 className="about-heading mb-8">
            Compassionate Care
            <br />
            for Whole Wellness
          </h2>
          <p className="about-intro max-w-3xl">
            At WholeMind Behavioral Health & Wellness, we believe that true healing begins when the mind, body, and spirit are nurtured together. Founded by Esther Amune, MSN, APRN, PMHNP-BC, our practice offers compassionate, integrative care that restores balance, builds resilience, and empowers individuals to thrive.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Mission */}
            <div className="space-y-4">
              <h3 className="about-section-heading">Our Mission</h3>
              <p className="about-body">
                To provide compassionate, evidence-based, and integrative behavioral health services that address the whole person—mind, body, and spirit—empowering individuals to achieve lasting wellness and emotional balance.
              </p>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <h3 className="about-section-heading">Our Vision</h3>
              <p className="about-body">
                To redefine mental health care by integrating holistic, nutritional, and faith-based approaches that restore wholeness and promote thriving, purpose-filled lives.
              </p>
            </div>

            {/* Approach */}
            <div className="space-y-4">
              <h3 className="about-section-heading">Our Approach</h3>
              <p className="about-body">
                We combine evidence-based care with holistic, nutritional, and faith-informed practices to create personalized treatment plans that honor your unique journey toward wellness and emotional wholeness.
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="h-96 lg:h-full min-h-96">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
              alt="WholeMind clinicians collaborating on integrative care plans"
              fill
              className="object-cover rounded-2xl"
              sizes="(min-width:1280px) 480px, (min-width:768px) 45vw, 90vw"
            />
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="about-section-heading text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="about-value-heading">Wholeness</h4>
              <p className="about-body text-center">
                Treating the mind, body, and soul as interconnected parts of a greater whole
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="about-value-heading">Compassion</h4>
              <p className="about-body text-center">
                Providing care grounded in empathy, dignity, and respect
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="about-value-heading">Evidence-Based</h4>
              <p className="about-body text-center">
                Integrating science, research, and clinical expertise with holistic healing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
