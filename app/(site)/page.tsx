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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden safe-area-inset-top">
        {/* Background Effect */}
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <Container className="relative z-10 text-center mobile-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <SectionHeading level={1} className="mb-6" gradient>
              {siteConfig.name}
            </SectionHeading>
            
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto px-2 sm:px-4 mobile-text-balance leading-relaxed"
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
  className="mb-8 sm:mb-12 mx-auto w-full max-w-2xl aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-accent/20 shadow-lg px-2 sm:px-4 lg:px-0"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
  whileHover={{ scale: [1, 1.02, 1] }}
>
  <video
    src="/videos/hero_green.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-full object-cover"
    poster="/images/hero-poster.jpg"
  />
</motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className="px-4 sm:px-0"
            >
              <AccentButton
                onClick={scrollToProjects}
                size="lg"
                className="mb-8 w-full sm:w-auto min-w-[200px] text-base sm:text-lg font-semibold py-4 sm:py-4 px-8 sm:px-8"
              >
                Explore My Work
              </AccentButton>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator - Hidden on mobile */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-text-secondary hover:text-accent transition-colors duration-200"
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