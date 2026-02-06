"use client"

import { useState } from "react"
import { Brain, Pill, Apple, Heart, Users, Video, ChevronDown, ChevronUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    icon: Brain,
    title: "Holistic & Integrative Psychiatry",
    description: [
      "Comprehensive psychiatric evaluation and personalized treatment plans.",
      "Integrates psychotherapy, medication, and holistic approaches.",
      "Addresses emotional, physical, and spiritual well-being together.",
    ],
    image: "/whole.jpg",
    imageAlt: "Clinician offering supportive counseling in a calming space",
  },
  {
    icon: Pill,
    title: "Medication Management",
    description: [
      "Thorough evaluation for appropriate psychiatric medication use.",
      "Regular follow-ups to ensure safety and effectiveness.",
      "Collaborative care with your primary or specialty providers.",
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2F4ffb27d4f35e4624a6cecd10aa541cf5%2F3894c26988494d72919a81557633a82f?format=webp&width=800&height=1200",
    imageAlt: "Clinician and patient discussing medication with an unopened pill bottle on the table",
  },
  {
    icon: Apple,
    title: "Nutritional Psychiatry",
    description: [
      "Evidence-based nutrition guidance for brain and mood health.",
      "Addresses nutritional deficiencies impacting emotional balance.",
      "Promotes long-term well-being through food-mind connection.",
    ],
    image: "/service3.jpg",
    imageAlt: "Colorful whole foods arranged for balanced nutrition",
  },
  {
    icon: Heart,
    title: "Faith-Based Counseling",
    description: [
      "An optional therapeutic approach for those interested in honoring their faith and spiritual identity.",
      "Blends clinical care with your personal values and beliefs, if desired.",
      "Provides space for healing rooted in compassion and purpose.",
    ],
    image: "https://images.unsplash.com/photo-1494809610410-160faaed4de0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Hands joined in reflection during spiritually-integrated therapy",
  },
  {
    icon: Users,
    title: "Mindfulness & Stress Reduction",
    description: [
      "Guided mindfulness practices to manage anxiety and stress.",
      "Focus on grounding, awareness, and resilience-building.",
      "Customized tools to enhance emotional regulation.",
    ],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Therapist guiding a group mindfulness session",
  },
  {
    icon: Video,
    title: "Lifestyle & Wellness Coaching",
    description: [
      "Personalized guidance to improve sleep, nutrition, and routines.",
      "Support for sustainable habits improving mental clarity.",
      "Empowerment through lifestyle-based holistic wellness.",
    ],
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Provider offering virtual lifestyle coaching",
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="services" className="section-cover section-services py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-16 max-w-4xl mx-auto">
          <ScrollReveal type="slide-fade-left" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Our Services</h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={100}>
            <p className="text-xl text-muted-foreground text-pretty text-center">
              Evidence-based and holistic care designed to nurture the mind, body, and spirit.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center text-center p-6 rounded-3xl shadow-lg bg-white/70 backdrop-blur-md border border-white/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
              >
                {/* Service Image */}
                <ScrollReveal type="rotate-3d" delay={50}>
                  <div className="w-[calc(100%+3rem)] -mx-6 h-60 overflow-hidden mb-6 rounded-t-3xl -mt-6">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </ScrollReveal>

                {/* Icon + Title */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <Icon className="text-primary" size={26} />
                  </div>
                  <h3 className="text-xl font-semibold text-primary">{service.title}</h3>
                </div>

                {/* Dropdown Toggle */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="mt-3 flex items-center gap-2 text-sm font-medium text-primary/80 hover:text-primary transition"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="w-4 h-4" /> Hide Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" /> View Details
                    </>
                  )}
                </button>

                {/* Expandable Description */}
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isOpen ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="text-left text-muted-foreground text-sm space-y-2 px-2">
                    {service.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
