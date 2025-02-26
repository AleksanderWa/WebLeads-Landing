"use client"

import { Rocket, Send, HandIcon as PointingHandIcon } from "lucide-react"
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
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#B44D4D] leading-tight">
          Can getting cold leads be automated?
          <br />
          That&apos;s exactly what we do <Rocket className="inline-block ml-2" />
        </h1>

        <p className="text-xl text-[#B44D4D]">
          Sign in to waitlist and get
          <br />
          demo list of 50 leads
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 text-lg"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#DD4B39] hover:bg-[#C23B2A] text-white text-lg py-6"
          >
            Sign in to waitlist <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>

        <div className="relative pt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <svg width="40" height="80" viewBox="0 0 40 80" fill="none" className="text-[#DD4B39]">
              <path d="M20 0C20 40 40 40 40 40C40 40 20 40 20 80" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <Button
            variant="default"
            className="relative mt-20 bg-[#DD4B39] hover:bg-[#C23B2A] text-white px-8 py-6 text-lg"
          >
            How we do it <PointingHandIcon className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

