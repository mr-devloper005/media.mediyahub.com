'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { useAuth } from '@/lib/auth-context'

export const NAVBAR_OVERRIDE_ENABLED = true

const primaryTask = SITE_CONFIG.tasks.find((t) => t.enabled) || SITE_CONFIG.tasks[0]

const navPills = [
  { label: 'Home', href: '/' },
  { label: 'Archive', href: primaryTask?.route || '/archive' },
  { label: 'Search', href: '/search?master=1' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { isAuthenticated, logout } = useAuth()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#dde1ec] bg-white/95 text-[#111827] backdrop-blur">
      <div className="bg-[#4e16bc] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-end px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span></span>
            <span className="hidden md:inline"></span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="text-4xl font-semibold tracking-[-0.03em] text-[#111]">
          Media Hub
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navPills.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors',
                  active ? 'bg-[#4e16bc] text-white' : 'text-[#3b4355] hover:bg-[#f0edff] hover:text-[#4e16bc]',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <>
              <Link
                href="/create/mediaDistribution"
                className="hidden rounded-full bg-[#4e16bc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#3f11a1] md:inline-flex"
              >
                Create Post
              </Link>
              <button
                type="button"
                onClick={logout}
                className="hidden rounded-full border border-[#d7dceb] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#2d3447] hover:bg-[#f2efff] md:inline-flex"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="hidden rounded-full border border-[#d7dceb] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#2d3447] hover:bg-[#f2efff] md:inline-flex"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="hidden rounded-full bg-[#4e16bc] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white hover:bg-[#3f11a1] md:inline-flex"
              >
                Sign Up
              </Link>
            </>
          )}
          <Link
            href="/search?master=1"
            className="hidden rounded-full border border-[#d7dceb] bg-white p-2.5 text-[#4b5366] hover:border-[#4e16bc]/50 hover:text-[#4e16bc] sm:inline-flex"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Link>
          <button
            type="button"
            className="inline-flex rounded-full border border-[#d7dceb] p-2 text-[#2d3447] md:hidden"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-[#e3e7f1] bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {isAuthenticated ? (
              <>
                <Link href="/create/mediaDistribution" className="rounded-xl px-3 py-3 text-sm font-semibold text-[#4e16bc] hover:bg-[#f2efff]" onClick={() => setOpen(false)}>
                  Create Post
                </Link>
                <button
                  type="button"
                  className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#1f2739] hover:bg-[#f2efff]"
                  onClick={() => {
                    logout()
                    setOpen(false)
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="rounded-xl px-3 py-3 text-sm font-semibold text-[#1f2739] hover:bg-[#f2efff]" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link href="/register" className="rounded-xl px-3 py-3 text-sm font-semibold text-[#4e16bc] hover:bg-[#f2efff]" onClick={() => setOpen(false)}>
                  Sign Up
                </Link>
              </>
            )}
            {navPills.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[#1f2739] hover:bg-[#f2efff]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}

