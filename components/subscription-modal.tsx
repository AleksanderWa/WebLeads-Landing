"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  selectedPlan?: string
}

export function SubscriptionModal({ isOpen, onClose, selectedPlan }: SubscriptionModalProps) {
  const [email, setEmail] = useState("")
  const [industry, setIndustry] = useState("")
  const [city, setCity] = useState("")
  const [filter1, setFilter1] = useState("")
  const [filter2, setFilter2] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log({ email, industry, city, filter1, filter2 })
  }

  const filterOptions = [
    "No website",
    "No social media",
    "Not desktop friendly",
    "Not mobile friendly",
    "Bad SEO",
    "Bad Google Maps ratings",
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-brand-primary">
            {selectedPlan === "Enterprise" ? "Contact Sales" : "Customize Your Plan"}
          </DialogTitle>
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <X className="h-4 w-4" />
          </button>
        </DialogHeader>

        <div className="py-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-lg font-medium text-brand-primary">Email</label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-brand-primary">Industry</label>
              <Select value={industry} onValueChange={setIndustry} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select Industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fitness">Fitness & Wellness</SelectItem>
                  <SelectItem value="roofing">Roofing Services</SelectItem>
                  <SelectItem value="restaurants">Restaurants</SelectItem>
                  <SelectItem value="realestate">Real Estate</SelectItem>
                  {/* Add more industries as needed */}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-lg font-medium text-brand-primary">Target City</label>
              <Input
                type="text"
                placeholder="e.g., New York, NY"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>

            {selectedPlan && selectedPlan !== "Pay-As-You-Go" && selectedPlan !== "Enterprise" && (
              <>
                <div className="space-y-2">
                  <label className="text-lg font-medium text-brand-primary">Filter 1</label>
                  <Select value={filter1} onValueChange={setFilter1}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a filter" />
                    </SelectTrigger>
                    <SelectContent>
                      {filterOptions.map((filter) => (
                        <SelectItem key={filter} value={filter.toLowerCase().replace(/\s+/g, "-")}>
                          {filter}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {(selectedPlan === "Growth" || selectedPlan === "Pro") && (
                  <div className="space-y-2">
                    <label className="text-lg font-medium text-brand-primary">Filter 2</label>
                    <Select value={filter2} onValueChange={setFilter2}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a filter" />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.map((filter) => (
                          <SelectItem key={filter} value={filter.toLowerCase().replace(/\s+/g, "-")}>
                            {filter}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </>
            )}

            <Button
              type="submit"
              className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white py-6 text-lg"
            >
              {selectedPlan === "Enterprise" ? "Contact Sales" : "Start Generating Leads"}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
