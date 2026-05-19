'use client'

import { useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { buildPostUrl } from '@/lib/task-data'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

type PostPanel = {
  key: string
  label: string
  taskKey: TaskKey
  posts: SitePost[]
}

export function HomePostPanels({ panels }: { panels: PostPanel[] }) {
  const initialVisible = useMemo(
    () => Object.fromEntries(panels.map((panel) => [panel.key, 2])),
    [panels]
  )
  const [visibleByPanel, setVisibleByPanel] =
    useState<Record<string, number>>(initialVisible)

  if (!panels.length) return null

  const loadMoreForPanel = (panelKey: string) => {
    setVisibleByPanel((prev) => ({
      ...prev,
      [panelKey]: (prev[panelKey] || 2) + 2,
    }))
  }

  return (
    <section className="mx-auto max-w-[1140px] px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-center text-[clamp(1.8rem,3.4vw,2.8rem)] font-black">
        Latest Posts
      </h2>
      <p className="mx-auto mt-3 max-w-4xl text-center text-[clamp(1rem,1.3vw,1.08rem)] leading-relaxed text-[#3b4355]">
        Each panel shows 2 posts first. Click Load More to reveal 2 more in that same panel.
      </p>

      <div className="mt-8 space-y-10">
        {panels.map((panel) => {
          const visibleCount = Math.min(
            visibleByPanel[panel.key] || 2,
            panel.posts.length
          )
          const visiblePosts = panel.posts.slice(0, visibleCount)
          const hasMore = visibleCount < panel.posts.length

          return (
            <div
              key={panel.key}
              className="rounded-xl border border-[#d7dce7] bg-white p-5 shadow-[0_8px_16px_rgba(17,26,40,0.05)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-2xl font-bold text-[#161d2e]">{panel.label}</h3>
                <span className="text-sm text-[#5a6274]">
                  Showing {visibleCount} of {panel.posts.length}
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {visiblePosts.map((post) => (
                  <TaskPostCard
                    key={`${panel.key}-${post.id}`}
                    post={post}
                    href={buildPostUrl(panel.taskKey, post.slug)}
                    taskKey={panel.taskKey}
                  />
                ))}
              </div>

              {hasMore ? (
                <div className="mt-6 text-center">
                  <Button
                    type="button"
                    onClick={() => loadMoreForPanel(panel.key)}
                    className="bg-[#4e16bc] text-white hover:bg-[#5a22c8]"
                  >
                    Load More
                  </Button>
                </div>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
