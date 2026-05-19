import type { TaskKey } from './site-config'
import type { SitePost } from './site-connector'

const taskSeeds: Record<TaskKey, string> = {
  listing: 'listing',
  classified: 'classified',
  article: 'article',
  image: 'image',
  profile: 'profile',
  social: 'social',
  pdf: 'pdf',
  org: 'org',
  sbm: 'sbm',
  comment: 'comment',
  mediaDistribution: 'media-distribution',
}

const taskTitles: Record<TaskKey, string[]> = {
  listing: ['Top Tier News Outlets', 'Regional Publisher Network', 'Industry Media Targets', 'Business Press Channels', 'Tech Publication Partners'],
  classified: ['Campaign Launch Notice', 'Embargo Schedule Update', 'Press Kit Revision Notice', 'Distribution Window Alert', 'Outlet Priority Update'],
  article: ['How Press Releases Build SEO Authority', 'What Makes a Distribution Campaign Convert', 'AI Visibility Through News Coverage', 'Writing Releases Editors Actually Publish', 'How to Measure PR Campaign ROI'],
  image: ['Coverage Screenshot Board', 'Authority Badge Samples', 'Campaign Visual Assets', 'Publication Proof Gallery', 'Press Kit Hero Images'],
  profile: ['FinGrowth Advisory Campaign', 'Auratrek Product Launch', 'HealthPro Clinic Visibility', 'EcoBuild Expansion Story', 'BlueNest Hiring Announcement'],
  social: ['Campaign milestone update', 'New publication win', 'Client success snapshot', 'Weekly media highlights', 'SEO lift announcement'],
  pdf: ['Press Release Template Pack', 'Distribution Strategy Playbook', 'Campaign Reporting Guide', 'Authority Growth Checklist', 'Media Outreach Calendar'],
  org: ['National Publisher Consortium', 'Business Press Alliance', 'Regional Newswire Group', 'Global Media Exchange', 'Industry Editors Network'],
  sbm: ['PR Writing Frameworks', 'Backlink Quality Resources', 'Newswire Comparison Notes', 'Media Outreach Templates', 'Press SEO Research Links'],
  comment: ['Campaign feedback thread', 'Editor notes reply', 'Coverage verification discussion', 'Distribution strategy commentary', 'Press report follow-up'],
  mediaDistribution: [
    'FinGrowth raises search visibility with 12 new media placements',
    'Auratrek secures national publication coverage in 7 days',
    'HealthPro campaign report shows 68% increase in branded traffic',
    'EcoBuild announces expansion with multi-outlet distribution',
    'BlueNest hiring release published across business media network',
  ],
}

const taskCategories: Record<TaskKey, string[]> = {
  listing: ['Business', 'Technology', 'Finance', 'Healthcare', 'Industry'],
  classified: ['Campaign', 'Operations', 'Editorial', 'Scheduling', 'Distribution'],
  article: ['PR Strategy', 'SEO', 'Authority', 'Distribution', 'Reporting'],
  image: ['Proof', 'Assets', 'Brand', 'Coverage', 'Reports'],
  profile: ['SaaS', 'Ecommerce', 'Healthcare', 'B2B', 'Local Business'],
  social: ['Updates', 'Highlights', 'Wins', 'Announcements', 'Insights'],
  pdf: ['Templates', 'Playbooks', 'Reports', 'Guides', 'Resources'],
  org: ['Publisher', 'Newswire', 'Editorial', 'Partner', 'Network'],
  sbm: ['Research', 'Resources', 'SEO', 'PR', 'Media'],
  comment: ['Feedback', 'Discussion', 'Review', 'Notes', 'Debate'],
  mediaDistribution: ['Business', 'Technology', 'Finance', 'Healthcare', 'Industry'],
}

const summaryByTask: Record<TaskKey, string> = {
  listing: 'Verified media outlet profile with audience and category details.',
  classified: 'Time-sensitive campaign notice for distribution teams.',
  article: 'Editorial insight focused on media distribution performance.',
  image: 'Visual campaign proof and publication snapshots.',
  profile: 'Client success profile with measurable authority outcomes.',
  social: 'Short campaign update tied to media distribution progress.',
  pdf: 'Downloadable PR resource for campaigns and reporting.',
  org: 'Organization profile for distribution and publishing partners.',
  sbm: 'Curated link resource for PR and SEO workflows.',
  comment: 'Campaign discussion and feedback commentary.',
  mediaDistribution: 'Published press release update with verified distribution context and performance framing.',
}

const randomFrom = (items: string[], index: number) => items[index % items.length]

const buildImage = (task: TaskKey, index: number) => `https://picsum.photos/seed/${taskSeeds[task]}-${index}/1200/800`

export const getMockPostsForTask = (task: TaskKey): SitePost[] => {
  return Array.from({ length: 5 }).map((_, index) => {
    const title = taskTitles[task][index]
    const category = randomFrom(taskCategories[task], index)
    const slug = `${title}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    return {
      id: `${task}-mock-${index + 1}`,
      title,
      slug,
      summary: summaryByTask[task],
      content: {
        type: task,
        category,
        location: 'Delhi',
        description: summaryByTask[task],
        website: 'https://media.mediyahub.com',
        phone: '+91-9999999999',
      },
      media: [{ url: buildImage(task, index), type: 'IMAGE' }],
      tags: [task, category],
      authorName: 'Media Distribution Desk',
      publishedAt: new Date().toISOString(),
    }
  })
}
