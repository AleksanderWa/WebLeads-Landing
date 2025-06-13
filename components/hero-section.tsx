"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDown, Send, Loader2, Mail, MapPin, Star, Phone, AtSign, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://app.webleads.site/api/public/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            email: email
          },
          form_type: "WAITLIST"
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      // Reset form on success
      setEmail('');
      // You could add success state handling here
      setIsSubmittedSuccessfully(true);
      
    } catch (error) {
      // You could add error state handling here
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center bg-gradient-to-b from-white to-brand-light py-16">

      <div className="max-w-5xl mx-auto space-y-8">
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-sm">
          <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight mb-8">
            <span className="block mb-4">Get More B2B Leads with Data Scraping</span>
            <span className="block mb-6 text-3xl md:text-5xl text-brand-secondary opacity-85">
              Business Data, Emails, Socials
            </span>
          </h1>

          <div id="waitlist-form" className="mt-8 max-w-md mx-auto bg-gradient-to-r from-brand-primary/10 via-brand-accent/20 to-brand-primary/10 p-6 rounded-2xl shadow-lg animate-pulse-slow">
          {isSubmittedSuccessfully ? (
            <div className="relative text-center flex flex-col items-center justify-center gap-2 pt-4">
              <div className="flex flex-col items-center">
                <p className="text-2xl font-bold text-brand-secondary mb-2">
                  Thank you for submitting!
                </p>
                <p className="text-lg text-brand-secondary mb-3">
                  Expect an email from us soon.
                </p>
                {/* <Mail className="w-10 h-10 text-brand-primary mb-6" aria-hidden="true" /> */}
              </div>
              <div className="pointer-events-none select-none mt-2" style={{width: 170, height: 170, position: 'relative'}}>
                <Image
                  src="/cool_lama.png"
                  alt="Llama mascot"
                  fill
                  style={{objectFit: 'contain'}}
                  className="rounded-xl"
                  priority={false}
                />
              </div>
            </div>
          ) : (
            <>
              <p className="text-2xl font-bold text-brand-secondary mb-4">
                Get Free Access to Our Google Maps Data Scraper
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="elon.musk@x.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-lg border-2 border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white text-lg py-6 shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        Submitting...
                        <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                      </>
                    ) : (
                      <>
                        Sign in to waitlist
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primaryHover to-brand-primary bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></span>
                </Button>
              </form>
            </>
          )}
          </div>

          {/* Elegant card for description and CTA */}
          <div className="my-8 flex flex-col items-center justify-center">
            <div className="bg-white/90 rounded-xl shadow-md p-6 md:p-8 flex flex-col items-center max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mb-2">
                  Find New Customers Fast
                </h2>
                <p className="text-lg md:text-xl text-brand-secondary leading-relaxed">
                  Search for any business type in any area worldwide.  <br />Our Google Maps data scrapings finds you:
                </p>
              </div>
              
              {/* 2-column, 3-row feature list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
                {/* Left column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Business Name</h3>
                      <p className="text-sm text-gray-600">Complete business identity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Address</h3>
                      <p className="text-sm text-gray-600">Precise location details</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Reviews</h3>
                      <p className="text-sm text-gray-600">Customer feedback & ratings</p>
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <AtSign className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Email</h3>
                      <p className="text-sm text-gray-600">Direct contact addresses</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Phone</h3>
                      <p className="text-sm text-gray-600">Business phone numbers</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-brand-light/50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Share2 className="w-5 h-5 text-brand-primary" />
                    </div>
                    <div className="text-center flex-1">
                      <h3 className="font-semibold text-brand-secondary">Social Links</h3>
                      <p className="text-sm text-gray-600">Social media profiles</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-2 mt-2">
                {/* <div className="text-xl font-bold text-brand-primary">See what our Google Maps data scraping finds</div> */}
                <ArrowDown className="text-brand-primary w-12 h-12 animate-bounce" />
              </div>
            </div>
          </div>

          <div className="relative w-full mt-12 rounded-xl overflow-hidden shadow-lg hover-lift">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden"></div>
            <Image
              src="/potential_clients.jpg"
              alt="Google Maps Business Data Scraper - Find potential clients with no websites or poor reviews"
              width={1400}
              height={600}
              className="w-full object-contain rounded-xl"
              priority
              style={{ height: "auto" }}
            />
          </div>


        </div>
      </div>
    </section>
  );
}
