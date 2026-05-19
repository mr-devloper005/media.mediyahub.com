import Link from 'next/link'
import { ArrowRight, FileText, Search } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { fetchTaskPosts } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = false

function excerpt(text?: string | null) {
  const value = (text || '').trim()
  if (!value) return 'Read the full post for the complete update.'
  return value.length > 220 ? `${value.slice(0, 217).trimEnd()}...` : value
}

function categoryLabel(post: { content?: unknown }) {
  const c = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return String(c.category || 'Update')
}

export async function TaskListPageOverride(_: { task: TaskKey; category?: string }) {
  const posts = await fetchTaskPosts('mediaDistribution', 24, { fresh: true })
  const recent = posts.slice(0, 6)

  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-14 sm:py-18">
          <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4e16bc]">{SITE_CONFIG.name}</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight text-[#121525] sm:text-5xl lg:text-6xl">Archive</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4a5162] sm:text-base">
              Every published guest post and desk story in one scan-friendly list. Open any row for the full article.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full border border-[#d8ddee] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2d3447]">
                {posts.length} {posts.length === 1 ? 'story' : 'stories'}
              </span>
              <Link
                href="/search?master=1"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#4e16bc] hover:text-[#3f11a1]"
              >
                Search archive
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-12 lg:px-8 lg:py-14">
          <div className="space-y-8">
            {posts.length ? (
              posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-[1.5rem] border border-[#d7dceb] bg-white p-6 shadow-[0_10px_24px_rgba(22,30,48,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(22,30,48,0.12)] sm:p-8"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#4e16bc]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#4e16bc]">
                      {categoryLabel(post)}
                    </span>
                    <time className="text-xs tabular-nums text-[#6b7387]">
                      {new Date(post.publishedAt || Date.now()).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  </div>
                  <h2 className="mt-4 text-2xl font-black uppercase leading-tight tracking-tight text-[#171b2c] sm:text-3xl">
                    <Link href={`/archive/${post.slug}`} className="transition hover:text-[#4e16bc]">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-[#6b7387]">by {post.authorName || 'Editorial desk'}</p>
                  <p className="mt-5 text-base leading-relaxed text-[#3c4457]">{excerpt(post.summary)}</p>
                  <div className="mt-6">
                    <Link
                      href={`/archive/${post.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-[#d4daf0] bg-[#4e16bc] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1]"
                    >
                      Continue reading
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[1.5rem] border border-dashed border-[#d5dcef] bg-white px-8 py-16 text-center">
                <FileText className="mx-auto h-10 w-10 text-[#7c859a]" />
                <p className="mt-4 text-sm text-[#4f586c]">No stories in the archive yet. Connect your feed to populate this page.</p>
                <Link href="/contact" className="mt-6 inline-block text-sm font-semibold text-[#4e16bc] hover:text-[#3f11a1]">
                  Contact the desk
                </Link>
              </div>
            )}
          </div>

          <aside className="space-y-6 lg:pt-2">
            <div className="rounded-[1.35rem] border border-[#d7dceb] bg-white p-5 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#606981]">Search</p>
              <form action="/search" method="get" className="mt-4 flex flex-col gap-3">
                <input type="hidden" name="master" value="1" />
                <label className="sr-only" htmlFor="archive-search-q">
                  Search posts
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b8397]" />
                  <input
                    id="archive-search-q"
                    name="q"
                    placeholder="Keywords, author, topic..."
                    className="h-12 w-full rounded-xl border border-[#d6dcee] bg-[#f6f7fc] pl-10 pr-3 text-sm text-[#1a2030] outline-none placeholder:text-[#828aa0] focus:border-[#4e16bc]/50 focus:ring-1 focus:ring-[#4e16bc]/30"
                  />
                </div>
                <button
                  type="submit"
                  className="flex h-11 items-center justify-center rounded-xl bg-[#4e16bc] text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1]"
                >
                  Search
                </button>
              </form>
            </div>

            <div className="rounded-[1.35rem] border border-[#d7dceb] bg-white p-5 shadow-[0_10px_24px_rgba(22,30,48,0.08)]">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#606981]">Recently updated</p>
              <ul className="mt-4 space-y-3">
                {recent.map((post) => (
                  <li key={post.id}>
                    <Link href={`/archive/${post.slug}`} className="group block text-sm leading-snug text-[#3f4658] transition hover:text-[#4e16bc]">
                      <span className="line-clamp-2 font-medium text-[#1f2739] group-hover:text-[#4e16bc]">{post.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  )
}
