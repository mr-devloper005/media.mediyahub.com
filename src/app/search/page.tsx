import Link from "next/link";
import { ArrowRight, Search, Sparkles, X } from "lucide-react";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { Footer } from "@/components/shared/footer";
import { fetchSiteFeed } from "@/lib/site-connector";
import { buildPostUrl, getPostTaskKey } from "@/lib/task-data";
import { getMockPostsForTask } from "@/lib/mock-posts";
import { SITE_CONFIG } from "@/lib/site-config";

export const revalidate = 3;

const matchText = (value: string, query: string) => value.toLowerCase().includes(query);
const stripHtml = (value: string) => value.replace(/<[^>]*>/g, " ");

const compactText = (value: unknown) => {
  if (typeof value !== "string") return "";
  return stripHtml(value).replace(/\s+/g, " ").trim().toLowerCase();
};

function buildSearchHref(parts: { q?: string; category?: string; task?: string }) {
  const p = new URLSearchParams();
  p.set("master", "1");
  if (parts.q?.trim()) p.set("q", parts.q.trim());
  if (parts.category?.trim()) p.set("category", parts.category.trim());
  if (parts.task?.trim()) p.set("task", parts.task.trim());
  const qs = p.toString();
  return qs ? `/search?${qs}` : "/search?master=1";
}

function excerptFromPost(post: { summary?: string | null; content?: unknown }) {
  const raw = (post.summary || "").trim();
  if (raw) return raw.length > 200 ? `${raw.slice(0, 197)}...` : raw;
  const c = post.content && typeof post.content === "object" ? (post.content as Record<string, unknown>) : {};
  const body = typeof c.body === "string" ? stripHtml(c.body).replace(/\s+/g, " ").trim() : "";
  if (body) return body.length > 200 ? `${body.slice(0, 197)}...` : body;
  return "Open the post for the full story.";
}

