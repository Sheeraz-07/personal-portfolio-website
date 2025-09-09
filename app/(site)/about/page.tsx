'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ModernSkillsSection } from '@/components/ui/ModernSkillsSection'
import { siteConfig } from '@/content/site'
import Image from "next/image"

function CGPAProgressRing() {
  const [animatedValue, setAnimatedValue] = useState(0)
  const cgpaValue = (3.61 / 4.0) * 100 // Convert CGPA to percentage
  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(cgpaValue)
    }, 800)
    return () => clearTimeout(timer)
  }, [cgpaValue])

  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          stroke="rgba(169, 177, 189, 0.1)"
          strokeWidth="3"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          stroke="url(#cgpaGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="drop-shadow-lg"
        />
        <defs>
          <linearGradient id="cgpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D1B2" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.span
          className="text-lg font-bold text-accent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {siteConfig.education.cgpa}
        </motion.span>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20 safe-area-inset-top">
      <Container className="mobile-padding">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <SectionHeading level={1} className="mb-4 sm:mb-6 mobile-heading-1">
            About Me
          </SectionHeading>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mobile-text-balance">
            Get to know the person behind the projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-6 sm:gap-8 lg:gap-12 items-start px-2 sm:px-0">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <Card className="text-center p-6 sm:p-8">
          
          <div className="w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
          <Image 
            src="/images/profile.png" 
            alt="My profile" 
            width={400} 
            height={400} 
            priority
            className="object-cover w-full h-full"
          />
          </div>


              <SectionHeading level={2} className="mb-3 sm:mb-4 mobile-heading-2">
                {siteConfig.name}
              </SectionHeading>
              
              <p className="text-sm sm:text-base text-accent font-medium mb-4 bg-accent/5 px-3 py-2 rounded-lg inline-block">
                AI and IoT Innovator | Machine Learning Enthusiast
              </p>
            </Card>

            {/* Bio Text */}
            <Card className="p-6 sm:p-8">
              <SectionHeading level={3} className="mb-4 mobile-heading-2">
                My Story
              </SectionHeading>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6 text-justify mobile-body">
                {siteConfig.bio}
              </p>
              
              <div className="p-4 sm:p-5 bg-accent/5 rounded-xl border border-accent/20 hover:bg-accent/10 transition-colors duration-200">
                <p className="text-sm sm:text-base text-text-primary mobile-body">
                  <span className="font-medium text-accent">💡 Fun fact:</span> {siteConfig.funFact}
                </p>
              </div>
            </Card>


          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="h-full"
          >
            <div className="h-full">
              <ModernSkillsSection skills={siteConfig.skills} />
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-12 sm:mt-16"
        >
          <Card className="p-6 sm:p-8">
            <SectionHeading level={3} className="mb-6 text-center mobile-heading-2">
              Education
            </SectionHeading>
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
                <div className="text-center lg:text-left flex-1">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-semibold text-text-primary mb-3 mobile-heading-2">{siteConfig.education.institution}</h4>
                  <p className="text-base sm:text-lg lg:text-xl text-text-secondary mb-4 sm:mb-6 mobile-body">{siteConfig.education.degree}</p>
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4 sm:gap-8 text-sm sm:text-base">
                    <span className="text-text-secondary bg-surface px-3 py-1 rounded-lg">{siteConfig.education.semester}</span>
                    <span className="text-text-secondary bg-surface px-3 py-1 rounded-lg">{siteConfig.education.year}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center lg:items-end">
                  <div className="transform scale-90 sm:scale-100">
                    <CGPAProgressRing />
                  </div>
                  <span className="text-sm text-text-secondary mt-3 font-medium">CGPA</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 sm:mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20 p-6 sm:p-8">
            <SectionHeading level={3} className="mb-4 mobile-heading-2">
              Let&apos;s Work Together
            </SectionHeading>
            <p className="text-sm sm:text-base text-text-secondary mb-6 max-w-2xl mx-auto text-center sm:text-justify mobile-body leading-relaxed">
              I&apos;m always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology and design, I&apos;d love to hear from you.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-accent text-background font-medium rounded-xl hover:bg-accent-hover transition-all duration-200 min-h-[44px] w-full sm:w-auto justify-center text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </Card>
        </motion.div>
      </Container>
    </div>
  )
}