import { PenLine } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { siteIdentity } from '@/config/site.identity'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  const domain = siteIdentity.domain
  const editorialEmail = `editor@${domain}`

  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-16 sm:py-20">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#4e16bc]">Media desk</p>
            <h1 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#141a2a] sm:text-5xl lg:text-6xl">Contact</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#465065] sm:text-lg">
              Pitch a guest post, request a correction, or ask about syndication. We route every message to the right editor quickly.
            </p>
         
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
