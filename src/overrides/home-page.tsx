import Link from 'next/link'
import Image from 'next/image'
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  Quote,
  ShieldCheck,
  Smartphone,
  Target,
  Users,
} from 'lucide-react'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { HomePostPanels } from '@/overrides/home-post-panels'

export const HOME_PAGE_OVERRIDE_ENABLED = true

const navItems = [
  { label: 'Press Release Distribution', href: '/media-distribution' },
  // { label: 'What We Offer', href: '/press' },
  { label: 'Contact Us', href: '/contact' },
]

const mediaLogos = [
  'Reuters',
  'AP News',
  'Bloomberg',
  'Business Insider',
  'Forbes',
  'Yahoo Finance',
  'USA Today',
  'The Guardian',
  'MarketWatch',
  'MSN',
  'Digital Journal',
  'Benzinga',
]

const whyChooseCards = [
  {
    title: 'Multi-Channel News Distribution',
    body: 'Distribute your press release across global, regional, and digital channels for broader visibility.',
    icon: Target,
  },
  {
    title: 'Direct Journalist Connect',
    body: 'Reach editors and reporters with distribution designed for relevance and stronger editorial response.',
    icon: Users,
  },
  {
    title: 'Nationwide Media Reach',
    body: 'Amplify your story across trusted international outlets while maintaining message consistency and credibility.',
    icon: Building2,
  },
]

const advantageCards = [
  {
    title: 'Increased Exposure',
    body: 'Your story reaches a wider audience through reputable media placements.',
  },
  {
    title: 'Improved SEO Authority',
    body: 'Backlinks from high-authority publications strengthen rankings and organic traffic.',
  },
  {
    title: 'Trust and Credibility',
    body: 'Coverage in respected outlets builds stronger confidence in your brand.',
  },
  {
    title: 'Industry Attention',
    body: 'Position your announcements where journalists, partners, and investors are active.',
  },
  {
    title: 'Cost-Effective Marketing',
    body: 'A single release can create compounding brand and search impact over time.',
  },
  {
    title: 'Targeted Messaging',
    body: 'Shape story angles by industry and audience intent for better conversion quality.',
  },
]

const industries = [
  'Business',
  'Technology',
  'Education',
  'Healthcare',
  'FMCG',
  'Finance',
  'Entertainment',
  'Crypto',
  'Travel',
  'Awards',
  'NGO',
  'Events',
]

const testimonials = [
  {
    name: 'Ava Richardson',
    text: 'The campaign helped us secure quality media mentions and increase qualified inbound leads.',
  },
  {
    name: 'Liam Carter',
    text: 'The team aligned with our goals and delivered placements that improved both visibility and trust.',
    featured: true,
  },
  {
    name: 'Sophia Nguyen',
    text: 'Fast turnaround, practical guidance, and measurable outcomes from publication to reporting.',
  },
]

function short(text?: string | null, max = 250) {
  const value = (text || '').trim()
  if (!value) {
    return 'At Media Mediyahub, we help businesses share stories through reliable, SEO-focused press release distribution across trusted global media.'
  }
  return value.length > max ? `${value.slice(0, max - 1).trimEnd()}...` : value
}

