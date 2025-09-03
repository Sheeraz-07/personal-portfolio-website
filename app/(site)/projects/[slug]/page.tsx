'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccentButton } from '@/components/ui/AccentButton'
import { Card } from '@/components/ui/Card'
import { siteConfig } from '@/content/site'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const project = siteConfig.projects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <div className="py-20">
        <Container className="text-center">
          <SectionHeading level={1} className="mb-6">
            Project Not Found
          </SectionHeading>
          <p className="text-text-secondary mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <AccentButton onClick={() => router.push('/projects')}>
            Back to Projects
          </AccentButton>
        </Container>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextImage()
    if (e.key === 'ArrowLeft') prevImage()
  }

  return (
    <div className="py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <AccentButton
            onClick={() => router.push('/projects')}
            variant="secondary"
            size="sm"
            className="mb-6"
          >
            ← Back to Projects
          </AccentButton>
          
          <SectionHeading level={1} className="mb-4">
            {project.title}
          </SectionHeading>
          
          <p className="text-xl text-text-secondary mb-6">
            {project.blurb}
          </p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div>
              <span className="font-medium text-text-primary">Role:</span>{' '}
              <span className="text-accent">{project.role}</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Tools:</span>{' '}
              <span className="text-text-secondary">{project.tools.join(', ')}</span>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mb-12"
        >
          <Card className="p-0 overflow-hidden">
            <div 
              className="relative aspect-video bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center"
              onKeyDown={handleKeyDown}
              tabIndex={0}
              role="img"
              aria-label={`Project image ${currentImageIndex + 1} of ${project.images.length}`}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-background/80 hover:bg-background rounded-full transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image Indicators */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                        index === currentImageIndex ? 'bg-accent' : 'bg-text-secondary/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Backstory */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <Card>
              <SectionHeading level={3} className="mb-4">
                The Challenge
              </SectionHeading>
              <p className="text-text-secondary leading-relaxed text-justify">
                {project.backstory}
              </p>
            </Card>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            <Card>
              <SectionHeading level={3} className="mb-4">
                The Process
              </SectionHeading>
              <ul className="space-y-3">
                {project.process.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-sm font-medium mt-0.5 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-text-secondary">{step}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="mt-12"
        >
          <Card className="text-center bg-gradient-to-r from-accent/5 to-accent/10 border-accent/20">
            <SectionHeading level={3} className="mb-4">
              The Results
            </SectionHeading>
            <p className="text-lg text-text-primary font-medium">
              {project.results}
            </p>
          </Card>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-12 flex justify-center"
        >
          <AccentButton onClick={() => router.push('/projects')}>
            View All Projects
          </AccentButton>
        </motion.div>
      </Container>
    </div>
  )
}