"use client"

import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToReferral = () => {
    const element = document.querySelector("#appointment")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="section-cover section-home h-screen flex items-center justify-start relative"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="w-full md:w-1/2 lg:w-5/12 space-y-8">
          {/* Tagline */}
          <p className="hero-tagline">Behavioral Health & Wellness</p>

          {/* Main Heading */}
          <h1 className="hero-heading">
            Healing the Mind
            <br />
            Nourishing the Soul
            <br />
            Restoring Wholeness
          </h1>

          {/* Subheading */}
          <p className="hero-subheading">
            Compassionate, evidence-based, and integrative behavioral health care addressing the whole person—mind,
            body, and spirit. We empower individuals to achieve lasting wellness and emotional balance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={scrollToReferral}
              className="hero-btn-primary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto text-center"
            >
              Make an Appointment
            </button>
            <button
              onClick={scrollToAbout}
              className="hero-btn-secondary text-base md:text-lg px-8 md:px-10 py-3 md:py-4 w-full sm:w-auto text-center"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Animated down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="text-white" size={32} />
      </div>
    </section>
  )
}
