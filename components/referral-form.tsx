"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ReferralForm() {
  const [consent, setConsent] = useState(false)

  return (
    <section id="appointment" className="section-cover section-referral py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-4xl mx-auto">
          <ScrollReveal type="fade-up" delay={0}>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">Book an Appointment</h2>
          </ScrollReveal>
          <ScrollReveal type="fade-up" delay={100}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty text-center">
              Start your journey to wellness — schedule your session today
            </p>
          </ScrollReveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] items-start max-w-6xl mx-auto">
          <div className="space-y-4">
            <div className="image-tile h-80">
              <Image
                src="https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1400&q=80"
                alt="Therapist meeting with a client"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 420px, (min-width:768px) 45vw, 90vw"
              />
              <span className="image-accent" />
            </div>
            <div className="image-tile h-40">
              <Image
                src="https://images.unsplash.com/photo-1573497019264-1b1b0e1e0a43?auto=format&fit=crop&w=1200&q=80"
                alt="Calm therapy office"
                fill
                className="object-cover"
                sizes="(min-width:1280px) 320px, (min-width:768px) 40vw, 90vw"
              />
              <span className="image-accent" />
            </div>
          </div>

          <Card className="frosted-panel border-border/50 bg-black/40 backdrop-blur-md">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Appointment Form</CardTitle>
              <CardDescription className="text-gray-200">
                Fill out the form below to request your appointment.
              </CardDescription>
            </CardHeader>

            <CardContent>
              {/* FORM SUBMITS DIRECTLY TO estellayem@gmail.com */}
              <form
                action="https://formsubmit.co/estellayem@gmail.com"
                method="POST"
                className="space-y-6 text-white"
              >
                {/* FormSubmit Hidden Configs */}
                <input type="hidden" name="_subject" value="New Appointment Request - WholeMind" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_autoresponse" value="Thank you for your appointment request! We’ve received it and will contact you within 24 hours to confirm your session." />
                <input type="hidden" name="_next" value={`${typeof window !== "undefined" ? window.location.origin : ""}/thank-you`} />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="text-white placeholder-gray-300 bg-black/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="text-white placeholder-gray-300 bg-black/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="text-white placeholder-gray-300 bg-black/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="text-white placeholder-gray-300 bg-black/20"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      required
                      className="text-white placeholder-gray-300 bg-black/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time *</Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      required
                      className="text-white placeholder-gray-300 bg-black/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Type *</Label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-3 py-2 border border-input rounded-md bg-black/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a Service</option>
                    <option value="therapy">Individual Therapy</option>
                    <option value="couples">Couples Counseling</option>
                    <option value="family">Family Therapy</option>
                    <option value="assessment">Psychological Assessment</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Share anything you'd like us to know before your appointment..."
                    className="text-white placeholder-gray-300 bg-black/20"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    required
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to WholeMind Behavioral Health & Wellness contacting me regarding this appointment
                    request and understand that my information will be kept confidential in accordance with HIPAA
                    regulations.
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition"
                  disabled={!consent}
                >
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
