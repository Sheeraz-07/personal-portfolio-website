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
  githubUrl?: string;
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

export interface Education {
  institution: string;
  degree: string;
  semester: string;
  cgpa: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  verifyUrl?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  bio: string;
  funFact: string;
  education: Education;
  skills: SkillData[];
  socialLinks: SocialLink[];
  projects: Project[];
  certifications: Certification[];
}

export const siteConfig: SiteConfig = {
  name: "Muhammad Sheeraz",
  tagline: "From Algorithms to Applications—Crafting Tech That Matters.",
  bio: "I'm an AI and IoT innovator exploring the frontier where machine learning, agentic AI, and connected devices collide. From intelligent surveillance systems to smart dashboards and health-monitoring wearables, I design solutions that transform complex tech into real-world impact. Always future-focused, I thrive on crafting systems that are not just functional, but adaptive, intuitive, and built for tomorrow..",
  funFact: "I believe in writing code so clean that even future-me can’t complain about it.",
education: {
    institution: "National Textile University, Faisalabad" ,
    degree: "Bachelor of Artificial Intelligence",
    semester: "7th Semester",
    cgpa: "3.61/4.0",
    year: "2022-2026"
  },
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
    "slug": "data-anonymization-tool",
    "title": "Data Anonymization Tool",
    "blurb": "A privacy-first web app that anonymizes sensitive datasets while retaining analytical value",
    "role": "Full-Stack Developer",
    "tools": ["Python", "Streamlit", "Pandas", "Data Privacy Techniques"],
    "results": "Enabled secure data sharing and compliance with privacy regulations for non-technical users",
    "images": ["/images/datan1.webp", "/images/datan2.jpg", "/images/datan3.jpg"],
    "backstory": "Organizations needed a way to share sensitive datasets without compromising privacy or research usability.",
    "process": [
      "Identified sensitive fields and anonymization requirements",
      "Implemented masking, pseudonymization, and noise injection techniques",
      "Built a clean UI for one-click CSV uploads",
      "Tested usability with sample datasets",
      "Deployed on Streamlit for easy access by non-technical users"
    ],
    "githubUrl": "https://github.com/Sheeraz-07/data-anonymization-tool"
  },
  {
    "slug": "salary-prediction-app",
    "title": "Salary Prediction App",
    "blurb": "An interactive ML-powered tool to estimate salaries based on experience, skills, and education",
    "role": "Machine Learning Developer",
    "tools": ["Python", "Streamlit", "scikit-learn", "Regression Models"],
    "results": "Provided accurate salary estimates with visualizations for confidence and feature impact",
    "images": ["/images/salary-pred-1.jpg", "/images/salary-pred-2.jpg", "/images/salary-pred-3.webp"],
    "backstory": "Job seekers and HR teams needed a quick way to predict salaries for various profiles using ML.",
    "process": [
      "Collected and preprocessed salary datasets",
      "Trained regression models to predict salaries",
      "Built Streamlit UI for interactive profile input",
      "Visualized confidence intervals and feature impact",
      "Validated predictions and deployed app"
    ],
    "githubUrl": "https://github.com/Sheeraz-07/salary-prediction-app"
  },
 {
  "slug": "smart-doorbell-system",
  "title": "Smart Doorbell System",
  "blurb": "AI-powered doorbell that detects and recognizes known faces, automatically triggering notifications and alerts",
  "role": "AI Engineer & IoT Developer",
  "tools": ["ESP32-CAM", "Raspberry Pi", "OpenCV", "Face Recognition", "Python"],
  "results": "Enabled intelligent visitor detection with real-time face recognition, reducing the need for manual checks and improving home security",
  "images": ["/images/smartd-1.png", "/images/smartd-2.jpg", "/images/smartd-3.jpg"],
  "backstory": "Built as an IoT and AI integration project to explore real-world applications of computer vision and embedded systems. The system combined edge devices with machine learning to create a practical, security-focused solution.",
  "process": [
    "Configured ESP32-CAM for video streaming and initial image capture",
    "Developed Python-based face recognition model using OpenCV on Raspberry Pi",
    "Trained system with known faces (20+ labeled images per person)",
    "Integrated alert mechanism to trigger doorbell ring and notifications when a known person is detected",
    "Tested the system in real-time with multiple users to ensure robustness and accuracy"
  ],
  "githubUrl": "https://github.com/Sheeraz-07/smart-doorbell-system"
}

,
  {
    "slug": "table-trace-ai",
    "title": "Table Trace AI",
    "blurb": "AI tool for generating SQL queries and attendance reports from natural language prompts",
    "role": "AI Developer",
    "tools": ["Python", "RDBMS", "LangChain","SQL", "Chainlit"],
    "results": "Bridged gap between non-technical users and databases, enabling easy query generation and reporting",
    "images": ["/images/atrep1.jpg", "/images/atrep2.jpeg", "/images/3.jpg"],
    "backstory": "Businesses and educators needed an intuitive way to generate SQL queries and attendance reports without coding knowledge.",
    "process": [
      "Processed natural language prompts using NLP techniques",
      "Generated SQL queries dynamically for various database structures",
      "Built attendance report generator parsing tabular datasets",
      "Developed interactive UI with Chainlit for easy user interaction",
      "Tested end-to-end functionality and refined for accuracy"
    ],
    "githubUrl": "https://github.com/Sheeraz-07/table-trace-ai"
  }
],

  certifications: [
      {
      title: "AI for Everyone",
      issuer: "DeepLearning.AI (Coursera)",
      date: "Dec 15, 2023",
      credentialId: "MJM8PNTAVUHQ",
      verifyUrl: "https://coursera.org/verify/MJM8PNTAVUHQ"
    },
    {
      title: "Get Started With Python",
      issuer: "Google (Coursera)",
      date: "Jul 30, 2024",
      credentialId: "CGMRLXDRPCB8",
      verifyUrl: "https://coursera.org/verify/CGMRLXDRPCB8"
    },
      {
      title: "Crash Course on Python",
      issuer: "Google (Coursera)",
      date: "Jul 3, 2025",
      credentialId: "WEFR4XM3KC1B",
      verifyUrl: "https://coursera.org/verify/WEFR4XM3KC1B"
    },
      {
      title: "Google AI Essentials",
      issuer: "Google (Coursera)",
      date: "Jun 26, 2024",
      credentialId: "QW7LZ5MXEWP7",
      verifyUrl: "https://coursera.org/verify/QW7LZ5MXEWP7"
    },
      {
      title: "Introduction to Relational Database and SQL",
      issuer: "Coursera Project Network",
      date: "Jun 27, 2024",
      credentialId: "ZDVA6KC3R6MG",
      verifyUrl: "https://coursera.org/verify/ZDVA6KC3R6MG"
    },

      {
      title: "Linear Regression With Python",
      issuer: "Coursera Project Network",
      date: "Feb 1, 2025",
      credentialId: "TU4JAQR5R6NV",
      verifyUrl: "https://coursera.org/verify/TU4JAQR5R6NV"
    }
  ]

};