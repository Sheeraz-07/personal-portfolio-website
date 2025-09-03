'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { ModernSkillsSection } from '@/components/ui/ModernSkillsSection'
import { siteConfig } from '@/content/site'
import Image from "next/image"

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
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to chat about technology and design, I'd love to hear from you.
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