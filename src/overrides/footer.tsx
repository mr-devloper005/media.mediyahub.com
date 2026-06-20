import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="bg-[#4e16bc] text-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-2xl font-bold">About Us</h3>
          <p className="mt-3 text-sm leading-relaxed text-white/90">
            {SITE_CONFIG.name} connects brands with premium global media through strategic distribution, targeted outreach, and measurable reporting.
          </p>
          <p className="mt-4 text-lg font-semibold"></p>
          <div className="mt-2 flex gap-2 text-sm">
            {/* <span className="rounded-full bg-white/20 px-3 py-1"></span> */}
            {/* <span className="rounded-full bg-white/20 px-3 py-1"></span> */}
            {/* <span className="rounded-full bg-white/20 px-3 py-1"></span> */}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About Us</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/help" className="hover:underline">Help</Link></li>
            <li><Link href="/terms" className="hover:underline">Terms</Link></li>
            <li><Link href="/privacy" className="hover:underline">Privacy</Link></li>
          </ul>
        </div>

        {/* <div>
          <h3 className="text-2xl font-bold">Contact Us</h3>
          <ul className="mt-3 space-y-3 text-sm">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div> */}
      </div>
      <div className="border-t border-white/20 py-3 text-center text-sm">© {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</div>
    </footer>
  )
}
