"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const x = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-10, 0, 0, -10])
  const width = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 80, 80, 0])

  return (
    <motion.h2 ref={ref} className={`text-3xl font-bold mb-8 ${className}`} style={{ opacity, x }}>
      {children}
      <motion.span className="block h-1 bg-primary mt-2" style={{ width }} />
    </motion.h2>
  )
}

