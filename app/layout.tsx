import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navigation } from '@/components/ui/Navigation'
import { Footer } from '@/components/ui/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  preload: true,
})



export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://storyfolio.vercel.app'),
  title: 'Storyfolio - Muhammad Sheeraz | AI Engineer & Agentic AI Developer',
  description:
    'Portfolio of Muhammad Sheeraz, an AI Engineer, Agentic AI Developer, and IoT Innovator. Exploring the intersection of intelligent systems, autonomous agents, and connected devices to design solutions that blend AI-driven reasoning with real-world impact.',
  keywords: [
    'portfolio',
    'AI engineer',
    'agentic AI',
    'IoT',
    'developer',
    'designer',
    'react',
    'nextjs',
    'typescript',
    'web development',
  ],
  authors: [{ name: 'Muhammad Sheeraz' }],
  creator: 'Muhammad Sheeraz',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Storyfolio - Muhammad Sheeraz | AI Engineer & Agentic AI Developer',
    description:
      'Portfolio of Muhammad Sheeraz, an AI Engineer, Agentic AI Developer, and IoT Innovator. Exploring the intersection of intelligent systems, autonomous agents, and connected devices to design solutions that blend AI-driven reasoning with real-world impact.',
    siteName: 'Storyfolio',
    images: [
      {
        url: '/images/profile.png', // 👈 now relative, auto-resolves using metadataBase
        width: 1200,
        height: 630,
        alt: 'Storyfolio - Muhammad Sheeraz Portfolio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Storyfolio - Muhammad Sheeraz | AI Engineer & Agentic AI Developer',
    description:
      'Portfolio of Muhammad Sheeraz, an AI Engineer, Agentic AI Developer, and IoT Innovator. Exploring the intersection of intelligent systems, autonomous agents, and connected devices to design solutions that blend AI-driven reasoning with real-world impact.',
    images: ['/images/profile.png'],
    creator: '@muhammadsheeraz',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // verification: {
  //   google: 'your-google-verification-code',
  // },
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navigation />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}