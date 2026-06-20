import Link from 'next/link'
import { CheckCircle2, Globe2, LineChart, Megaphone } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const pillars = [
  {
    title: 'Editorial Quality',
    body: 'Every release is refined for clarity, tone, and news value before distribution.',
    icon: Megaphone,
  },
  {
    title: 'Global Reach',
    body: 'We position stories across trusted media networks to maximize relevant visibility.',
    icon: Globe2,
  },
  {
    title: 'Measured Outcomes',
    body: 'Campaign reports include placement proof and performance-focused visibility insights.',
    icon: LineChart,
  },
]

const checklist = [
  'Distribution strategy tailored by market and campaign intent',
  'Press-ready copy that balances readability and authority',
  'Transparent reporting with live publication links',
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#4e16bc]">About {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#141a2a] sm:text-5xl lg:text-6xl">
              We turn announcements into trusted media visibility.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#465065] sm:text-lg">
              {SITE_CONFIG.name} helps brands build authority through strategic press release distribution,
              editorial refinement, and transparent campaign reporting.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[#4e16bc] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1]">
                Contact Us
              </Link>
              <Link href="/media-distribution" className="inline-flex items-center rounded-full border border-[#d7dceb] bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#2d3447] hover:bg-[#f2efff]">
                Explore Distribution
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[#d7dceb] bg-white p-6 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
                <item.icon className="h-6 w-6 text-[#4e16bc]" />
                <h2 className="mt-4 text-xl font-bold text-[#1e2638]">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5266]">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#d7dceb] bg-white p-7 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2638]">Why teams choose us</h3>
            <div className="mt-5 space-y-3">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-[#4a5266]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#4e16bc]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

