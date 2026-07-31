import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/lib/posts";
import ScrollToTop from "./scroll-to-top";
import SiteNav from "@/app/site-nav";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  const description = post.body
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 160);
  return {
    title: post.title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      authors: ["Chaitanya Chaurasia"],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  // posts are sorted newest-first
  const idx = posts.findIndex((p) => p.slug === params.slug);
  const newer = idx > 0 ? posts[idx - 1] : null;
  const older = idx < posts.length - 1 ? posts[idx + 1] : null;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    url: `https://thechai.fyi/blog/${post.slug}`,
    author: {
      "@type": "Person",
      "@id": "https://thechai.fyi/#person",
      name: "Chaitanya Chaurasia",
      url: "https://thechai.fyi",
    },
  };

  return (
    <div className="shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteNav />

      <main className="page">
        <h1 className="name lower">{post.title}</h1>
        <p className="post-date">{post.date}</p>

        <div className="post-nav">
          {older ? (
            <Link href={`/blog/${older.slug}`}>← back</Link>
          ) : (
            <span className="disabled">← back</span>
          )}
          <Link href="/#blog">home</Link>
          <a href={post.url} target="_blank" rel="noreferrer">
            read on {post.source}
          </a>
          {newer ? (
            <Link href={`/blog/${newer.slug}`}>next →</Link>
          ) : (
            <span className="disabled">next →</span>
          )}
        </div>

        <article
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <ScrollToTop />
      </main>
    </div>
  );
}
