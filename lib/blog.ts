import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  readingTime: string
  tags?: string[]
  author?: string
  image?: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const readTime = readingTime(content)

      return {
        slug,
        title: data.title || slug,
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 160) + '...',
        content,
        readingTime: readTime.text,
        tags: data.tags || [],
        author: data.author || 'WebLeads Team',
        image: data.image || null,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return allPostsData
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    const readTime = readingTime(content)

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || content.substring(0, 160) + '...',
      content,
      readingTime: readTime.text,
      tags: data.tags || [],
      author: data.author || 'WebLeads Team',
      image: data.image || null,
    }
  } catch (error) {
    return null
  }
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const allTags = posts.flatMap((post) => post.tags || [])
  return Array.from(new Set(allTags))
} 