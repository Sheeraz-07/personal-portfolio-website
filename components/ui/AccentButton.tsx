'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface AccentButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export function AccentButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className,
  disabled = false,
  type = 'button',
}: AccentButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
    {
      'px-4 py-2 text-sm rounded-md': size === 'sm',
      'px-6 py-3 text-base rounded-lg': size === 'md',
      'px-8 py-4 text-lg rounded-xl': size === 'lg',
      'bg-accent text-background hover:bg-accent-hover hover:scale-105 hover:shadow-lg hover:shadow-accent/25': variant === 'primary',
      'border-2 border-accent text-accent hover:bg-accent hover:text-background hover:scale-105': variant === 'secondary',
    },
    className
  )

  const MotionComponent = motion.button

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <MotionComponent
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </MotionComponent>
  )
}