export async function HomePageOverride() {
  const posts = await fetchTaskPosts('mediaDistribution', 6, { fresh: true })
  const heroPost = posts[0]
  const postPanels = (
    await Promise.all(
      SITE_CONFIG.tasks
        .filter((task) => task.enabled)
        .map(async (task) => ({
          key: task.key,
          label: task.label,
          taskKey: task.key,
          posts: await fetchTaskPosts(task.key, 12, { fresh: true }),
        }))
    )
  ).filter((panel) => panel.posts.length > 0)

  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <header className="sticky top-0 z-50 border-b border-[#dddff0] bg-white/95 backdrop-blur">
        <div className="bg-[#4e16bc] text-white">
          <div className="mx-auto flex max-w-[1140px] items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
            <div className="hidden items-center gap-4 sm:flex">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="ml-auto flex items-center gap-4">
              {/* <span className="inline-flex items-center gap-1"><Phone className="h-3.5 w-3.5" /> </span> */}
              {/* <span className="hidden items-center gap-1 md:inline-flex"><Mail className="h-3.5 w-3.5" /> </span> */}
            </div>
          </div>
        </div>

        <div className="mx-auto flex h-16 max-w-[1140px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-4xl font-semibold tracking-[-0.03em] text-[#111]">
            Media Hub
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-[#13182a] xl:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="transition hover:text-[#4e16bc]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#0a0d16] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(6,10,17,0.88)_0%,rgba(6,10,17,0.74)_60%,rgba(6,10,17,0.9)_100%)]" />
          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16), transparent 35%), radial-gradient(circle at 85% 70%, rgba(78,22,188,0.5), transparent 40%)' }} />
          <div className="relative mx-auto max-w-[1140px] px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
            <h1 className="mx-auto max-w-5xl text-[clamp(2rem,4.6vw,4rem)] font-black leading-[1.05] tracking-[-0.03em]">
              Global PR Distribution Agency for Coverage in Top-Tier News Media
            </h1>
            <p className="mt-4 text-xl font-semibold">Maximize Your Exposure with Trusted PR Distribution</p>
            <p className="mx-auto mt-5 max-w-4xl text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-white/90">
              Get featured across premium news platforms, top-tier media outlets, and high-authority publications to build credibility, boost online presence, and reach a worldwide audience with impactful press release campaigns.
            </p>
            <Link href="/contact" className="mt-8 inline-flex rounded-md bg-white px-7 py-3 text-lg font-semibold text-[#111] transition hover:bg-[#ececf3]">
              Contact Us
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-[clamp(1.8rem,3.6vw,3rem)] font-black tracking-[-0.02em]">
            {SITE_CONFIG.name} - Your Comprehensive Platform for PR Submission and Distribution
          </h2>
          <div className="mx-auto mt-7 max-w-5xl space-y-5 text-center text-[clamp(1rem,1.45vw,1.18rem)] leading-relaxed text-[#2f3648]">
            <p>
              We help businesses improve media presence with transparent PR distribution and measurable outcomes.
              Our process combines editorial support, publication strategy, and reliable outreach to leading outlets.
            </p>
            <p>
              From product launches to company milestones, we position your story for maximum relevance so your
              message reaches both journalists and real audiences.
            </p>
          </div>
          <div className="mt-8 text-center">
            <Link href="/register" className="inline-flex rounded-md bg-[#4e16bc] px-7 py-3 text-lg font-semibold text-white hover:bg-[#5a22c8]">
              Get Featured Now
            </Link>
          </div>
        </section>

        <section className="border-y border-[#dde0ea] bg-[#f6f7fb] py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[clamp(1.8rem,3.6vw,3rem)] font-black">Guaranteed Coverage in Premium Global Publications</h2>
            <p className="mx-auto mt-4 max-w-5xl text-center text-[clamp(1rem,1.45vw,1.15rem)] leading-relaxed text-[#31394b]">
              We secure placements in recognized publications to increase visibility, support SEO, and build stronger brand trust.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {mediaLogos.map((logo) => (
                <div key={logo} className="rounded-md border border-[#d6dbe8] bg-white px-3 py-5 text-center text-sm font-bold text-[#1a2133]">
                  {logo}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/contact" className="inline-flex rounded-md bg-[#4e16bc] px-7 py-3 text-lg font-semibold text-white hover:bg-[#5a22c8]">
                Contact Us Now
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-[clamp(1.8rem,3.6vw,3rem)] font-black">Why Choose Media Mediyahub</h2>
          <p className="mx-auto mt-4 max-w-5xl text-center text-[clamp(1rem,1.4vw,1.12rem)] leading-relaxed text-[#333b4c]">
            Our services provide wide media reach and direct journalist access so your release creates real impact where it counts.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {whyChooseCards.map((card) => (
              <article key={card.title} className="rounded-md border border-[#d8ddea] bg-white p-6 shadow-[0_10px_22px_rgba(21,30,44,0.08)]">
                <card.icon className="h-8 w-8 text-[#4e16bc]" />
                <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[#384052]">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-4 py-8 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.8rem,3.6vw,3rem)] font-black">How We Help Brands Get Featured in News Publications & Magazines</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-md border border-[#d8ddea] bg-white p-3">
              <div className="relative aspect-[16/10] overflow-hidden rounded">
                <Image
                  src="/help.png"
                  alt="Media distribution strategy"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-4 text-[clamp(1rem,1.35vw,1.08rem)] leading-relaxed text-[#2e3648]">
              <p>
                We work with top newspapers, digital portals, and trade publications using strategy, storytelling, and strong media relationships.
              </p>
              <p>
                Our process goes beyond simple submission. We shape industry-relevant narratives, target the right editors, and support follow-through for better publication quality.
              </p>
              <p>
                This approach improves your chances of meaningful coverage instead of generic mentions, helping your brand build durable authority.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#080a11] py-14 text-white">
          <div className="absolute inset-0 opacity-25" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(78,22,188,0.65), transparent 35%)' }} />
          <div className="relative mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.8rem)] font-black">Why Choose Our Press Release Distribution Service</h2>
            <p className="mx-auto mt-3 max-w-4xl text-center text-[clamp(1rem,1.3vw,1.08rem)] text-white/80">
              Unlock key benefits that enhance visibility, media relations, and long-term brand credibility.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-md border border-white/10 bg-white p-3 text-black">
                <div className="relative aspect-[4/3] overflow-hidden rounded">
                  <Image
                    src="/why.png"
                    alt="Why choose our press release distribution service"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Create Media Impact</h3>
                <ul className="mt-4 space-y-3 text-base text-white/90">
                  <li>Coverage in leading global business and news publications.</li>
                  <li>Presence on top online news portals across multiple regions.</li>
                  <li>Support for both digital and traditional press formats.</li>
                </ul>
                <div className="mt-6 rounded-md bg-white p-5 text-base leading-relaxed text-[#2f3748]">
                  We ensure your press release is disseminated across channels that matter most to your target audience.
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['7+', 'Years of experience'],
                ['100+', 'Happy clients'],
                ['200+', 'Publications'],
                ['100+', 'Magazine'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-md border border-white/10 bg-white/5 px-4 py-5 text-center">
                  <p className="text-5xl font-black">{value}</p>
                  <p className="mt-1 text-sm text-white/75">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#dde2ea] bg-[#f6f7fb] py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.8rem)] font-black">Why Press Release Distribution Is a Game-Changer for Your Brand</h2>
            <p className="mx-auto mt-4 max-w-5xl text-center text-[clamp(1rem,1.35vw,1.08rem)] leading-relaxed text-[#323a4a]">
              Press release distribution helps build trust, improve rankings, attract industry attention, and keep your brand story visible in competitive markets.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {advantageCards.map((card) => (
                <article key={card.title} className="rounded-md border border-[#d7dbe7] bg-white p-6">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-[#384052]">{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Budget-Friendly Solutions', 'Access distribution services that fit your budget without compromising reach.'],
              ['Timely Delivery', 'Expect fast turnaround and prompt publication to match campaign timelines.'],
              ['Dedicated Support', 'Get personalized support from content planning to live publication.'],
            ].map(([title, body], idx) => (
              <article
                key={title}
                className={`rounded-md p-6 ${idx !== 1 ? 'bg-[#4e16bc] text-white' : 'border border-[#d7dce8] bg-white text-[#1f2736]'}`}
              >
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-2 text-base leading-relaxed opacity-90">{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1140px] px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.8rem)] font-black">Industries We Serve</h2>
          <p className="mx-auto mt-3 max-w-4xl text-center text-[clamp(1rem,1.3vw,1.08rem)] leading-relaxed text-[#3a4253]">
            We support both small and large brands with industry-aware distribution strategies and editorial positioning.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((industry) => (
              <div key={industry} className="rounded-xl border border-[#d8ddeb] bg-white px-3 py-6 text-center font-semibold text-[#20283a] shadow-[0_8px_16px_rgba(17,26,40,0.05)]">
                {industry}
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-[#dde1ea] bg-[#f7f8fc] py-14">
          <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.8rem)] font-black">Our Testimonials</h2>
            <p className="mt-3 text-center text-[clamp(1rem,1.3vw,1.08rem)] text-[#3b4355]">Read what clients say about working with us.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {testimonials.map((item) => (
                <article key={item.name} className={`relative rounded-md border p-6 ${item.featured ? 'border-[#4e16bc] bg-[#4e16bc] text-white' : 'border-[#d7dce7] bg-white text-[#232b3b]'}`}>
                  <Quote className={`h-6 w-6 ${item.featured ? 'text-white/70' : 'text-[#4e16bc]/60'}`} />
                  <p className="mt-3 text-base leading-relaxed">{item.text}</p>
                  <p className="mt-5 text-sm font-semibold">{item.name}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <HomePostPanels panels={postPanels} />

        <footer className="bg-[#4e16bc] text-white">
          <div className="mx-auto grid max-w-[1140px] gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
            <div>
              <h3 className="text-2xl font-bold">About Us</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                {SITE_CONFIG.name} connects brands with premium media through strategic distribution, targeted outreach, and measurable reporting.
              </p>
              
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
                <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4" /> </li>
                <li className="flex items-center gap-2"><Smartphone className="h-4 w-4" /> </li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> </li>
              </ul>
            </div> */}
          </div>
          <div className="border-t border-white/20 py-3 text-center text-sm">© {new Date().getFullYear()} Media Mediyahub. All rights reserved.</div>
        </footer>
      </main>
    </div>
  )
}
