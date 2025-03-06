"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

interface AnimatedImageProps {
  src: string
  alt: string
  className?: string
}

export function AnimatedImage({ src, alt, className }: AnimatedImageProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div
        className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary ${className}`}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
      </div>
    )
  }

  return (
    <motion.div
      className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${className}`}
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
        boxShadow: [
          "0 0 0 4px hsl(var(--primary)), 0 0 15px 5px hsl(var(--primary) / 0.4)",
          "0 0 0 4px hsl(var(--primary)), 0 0 25px 10px hsl(var(--primary) / 0.6)",
          "0 0 0 4px hsl(var(--primary)), 0 0 15px 5px hsl(var(--primary) / 0.4)",
        ],
      }}
      transition={{
        y: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        },
        boxShadow: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 3,
          ease: "easeInOut",
        },
      }}
    >
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
    </motion.div>
  )
}

