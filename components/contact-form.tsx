"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
  }

  return (
    <section className="py-16 px-4" id="contact">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brand-primary">Still have questions?</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-brand-primary mb-2">
              Name
            </label>
            <Input id="name" required className="w-full border-2 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="email" className="block text-brand-primary mb-2">
              Email
            </label>
            <Input id="email" type="email" required className="w-full border-2 rounded-md p-2" />
          </div>
          <div>
            <label htmlFor="message" className="block text-brand-primary mb-2">
              Message
            </label>
            <Textarea
              id="message"
              required
              className="w-full border-2 rounded-md p-2 min-h-[150px]"
              placeholder="Type your message..."
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" required />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I accept the{" "}
              <Link href="/terms" className="text-brand-primary hover:underline">
                Terms
              </Link>
            </label>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white py-2 rounded-md"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>
    </section>
  )
}
