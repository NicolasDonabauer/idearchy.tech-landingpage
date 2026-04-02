'use client'

import { useState, type FormEvent } from 'react'
import { createClient } from '@/utils/supabase/client'
import { sendWaitlistEmail } from '@/actions/sendEmail'

export default function WaitlistForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const supabase = createClient()

    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ name: name.trim(), email: email.trim().toLowerCase() }])

    if (dbError) {
      if (dbError.code === '23505') {
        setError("You're already on the waitlist. We'll be in touch soon.")
      } else {
        setError('Something went wrong. Please try again.')
        console.error('[Supabase] Insert error:', dbError)
      }
      setLoading(false)
      return
    }

    // Non-blocking — email failure doesn't block success UX
    sendWaitlistEmail({ name: name.trim(), email: email.trim().toLowerCase() }).catch(
      (err) => console.error('[Email] Send failed (non-blocking):', err)
    )

    setSuccess(true)
    setLoading(false)
  }

  if (success) {
    return (
      <div className="text-center py-8 animate-fade-up">
        <div
          className="w-14 h-14 mx-auto mb-6 flex items-center justify-center"
          style={{ background: '#ff3300' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fafafa"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3
          className="font-archivo text-2xl font-black tracking-tight mb-3"
          style={{ color: '#0a0a0a' }}
        >
          You&apos;re on the list.
        </h3>
        <p className="font-nunito text-base" style={{ color: '#666' }}>
          Check your inbox — we&apos;ve sent a confirmation.<br />
          We&apos;ll reach out as soon as your spot opens.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      <div>
        <label
          htmlFor="waitlist-name"
          className="block font-nunito text-xs font-700 uppercase tracking-widest mb-2"
          style={{ color: '#666' }}
        >
          Name
        </label>
        <input
          id="waitlist-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full px-4 py-3.5 font-nunito text-base outline-none border transition-colors duration-200"
          style={{
            background: '#fafafa',
            borderColor: '#ddd',
            color: '#0a0a0a',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#ff3300')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
          disabled={loading}
        />
      </div>

      <div>
        <label
          htmlFor="waitlist-email"
          className="block font-nunito text-xs font-700 uppercase tracking-widest mb-2"
          style={{ color: '#666' }}
        >
          Email
        </label>
        <input
          id="waitlist-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full px-4 py-3.5 font-nunito text-base outline-none border transition-colors duration-200"
          style={{
            background: '#fafafa',
            borderColor: '#ddd',
            color: '#0a0a0a',
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#ff3300')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#ddd')}
          disabled={loading}
        />
      </div>

      {error && (
        <div
          className="flex items-start gap-3 px-4 py-3 text-sm font-nunito animate-fade-up"
          style={{ background: 'rgba(255,51,0,0.08)', borderLeft: '3px solid #ff3300', color: '#0a0a0a' }}
        >
          <span className="mt-0.5 flex-shrink-0 accent-square" style={{ width: '8px', height: '8px' }} />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 font-archivo font-black text-sm tracking-widest uppercase transition-opacity duration-200 disabled:opacity-50"
        style={{ background: '#ff3300', color: '#fafafa' }}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-3">
            <svg
              className="animate-spin-slow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Joining...
          </span>
        ) : (
          'GET EARLY ACCESS →'
        )}
      </button>

      <p className="text-center font-nunito text-xs" style={{ color: '#999' }}>
        No spam. No credit card. Just early access.
      </p>
    </form>
  )
}
