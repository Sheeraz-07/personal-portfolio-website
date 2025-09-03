export interface Project {
  slug: string;
  title: string;
  blurb: string;
  role: string;
  tools: string[];
  results: string;
  images: string[];
  backstory: string;
  process: string[];
}

export interface SkillData {
  label: string;
  value: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  funFact: string;
  skills: SkillData[];
  socialLinks: SocialLink[];
  projects: Project[];
}

export const siteConfig: SiteConfig = {
  name: "Muhammad Sheeraz",
  tagline: "From Algorithms to Applications—Crafting Tech That Matters.",
  bio: "I'm an AI and IoT innovator exploring the frontier where machine learning, agentic AI, and connected devices collide. From intelligent surveillance systems to smart dashboards and health-monitoring wearables, I design solutions that transform complex tech into real-world impact. Always future-focused, I thrive on crafting systems that are not just functional, but adaptive, intuitive, and built for tomorrow..",
  funFact: "I believe in writing code so clean that even future-me can’t complain about it.",
skills: [
  { label: "Python", value: 90 },
  { label: "IoT (ESP32 / Raspberry Pi)", value: 90 },
  { label: "Flask Backend", value: 90 },
  { label: "Problem Solving & System Design", value: 85 },
  { label: "Machine Learning", value: 80 },
  { label: "Computer Vision (OpenCV / YOLO)", value: 80 },
  { label: "Web Development (Next.js)", value: 75 },
  { label: "Agentic AI", value: 70 }

]
,
  socialLinks: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/muhammad-sheeraz-professional05", icon: "linkedin" },
    { name: "GitHub", url: "https://github.com/Sheeraz-07?tab=repositories", icon: "github" },
    { name: "WhatsApp", url: "https://wa.me/+923266214971", icon: "whatsapp" },
  ],
  projects: [
    {
      slug: "ecommerce-platform",
      title: "E-Commerce Platform",
      blurb: "A scalable online store with modern UX and performance optimizations",
      role: "Lead Developer",
      tools: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      results: "Boosted sales by 25% and reduced load times by 40%",
      images: ["/images/project-1-1.jpg", "/images/project-1-2.jpg", "/images/project-1-3.jpg"],
      backstory: "A growing retail business needed a modern e-commerce solution to replace their outdated platform and improve customer experience.",
      process: [
        "User research and competitor analysis",
        "Wireframing and prototyping",
        "Development with Next.js and TypeScript",
        "Integration with Stripe for payments",
        "Performance optimization and testing"
      ]
    },
    {
      slug: "task-management-app",
      title: "Task Management App",
      blurb: "Collaborative project management tool with real-time updates",
      role: "Full-Stack Developer",
      tools: ["React", "Node.js", "Socket.io", "MongoDB"],
      results: "Increased team productivity by 30% and user engagement by 45%",
      images: ["/images/project-2-1.jpg", "/images/project-2-2.jpg", "/images/project-2-3.jpg"],
      backstory: "Remote teams needed a better way to collaborate and track project progress in real-time.",
      process: [
        "Requirements gathering with stakeholders",
        "System architecture design",
        "Real-time features with Socket.io",
        "Database optimization",
        "User testing and iteration"
      ]
    },
    {
      slug: "design-system",
      title: "Component Design System",
      blurb: "Comprehensive design system for consistent UI across products",
      role: "Design System Lead",
      tools: ["React", "Storybook", "Figma", "TypeScript"],
      results: "Reduced development time by 50% and improved design consistency",
      images: ["/images/project-3-1.jpg", "/images/project-3-2.jpg", "/images/project-3-3.jpg"],
      backstory: "A growing company needed to standardize their UI components across multiple products and teams.",
      process: [
        "Audit of existing components",
        "Design token creation",
        "Component library development",
        "Documentation with Storybook",
        "Team adoption and training"
      ]
    },
    {
      slug: "analytics-dashboard",
      title: "Analytics Dashboard",
      blurb: "Real-time data visualization platform for business insights",
      role: "Frontend Developer",
      tools: ["Vue.js", "D3.js", "Python", "FastAPI"],
      results: "Improved decision-making speed by 60% with real-time insights",
      images: ["/images/project-4-1.jpg", "/images/project-4-2.jpg", "/images/project-4-3.jpg"],
      backstory: "A data-driven company needed better visualization tools to make sense of their growing datasets.",
      process: [
        "Data requirements analysis",
        "Interactive chart design",
        "Real-time data pipeline setup",
        "Performance optimization",
        "User training and rollout"
      ]
    }
  ]
};