function categoryFromPost(post: { content?: unknown; tags?: string[] }) {
  const c = post.content && typeof post.content === "object" ? (post.content as Record<string, unknown>) : {};
  if (typeof c.category === "string" && c.category.trim()) return c.category.trim();
  const t = post.tags?.find((x) => typeof x === "string" && x);
  return t || "Post";
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Promise<{ q?: string; category?: string; task?: string; master?: string }>;
}) {
  const resolved = (await searchParams) || {};
  const query = (resolved.q || "").trim();
  const normalized = query.toLowerCase();
  const category = (resolved.category || "").trim().toLowerCase();
  const task = (resolved.task || "").trim().toLowerCase();
  const useMaster = resolved.master !== "0";

  const feed = await fetchSiteFeed(
    useMaster ? 1000 : 300,
    useMaster ? { fresh: true, category: category || undefined, task: task || undefined } : undefined,
  );
  const posts = feed?.posts?.length
    ? feed.posts
    : useMaster
      ? []
      : SITE_CONFIG.tasks.flatMap((t) => getMockPostsForTask(t.key));

  const filtered = posts.filter((post) => {
    const c = post.content && typeof post.content === "object" ? (post.content as Record<string, unknown>) : {};
    const typeText = compactText(c.type);
    if (typeText === "comment") return false;

    const description = compactText(c.description);
    const body = compactText(c.body);
    const excerpt = compactText(c.excerpt);
    const categoryText = compactText(c.category);
    const tags = Array.isArray(post.tags) ? post.tags.join(" ") : "";
    const tagsText = compactText(tags);
    const derivedCategory = categoryText || tagsText;

    if (category && !derivedCategory.includes(category)) return false;
    if (task && typeText && typeText !== task) return false;
    if (!normalized.length) return true;

    return (
      matchText(compactText(post.title || ""), normalized) ||
      matchText(compactText(post.summary || ""), normalized) ||
      matchText(description, normalized) ||
      matchText(body, normalized) ||
      matchText(excerpt, normalized) ||
      matchText(tagsText, normalized)
    );
  });

  const results = normalized.length > 0 ? filtered : filtered.slice(0, 24);
  const hasActiveFilters = Boolean(category || task);

  return (
    <div className="min-h-screen bg-[#f3f4f7] text-[#0f1220]">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-[#dde1ec] bg-gradient-to-br from-[#ffffff] via-[#f4f2ff] to-[#eef1fb] py-14 sm:py-16">
          <div className="pointer-events-none absolute right-0 top-0 h-56 w-56 rounded-full bg-[#4e16bc]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#4e16bc]">Find on {SITE_CONFIG.name}</p>
            <h1 className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight text-[#121525] sm:text-5xl">Search</h1>
            <p className="mt-4 max-w-2xl text-sm text-[#4a5162] sm:text-base">
              {query
                ? `Showing matches for "${query}" across titles, summaries, tags, and body text.`
                : "Browse the latest indexed posts. Add keywords to narrow results."}
            </p>

            <form action="/search" method="get" className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row sm:items-stretch">
              <input type="hidden" name="master" value="1" />
              {category ? <input type="hidden" name="category" value={category} /> : null}
              {task ? <input type="hidden" name="task" value={task} /> : null}
              <div className="relative min-w-0 flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#7b8397]" />
                <input
                  name="q"
                  defaultValue={query}
                  placeholder="Search headlines, topics, authors..."
                  className="h-12 w-full rounded-2xl border border-[#d6dcee] bg-[#f6f7fc] pl-11 pr-4 text-sm text-[#1a2030] outline-none placeholder:text-[#828aa0] focus:border-[#4e16bc]/50 focus:ring-1 focus:ring-[#4e16bc]/25"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-2xl bg-[#4e16bc] px-8 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-[#3f11a1] sm:px-10"
              >
                Search
              </button>
            </form>

            {hasActiveFilters ? (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#606981]">Filters</span>
                {category ? (
                  <Link
                    href={buildSearchHref({ q: query, task })}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#d7dceb] bg-white px-3 py-1.5 text-xs text-[#2e3648] hover:border-[#4e16bc]/40"
                  >
                    category: {category}
                    <X className="h-3 w-3" aria-hidden />
                  </Link>
                ) : null}
                {task ? (
                  <Link
                    href={buildSearchHref({ q: query, category })}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#d7dceb] bg-white px-3 py-1.5 text-xs text-[#2e3648] hover:border-[#4e16bc]/40"
                  >
                    type: {task}
                    <X className="h-3 w-3" aria-hidden />
                  </Link>
                ) : null}
                <Link href="/search?master=1" className="text-xs font-semibold text-[#4e16bc] hover:text-[#3f11a1]">
                  Clear all
                </Link>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-[#6b7387]">
              <Sparkles className="h-4 w-4 text-[#4e16bc]/80" />
              <span>
                <span className="font-semibold text-[#2b3346]">{results.length}</span> {results.length === 1 ? "result" : "results"}
                {query ? <span className="text-[#8a91a5]"> · master index</span> : null}
              </span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          {results.length ? (
            <div className="grid gap-5 sm:grid-cols-2">
              {results.map((post) => {
                const postTask = getPostTaskKey(post);
                const href = postTask ? buildPostUrl(postTask, post.slug) : `/archive/${post.slug}`;
                const cat = categoryFromPost(post);
                return (
                  <Link
                    key={post.id}
                    href={href}
                    className="group flex flex-col rounded-[1.35rem] border border-[#d7dceb] bg-white p-6 shadow-[0_10px_24px_rgba(22,30,48,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_32px_rgba(22,30,48,0.12)]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="rounded-full bg-[#4e16bc]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#4e16bc]">{cat}</span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#8b92a6] transition group-hover:translate-x-0.5 group-hover:text-[#4e16bc]" />
                    </div>
                    <h2 className="mt-3 text-lg font-bold uppercase leading-snug tracking-tight text-[#1d2436] sm:text-xl">{post.title}</h2>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#4b5366]">{excerptFromPost(post)}</p>
                    <p className="mt-4 text-xs text-[#6b7387]">{post.authorName || "Editorial"}</p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-lg rounded-[1.5rem] border border-dashed border-[#d5dcef] bg-white px-8 py-14 text-center">
              <Search className="mx-auto h-10 w-10 text-[#7c859a]" />
              <p className="mt-4 text-base font-semibold text-[#232b3c]">No matching posts</p>
              <p className="mt-2 text-sm text-[#5f6880]">
                {query ? "Try shorter keywords, check spelling, or clear filters." : "Nothing in the index yet, or the feed is still warming up."}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link href="/search?master=1" className="rounded-full border border-[#d7dceb] bg-white px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#2d3447] hover:bg-[#f2efff]">
                  Reset search
                </Link>
                <Link href={SITE_CONFIG.tasks[0]?.route || "/archive"} className="rounded-full bg-[#4e16bc] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white hover:bg-[#3f11a1]">
                  Open archive
                </Link>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
