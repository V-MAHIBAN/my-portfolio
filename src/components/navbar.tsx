"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Linkedin, Twitter } from "lucide-react"
import { ModeToggle } from "./mode-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isHeroVisible, setIsHeroVisible] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting
        if (isVisible !== isHeroVisible) {
          setIsTransitioning(true)
          setIsHeroVisible(isVisible)
          // Reset transitioning after animation completes
          setTimeout(() => setIsTransitioning(false), 400)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of hero section is visible
      }
    )

    // Observe the hero section
    const heroElement = document.getElementById('hero')
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement)
      }
    }
  }, [isHeroVisible])

  // Track mobile state
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const navLinks = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  const socialLinks = [
    { href: "https://github.com", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com", icon: Twitter, label: "Twitter" },
  ]

  return (
    <>
      <AnimatePresence mode="wait">
        {(isHeroVisible || isMobile) && (
          <motion.nav
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="sticky top-0 z-50 w-full border-b bg-gradient-to-r from-background/95 via-primary/5 to-accent/5 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/20"
          >
            <div className="container mx-auto px-4">
              <div className="flex h-16 items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Mahiban
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <nav className="flex items-center space-x-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="relative text-foreground hover:text-primary transition-colors font-medium group"
                      >
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* Desktop Social & Theme */}
                <div className="hidden md:flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                  <span className="text-muted-foreground">|</span>
                  <ModeToggle />
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-2">
                  <ModeToggle />
                  <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-foreground hover:text-primary transition-colors"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Second Navbar - Only visible when hero section is not visible and on desktop */}
      <AnimatePresence>
        {!isHeroVisible && !isTransitioning && !isMobile && (
          <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 hidden md:block"
          >
          <div className="relative bg-gradient-to-r from-background/95 via-primary/10 to-accent/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-primary/20 before:absolute before:inset-0 before:rounded-full before:p-[1px] before:bg-gradient-to-r before:from-primary/50 before:via-accent/50 before:to-primary/50 before:-z-10">
            <div className="relative bg-gradient-to-r from-background/95 via-primary/5 to-background/95 backdrop-blur-md rounded-full px-6 py-3">
              <nav className="flex items-center space-x-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative text-foreground hover:text-primary transition-colors font-medium text-sm group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </motion.nav>
      )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 z-50 h-full w-80 bg-background border-r border-border shadow-xl md:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex h-16 items-center justify-between px-6 border-b border-border">
                  <Link
                    href="/"
                    className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    onClick={() => setIsOpen(false)}
                  >
                    Mahiban
                  </Link>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-muted active:scale-95 active:bg-primary/10"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className="relative block py-3 text-lg font-medium text-foreground hover:text-primary transition-all duration-200 group active:scale-95 active:text-primary/80"
                          onClick={() => setIsOpen(false)}
                        >
                          {link.label}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200"></span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Social Links */}
                <div className="border-t border-border px-6 py-8">
                  <div className="flex justify-center space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-3 text-foreground hover:text-primary transition-all duration-200 rounded-lg hover:bg-muted active:scale-95 active:bg-primary/10 group"
                        aria-label={social.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <social.icon className="h-6 w-6" />
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg opacity-0 group-active:opacity-100 transition-opacity duration-200"></span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}