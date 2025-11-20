"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Star, Phone, Mail, MapPin, Clock, CheckCircle2, Brain, Sparkles, Shield, Loader2, Globe, Pause, Play, RefreshCw } from "lucide-react";
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
    name: "Manhattan Realty Group",
    rating: 4.8,
    reviewCount: 127,
    phone: "(212) 555-0123",
    email: "info@manhattanrealty.com",
    address: "123 Park Ave, New York, NY",
    decisionMaker: "James Milano, Broker",
    aiVerified: true,
  },
  {
    name: "Empire State Properties",
    rating: 4.9,
    reviewCount: 89,
    email: "sarah@empirestate.com",
    phone: "(212) 555-0456",
    decisionMaker: "Sarah Chen, Owner",
    aiVerified: true,
  },
  {
    name: "Brooklyn Heights Realty",
    rating: 4.7,
    reviewCount: 203,
    phone: "(718) 555-0789",
    decisionMaker: "Michael Torres, Manager",
    aiVerified: true,
  },
  {
    name: "Central Park Real Estate",
    rating: 4.6,
    reviewCount: 156,
    email: "contact@centralparkre.com",
    decisionMaker: "Maria Chen, Manager",
    aiVerified: true,
  },
  {
    name: "NYC Luxury Homes",
    rating: 4.8,
    reviewCount: 92,
    phone: "(212) 555-0321",
    seoScore: 62,
    decisionMaker: "David Kim, Director",
    aiVerified: true,
  },
  {
    name: "Manhattan Elite Properties",
    rating: 4.9,
    reviewCount: 134,
    email: "hello@manhattanelite.com",
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
    duration: "",
    icon: <Search className="w-5 h-5" />,
    description: "Finding all businesses matching your criteria",
  },
  {
    id: 2,
    label: "Enriching Contact Data",
    duration: "",
    icon: <Mail className="w-5 h-5" />,
    description: "Gathering decision makers roles & names, emails, and socials",
  },
  {
    id: 3,
    label: "AI Validating Decision Makers",
    duration: "",
    icon: <Brain className="w-5 h-5" />,
    description: "AI verifying names, roles",
  },
  {
    id: 4,
    label: "Finalizing Results",
    duration: "",
    icon: <CheckCircle2 className="w-5 h-5" />,
    description: "Quality check and export preparation",
  },
];

