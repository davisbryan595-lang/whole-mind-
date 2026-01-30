"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  type?: "fade-up" | "rotate-3d" | "slide-fade-left"
}

export function ScrollReveal({ children, className = "", delay = 0, type = "fade-up" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("reveal-visible")
            }, delay)
          } else {
            // Reset animation when leaving viewport so it can replay
            entry.target.classList.remove("reveal-visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal reveal-${type} ${className}`}>
      {children}
    </div>
  )
}
