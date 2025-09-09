'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { siteConfig } from '@/content/site'
import Image from 'next/image'


export default function ProjectsPage() {
  const router = useRouter()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="py-12 sm:py-16 lg:py-20 safe-area-inset-top">
      <Container className="mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
        >
          <SectionHeading level={1} className="mb-4 sm:mb-6 mobile-heading-1">
            My Projects
          </SectionHeading>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto mobile-text-balance leading-relaxed">
            Projects that highlight my journey through AI, agentic systems, and real-world innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 px-2 sm:px-0"
        >
          {siteConfig.projects.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Card
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="h-full cursor-pointer group hover:shadow-xl transition-all duration-300 active:scale-[0.98] sm:active:scale-100"
              >
                {/* Project Image Placeholder */}
                {/* <div className="aspect-video bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg mb-6 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 bg-accent/20 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-text-secondary text-sm">Project Image</p>
                  </div>
                </div> */}
                {/* Project Preview Image */}
                <div className="relative aspect-video rounded-lg mb-4 sm:mb-6 overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>


                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300 mobile-heading-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-text-secondary mb-3 mobile-body leading-relaxed">
                      {project.blurb}
                    </p>
                    <p className="text-xs sm:text-sm text-accent font-medium bg-accent/5 px-2 py-1 rounded-md inline-block">
                      {project.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tools.slice(0, 4).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 sm:px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-colors duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 4 && (
                      <span className="px-2 sm:px-3 py-1 text-xs font-medium bg-text-secondary/10 text-text-secondary rounded-full border border-text-secondary/20">
                        +{project.tools.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-text-secondary/20 space-y-3">
                    <p className="text-xs sm:text-sm text-text-secondary mobile-body">
                      <span className="font-medium text-text-primary">Results:</span> {project.results}
                    </p>
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-accent hover:text-accent-hover transition-all duration-200 bg-accent/5 hover:bg-accent/10 px-3 py-2 rounded-lg border border-accent/20 hover:border-accent/40 min-h-[44px]"
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span className="text-sm font-medium">View Code</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}