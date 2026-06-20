import Link from 'next/link'
import { FileText, Globe2, HelpCircle, LineChart, ShieldCheck } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const helpTopics = [
  {
    title: 'How Distribution Works',
    body: 'Submit your campaign brief and we align your release with relevant media channels and publication targets.',
    icon: Globe2,
  },
  {
    title: 'Content & Editorial',
    body: 'We refine release structure, messaging, and readability so your story is publication-ready.',
    icon: FileText,
  },
  {
    title: 'Reporting & Visibility',
    body: 'Track live placements, coverage proof, and campaign performance metrics in one clear workflow.',
    icon: LineChart,
  },
]

const faqs = [
  {
    q: 'How long does publishing usually take?',
    a: 'Most campaigns begin publishing within 24 to 72 hours depending on editorial scope and target channels.',
  },
  {
    q: 'Can I request industry-specific targeting?',
    a: 'Yes. We can target distribution by industry, region, and audience intent for stronger relevance.',
  },
  {
    q: 'Will I receive live publication links?',
    a: 'Yes. Campaign reporting includes publication proof links and visibility tracking details.',
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-16 sm:py-20">
          <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#4e16bc]">Help Center</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#141a2a] sm:text-5xl lg:text-6xl">
              Everything you need to run better PR campaigns.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#465065] sm:text-lg">
              Learn how writing, distribution, publication, and reporting work on this platform.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center rounded-full bg-[#4e16bc] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1]">
              Contact Support
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {helpTopics.map((topic) => (
              <article key={topic.title} className="rounded-[1.5rem] border border-[#d7dceb] bg-white p-6 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
                <topic.icon className="h-6 w-6 text-[#4e16bc]" />
                <h2 className="mt-4 text-xl font-bold text-[#1e2638]">{topic.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4a5266]">{topic.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#d7dceb] bg-white p-7 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
            <h3 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-[#1e2638]">
              <HelpCircle className="h-6 w-6 text-[#4e16bc]" />
              Frequently Asked Questions
            </h3>
            <div className="mt-5 space-y-4">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-xl border border-[#e1e5f1] bg-[#f6f7fc] p-4">
                  <p className="font-semibold text-[#20283a]">{item.q}</p>
                  <p className="mt-2 text-sm text-[#4a5266]">{item.a}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-2 text-sm text-[#4a5266]">
              <ShieldCheck className="mt-0.5 h-4 w-4 text-[#4e16bc]" />
              <span>Need account-specific help? Share your campaign context via the contact page and we will route it to the right desk.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

