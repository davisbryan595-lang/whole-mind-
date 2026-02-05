"use client"

import { ArrowDown, Volume2, VolumeX } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted
      if (!isMuted) {
        audioRef.current.play().catch((e) => console.log("Audio play blocked:", e))
      }
    }
  }, [isMuted])

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }
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
      className="section-cover section-home min-h-screen flex items-center justify-start relative pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
        poster="https://images.unsplash.com/photo-1433001076297-9204ce32b36d?auto=format&fit=crop&w=2000&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/854271/854271-sd_960_540_25fps.mp4"
          type="video/mp4"
        />
      </video>
      <audio ref={audioRef} loop className="hidden">
        <source src="https://orangefreesounds.com/wp-content/uploads/2016/12/Running-water-noise.mp3" type="audio/mpeg" />
      </audio>
      <div className="absolute top-32 right-8 z-20">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all shadow-lg"
          aria-label={isMuted ? "Unmute background sound" : "Mute background sound"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="w-full md:w-1/2 lg:w-5/12 space-y-5">
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
            A tranquil space for healing and restoration. Our team provides compassionate, integrative care that honors
            the whole person—mind, body, and spirit—guiding you toward peace, balance, and wholeness.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
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
