"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterProps {
  roles: string[]
  className?: string
}

export function Typewriter({ roles, className = "" }: TypewriterProps) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseTime = 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, currentRoleIndex, roles])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <span className="text-primary">{displayedText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="text-primary"
      >
        |
      </motion.span>
    </motion.div>
  )
}
