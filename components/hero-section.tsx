"use client";

import type React from "react";
import Image from "next/image";
import { ArrowDown, Send, Loader2, Mail, MapPin, Star, Phone, AtSign, Share2, Users, TrendingUp, Search, Building2, Brain, Download, Database, CheckCircle2, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ProductDemoRealistic } from "@/components/product-demo-realistic";


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
    setErrorMessage(null);
    
    const encodedEmail = encodeURIComponent(email);
    const redirectUrl = `https://app.webleads.site/register?email=${encodedEmail}`;
    
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
        console.error('Form submission failed, but redirecting anyway');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      window.location.href = redirectUrl;
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-4 text-center bg-gradient-to-br from-white via-brand-light/30 to-brand-accent/10 py-12 md:py-20 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float-blob-1" />
        <div className="absolute top-40 right-10 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-brand-accent/15 rounded-full blur-3xl animate-float-blob-2" />
        <div className="absolute bottom-20 left-1/4 sm:left-1/3 w-36 h-36 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-brand-primary/6 rounded-full blur-3xl animate-float-blob-3" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="relative">
          
          <div className="w-full flex justify-center">
            <div className="w-full max-w-5xl space-y-12">
        
        <div className="space-y-4 md:space-y-6 relative">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 md:px-4 rounded-full shadow-sm border border-brand-primary/10 flex-wrap justify-center">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500 flex-shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-brand-secondary">Fresh data collected on each search</span>
            {/* <span className="hidden sm:inline text-sm text-gray-400">•</span>
            <span className="text-xs md:text-sm text-gray-600">Live Data Collection & Enrichment</span> */}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-brand-primary leading-tight tracking-tight px-2">
            <span className="block mb-2 md:mb-3">Find verified business emails</span>
            <span className="block text-3xl sm:text-4xl md:text-6xl text-brand-secondary font-semibold">
              for any local niche, instantly
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Search any city, any industry — get verified email addresses and decision maker contacts. Fresh data pulled live on every search. Pay only for complete records.
          </p>
        </div>

        <div id="waitlist-form" className="max-w-2xl mx-auto mt-8 md:mt-12 relative">
          <div className="hidden lg:block absolute right-[calc(100%+2rem)] top-0">
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
          {isSubmittedSuccessfully ? (
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
            <div className="relative">
              {/* <div className="absolute -top-5 left-1/3 -translate-x-1/2 sm:-top-7 z-20">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-xl border-2 border-white/30 transform rotate-6">
                  <span>Start prospecting</span>
                </div>
              </div> */}
              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border-2 border-brand-primary/20">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative flex-1">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full pl-12 pr-5 py-6 text-lg border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-primary hover:bg-brand-primary-hover text-white text-base sm:text-lg py-6 px-4 sm:px-6 md:px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          <span className="hidden sm:inline">Submitting...</span>
                          <span className="sm:hidden">Submitting</span>
                        </>
                      ) : (
                        <>
                          <span className="whitespace-nowrap">Get 1000 Free Leads</span>
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                        </>
                      )}
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 text-center mt-2">
                    No credit card required. 2 free searches with up to 500 results each.
                  </p>
                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                      <p className="text-sm text-red-700 font-medium">
                        {errorMessage}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-6 md:mt-8 px-2">
            <div className="flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-brand-secondary text-center">Pay Only For Complete Records</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-brand-secondary text-center">Decision Maker Emails Included</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-brand-secondary text-center">1000 Free Leads — No Card Needed</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-primary/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full border border-brand-primary/20">
              <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-brand-secondary text-center">Always Fresh — No Stale Database</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12 md:mt-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2">
              Trusted by growing businesses
            </h3>
            <p className="text-gray-600">Real numbers from real searches</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 max-w-6xl mx-auto px-4">
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">452,000+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-center">Businesses Found</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">315,000+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-center">Emails Found</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">42,000+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-center">Decision Makers Found</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Search className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">640+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-center">Searches Done</div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 rounded-xl shadow-md border border-brand-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center gap-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-primary" />
                <div className="text-xl sm:text-2xl font-bold text-brand-primary">130+</div>
                <div className="text-xs sm:text-sm text-gray-600 text-center">Active Users</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <ProductDemoRealistic />
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 max-w-5xl mx-auto border border-brand-primary/10">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-2 sm:mb-3 px-4">
              Complete Business Intelligence
            </h2>
            <p className="text-base sm:text-lg text-gray-600 px-4">
              Everything you need to run a focused email outreach campaign
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Business Name</h3>
                <p className="text-xs sm:text-sm text-gray-600">Know exactly who you're reaching out to</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Address</h3>
                <p className="text-xs sm:text-sm text-gray-600">Target by city, neighborhood, or region</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Phone Number</h3>
                <p className="text-xs sm:text-sm text-gray-600">Business phone for follow-up calls</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <AtSign className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Email Address</h3>
                <p className="text-xs sm:text-sm text-gray-600">Verified and ready to send</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Reviews & Ratings</h3>
                <p className="text-xs sm:text-sm text-gray-600">Qualify prospects before you reach out</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Social Media</h3>
                <p className="text-xs sm:text-sm text-gray-600">Research before you press send</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-brand-accent/15 to-brand-accent/8 rounded-xl border-2 border-brand-accent/40 w-full md:w-[calc(50%-12px)] max-w-md hover:shadow-xl transition-all duration-300 relative">
              <Badge className="absolute -top-2 -left-2 bg-green-500 text-white border-0 hover:bg-green-500 text-xs font-semibold shadow-md z-10 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Available Now
              </Badge>
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Decision Makers</h3>
                <p className="text-xs sm:text-sm text-gray-600">Reach the person who can actually say yes</p>
              </div>
            </div>
            
            <div className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-gradient-to-br from-brand-accent/15 to-brand-accent/8 rounded-xl border-2 border-brand-accent/40 w-full md:w-[calc(50%-12px)] max-w-md hover:shadow-xl transition-all duration-300 relative">
              <Badge className="absolute -top-2 -left-2 bg-green-500 text-white border-0 hover:bg-green-500 text-xs font-semibold shadow-md z-10 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Available Now
              </Badge>
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-xl flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-base sm:text-lg text-brand-secondary mb-1">Verified Emails</h3>
                <p className="text-xs sm:text-sm text-gray-600">Verified before you send — no bounces</p>
              </div>
            </div>
          </div>


        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
