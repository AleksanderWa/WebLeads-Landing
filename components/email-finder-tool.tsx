'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Loader2, 
  Mail, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  ExternalLink,
  Building2,
  Share2
} from 'lucide-react';
import { findEmailsAndSocials } from '@/app/actions/find-email';
import { cn } from '@/lib/utils';

interface ResultData {
  success: boolean;
  website: string;
  emails: string[];
  social_links: string[];
  message?: string;
  error?: string;
}

export function EmailFinderTool() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('website', url);
      const response = await findEmailsAndSocials(formData);

      if ('error' in response && response.error) {
        setError(response.error);
      } else {
        setResult(response as ResultData);
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(text);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 space-y-8">
      {/* Search Section */}
      <Card className="border-2 border-brand-primary/10 shadow-xl bg-white/95 backdrop-blur-sm overflow-hidden">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow group">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-primary transition-colors" />
                <Input
                  type="text"
                  placeholder="Enter company website (e.g., example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 text-lg border-gray-200 bg-gray-50/50 focus:bg-white focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/10 rounded-xl transition-all"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="h-14 px-8 bg-brand-primary hover:bg-brand-primary-hover text-white text-lg font-semibold whitespace-nowrap rounded-xl shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:shadow-brand-primary/30 transition-all hover:-translate-y-0.5"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    Find Emails
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-2">
              <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
              <p className="font-medium">{error}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Section */}
      {result && (
        <div className="relative animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Decorative background for separation */}
          <div className="absolute -inset-4 bg-gray-100/50 rounded-[2rem] -z-10 backdrop-blur-sm" />
          
          <div className="space-y-6 p-2">
            {/* Status Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-brand-primary/10 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{result.website || url}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Website scanned</span>
                  </div>
                </div>
              </div>
              
              {result.success ? (
                <Badge variant="success" size="lg" className="px-4 py-1.5 text-sm bg-emerald-500 hover:bg-emerald-600 shadow-sm">
                  <CheckCircle2 className="h-4 w-4 mr-1.5" />
                  Analysis Complete
                </Badge>
              ) : (
                <Badge variant="warning" size="lg" className="px-4 py-1.5 text-sm">
                  <AlertCircle className="h-4 w-4 mr-1.5" />
                  {result.message || "No results found"}
                </Badge>
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Emails Column */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between px-2">
                  <h3 className="text-lg font-bold text-brand-secondary flex items-center gap-2">
                    <Mail className="h-5 w-5 text-brand-primary" />
                    Verified Emails
                    <Badge variant="secondary" className="ml-2 bg-white shadow-sm text-gray-600 hover:bg-gray-50">
                      {result.emails?.length || 0}
                    </Badge>
                  </h3>
                </div>

                {result.emails && result.emails.length > 0 ? (
                  <div className="grid gap-3">
                    {result.emails.map((email, index) => (
                      <div 
                        key={index}
                        className="group relative bg-white p-5 rounded-xl border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-brand-primary/20 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-4 overflow-hidden">
                            <div className="h-10 w-10 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary/10 transition-colors">
                              <Mail className="h-5 w-5 text-brand-primary" />
                            </div>
                            <div className="flex flex-col min-w-0">
                              <span className="font-bold text-gray-900 truncate text-base tracking-tight">{email}</span>
                              <span className="text-xs text-emerald-600 font-medium flex items-center gap-1 bg-emerald-50 w-fit px-2 py-0.5 rounded-full mt-1">
                                <CheckCircle2 className="h-3 w-3" />
                                Verified Pattern
                              </span>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(email)}
                            className="h-10 w-10 text-gray-400 hover:text-brand-primary hover:bg-brand-primary/5 rounded-xl transition-all"
                            title="Copy email"
                          >
                            {copiedEmail === email ? (
                              <Check className="h-5 w-5 text-emerald-500" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-2xl p-8 text-center border-2 border-gray-100 border-dashed">
                    <Mail className="h-12 w-12 mx-auto mb-3 text-gray-300" />
                    <p className="text-gray-500 font-medium">No email addresses found</p>
                    <p className="text-sm text-gray-400 mt-1">Try scanning another page or domain</p>
                  </div>
                )}
              </div>

              {/* Socials Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-secondary flex items-center gap-2 px-2">
                  <Share2 className="h-5 w-5 text-brand-accent" />
                  Social Profiles
                </h3>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-200/60 p-3">
                  {result.social_links && result.social_links.length > 0 ? (
                    <div className="space-y-2">
                      {result.social_links.map((link, index) => (
                        <a
                          key={index}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-100"
                        >
                          <div className="h-8 w-8 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all">
                            <Globe className="h-4 w-4 text-gray-500 group-hover:text-brand-primary" />
                          </div>
                          <div className="flex-grow min-w-0">
                            <div className="text-sm font-bold text-gray-700 group-hover:text-brand-primary truncate transition-colors">
                              {new URL(link).hostname.replace('www.', '')}
                            </div>
                            <div className="text-xs text-gray-400 truncate opacity-70 group-hover:opacity-100">
                              {link}
                            </div>
                          </div>
                          <ExternalLink className="h-3 w-3 text-gray-300 group-hover:text-brand-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center">
                      <p className="text-sm text-gray-400">No social profiles detected</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
