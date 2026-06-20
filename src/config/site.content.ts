import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Authority-first media distribution',
  },
  footer: {
    tagline: 'Press release writing, distribution, and reporting',
  },
  hero: {
    badge: 'Top rated press release service',
    title: ['Build authority with strategic media distribution.'],
    description:
      'Launch press releases that reach real publications, improve search visibility, and convert trust into growth.',
    primaryCta: {
      label: 'See packages',
      href: '/media-distribution',
    },
    secondaryCta: {
      label: 'Talk to our team',
      href: '/contact',
    },
    searchPlaceholder: 'Search releases, reports, and coverage',
    focusLabel: 'Latest release',
    featureCardBadge: 'distribution insight',
    featureCardTitle: 'Track live placements, backlinks, and reach in one report.',
    featureCardDescription:
      'Every campaign includes transparent reporting so you can verify publication links, rankings, and performance outcomes.',
  },
  home: {
    metadata: {
      title: 'Press Release Distribution for Authority and SEO',
      description:
        'Media Mediyahub distributes press releases to trusted news outlets with SEO-focused publishing, verified placements, and actionable reporting.',
      openGraphTitle: 'Media Distribution That Builds Authority',
      openGraphDescription:
        'Write, publish, verify, and grow with a complete press release distribution workflow built for modern brands.',
      keywords: ['press release distribution', 'media distribution service', 'newswire publishing', 'seo backlinks', 'brand authority'],
    },
    introBadge: 'Media Distribution',
    introTitle: 'From story draft to verified publication in one workflow.',
    introParagraphs: [
      'We combine editorial support, distribution strategy, and reporting so your campaigns move faster without sacrificing quality.',
      'Your release is matched to relevant outlets, then tracked with placement links, visibility metrics, and post-publication evidence.',
      'The result is a cleaner path to trust, stronger rankings, and measurable authority growth.',
    ],
    sideBadge: 'What you get',
    sidePoints: [
      'Editorially refined press release copy.',
      'Targeted publication across trusted outlets.',
      'Backlink and ranking visibility support.',
      'Verification-ready reporting assets.',
    ],
    primaryLink: {
      label: 'Open media distribution',
      href: '/media-distribution',
    },
    secondaryLink: {
      label: 'Contact distribution desk',
      href: '/contact',
    },
  },
  cta: {
    badge: 'Need distribution support?',
    title: 'Launch your next press release with confidence and proof.',
    description:
      'Get strategy, writing, publication, and reporting support from a team focused on authority-building outcomes.',
    // primaryCta: {
      label: 'Get started',
      href: '/register',
    // }
    
    secondaryCta: {
      label: 'View results',
      href: '/media-distribution',
    },
  },
  taskSectionHeading: 'Latest distribution updates',
  taskSectionDescriptionSuffix: 'Read recent publication wins, campaign updates, and reporting insights.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Press & Insights',
    description: 'Read media strategy insights, publishing updates, and authority-building articles.',
  },
  listing: {
    title: 'Distribution Partners',
    description: 'Explore partner outlets, publication options, and media categories.',
  },
  classified: {
    title: 'Campaign Notices',
    description: 'Browse short campaign updates and time-sensitive media notices.',
  },
  image: {
    title: 'Creative Assets',
    description: 'Review campaign visuals, screenshot proofs, and branded media assets.',
  },
  profile: {
    title: 'Client Profiles',
    description: 'View client stories, campaign outcomes, and authority growth snapshots.',
  },
  sbm: {
    title: 'Media Resources',
    description: 'Curated links for PR strategy, SEO, and newsroom best practices.',
  },
  pdf: {
    title: 'Reports & Downloads',
    description: 'Access downloadable campaign reports, templates, and publication summaries.',
  },
  mediaDistribution: {
    title: 'Media Distribution',
    description: 'Browse published press releases, distribution outcomes, and report-backed results.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: { title: 'Distribution Partners', paragraphs: ['Browse publication partners and trusted media surfaces.'], links: [{ label: 'Home', href: '/' }] },
  article: { title: 'Press & Insights', paragraphs: ['Media strategy insights and distribution-focused articles.'], links: [{ label: 'Home', href: '/' }] },
  classified: { title: 'Campaign Notices', paragraphs: ['Short campaign announcements and posting updates.'], links: [{ label: 'Home', href: '/' }] },
  image: { title: 'Creative Assets', paragraphs: ['Visual proofs, campaign graphics, and release media previews.'], links: [{ label: 'Home', href: '/' }] },
  profile: { title: 'Client Profiles', paragraphs: ['Client campaigns, milestones, and authority growth highlights.'], links: [{ label: 'Home', href: '/' }] },
  sbm: { title: 'Media Resources', paragraphs: ['Curated references for PR, SEO, and media outreach workflows.'], links: [{ label: 'Home', href: '/' }] },
  pdf: { title: 'Reports & Downloads', paragraphs: ['Downloadable campaign reports, templates, and media summaries.'], links: [{ label: 'Home', href: '/' }] },
  social: { title: 'Social', paragraphs: ['Short social updates tied to distribution campaigns.'], links: [{ label: 'Home', href: '/' }] },
  comment: { title: 'Comments', paragraphs: ['Feedback and discussion around publication outcomes.'], links: [{ label: 'Home', href: '/' }] },
  org: { title: 'Organizations', paragraphs: ['Publisher organizations and distribution partners.'], links: [{ label: 'Home', href: '/' }] },
  mediaDistribution: {
    title: 'Media Distribution',
    paragraphs: [
      'This section showcases press releases, publication placements, and campaign outcomes from active media distribution projects.',
      'Use it to track authority growth, review live coverage links, and understand how each campaign performed after distribution.',
    ],
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}
