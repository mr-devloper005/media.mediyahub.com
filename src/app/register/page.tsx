'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await signup(name, email, password)
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-[2rem] border border-[#d7dceb] bg-white p-8 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
            <h1 className="mt-1 text-4xl font-semibold tracking-[-0.03em] text-[#1d2435]">Create your Media Hub account</h1>
            <p className="mt-5 text-sm leading-8 text-[#4d5569]">
              Start publishing campaigns with global-ready distribution, transparent reporting, and high-authority visibility.
            </p>
            <div className="mt-8 grid gap-4">
              {['Simple onboarding', 'Campaign-ready profile', 'Consistent publishing workspace'].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-[#e1e5f1] bg-[#f6f7fc] px-4 py-4 text-sm text-[#2e3648]">{item}</div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7dceb] bg-white p-8 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#64708a]">Create account</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input
                className="h-12 rounded-xl border border-[#d6dcee] bg-[#f6f7fc] px-4 text-sm text-[#1a2030]"
                placeholder="Full name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
              <input
                className="h-12 rounded-xl border border-[#d6dcee] bg-[#f6f7fc] px-4 text-sm text-[#1a2030]"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <input
                className="h-12 rounded-xl border border-[#d6dcee] bg-[#f6f7fc] px-4 text-sm text-[#1a2030]"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <input className="h-12 rounded-xl border border-[#d6dcee] bg-[#f6f7fc] px-4 text-sm text-[#1a2030]" placeholder="What are you publishing?" />
              <button type="submit" disabled={isLoading} className="inline-flex h-12 items-center justify-center rounded-full bg-[#4e16bc] px-6 text-sm font-semibold text-white hover:bg-[#3f11a1] disabled:cursor-not-allowed disabled:opacity-70">
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#5f6880]">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-[#4e16bc] hover:underline">
                <Sparkles className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

