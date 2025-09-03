'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  const cardClasses = clsx(
    'bg-surface border border-text-secondary/20 rounded-xl p-6 transition-all duration-300',
    'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background',
    hover && 'hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10',
    onClick && 'cursor-pointer',
    className
  )

  if (onClick) {
    return (
      <motion.div
        className={cardClasses}
        onClick={onClick}
        whileHover={hover ? { scale: 1.02, y: -4 } : {}}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        tabIndex={0}
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            onClick()
          }
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cardClasses}
      whileHover={hover ? { scale: 1.02, y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}