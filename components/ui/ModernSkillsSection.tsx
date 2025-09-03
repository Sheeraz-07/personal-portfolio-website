'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { Card } from './Card'
import { SkillData } from '@/content/site'

interface ModernSkillsSectionProps {
  skills: SkillData[]
}

const skillIcons: Record<string, JSX.Element> = {
  'Python': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.26-.02.21-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25c-.2 0-.37.09-.5.27-.14.18-.21.42-.21.72 0 .3.07.54.21.72.13.18.3.27.5.27.2 0 .37-.09.5-.27.14-.18.21-.42.21-.72 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27zm7.5-13.5c.2 0 .37-.09.5-.27.14-.18.21-.42.21-.72 0-.3-.07-.54-.21-.72-.13-.18-.3-.27-.5-.27-.2 0-.37.09-.5.27-.14.18-.21.42-.21.72 0 .3.07.54.21.72.13.18.3.27.5.27z"/>
    </svg>
  ),
  'IoT (ESP32 / Raspberry Pi)': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  'Flask Backend': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z"/>
    </svg>
  ),
  'Machine Learning': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  ),
  'Computer Vision (OpenCV / YOLO)': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  ),
  'Problem Solving & System Design': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9l-5 4.87L18.18 22 12 18.27 5.82 22 7 13.87 2 9l6.91-.74L12 2z"/>
    </svg>
  ),
    'Web Development (Next.js)': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  'Agentic AI': (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  )

}

function CircularProgress({ skill, index }: { skill: SkillData; index: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(skill.value)
    }, index * 200 + 500)
    return () => clearTimeout(timer)
  }, [skill.value, index])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="rgba(169, 177, 189, 0.1)"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
            className="drop-shadow-lg"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D1B2" />
              <stop offset="50%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-accent mb-1 group-hover:scale-110 transition-transform duration-300">
            {skillIcons[skill.label] || skillIcons['Python']}
          </div>
          <motion.span
            className="text-xl font-bold text-text-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.8 }}
          >
            {Math.round(animatedValue)}%
          </motion.span>
        </div>
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-purple-500/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      
      <motion.h4
        className="text-center mt-6 text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-300 px-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.6 }}
      >
        {skill.label}
      </motion.h4>
    </motion.div>
  )
}

function AnimatedSkillBar({ skill, index }: { skill: SkillData; index: number }) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(skill.value)
    }, index * 100 + 800)
    return () => clearTimeout(timer)
  }, [skill.value, index])

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-3">
          <div className="text-accent group-hover:scale-110 transition-transform duration-300">
            {skillIcons[skill.label] || skillIcons['Python']}
          </div>
          <span className="text-text-primary font-medium group-hover:text-accent transition-colors duration-300">
            {skill.label}
          </span>
        </div>
        <motion.span
          className="text-sm font-bold text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 1 }}
        >
          {Math.round(animatedValue)}%
        </motion.span>
      </div>
      
      <div className="relative h-2 bg-text-secondary/10 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent via-purple-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${animatedValue}%` }}
          transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 + 0.8 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-purple-500/20 to-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}

export function ModernSkillsSection({ skills }: ModernSkillsSectionProps) {
  const [activeView, setActiveView] = useState<'circular' | 'bars'>('circular')

  return (
    <Card className="relative overflow-hidden bg-gradient-to-br from-surface via-surface to-surface/50 border-accent/20 h-full flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-500/5 to-cyan-400/5" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-2xl" />
      
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading level={3} className="text-center flex-1">
            Skills & Expertise
          </SectionHeading>
          
          <div className="flex bg-surface/50 rounded-lg p-1 border border-accent/20">
            <button
              onClick={() => setActiveView('circular')}
              className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                activeView === 'circular'
                  ? 'bg-accent text-background shadow-lg'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Circular
            </button>
            <button
              onClick={() => setActiveView('bars')}
              className={`px-3 py-1 rounded text-sm transition-all duration-300 ${
                activeView === 'bars'
                  ? 'bg-accent text-background shadow-lg'
                  : 'text-text-secondary hover:text-accent'
              }`}
            >
              Bars
            </button>
          </div>
        </div>

        <div className="flex-1 flex items-center px-4 py-4">
          {activeView === 'circular' ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 w-full justify-items-center">
              {skills.map((skill, index) => (
                <CircularProgress key={skill.label} skill={skill} index={index} />
              ))}
            </div>
          ) : (
            <div className="space-y-6 w-full">
              {skills.map((skill, index) => (
                <AnimatedSkillBar key={skill.label} skill={skill} index={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}