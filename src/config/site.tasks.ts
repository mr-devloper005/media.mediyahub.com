export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Media Distribution',
    route: '/media-distribution',
    description: 'Browse distribution results, press releases, and publication reports.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/media-distribution',
} as const
