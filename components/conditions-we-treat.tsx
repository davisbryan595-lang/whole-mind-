"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { CheckCircle2 } from "lucide-react"

const conditions = [
  "Anxiety Disorders",
  "Depression",
  "Postpartum Depression",
  "PTSD & Trauma",
  "Eating Disorders",
  "Bipolar Disorder",
  "ADHD",
  "Sleep Disorders",
  "OCD",
  "Stress Management",
  "Relationship Issues",
  "And other mental health problems",
]

export function ConditionsWeTreat() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal type="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Conditions We Treat</h2>
            <p className="text-xl text-muted-foreground">
              We provide comprehensive care for a wide range of mental health conditions, 
              tailoring our approach to your unique needs and journey.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => (
              <ScrollReveal key={index} type="fade-up" delay={index * 50}>
                <div className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
                  <CheckCircle2 className="text-primary shrink-0" size={20} />
                  <span className="font-medium text-foreground/80">{condition}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
