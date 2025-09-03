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
    <div className="py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <SectionHeading level={1} className="mb-6">
            About Me
          </SectionHeading>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Get to know the person behind the projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <Card className="text-center">
          
          <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-accent/20">
          <Image 
            src="/images/profile.png" 
            alt="My profile" 
            width={400} 
            height={400} 
            priority
          />
          </div>


              <SectionHeading level={2} className="mb-4">
                {siteConfig.name}
              </SectionHeading>
              
              <p className="text-accent font-medium mb-4">
                AI and IoT Innovator | Machine Learning Enthusiast
              </p>
            </Card>

            {/* Bio Text */}
            <Card>
              <SectionHeading level={3} className="mb-4">
                My Story
              </SectionHeading>
              <p className="text-text-secondary leading-relaxed mb-6">
                {siteConfig.bio}
              </p>
              
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <p className="text-sm text-text-primary">
                  <span className="font-medium text-accent">Fun fact:</span> {siteConfig.funFact}
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
          className="mt-16"
        >
          <Card>
            <SectionHeading level={3} className="mb-6 text-center">
              Education
            </SectionHeading>
            <div className="relative max-w-4xl mx-auto">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-text-primary mb-3">{siteConfig.education.institution}</h4>
                <p className="text-xl text-text-secondary mb-6">{siteConfig.education.degree}</p>
                <div className="flex justify-center items-center gap-8 text-base">
                  <span className="text-text-secondary">{siteConfig.education.semester}</span>
                  <span className="text-text-secondary">{siteConfig.education.year}</span>
                </div>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-0 flex flex-col items-center">
                <CGPAProgressRing />
                <span className="text-sm text-text-secondary mt-3 font-medium">CGPA</span>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <SectionHeading level={3} className="mb-4">
              Let's Work Together
            </SectionHeading>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              I&apos;m always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology and design, I&apos;d love to hear from you.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-background font-medium rounded-lg hover:bg-accent-hover transition-colors duration-200"
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