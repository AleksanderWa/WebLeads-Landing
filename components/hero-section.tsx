"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDown, Send, Loader2, Mail, MapPin, Star, Phone, AtSign, Share2, Users, TrendingUp, Search, Building2, Brain, Download, Database, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const getTargetDate = () => {
      const now = new Date();
      const currentYear = now.getUTCFullYear();
      const dec1ThisYear = new Date(`${currentYear}-12-01T00:00:00Z`);
      
      if (now.getTime() >= dec1ThisYear.getTime()) {
        return new Date(`${currentYear + 1}-12-01T00:00:00Z`);
      }
      return dec1ThisYear;
    };

    const targetDate = getTargetDate();

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
        <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200/50">
      <div className="text-center space-y-4 md:space-y-6">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-secondary px-2">
          Beta is closed. We're launching soon!
        </p>
        
        <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4">
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary-hover rounded-xl px-3 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[80px] shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {timeRemaining.days}
              </div>
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 font-medium">
              Days
            </div>
          </div>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-secondary self-center -mt-6 md:-mt-8">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary-hover rounded-xl px-3 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[80px] shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {String(timeRemaining.hours).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 font-medium">
              Hours
            </div>
          </div>
          
          <div className="text-xl md:text-2xl lg:text-3xl font-bold text-brand-secondary self-center -mt-6 md:-mt-8">:</div>
          
          <div className="flex flex-col items-center">
            <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary-hover rounded-xl px-3 py-3 md:px-5 md:py-4 min-w-[60px] md:min-w-[80px] shadow-lg">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                {String(timeRemaining.minutes).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-1 md:mt-2 font-medium">
              Minutes
            </div>
          </div>
          
          <div className="hidden md:block text-2xl md:text-3xl font-bold text-brand-secondary self-center -mt-8">:</div>
          
          <div className="hidden md:flex flex-col items-center">
            <div className="bg-gradient-to-br from-brand-secondary to-brand-secondary-hover rounded-xl px-5 py-4 min-w-[80px] shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-white">
                {String(timeRemaining.seconds).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-2 font-medium">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [flowStage, setFlowStage] = useState(0);
  const timersRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    const runCycle = () => {
      setFlowStage(0);
      
      timersRef.current.push(setTimeout(() => setFlowStage(1), 1000));
      timersRef.current.push(setTimeout(() => setFlowStage(2), 2000));
      timersRef.current.push(setTimeout(() => setFlowStage(3), 3000));
      timersRef.current.push(setTimeout(() => setFlowStage(4), 4000));
      timersRef.current.push(setTimeout(() => {
        runCycle();
      }, 5000));
    };
    
    runCycle();
    
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null); // Clear any previous errors
    
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
        // Try to parse error response as JSON
        let errorDetail = 'Failed to submit form';
        try {
          const errorData = await response.json();
          if (errorData.detail) {
            errorDetail = errorData.detail;
          }
        } catch (parseError) {
          // If JSON parsing fails, use default error message
          console.error('Failed to parse error response:', parseError);
        }
        
        throw new Error(errorDetail);
      }
      
      // Reset form on success
      setEmail('');
      setIsSubmittedSuccessfully(true);
      
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('An unexpected error occurred');
      }
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gradient-to-br from-white via-brand-light/30 to-brand-accent/10 py-12 md:py-20 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="relative">
          
          <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl space-y-12">
        
        <div className="space-y-4 md:space-y-6 relative">
          <div className="hidden lg:block absolute -left-32 top-0">
            <div className="relative w-64 h-64">
              <div className="absolute -inset-4 bg-brand-primary/5 rounded-full blur-xl -z-10" />
              
              <div className="relative w-full h-full flex items-center justify-center">
                <div
                  className={`absolute w-16 h-16 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 z-10 animate-float ${
                    flowStage >= 4
                      ? "bg-gradient-to-br from-green-500 to-green-600 scale-110"
                      : "bg-gradient-to-br from-brand-primary to-brand-primary-hover scale-100"
                  }`}
                >
                  <Search className="w-8 h-8 text-white" />
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 orbit-element orbit-0 ${
                    flowStage >= 1 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-lg relative z-10">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary text-center whitespace-nowrap bg-white/90 px-2 py-0.5 rounded-md shadow-sm relative z-10">
                    Find businesses
                  </span>
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 orbit-element orbit-90 ${
                    flowStage >= 2 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg relative z-10">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary text-center whitespace-nowrap bg-white/90 px-2 py-0.5 rounded-md shadow-sm relative z-10">
                    Enriching data
                  </span>
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 orbit-element orbit-180 ${
                    flowStage >= 3 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-xl flex items-center justify-center shadow-lg relative z-10">
                    <Brain className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary text-center whitespace-nowrap bg-white/90 px-2 py-0.5 rounded-md shadow-sm relative z-10">
                    AI validates
                  </span>
                </div>

                <div
                  className={`absolute left-1/2 top-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-1000 orbit-element orbit-270 ${
                    flowStage >= 4 ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg relative z-10">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-brand-secondary text-center whitespace-nowrap bg-white/90 px-2 py-0.5 rounded-md shadow-sm relative z-10">
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 rounded-full shadow-sm border border-brand-primary/10 flex-wrap justify-center">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-brand-secondary">Fresh leads collected on each search</span>
            <span className="hidden sm:inline text-sm text-gray-400">•</span>
            <span className="text-xs md:text-sm text-gray-600">No outdated database</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-primary leading-tight tracking-tight px-2">
            <span className="block mb-2 md:mb-3">Find quality leads</span>
            <span className="block text-3xl sm:text-4xl md:text-6xl text-brand-secondary font-semibold">
              in minutes, not months
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Search for any business type in any city. Get complete business data with contact details.
          </p>

          {/* <div className="flex items-center justify-center gap-2 text-base md:text-lg text-gray-600 bg-blue-50/80 backdrop-blur-sm border border-blue-200 rounded-lg px-5 py-3 max-w-2xl mx-auto">
            <Sparkles className="w-5 h-5 text-brand-primary flex-shrink-0" />
            <span className="font-medium">Fresh leads collected on each search</span>
            <span className="text-gray-400">•</span>
            <span>No outdated database</span>
          </div> */}
        </div>

        <div id="waitlist-form" className="max-w-2xl mx-auto">
          {/* {isSubmittedSuccessfully ? (
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-brand-primary/10">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-8 h-8 text-green-600" aria-hidden="true" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-brand-secondary mb-2">
                    Thank you for signing up!
                  </p>
                  <p className="text-lg text-gray-600">
                    Check your mailbox for next steps
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-brand-primary/10">
              <p className="text-2xl font-bold text-brand-secondary mb-6">
                Start finding leads today
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your.email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-5 py-6 text-lg border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-brand-primary hover:bg-brand-primary-hover text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Get Free Access
                        <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </div>
                {errorMessage && (
                  <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                    <p className="text-sm text-red-700 font-medium">
                      {errorMessage}
                    </p>
                  </div>
                )}
              </form>
            </div>
          )} */}
          <CountdownTimer />
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2">
              What Our Community Has Achieved
            </h3>
            <p className="text-gray-600">Real results from businesses like yours</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Users className="w-6 h-6 text-brand-primary" />
                <div className="text-2xl font-bold text-brand-primary">130+</div>
                <div className="text-sm text-gray-600 text-center">Active Users</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Search className="w-6 h-6 text-brand-primary" />
                <div className="text-2xl font-bold text-brand-primary">640+</div>
                <div className="text-sm text-gray-600 text-center">Searches</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-6 h-6 text-brand-primary" />
                <div className="text-2xl font-bold text-brand-primary">452.000+</div>
                <div className="text-sm text-gray-600 text-center">Businesses Found</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-6 h-6 text-brand-primary" />
                <div className="text-2xl font-bold text-brand-primary">42.000+</div>
                <div className="text-sm text-gray-600 text-center">Decision Makers</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto border border-brand-primary/10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-3">
              Complete Business Intelligence
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to reach and convert your ideal customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Business Name</h3>
                <p className="text-sm text-gray-600">Complete business identity and branding</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Address</h3>
                <p className="text-sm text-gray-600">Precise location and service area</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Phone Number</h3>
                <p className="text-sm text-gray-600">Direct contact for immediate outreach</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <AtSign className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Email Address</h3>
                <p className="text-sm text-gray-600">Professional email contacts</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Reviews & Ratings</h3>
                <p className="text-sm text-gray-600">Customer sentiment and reputation</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Social Media</h3>
                <p className="text-sm text-gray-600">Connect across all platforms</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-brand-accent/15 to-brand-accent/8 rounded-xl border-2 border-brand-accent/40 w-full md:w-[calc(50%-12px)] max-w-md hover:shadow-xl transition-all duration-300 relative">
              <Badge className="absolute -top-2 -left-2 bg-green-500 text-white border-0 hover:bg-green-500 text-xs font-semibold shadow-md z-10 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Available Now
              </Badge>
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-brand-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Decision Makers</h3>
                <p className="text-sm text-gray-600">Key people's names and roles</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-4 p-6 bg-gradient-to-br from-brand-accent/8 to-brand-accent/4 rounded-xl border-2 border-brand-accent/20 w-full md:w-[calc(50%-12px)] max-w-md hover:shadow-lg transition-all duration-300 relative opacity-90">
              <Badge className="absolute -top-2 -right-2 bg-amber-500 text-white border-0 hover:bg-amber-500 text-xs font-semibold shadow-md z-10">
                Coming Soon
              </Badge>
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-accent/60 to-brand-accent-hover/60 rounded-xl flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6 text-brand-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-brand-secondary mb-1">Verified Emails</h3>
                <p className="text-sm text-gray-600">Email addresses verified for deliverability</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3 mt-10">
            {/* <p className="text-sm text-gray-500 font-medium">See what you can discover</p> */}
            <ArrowDown className="text-brand-primary w-10 h-10 animate-bounce" />
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
