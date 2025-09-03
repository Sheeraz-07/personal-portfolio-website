'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AccentButton } from '@/components/ui/AccentButton'
import { siteConfig } from '@/content/site'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const router = useRouter()

  const scrollToProjects = () => {
    router.push('/projects')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <Container className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionHeading level={1} className="mb-6" gradient>
              {siteConfig.name}
            </SectionHeading>
            
            <motion.p
              className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {siteConfig.tagline}
            </motion.p>

            {/* Hero Visual Placeholder
            <motion.div
              className="mb-12 mx-auto w-full max-w-2xl aspect-video bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl border border-accent/20 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-text-secondary text-sm">
                  Hero Video Placeholder
                  <br />
                  <span className="text-xs opacity-75">Replace with looping WEBM/MP4</span>
                </p>
              </div>
            </motion.div> */}

{/* Hero Video */}
<motion.div
  className="mb-12 mx-auto w-full max-w-2xl aspect-video rounded-2xl overflow-hidden border border-accent/20 shadow-lg"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
  whileHover={{ scale: 1.02 }}
>
  <video
    src="/videos/hero.mp4"  // <-- place your file in public/videos/hero.mp4
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
  />
</motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              <AccentButton
                onClick={scrollToProjects}
                size="lg"
                className="mb-8"
              >
                Explore My Work
              </AccentButton>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-text-secondary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}