export function ProductDemoRealistic() {
  const [animationStage, setAnimationStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentStage, setCurrentStage] = useState(0);
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const timersRef = useRef<NodeJS.Timeout[]>([]);
  const intervalsRef = useRef<NodeJS.Timeout[]>([]);
  const restartTimerRef = useRef<NodeJS.Timeout | null>(null);

  const searchQuery = "Real Estate Agents in New York";
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

  const stopAnimation = () => {
    timersRef.current.forEach(clearTimeout);
    intervalsRef.current.forEach(clearInterval);
    if (restartTimerRef.current) clearTimeout(restartTimerRef.current);
    timersRef.current = [];
    intervalsRef.current = [];
    restartTimerRef.current = null;
    setIsPaused(true);
  };

  const startAnimation = () => {
    stopAnimation();
    setIsPaused(false);
    setAnimationStage(0);
    setTypedText("");
    setCurrentStage(0);
    setProgressPercentage(0);
    setIsCompleted(false);

    timersRef.current.push(setTimeout(() => setAnimationStage(1), 500));
    timersRef.current.push(setTimeout(() => setAnimationStage(2), 1500));
    timersRef.current.push(setTimeout(() => setAnimationStage(3), 2500));

    const typingInterval = setInterval(() => {
      setTypedText((prev) => {
        if (prev.length < searchQuery.length) {
          return searchQuery.slice(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        intervalsRef.current = intervalsRef.current.filter(i => i !== typingInterval);
        return prev;
      });
    }, 50);
    intervalsRef.current.push(typingInterval);

    const progressStartTimer = setTimeout(() => {
      setProgressPercentage(0);
      setCurrentStage(0);
      
      setTimeout(() => {
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
          currentProgress += 1;
          setProgressPercentage(currentProgress);
          
          let newStage = 0;
          if (currentProgress > 0 && currentProgress <= 25) {
            newStage = 1;
          } else if (currentProgress > 25 && currentProgress <= 70) {
            newStage = 2;
          } else if (currentProgress > 70 && currentProgress <= 95) {
            newStage = 3;
          } else if (currentProgress > 95 && currentProgress <= 100) {
            newStage = 4;
          }
          setCurrentStage(newStage);

          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            intervalsRef.current = intervalsRef.current.filter(i => i !== progressInterval);
            
            setTimeout(() => {
              setIsCompleted(true);
              setAnimationStage(4);
              
              restartTimerRef.current = setTimeout(() => {
                setIsPaused((currentPaused) => {
                  if (!currentPaused) {
                    startAnimation();
                  }
                  return currentPaused;
                });
              }, 5000);
            }, 2000);
          }
        }, 100);
        intervalsRef.current.push(progressInterval);
      }, 800);
    }, 2500);
    
    timersRef.current.push(progressStartTimer);
  };

  useEffect(() => {
    if (!isVisible) return;
    if (!isPaused) {
      startAnimation();
    }

    return () => {
      stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  const handleStart = () => {
    setIsPaused(false);
    startAnimation();
  };

  const handleStop = () => {
    stopAnimation();
  };

  const visibleCards = isCompleted ? sampleBusinesses : [];

  return (
    <section id="product-demo-realistic" className="relative py-24 px-4 bg-gradient-to-b from-brand-light/20 to-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl animate-float-blob-1" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-100/30 rounded-full blur-3xl animate-float-blob-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-2">
            Watch how easy it is to find and enrich business leads
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-primary" />
            Fresh leads collected on each search - no outdated database
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-col items-center justify-center mb-12">
            <div
              className={`relative w-full max-w-2xl transition-all duration-1000 ${
                animationStage >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center gap-2 md:gap-3">
                <div className="bg-white rounded-2xl shadow-2xl p-3 md:p-6 border-2 border-brand-primary/20 relative flex-1 min-w-0">
                  <div className="flex items-center gap-2 md:gap-4">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-brand-primary flex-shrink-0" />
                    <div className="flex-1 relative min-w-0">
                      <input
                        type="text"
                        value={typedText}
                        readOnly
                        className="w-full text-sm md:text-xl bg-transparent border-none outline-none text-brand-secondary placeholder-gray-400"
                        placeholder="Search for businesses..."
                      />
                      {animationStage === 2 && (
                        <span className="absolute right-0 top-0 w-0.5 h-4 md:h-6 bg-brand-primary animate-typing-cursor" />
                      )}
                    </div>
                    <Button
                      className="bg-brand-primary hover:bg-brand-primary-hover text-white px-3 py-2 md:px-8 md:py-6 rounded-xl transition-all text-xs md:text-base flex-shrink-0 whitespace-nowrap"
                      disabled={animationStage < 3}
                    >
                      {animationStage < 3 ? (
                        "Search"
                      ) : isCompleted ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 md:mr-2" />
                          <span className="hidden md:inline">Completed</span>
                        </>
                      ) : (
                        <>
                          <Loader2 className="w-4 h-4 md:w-5 md:h-5 md:mr-2 animate-spin" />
                          <span className="hidden md:inline">Processing...</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {isPaused ? (
                    <button
                      onClick={handleStart}
                      className="p-2 hover:opacity-80 transition-opacity rounded-lg"
                      title="Start animation"
                    >
                      <Play className="w-5 h-5 text-brand-primary fill-brand-primary" />
                    </button>
                  ) : (
                    <button
                      onClick={handleStop}
                      className="p-2 hover:opacity-80 transition-opacity rounded-lg"
                      title="Stop animation"
                    >
                      <Pause className="w-5 h-5 text-brand-primary fill-brand-primary" />
                    </button>
                  )}
                  {/* <button
                    onClick={handleStart}
                    className="p-2 hover:opacity-80 transition-opacity rounded-lg"
                    title="Restart animation"
                  >
                    <RefreshCw className="w-5 h-5 text-brand-primary" /> */}
                  {/* </button> */}
                </div>
              </div>

              {animationStage >= 1 && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg px-4 py-2">
                  <Sparkles className="w-4 h-4 text-brand-primary" />
                  <span className="font-medium">Fresh leads collected on each search</span>
                  <span className="text-gray-500">•</span>
                  <span>No outdated database</span>
                </div>
              )}

              {animationStage >= 3 && !isCompleted && (
                <div className="mt-8 bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">Progress</span>
                      <span className="text-sm font-bold text-brand-primary">
                        {progressPercentage.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-brand-primary to-brand-primary-hover h-full rounded-full transition-all duration-100"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    {progressStages.map((stage) => (
                      <div
                        key={stage.id}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 transition-all duration-500 ${
                          currentStage > stage.id
                            ? "bg-green-50 border-green-200"
                            : currentStage === stage.id
                            ? "bg-blue-50 border-blue-200"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div
                          className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            currentStage > stage.id
                              ? "bg-green-500 text-white"
                              : currentStage === stage.id
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

            </div>
          </div>

          {isCompleted && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {visibleCards.map((business, index) => (
                    <div
                      key={business.name}
                      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl"
                      style={{
                        animation: `card-appear 0.5s ease-out ${index * 0.3}s both`,
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
                      </div>
                    </div>
                  ))}
            </div>
          )}

          {isCompleted && (
            <div
              className={`mt-12 text-center transition-all duration-500 delay-1000 ${
                animationStage >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white rounded-full px-8 py-4 shadow-xl">
                <Shield className="w-5 h-5" />
                <span className="text-lg font-bold">Comprehensive, AI-verified results ready</span>
                <span className="text-sm opacity-90">Quality above everything else</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

