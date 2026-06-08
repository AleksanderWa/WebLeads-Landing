'use server'

interface VerifyEmailResponse {
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

export async function verifyEmailTool(
  email: string,
  turnstileToken: string,
): Promise<VerifyEmailResponse | { error: string }> {
  if (!email || typeof email !== 'string') {
    return { error: 'Please provide a valid email address' }
  }

  if (!turnstileToken) {
    return { error: 'Security check failed. Please refresh and try again.' }
  }

  try {
    const response = await fetch('https://app.webleads.site/api/public/verify_email_tool', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        turnstile_token: turnstileToken,
      }),
    })

    if (response.status === 429) {
      return { error: "You've used all 3 free verifications for today. Come back tomorrow or upgrade to verify more." }
    }

    if (response.status === 403) {
      return { error: 'Security check failed. Please refresh the page and try again.' }
    }

    if (!response.ok) {
      const data = await response.json().catch(() => ({}))
      return { error: data.detail || 'Verification failed. Please try again.' }
    }

    return await response.json()
  } catch (error) {
    console.error('Error verifying email:', error)
    return { error: 'Failed to connect. Please try again later.' }
  }
}
