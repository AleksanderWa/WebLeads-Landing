import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import Script from 'next/script'
import remarkGfm from 'remark-gfm'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - WebLeads Blog',
    }
  }

  return {
    title: `${post.title} - WebLeads Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'WebLeads Team'],
      images: post.image ? [post.image] : undefined,
    },
  }
}

const mdxComponents = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-900 mb-6" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
  h4: (props: any) => <h4 className="text-xl font-bold text-gray-900 mb-2 mt-4" {...props} />,
  p: (props: any) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-2" {...props} />,
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-4" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto mb-4" {...props} />
  ),
  a: (props: any) => (
    <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg shadow-md w-full mb-4" {...props} />
  ),
  hr: (props: any) => <hr className="border-gray-300 my-8" {...props} />,
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-300" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th className="bg-gray-100 border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />
  ),
  td: (props: any) => (
    <td className="border border-gray-300 px-4 py-2" {...props} />
  ),
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // Generate Article schema for all blog posts
  const baseUrl = 'https://www.webleads.site'
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `${baseUrl}${post.image}` : undefined,
    "author": {
      "@type": "Person",
      "name": post.author || "WebLeads Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "WebLeads",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/favicon.png`
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${params.slug}`
    }
  }

  return (
    <>
      {/* Article Schema */}
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        <article className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-800 text-sm font-medium mb-4 inline-flex items-center"
          >
            ← Back to Blog
          </Link>
        </div>

        <header className="mb-8">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
            />
          )}
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{post.readingTime}</span>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <MDXRemote 
            source={post.content} 
            components={mdxComponents}
            options={{ 
              mdxOptions: { 
                remarkPlugins: [remarkGfm] 
              } 
            }}
          />
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← More articles
            </Link>
            <div className="text-sm text-gray-500">
              Published on {new Date(post.date).toLocaleDateString()}
            </div>
          </div>
        </footer>
      </article>
      <Footer />
    </div>
    </>
  )
} 