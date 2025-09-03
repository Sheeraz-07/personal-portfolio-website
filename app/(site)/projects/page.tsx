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
    <div className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <SectionHeading level={1} className="mb-6">
            My Projects
          </SectionHeading>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Projects that highlight my journey through AI, agentic systems, and real-world innovation.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {siteConfig.projects.map((project) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <Card
                onClick={() => router.push(`/projects/${project.slug}`)}
                className="h-full cursor-pointer group"
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
                <div className="relative aspect-video rounded-lg mb-6 overflow-hidden border border-accent/20 group-hover:border-accent/40 transition-colors duration-300">
                  <Image
                    src={project.images[0]}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>


                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-3">
                      {project.blurb}
                    </p>
                    <p className="text-sm text-accent font-medium">
                      {project.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-text-secondary/20">
                    <p className="text-sm text-text-secondary">
                      <span className="font-medium text-text-primary">Results:</span> {project.results}
                    </p>
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