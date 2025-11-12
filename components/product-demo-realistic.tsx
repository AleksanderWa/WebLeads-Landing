"use client";

import { useState, useEffect } from "react";
import { Search, Star, Phone, Mail, MapPin, Clock, CheckCircle2, Brain, Sparkles, Shield, Loader2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BusinessCard {
  name: string;
  rating: number;
  reviewCount: number;
  phone?: string;
  email?: string;
  address?: string;
  decisionMaker?: string;
  seoScore?: number;
  aiVerified?: boolean;
}

const sampleBusinesses: BusinessCard[] = [
  {
    name: "Milano Hair Studio",
    rating: 4.8,
    reviewCount: 127,
    phone: "(416) 555-0123",
    email: "info@milanohair.com",
    address: "123 Queen St, Toronto",
    decisionMaker: "James Milano, Owner",
    aiVerified: true,
  },
  {
    name: "Bella Beauty Salon",
    rating: 4.9,
    reviewCount: 89,
    email: "sarah@bellasalon.com",
    phone: "(416) 555-0456",
    decisionMaker: "Sarah Chen, Owner",
    aiVerified: true,
  },
  {
    name: "Urban Cuts",
    rating: 4.7,
    reviewCount: 203,
    phone: "(416) 555-0789",
    decisionMaker: "Michael Torres, Manager",
    aiVerified: true,
  },
  {
    name: "Style House",
    rating: 4.6,
    reviewCount: 156,
    email: "contact@stylehouse.ca",
    decisionMaker: "Maria Chen, Manager",
    aiVerified: true,
  },
  {
    name: "The Hair Lab",
    rating: 4.8,
    reviewCount: 92,
    phone: "(416) 555-0321",
    seoScore: 62,
    decisionMaker: "David Kim, Director",
    aiVerified: true,
  },
  {
    name: "Salon Rouge",
    rating: 4.9,
    reviewCount: 134,
    email: "hello@salonrouge.com",
    decisionMaker: "Emma Wilson, Owner",
    aiVerified: true,
  },
];

interface ProgressStage {
  id: number;
  label: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
}

const progressStages: ProgressStage[] = [
  {
    id: 1,
    label: "Searching Google Maps",
    duration: "5-10 min",
    icon: <Search className="w-5 h-5" />,
    description: "Finding all businesses matching your criteria",
  },
  {
    id: 2,
    label: "Enriching Contact Data",
    duration: "15-20 min",
    icon: <Mail className="w-5 h-5" />,
    description: "Gathering phone numbers, emails, and addresses",
  },
  {
    id: 3,
    label: "AI Validating Decision Makers",
    duration: "10-15 min",
    icon: <Brain className="w-5 h-5" />,
    description: "AI verifying names, roles, and contact accuracy",
  },
  {
    id: 4,
    label: "Finalizing Results",
    duration: "5-10 min",
    icon: <CheckCircle2 className="w-5 h-5" />,
    description: "Quality check and export preparation",
  },
];

export function ProductDemoRealistic() {
  const [animationStage, setAnimationStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentStage, setCurrentStage] = useState(0);
  const [elapsedMinutes, setElapsedMinutes] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [estimatedTime, setEstimatedTime] = useState(45);

  const searchQuery = "Hair Salons in Toronto";
  const totalBusinesses = 572;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("product-demo-realistic");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timers: NodeJS.Timeout[] = [];

    timers.push(setTimeout(() => setAnimationStage(1), 500));
    timers.push(setTimeout(() => setAnimationStage(2), 1500));
    timers.push(setTimeout(() => setAnimationStage(3), 2500));
    timers.push(setTimeout(() => setCurrentStage(1), 3000));
    timers.push(setTimeout(() => setCurrentStage(2), 8000));
    timers.push(setTimeout(() => setCurrentStage(3), 15000));
    timers.push(setTimeout(() => setCurrentStage(4), 20000));
    timers.push(setTimeout(() => setAnimationStage(4), 25000));

    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < searchQuery.length) {
          return searchQuery.slice(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 50);

    const timerInterval = setInterval(() => {
      setElapsedMinutes((prev) => {
        if (prev < estimatedTime) {
          return Math.min(prev + 0.1, estimatedTime);
        }
        clearInterval(timerInterval);
        return estimatedTime;
      });
    }, 1000);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typingInterval);
      clearInterval(timerInterval);
    };
  }, [isVisible, estimatedTime]);

  const visibleCards = animationStage >= 4 ? sampleBusinesses : [];
  const progressPercentage = (currentStage / progressStages.length) * 100;

  return (
    <section id="product-demo-realistic" className="relative py-24 px-4 bg-gradient-to-b from-brand-light/20 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float-blob-1" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-100/30 rounded-full blur-3xl animate-float-blob-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            How It Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thorough, AI-validated results that take time to ensure quality
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center justify-center mb-12">
            <div
              className={`relative w-full max-w-2xl transition-all duration-1000 ${
                animationStage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 border-2 border-brand-primary/20 relative">
                <div className="flex items-center gap-4">
                  <Search className="w-6 h-6 text-brand-primary flex-shrink-0" />
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={typedText}
                      readOnly
                      className="w-full text-xl bg-transparent border-none outline-none text-brand-secondary placeholder-gray-400"
                      placeholder="Search for businesses..."
                    />
                    {animationStage === 2 && (
                      <span className="absolute right-0 top-0 w-0.5 h-6 bg-brand-primary animate-typing-cursor" />
                    )}
                  </div>
                  <Button
                    className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-6 rounded-xl transition-all"
                    disabled={animationStage < 3}
                  >
                    {animationStage < 3 ? (
                      "Search"
                    ) : (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processing...
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {animationStage >= 3 && (
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-brand-primary">
                        {elapsedMinutes.toFixed(1)} / {estimatedTime} min
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-brand-primary to-brand-primary-hover h-full rounded-full transition-all duration-1000"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {progressStages.map((stage) => (
                      <div
                        key={stage.id}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-500 ${
                          currentStage >= stage.id
                            ? "bg-green-50 border-green-200"
                            : currentStage === stage.id - 1
                            ? "bg-blue-50 border-blue-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            currentStage >= stage.id
                              ? "bg-green-500 text-white"
                              : currentStage === stage.id - 1
                              ? "bg-blue-500 text-white animate-pulse"
                              : "bg-gray-300 text-gray-600"
                          }`}
                        >
                          {currentStage > stage.id ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            stage.icon
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h3 className="font-semibold text-gray-900">{stage.label}</h3>
                            <span className="text-xs font-medium text-gray-600">{stage.duration}</span>
                          </div>
                          <p className="text-sm text-gray-600">{stage.description}</p>
                          {currentStage === stage.id && stage.id === 3 && (
                            <div className="mt-2 flex items-center gap-2 text-xs text-blue-600">
                              <Sparkles className="w-3 h-3" />
                              <span>AI validation in progress...</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {animationStage >= 4 && (
                <div
                  className={`mt-6 text-center transition-all duration-500 ${
                    animationStage >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-full px-6 py-3 shadow-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-bold text-green-700">
                      {totalBusinesses.toLocaleString()} AI-verified businesses ready
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {visibleCards.map((business, index) => (
              <div
                key={business.name}
                className={`bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl ${
                  animationStage >= 4 ? "" : "opacity-0"
                }`}
                style={{
                  animation: animationStage >= 4 ? `card-appear 0.5s ease-out ${index * 0.3}s both` : undefined,
                }}
              >
                {business.aiVerified && (
                  <div className="flex items-center gap-2 mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                      <Brain className="w-3 h-3" />
                      <span>AI Verified</span>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-brand-secondary">{business.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold">{business.rating}</span>
                    <span className="text-xs text-gray-500">({business.reviewCount})</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {business.address && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4 text-brand-primary" />
                      <span>{business.address}</span>
                    </div>
                  )}

                  {business.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-brand-primary" />
                      <span>{business.phone}</span>
                    </div>
                  )}

                  {business.email && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-brand-primary" />
                      <span className="truncate">{business.email}</span>
                    </div>
                  )}

                  {business.decisionMaker && (
                    <div className="flex items-center gap-2 text-sm text-brand-primary font-medium mt-2 p-2 bg-blue-50 rounded-lg">
                      <Brain className="w-4 h-4" />
                      <span className="font-semibold">{business.decisionMaker}</span>
                      <CheckCircle2 className="w-4 h-4 text-green-600 ml-auto" />
                    </div>
                  )}

                  {business.seoScore && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                      <Globe className="w-4 h-4 text-brand-primary" />
                      <span>SEO Score: {business.seoScore}/100</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {animationStage >= 4 && (
            <div
              className={`mt-12 text-center transition-all duration-500 delay-1000 ${
                animationStage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white rounded-full px-8 py-4 shadow-xl">
                <Shield className="w-5 h-5" />
                <span className="text-lg font-bold">Comprehensive, AI-verified results ready</span>
                <span className="text-sm opacity-90">Quality over speed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

