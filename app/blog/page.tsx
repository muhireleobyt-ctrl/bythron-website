import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Insights on fleet management, GPS tracking technology, and data security from the Bythron team.",
};

export default function BlogPage() {
  return (
    <section className="hero-mesh py-20 sm:py-24">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Bythron Blog"
            title="Ideas on tracking, fleets, and building for Africa."
            description="Notes from our engineering, product, and customer success teams."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={(i % 2) * 0.1}>
              <Link href={`/blog/${post.slug}`} className="card-lift group flex h-full flex-col rounded-2xl border bg-card p-7">
                <Badge variant="secondary" className="w-fit rounded-full font-normal">{post.category}</Badge>
                <h2 className="mt-4 text-xl font-semibold leading-snug">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.author} · {post.readTime}</span>
                  <ArrowUpRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
