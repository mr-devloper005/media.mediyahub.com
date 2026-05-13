export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Archive',
    route: '/media-distribution',
    description: 'Browse every published guest post and desk story.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/media-distribution',
} as const
