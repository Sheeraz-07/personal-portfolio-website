import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Log the contact form submission (replace with actual email service integration)
    console.log('📧 New contact form submission:')
    console.log('Name:', validatedData.name)
    console.log('Email:', validatedData.email)
    console.log('Message:', validatedData.message)
    console.log('Timestamp:', new Date().toISOString())
    console.log('---')
    
    // TODO: Integrate with email service (e.g., SendGrid, Resend, Nodemailer)
    // Example SendGrid integration:
    /*
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    
    const msg = {
      to: 'your-email@example.com', // Your email
      from: 'noreply@yourdomain.com', // Verified sender
      subject: `New Contact Form Submission from ${validatedData.name}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Message: ${validatedData.message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${validatedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `,
    }
    
    await sgMail.send(msg)
    */
    
    // TODO: You can also save to a database here
    // Example with Prisma:
    /*
    await prisma.contactSubmission.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
      },
    })
    */
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully!' 
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid form data',
          errors: error.errors 
        },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}