"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export const Sparkles = ({ children, className, ...props }: { children: React.ReactNode; className?: string }) => {
  const [sparkles, setSparkles] = React.useState<Array<{ id: number; style: { top: string; left: string } }>>([])
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const generateSparkle = () => ({
      id: Math.random(),
      style: {
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`
      }
    })

    const initialSparkles = Array.from({ length: 10 }, () => generateSparkle())
    setSparkles(initialSparkles)

    const interval = setInterval(() => {
      setSparkles(current => {
        const newSparkle = generateSparkle()
        return [...current.slice(1), newSparkle]
      })
    }, 500)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <div className={cn("relative inline-block", className)} {...props}>{children}</div>
  }

  return (
    <div className={cn("relative inline-block", className)} {...props}>
      <AnimatePresence mode="sync">
        {sparkles.map(sparkle => (
          <motion.span
            key={sparkle.id}
            className="absolute inline-block w-1 h-1 bg-yellow-300 rounded-full pointer-events-none"
            style={sparkle.style}
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 1, opacity: 0 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </AnimatePresence>
      <span className="relative z-1">{children}</span>
    </div>
  )
}