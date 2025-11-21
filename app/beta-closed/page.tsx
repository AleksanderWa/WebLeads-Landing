"use client";

import { useState, type FormEvent } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send, Zap, Clock, Rocket, CheckCircle2, Calendar, Users, Search, Building2, TrendingUp } from "lucide-react";

export default function BetaClosedPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);
    
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
        let errorDetail = 'Failed to submit form';
        try {
          const errorData = await response.json();
          if (errorData.detail) {
            errorDetail = errorData.detail;
          }
        } catch (parseError) {
          console.error('Failed to parse error response:', parseError);
        }
        
        throw new Error(errorDetail);
      }
      
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
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="flex flex-col items-center justify-center min-h-[85vh] px-4 text-center bg-gradient-to-b from-white to-brand-light py-16 pt-32">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Rocket className="w-4 h-4" />
              Beta Program Closed
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-primary leading-tight tracking-tight">
              <span className="block mb-3">Beta is Now Closed</span>
              <span className="block text-4xl md:text-6xl text-brand-secondary font-semibold">
                We're Launching Soon!
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary mt-2 tracking-tight drop-shadow-sm">
              &gt;&gt; 1st December 2025 &lt;&lt;
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thank you to everyone who participated in our beta program. We're working hard to bring you an even better experience.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-brand-primary/10 space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-primary">
                What's Coming:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-5 mt-8">
                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-brand-secondary mb-1">
                      Massive Performance Boost
                    </h3>
                    <p className="text-sm text-gray-600">
                      Overall speed performance will be significantly increased across all operations.
                    </p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-brand-secondary mb-1">
                      Faster Results
                    </h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold text-brand-primary">10-15 X Faster searches</span> for big cities like New York will be the new standard.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-brand-secondary mb-1">
                      Improved Data Quality and Accuracy
                    </h3>
                    <p className="text-sm text-gray-600">
                      We added and improved internal mechanism that are helping us collecting more accurate data.
                    </p>
                  </div>
                </div>
                
                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-white to-brand-light/30 rounded-xl border border-brand-primary/10 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-primary-hover rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-brand-secondary mb-1">
                      Schedule multiple searches at once
                    </h3>
                    <p className="text-sm text-gray-600">
                      Don't wait for one search to complete, schedule multiple searches at once.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-brand-secondary mb-2">
                What Our Beta Community Achieved
              </h3>
              <p className="text-gray-600">Real results from our beta testers</p>
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
                  <div className="text-2xl font-bold text-brand-primary">600+</div>
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

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-brand-primary/10">
            <div className="max-w-md mx-auto">
              <h3 className="text-xl font-bold text-brand-secondary mb-4">
                Be the First to Know
              </h3>
                <p className="text-gray-600 mb-6">
                  Join our waitlist to get notified when we launch.
                </p>
                
                {isSubmittedSuccessfully ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <div className="flex flex-col items-center gap-3">
                      <CheckCircle2 className="w-12 h-12 text-green-600" />
                      <p className="text-lg font-bold text-green-800">
                        Thank you for joining!
                      </p>
                      <p className="text-green-700">
                        We'll notify you as soon as we launch.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="your.email@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-5 py-6 text-lg border-2 border-gray-200 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 rounded-xl"
                    />
                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 p-4 rounded-xl">
                        <p className="text-sm text-red-700 font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white text-lg py-6 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Notify Me When We Launch
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

          <div className="text-center text-gray-600">
            <p className="text-lg">
              Questions? Reach out to us at{" "}
              <a href="mailto:support@webleads.site" className="text-brand-primary hover:underline font-medium">
                support@webleads.site
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

