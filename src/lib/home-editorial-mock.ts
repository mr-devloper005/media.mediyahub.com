import type { SitePost } from '@/lib/site-connector'

const MOCK_ENTRIES: Array<{ title: string; category: string; summary: string }> = [
  {
    title: 'National campaign published across 42 business outlets',
    category: 'Distribution',
    summary:
      'Our latest campaign secured live publication links across premium business outlets within one week. The release was tailored by audience segment and aligned with keyword intent to support both authority and discoverability.',
  },
  {
    title: 'AI-optimized release format increased answer-engine mentions',
    category: 'AI Visibility',
    summary:
      'Structured release sections and entity-rich language improved pull-through in AI-generated summaries. Early monitoring showed stronger citation frequency in assistant responses related to branded search topics.',
  },
  {
    title: 'Quarterly reporting update introduces placement verification snapshots',
    category: 'Reporting',
    summary:
      'Campaign reports now include publication proof snapshots, indexed URL checks, and backlink status indicators in one timeline view so teams can validate outcomes quickly with client-ready evidence.',
  },
  {
    title: 'Editorial workflow refresh cuts release turnaround time by 35%',
    category: 'Editorial',
    summary:
      'Updated drafting templates and QA checkpoints reduced revision loops while preserving editorial quality. Teams now move from draft to distribution faster with fewer formatting inconsistencies.',
  },
  {
    title: 'Regional healthcare launch earns multi-market media pickup',
    category: 'Healthcare',
    summary:
      'A targeted healthcare campaign reached regional and national outlets through vertical-specific distribution. The release generated early referral traffic and improved branded query impressions.',
  },
  {
    title: 'Trust badge adoption boosts conversion on partner landing pages',
    category: 'Conversion',
    summary:
      'Teams embedding the “As Seen On” proof block alongside case data reported measurable lift in contact form submissions and lower bounce rates on decision-stage pages.',
  },
]

function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function getHomeEditorialMockPosts(): SitePost[] {
  return MOCK_ENTRIES.map((entry, index) => {
    const slug = `${slugify(entry.title)}-mock-${index + 1}`
    return {
      id: `home-editorial-mock-${index + 1}`,
      title: entry.title,
      slug,
      summary: entry.summary,
      content: {
        type: 'mediaDistribution',
        category: entry.category,
        description: entry.summary,
      },
      media: [{ url: `https://picsum.photos/seed/${slugify(entry.title)}-${index}/1200/800`, type: 'IMAGE' }],
      tags: ['mediaDistribution', entry.category],
      authorName: 'Media Distribution Desk',
      publishedAt: new Date(Date.now() - index * 86400000 * 2).toISOString(),
    }
  })
}

export function mergeEditorialPostsForHome(real: SitePost[], mocks: SitePost[], maxTotal = 16): SitePost[] {
  const seen = new Set<string>()
  const out: SitePost[] = []
  for (const p of real) {
    if (out.length >= maxTotal) break
    if (!seen.has(p.slug)) {
      seen.add(p.slug)
      out.push(p)
    }
  }
  for (const m of mocks) {
    if (out.length >= maxTotal) break
    if (!seen.has(m.slug)) {
      seen.add(m.slug)
      out.push(m)
    }
  }
  return out
}
