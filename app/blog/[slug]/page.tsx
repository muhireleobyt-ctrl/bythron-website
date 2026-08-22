import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { blogPosts, getBlogPost } from "@/lib/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const initials = post.author.split(" ").map((n) => n[0]).join("");

  return (
    <article className="py-16 sm:py-20">
      <div className="container max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <Reveal className="mt-6">
          <Badge variant="secondary" className="rounded-full font-normal">{post.category}</Badge>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{post.title}</h1>
          <div className="mt-6 flex items-center gap-3">
            <Avatar><AvatarFallback>{initials}</AvatarFallback></Avatar>
            <div className="text-sm">
              <p className="font-medium">{post.author}</p>
              <p className="text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {post.readTime}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 space-y-5 text-lg leading-relaxed text-muted-foreground">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </Reveal>
      </div>
    </article>
  );
}
