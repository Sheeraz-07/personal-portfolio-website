import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface SectionHeadingProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  className?: string
  gradient?: boolean
}

export function SectionHeading({ 
  children, 
  level = 2, 
  className,
  gradient = false 
}: SectionHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  
  const baseClasses = clsx(
    'font-bold leading-tight tracking-tight',
    {
      'text-4xl md:text-5xl lg:text-6xl': level === 1,
      'text-3xl md:text-4xl lg:text-5xl': level === 2,
      'text-2xl md:text-3xl lg:text-4xl': level === 3,
      'text-xl md:text-2xl lg:text-3xl': level === 4,
      'text-lg md:text-xl lg:text-2xl': level === 5,
      'text-base md:text-lg lg:text-xl': level === 6,
    },
    gradient ? 'text-gradient' : 'text-text-primary dark:text-text-primary',
    className
  )

  return (
    <Tag className={baseClasses}>
      {children}
    </Tag>
  )
}