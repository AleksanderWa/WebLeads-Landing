"use client";

import { useState, useEffect } from "react";
import { Search, Star, Phone, Mail, MapPin, Clock, Zap, CheckCircle2, Globe, Share2 } from "lucide-react";
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
  social?: string[];
}

const sampleBusinesses: BusinessCard[] = [
  {
    name: "Milano Hair Studio",
    rating: 4.8,
    reviewCount: 127,
    phone: "(416) 555-0123",
    email: "info@milanohair.com",
    address: "123 Queen St, Toronto",
  },
  {
    name: "Bella Beauty Salon",
    rating: 4.9,
    reviewCount: 89,
    email: "sarah@bellasalon.com",
    phone: "(416) 555-0456",
    decisionMaker: "Sarah Chen, Owner",
  },
  {
    name: "Urban Cuts",
    rating: 4.7,
    reviewCount: 203,
    phone: "(416) 555-0789",
    social: ["Instagram", "Facebook"],
  },
  {
    name: "Style House",
    rating: 4.6,
    reviewCount: 156,
    email: "contact@stylehouse.ca",
    decisionMaker: "Maria Chen, Manager",
  },
  {
    name: "The Hair Lab",
    rating: 4.8,
    reviewCount: 92,
    phone: "(416) 555-0321",
    seoScore: 62,
  },
  {
    name: "Salon Rouge",
    rating: 4.9,
    reviewCount: 134,
    email: "hello@salonrouge.com",
    social: ["Instagram", "Facebook"],
  },
];

export function ProductDemo() {
  const [animationStage, setAnimationStage] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("product-demo");
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
    timers.push(setTimeout(() => setAnimationStage(4), 3000));
    timers.push(setTimeout(() => setAnimationStage(5), 3500));

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
      setElapsedTime((prev) => {
        if (prev < 2.3) {
          return prev + 0.1;
        }
        clearInterval(timerInterval);
        return 2.3;
      });
    }, 100);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(typingInterval);
      clearInterval(timerInterval);
    };
  }, [isVisible]);

  const visibleCards = animationStage >= 5 ? sampleBusinesses : [];

  return (
    <section id="product-demo" className="relative py-24 px-4 bg-gradient-to-b from-white to-brand-light/20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl animate-float-blob-1" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-brand-accent/8 rounded-full blur-3xl animate-float-blob-2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Watch how quickly you can find and enrich business leads
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
                    className={`bg-brand-primary hover:bg-brand-primary-hover text-white px-8 py-6 rounded-xl transition-all ${
                      animationStage >= 3 ? "animate-pulse-glow" : ""
                    }`}
                    disabled={animationStage < 3}
                  >
                    {animationStage < 3 ? (
                      "Search"
                    ) : animationStage === 3 ? (
                      <>
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Searching...
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                        Found
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {animationStage >= 4 && (
                <div
                  className={`mt-6 text-center transition-all duration-500 ${
                    animationStage >= 4 ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <div className="inline-flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-full px-6 py-3 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-lg font-bold text-green-700">
                      {totalBusinesses.toLocaleString()} businesses found
                    </span>
                    <div className="flex items-center gap-2 text-brand-primary font-semibold">
                      <Clock className="w-4 h-4" />
                      <span>{elapsedTime.toFixed(1)}s</span>
                    </div>
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
                  animationStage >= 5 ? "" : "opacity-0"
                }`}
                style={{
                  animation: animationStage >= 5 ? `card-appear 0.5s ease-out ${index * 0.3}s both` : undefined,
                }}
              >
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
                    <div className="flex items-center gap-2 text-sm text-brand-primary font-medium mt-2">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{business.decisionMaker}</span>
                    </div>
                  )}

                  {business.seoScore && (
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                      <Globe className="w-4 h-4 text-brand-primary" />
                      <span>SEO Score: {business.seoScore}/100</span>
                    </div>
                  )}

                  {business.social && business.social.length > 0 && (
                    <div className="flex items-center gap-2 mt-2">
                      <Share2 className="w-4 h-4 text-brand-primary" />
                      <span className="text-xs text-gray-600">
                        {business.social.join(", ")} profiles available
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {animationStage >= 5 && (
            <div
              className={`mt-12 text-center transition-all duration-500 delay-1000 ${
                animationStage >= 5 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-primary to-brand-primary-hover text-white rounded-full px-8 py-4 shadow-xl">
                <Zap className="w-5 h-5" />
                <span className="text-lg font-bold">Found in under 3 seconds</span>
                <span className="text-sm opacity-90">100x faster than manual research</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

