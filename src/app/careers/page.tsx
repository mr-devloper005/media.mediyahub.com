import Link from 'next/link'
import { BriefcaseBusiness, Mail, UserRoundSearch } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

const futureRoles = [
  'Editorial operations',
  'Media outreach and partnerships',
  'Campaign strategy and reporting',
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#4e16bc]">Careers at {SITE_CONFIG.name}</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#141a2a] sm:text-5xl lg:text-6xl">
              We are not hiring right now.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#465065] sm:text-lg">
              We are currently not hiring for active roles. You can still share your profile and details,
              and our team will review future-fit candidates as openings become available.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center rounded-full bg-[#4e16bc] px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1]">
                Send Details via Contact Page
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.5rem] border border-[#d7dceb] bg-white p-7 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
              <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-[#1e2638]">
                <UserRoundSearch className="h-6 w-6 text-[#4e16bc]" />
                How to share your profile
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-[#4a5266]">
                <li>Include your full name, preferred role, and relevant experience.</li>
                <li>Add your portfolio, LinkedIn, or work samples where possible.</li>
                <li>Mention location, availability, and any domain specialization.</li>
              </ul>
            </article>

            <article className="rounded-[1.5rem] border border-[#d7dceb] bg-white p-7 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
              <h2 className="flex items-center gap-2 text-2xl font-black uppercase tracking-tight text-[#1e2638]">
                <BriefcaseBusiness className="h-6 w-6 text-[#4e16bc]" />
                Roles we may open next
              </h2>
              <div className="mt-5 grid gap-3">
                {futureRoles.map((role) => (
                  <div key={role} className="rounded-xl border border-[#e1e5f1] bg-[#f6f7fc] px-4 py-3 text-sm text-[#2e3648]">
                    {role}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-[#4a5266]">
                We will reach out directly if your profile matches upcoming openings.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-[#d7dceb] bg-white p-6 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#4e16bc]">
              <Mail className="h-4 w-4" />
              Contact Channel
            </p>
            <p className="mt-2 text-sm text-[#4a5266]">
              Please send your details through the <Link href="/contact" className="font-semibold text-[#4e16bc] hover:underline">Contact page</Link> so our team can track and review your information properly.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

