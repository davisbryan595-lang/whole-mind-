"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()
  const scrollToSection = (id: string) => {
    if (pathname !== "/") return
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="space-y-4">
            <Image src="/logo.png" alt="WholeMind Behavioral Health Logo" width={140} height={140} className="mb-4 h-24 w-auto" />
            <p className="text-sm leading-relaxed opacity-90">
              Healing the Mind • Nourishing the Soul • Restoring Wholeness
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={pathname === "/" ? "#about" : "/#about"}
                  onClick={() => scrollToSection("#about")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={pathname === "/" ? "#services" : "/#services"}
                  onClick={() => scrollToSection("#services")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href={pathname === "/" ? "#providers" : "/#providers"}
                  onClick={() => scrollToSection("#providers")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  Our Providers
                </Link>
              </li>
              <li>
                <Link
                  href={pathname === "/" ? "#faq" : "/#faq"}
                  onClick={() => scrollToSection("#faq")}
                  className="hover:underline opacity-90 hover:opacity-100 transition-opacity"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={18} className="mt-0.5 flex-shrink-0" />
              <span className="opacity-90">
                Virtual Services Available
                <br />
                Serving Clients Online
              </span>
            </li>

            <li className="flex items-center gap-2">
              <Phone size={18} className="flex-shrink-0" />
              <a href="tel:+13868475035" className="opacity-90 hover:opacity-100">
                +1 (386) 847-5035
              </a>
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} className="flex-shrink-0" />
              <a href="mailto:info@wholemindbhw.com" className="opacity-90 hover:opacity-100">
                info@wholemindbhw.com
              </a>
            </li>
          </ul>
        </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Policies & Payments</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:underline opacity-90 transition-opacity">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline opacity-90 transition-opacity">
                  Privacy Policy
                </a>
              </li>
              <li className="pt-4">
                <span className="font-semibold block mb-1 text-xs uppercase tracking-wider opacity-70">Accepted Payments</span>
                <p className="opacity-80 leading-relaxed text-xs">
                  Self-pay, Venmo, Apple Pay, Zelle, Credit & Debit Cards
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="opacity-90 hover:opacity-100 transition-opacity">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Instagram" className="opacity-90 hover:opacity-100 transition-opacity">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 transition-opacity">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
          <p>© {new Date().getFullYear()} WholeMind Behavioral Health & Wellness. All rights reserved.</p>
          <p className="mt-2">
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            {" • "}
            <Link href="/terms" className="hover:underline">
              Terms of Service
            </Link>
            {" • "}
            <Link href="/privacy" className="hover:underline">
              HIPAA Notice
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
