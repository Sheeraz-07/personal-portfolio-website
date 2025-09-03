# Storyfolio - Modern Portfolio Website

A dark, high-contrast portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features smooth animations, accessibility-first design, and a professional storytelling approach.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies:**
```bash
git clone <your-repo-url>
cd storyfolio
npm install
```

2. **Run the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### 1. Update Personal Information

Edit `content/site.ts` to customize all content:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Name",
  tagline: "Your professional tagline",
  bio: "Your bio text...",
  funFact: "Your fun fact",
  skills: [
    { label: "Skill Name", value: 85 }, // 0-100
    // Add more skills...
  ],
  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
    // Update with your social links...
  ],
  projects: [
    {
      slug: "project-slug",
      title: "Project Title",
      blurb: "Short description",
      role: "Your Role",
      tools: ["Tech", "Stack"],
      results: "Achievement metrics",
      images: ["/images/project-1-1.jpg", "/images/project-1-2.jpg"],
      backstory: "Project background...",
      process: ["Step 1", "Step 2", "Step 3"]
    },
    // Add your projects...
  ]
}
```

### 2. Replace Placeholder Assets

- **Hero Video:** Add a looping WEBM/MP4 to `public/` and update the hero section
- **Project Images:** Replace files in `public/images/` with your project screenshots
- **Profile Photo:** Add your headshot and update the About page
- **Open Graph Image:** Replace `public/images/og-image.jpg` (1200x630px)

### 3. Update Metadata

Edit `app/layout.tsx` to update SEO metadata:
- Site title and description
- Open Graph tags
- Twitter card information
- Google verification code

## 🎨 Theming

### Colors
The design system uses a teal accent color (#00D1B2). To change:

1. Update `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    DEFAULT: '#YOUR_COLOR',
    hover: '#YOUR_HOVER_COLOR',
  },
}
```

2. Update chart colors in `components/ui/SkillsChart.tsx`

### Typography
Uses Inter font with responsive scaling. Modify in `tailwind.config.ts` and `app/layout.tsx`.

## 📧 Contact Form Setup

The contact form currently logs submissions to console. To integrate with an email service:

### Option 1: SendGrid
1. Install SendGrid: `npm install @sendgrid/mail`
2. Add environment variable: `SENDGRID_API_KEY=your_api_key`
3. Uncomment SendGrid code in `app/api/contact/route.ts`

### Option 2: Resend
1. Install Resend: `npm install resend`
2. Add environment variable: `RESEND_API_KEY=your_api_key`
3. Update the API route with Resend integration

### Option 3: Nodemailer
1. Install Nodemailer: `npm install nodemailer`
2. Configure SMTP settings
3. Update the API route accordingly

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/storyfolio.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Environment Variables (if using email service):**
   - Go to Project Settings > Environment Variables
   - Add your email service API key:
     - `SENDGRID_API_KEY=your_key` (for SendGrid)
     - `RESEND_API_KEY=your_key` (for Resend)

4. **Custom Domain (Optional):**
   - Go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Alternative Deployment Options

- **Netlify:** Connect GitHub repo, build command: `npm run build`
- **Railway:** Connect repo, will auto-detect Next.js
- **DigitalOcean App Platform:** Import from GitHub

## 🛠 Development

### Project Structure
```
storyfolio/
├── app/                    # Next.js 14 App Router
│   ├── (site)/            # Route group
│   │   ├── page.tsx       # Homepage
│   │   ├── projects/      # Projects pages
│   │   ├── about/         # About page
│   │   └── contact/       # Contact page
│   ├── api/               # API routes
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── providers.tsx      # Theme provider
├── components/ui/         # Reusable components
├── content/               # Content configuration
├── public/                # Static assets
└── ...config files
```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Key Features
- ✅ Dark/light theme toggle with no flash
- ✅ Responsive design (mobile-first)
- ✅ Framer Motion animations
- ✅ Accessibility optimized (WCAG 2.1 AA)
- ✅ SEO optimized with metadata
- ✅ TypeScript for type safety
- ✅ Form validation with Zod
- ✅ Interactive radar chart
- ✅ Image gallery with keyboard navigation
- ✅ Performance optimized

## 📋 Customization Checklist

Before deploying, update these items:

- [ ] Personal information in `content/site.ts`
- [ ] Social media links and URLs
- [ ] Project details, images, and metrics
- [ ] Skills data for radar chart
- [ ] Profile photo in About page
- [ ] Hero video/animation
- [ ] Site metadata in `app/layout.tsx`
- [ ] Open Graph image (`public/images/og-image.jpg`)
- [ ] Email service integration (optional)
- [ ] Google Analytics/verification codes (optional)
- [ ] Custom domain setup (optional)

## 🔧 Troubleshooting

### Common Issues

**Build errors:**
- Ensure all dependencies are installed: `npm install`
- Check TypeScript errors: `npm run lint`

**Images not loading:**
- Verify image paths in `content/site.ts`
- Ensure images exist in `public/images/`

**Contact form not working:**
- Check API route at `/api/contact`
- Verify form validation schema
- Check browser console for errors

**Theme toggle issues:**
- Ensure `next-themes` is properly configured
- Check if `suppressHydrationWarning` is set in HTML tag

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS.