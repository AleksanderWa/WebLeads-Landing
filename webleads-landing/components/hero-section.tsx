"use client"

import type React from "react"
import Image from "next/image"
import { Rocket, Send } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 md:py-20 text-center bg-gradient-to-b from-white to-brand-light" id="waitlist">
      <div className="max-w-5xl mx-auto space-y-12">
        <div className="bg-white/90 backdrop-blur-sm pt-10 pb-6 px-6 md:px-10 rounded-xl shadow-md">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="/hawk-logo.svg"
              alt="WebLeads Hawk"
              width={60}
              height={60}
              className="mr-3"
            />
            <h2 className="text-xl font-bold text-brand-primary">WebLeads Hawk</h2>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight mb-8">
            <span className="block mb-4">Need more leads for your agency?</span>
            <span className="block mb-6 text-3xl md:text-5xl text-brand-secondary opacity-85">Businesses without websites, bad ratings?</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-secondary font-medium mt-8 mb-6">
            Sign in to waitlist and get your free BETA access
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-8 mb-8">
            <Input
              type="email"
              placeholder="elon.musk@x.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 text-lg border-2 border-gray-300 focus:border-brand-primary rounded-lg"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              size="xl"
              className="w-full"
            >
              {isSubmitting ? "Processing..." : "Sign in to waitlist"} <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
          
          <div className="relative w-full mt-12 rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
            <Image
              src="/landing_hero_promo.jpg"
              alt="Example of potential leads - businesses with no websites or poor reviews"
              width={1400}
              height={600}
              className="w-full object-contain rounded-lg"
              priority
              style={{ height: 'auto' }}
            />
            <div className="absolute top-4 right-4 bg-brand-accent/95 text-white px-4 py-2 rounded-full font-medium shadow-md flex items-center">
              <span>Spotted by the Hawk</span>
              <Image 
                src="/hawk-icon.svg" 
                alt="Hawk icon" 
                width={24} 
                height={24} 
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
