"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Loader2, Send, Zap, Clock, Rocket, CheckCircle2, Calendar } from "lucide-react";

export default function BetaClosedPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
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
            
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary leading-tight">
              <span className="block mb-4">Beta is Now Closed</span>
              <span className="block text-3xl md:text-5xl text-brand-secondary opacity-90">
                We're Launching Soon! 🚀
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-brand-secondary leading-relaxed max-w-3xl mx-auto">
              Thank you to everyone who participated in our beta program. We're working hard to bring you an even better experience.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">
                What's Coming:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-brand-light/50 rounded-xl p-6 border border-brand-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-brand-secondary text-lg mb-2">
                        Massive Performance Boost
                      </h3>
                      <p className="text-brand-secondary/80">
                        Overall speed performance will be significantly increased across all operations.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-light/50 rounded-xl p-6 border border-brand-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-brand-secondary text-lg mb-2">
                        15x Faster Results
                      </h3>
                      <p className="text-brand-secondary/80">
                        <span className="font-semibold text-brand-primary">30-40 minutes</span> for big cities like New York will be the new standard.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-light/50 rounded-xl p-6 border border-brand-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-brand-secondary text-lg mb-2">
                        Improved Data Quality and Accuracy
                      </h3>
                      <p className="text-brand-secondary/80">
                        We added and improved internal mechanism that are helping us collecting more accurate data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-brand-light/50 rounded-xl p-6 border border-brand-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-bold text-brand-secondary text-lg mb-2">
                        Schedule multiple searches at once
                      </h3>
                      <p className="text-brand-secondary/80">
                        Don't wait for one search to complete, schedule multiple searches at once.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="bg-gradient-to-r from-brand-primary/5 via-brand-accent/10 to-brand-primary/5 rounded-xl p-6 border-2 border-brand-primary/20 mt-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                  <h3 className="text-xl font-bold text-brand-primary">
                    Enhanced User Experience
                  </h3>
                </div>
                <p className="text-brand-secondary text-lg">
                  We've listened to your feedback and are implementing improvements to make WebLeads faster, more reliable, and easier to use.
                </p>
              </div> */}
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="max-w-md mx-auto">
                <h3 className="text-xl font-bold text-brand-secondary mb-4">
                  Be the First to Know
                </h3>
                <p className="text-brand-secondary/80 mb-6">
                  Join our waitlist to get notified when we launch.
                </p>
                
                {isSubmittedSuccessfully ? (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
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
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-3 text-lg border-2 border-gray-300 focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/30 rounded-lg"
                    />
                    {errorMessage && (
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                        <p className="text-sm text-red-700 font-medium">
                          {errorMessage}
                        </p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-primary hover:bg-brand-primaryHover text-white text-lg py-6 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <>
                          Submitting...
                          <Loader2 className="ml-2 h-5 w-5 animate-spin" />
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
          </div>

          <div className="text-center text-brand-secondary/70">
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

