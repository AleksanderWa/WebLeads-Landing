"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDown, Send, Loader2, Mail } from "lucide-react";
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
            <span className="block mb-4">More cold leads for your agency</span>
            <span className="block mb-6 text-3xl md:text-5xl text-brand-secondary opacity-85">
              Businesses without websites, bad ratings?
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
                Grab your free BETA access
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
          <div className="flex flex-col items-center justify-center mt-8 mb-8 gap-2">
            <div className="text-xl font-bold text-brand-primary">Get access to leads like these</div>
            <ArrowDown className="text-brand-primary w-16 h-16 animate-bounce" />
          </div>
          <div className="relative w-full mt-12 rounded-xl overflow-hidden shadow-lg hover-lift">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden"></div>
            <Image
              src="/potential_clients.jpg"
              alt="Example of potential leads - businesses with no websites or poor reviews"
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
