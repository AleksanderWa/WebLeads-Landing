'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { verifyEmailTool } from '@/app/actions/verify-email'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Mail,
  Server,
  Globe,
  RefreshCw,
} from 'lucide-react'

declare global {
  interface Window {
    turnstile: {
      render: (container: string | HTMLElement, options: Record<string, unknown>) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
      getResponse: (widgetId: string) => string | undefined
    }
    onTurnstileLoad?: () => void
  }
}

type VerifyResult = {
  status: 'valid' | 'invalid' | 'catch_all' | 'unknown'
  email: string
  is_catch_all: boolean
  format_valid: boolean
  mx_exists: boolean
  smtp_deliverable: boolean | null
  mx_host: string | null
  message: string
  cached: boolean
  checks_remaining: number
}

const TURNSTILE_SITE_KEY = '0x4AAAAAACCpbTwQoo-lNtsc'

export function EmailVerifierTool() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<VerifyResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [turnstileReady, setTurnstileReady] = useState(false)
  const [checksRemaining, setChecksRemaining] = useState<number | null>(null)

  const turnstileContainerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const tokenRef = useRef<string | null>(null)

  const initTurnstile = useCallback(() => {
    if (!turnstileContainerRef.current || !window.turnstile) return
    if (widgetIdRef.current) {
      try { window.turnstile.remove(widgetIdRef.current) } catch {}
      widgetIdRef.current = null
    }
    widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      theme: 'light',
      size: 'invisible',
      callback: (token: string) => {
        tokenRef.current = token
        setTurnstileReady(true)
      },
      'expired-callback': () => {
        tokenRef.current = null
        setTurnstileReady(false)
      },
      'error-callback': () => {
        tokenRef.current = null
        setTurnstileReady(false)
      },
    })
  }, [])

  useEffect(() => {
    if (window.turnstile) {
      initTurnstile()
      return
    }
    window.onTurnstileLoad = () => {
      initTurnstile()
    }
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad'
    script.async = true
    script.defer = true
    document.head.appendChild(script)
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try { window.turnstile.remove(widgetIdRef.current) } catch {}
      }
    }
  }, [initTurnstile])

  const resetTurnstile = () => {
    tokenRef.current = null
    setTurnstileReady(false)
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current)
      } catch {
        initTurnstile()
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    const token = tokenRef.current
    if (!token) {
      setError('Security check not completed. Please wait a moment and try again.')
      return
    }

    setLoading(true)
    setError(null)
    setResult(null)

    const response = await verifyEmailTool(email.trim(), token)

    if ('error' in response) {
      setError(response.error)
    } else {
      setResult(response)
      setChecksRemaining(response.checks_remaining)
    }

    setLoading(false)
    resetTurnstile()
  }

  const handleReset = () => {
    setResult(null)
    setError(null)
    setEmail('')
    resetTurnstile()
  }

  const statusConfig = result
    ? {
        valid: {
          icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
          label: 'Valid & Deliverable',
          color: 'green',
          bg: 'bg-green-50 border-green-200',
          text: 'text-green-700',
          badge: 'bg-green-100 text-green-700',
        },
        catch_all: {
          icon: <AlertCircle className="h-8 w-8 text-yellow-500" />,
          label: 'Catch-All Domain',
          color: 'yellow',
          bg: 'bg-yellow-50 border-yellow-200',
          text: 'text-yellow-700',
          badge: 'bg-yellow-100 text-yellow-700',
        },
        invalid: {
          icon: <XCircle className="h-8 w-8 text-red-500" />,
          label: 'Invalid',
          color: 'red',
          bg: 'bg-red-50 border-red-200',
          text: 'text-red-700',
          badge: 'bg-red-100 text-red-700',
        },
        unknown: {
          icon: <AlertCircle className="h-8 w-8 text-gray-400" />,
          label: 'Unknown',
          color: 'gray',
          bg: 'bg-gray-50 border-gray-200',
          text: 'text-gray-600',
          badge: 'bg-gray-100 text-gray-600',
        },
      }[result.status]
    : null

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Turnstile invisible widget */}
      <div ref={turnstileContainerRef} className="hidden" />

      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                placeholder="Enter email address to verify..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 h-12 text-base border-gray-200 focus:border-brand-primary focus:ring-brand-primary/20 rounded-xl"
                disabled={loading}
                required
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !email.trim()}
              className="h-12 px-6 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-xl shadow-md font-semibold text-base transition-all whitespace-nowrap"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Verifying...
                </>
              ) : (
                <>
                  <ShieldCheck className="h-4 w-4 mr-2" />
                  Verify Email
                </>
              )}
            </Button>
          </div>

          {error && (
            <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
              <XCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <p className="text-xs text-gray-400 text-center">
            3 free verifications per day · No account required · Protected by Cloudflare
          </p>

          {checksRemaining !== null && (
            <p className="text-xs text-center text-gray-500">
              {checksRemaining} free verification{checksRemaining !== 1 ? 's' : ''} remaining today
            </p>
          )}
        </form>
      ) : (
        <div className="space-y-4">
          {/* Status banner */}
          <div className={`flex items-center gap-4 p-5 rounded-xl border-2 ${statusConfig!.bg}`}>
            {statusConfig!.icon}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`font-bold text-lg ${statusConfig!.text}`}>
                  {statusConfig!.label}
                </span>
                {result.cached && (
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    cached result
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">{result.email}</p>
            </div>
          </div>

          {/* Check breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <CheckRow
              icon={<Mail className="h-4 w-4" />}
              label="Format"
              pass={result.format_valid}
              passText="Valid format"
              failText="Invalid format"
            />
            <CheckRow
              icon={<Globe className="h-4 w-4" />}
              label="MX Records"
              pass={result.mx_exists}
              passText={result.mx_host ? result.mx_host.split('.').slice(-2).join('.') : 'Records found'}
              failText="No MX records"
            />
            <CheckRow
              icon={<Server className="h-4 w-4" />}
              label="SMTP"
              pass={result.smtp_deliverable === true}
              unknown={result.smtp_deliverable === null}
              passText={result.is_catch_all ? 'Catch-all server' : 'Deliverable'}
              failText="Not deliverable"
              unknownText="Could not verify"
            />
          </div>

          {/* Message */}
          <div className="p-3 bg-gray-50 rounded-xl text-sm text-gray-600 border border-gray-100">
            {result.message}
          </div>

          {/* Remaining + actions */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <p className="text-xs text-gray-400">
              {result.checks_remaining} free verification{result.checks_remaining !== 1 ? 's' : ''} remaining today
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                className="rounded-lg border-gray-200 text-gray-600 hover:text-brand-primary hover:border-brand-primary"
              >
                <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                Verify another
              </Button>
              <Button
                size="sm"
                asChild
                className="rounded-lg bg-brand-primary hover:bg-brand-primary-hover text-white"
              >
                <a href="https://app.webleads.site/login" target="_blank" rel="noopener noreferrer">
                  Verify 3,000/mo free →
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function CheckRow({
  icon,
  label,
  pass,
  unknown = false,
  passText,
  failText,
  unknownText = 'Unknown',
}: {
  icon: React.ReactNode
  label: string
  pass: boolean
  unknown?: boolean
  passText: string
  failText: string
  unknownText?: string
}) {
  return (
    <div className="flex items-center gap-3 p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
      <div
        className={`p-1.5 rounded-lg shrink-0 ${
          unknown
            ? 'bg-gray-100 text-gray-400'
            : pass
            ? 'bg-green-100 text-green-600'
            : 'bg-red-100 text-red-500'
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</div>
        <div
          className={`text-sm font-medium truncate ${
            unknown ? 'text-gray-400' : pass ? 'text-green-700' : 'text-red-600'
          }`}
        >
          {unknown ? unknownText : pass ? passText : failText}
        </div>
      </div>
      <div className="ml-auto shrink-0">
        {unknown ? (
          <AlertCircle className="h-4 w-4 text-gray-300" />
        ) : pass ? (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        ) : (
          <XCircle className="h-4 w-4 text-red-400" />
        )}
      </div>
    </div>
  )
}
