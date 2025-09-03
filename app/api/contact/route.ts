import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email address'),
  message: z.string().min(1, 'Message is required').min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
})

// Email validation function
async function validateEmail(email: string): Promise<boolean> {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate the request body
    const validatedData = contactSchema.parse(body)
    
    // Additional email validation
    const isValidEmail = await validateEmail(validatedData.email)
    if (!isValidEmail) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Please enter a valid email address' 
        },
        { status: 400 }
      )
    }
    
    // Use Formspree with a working endpoint
    const response = await fetch('https://formspree.io/f/mldwpvkr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: validatedData.name,
        email: validatedData.email,
        message: validatedData.message,
        _replyto: validatedData.email,
        _subject: `Portfolio Contact: ${validatedData.name}`
      })
    })
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Email service error:', response.status, errorText)
      throw new Error(`Failed to send email: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Email service response:', result)
    
    console.log('📧 Email sent successfully to phantomsheeraz280@gmail.com')
    
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
        message: 'Failed to send message. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: 'Method not allowed' },
    { status: 405 }
  )
}