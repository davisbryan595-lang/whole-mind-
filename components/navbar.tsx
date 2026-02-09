"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#providers", label: "Providers" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
  { href: "#appointment", label: "Book now" },
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname !== "/" && href.startsWith("#")) {
      // If we are not on the home page and clicking a hash link, let's go home
      return // allow default Link behavior or handle with router.push("/")
    }

    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        setIsMobileMenuOpen(false)
      }
    }
  }

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-7xl w-[95%] frosted-panel`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#home")}
            className="flex items-center"
          >
            <Image
              src="/logo.png"
              alt="WholeMind Behavioral Health Logo"
              width={140}
              height={140}
              className="h-20 w-auto drop-shadow-lg"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isBookNow = link.label === "Book now"
              const href = pathname === "/" ? link.href : `/${link.href}`
              return (
                <Link
                  key={link.href}
                  href={href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={
                    isBookNow
                      ? "text-sm font-semibold px-6 py-2 rounded-full text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 book-now-btn"
                      : "text-sm font-medium text-foreground hover:text-primary transition-colors"
                  }
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => {
                const isBookNow = link.label === "Book now"
                const href = pathname === "/" ? link.href : `/${link.href}`
                return (
                  <Link
                    key={link.href}
                    href={href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={
                      isBookNow
                        ? "text-sm font-semibold px-6 py-2 rounded-full text-white text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 book-now-btn"
                        : "text-sm font-medium text-foreground hover:text-primary transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
