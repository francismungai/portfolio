"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import type { ReactNode } from "react"

interface NavLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function NavLink({ href, children, className = "" }: NavLinkProps) {
  return (
    <Link href={href} className={className}>
      <motion.span
        className="relative inline-block text-sm font-medium hover:text-primary transition-colors"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.2 }}
        />
      </motion.span>
    </Link>
  )
}

