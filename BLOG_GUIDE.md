# WebLeads Blog System Guide

## Overview

Your website now has a fully functional blog system that allows you to write blog posts in Markdown (.md) files and automatically converts them into beautifully formatted web pages.

## How It Works

The blog system uses:
- **File-based content**: Write posts as `.md` files in the `content/blog/` directory
- **Automatic processing**: Markdown files are automatically converted to HTML
- **SEO optimization**: Each post generates proper meta tags and sitemap entries
- **Modern design**: Posts are styled with a clean, professional layout

## Writing a New Blog Post

### 1. Create a New Markdown File

Create a new `.md` file in the `content/blog/` directory. The filename will become the URL slug.

**Example:** `content/blog/my-new-post.md` → `yoursite.com/blog/my-new-post`

### 2. Add Frontmatter

Start your post with frontmatter (metadata) between `---` lines:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post that appears in listings and meta tags"
author: "Your Name"
tags: ["tag1", "tag2", "tag3"]
image: "/images/blog/your-image.jpg"
---
```

### 3. Write Your Content

After the frontmatter, write your content in standard Markdown:

```markdown
# Your Main Heading

This is a paragraph with some **bold text** and *italic text*.

## Subheading

- Bullet point 1
- Bullet point 2
- Bullet point 3

### Another Level

Here's a [link to somewhere](https://example.com).

> This is a blockquote for highlighting important information.

```code
// This is a code block
console.log("Hello, world!");
```
```

## Frontmatter Fields Explained

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The title of your blog post |
| `date` | Yes | Publication date in YYYY-MM-DD format |
| `excerpt` | Yes | Short description for previews and SEO |
| `author` | No | Author name (defaults to "WebLeads Team") |
| `tags` | No | Array of tags for categorization |
| `image` | No | Featured image URL for the post |

## Markdown Features Supported

Your blog supports all standard Markdown features plus enhanced styling:

### Headers
```markdown
# H1 Header
## H2 Header  
### H3 Header
#### H4 Header
```

### Text Formatting
```markdown
**Bold text**
*Italic text*
~~Strikethrough~~
`Inline code`
```

### Lists
```markdown
- Unordered list item
- Another item

1. Ordered list item
2. Another numbered item
```

### Links and Images
```markdown
[Link text](https://example.com)
![Alt text](/images/example.jpg)
```

### Code Blocks
```markdown
```javascript
function example() {
  return "This is highlighted code";
}
```
```

### Tables
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | More     |
| Row 2    | Data     | More     |
```

### Blockquotes
```markdown
> This is a highlighted quote or important note.
```

## Managing Images

1. **Store images** in `public/images/blog/`
2. **Reference them** in your markdown as `/images/blog/filename.jpg`
3. **Optimize images** before uploading (recommended: max 1200px wide, compressed)

## Blog URLs and Navigation

- **Blog homepage**: `/blog` - Lists all posts
- **Individual posts**: `/blog/[filename]` - The actual blog post
- **Navigation**: Blog link is automatically added to your site header

## SEO Features

The blog system automatically handles:
- ✅ Meta titles and descriptions
- ✅ Open Graph tags for social sharing
- ✅ Sitemap generation
- ✅ Structured data
- ✅ Reading time calculation
- ✅ Mobile-responsive design

## Example Blog Post Structure

Here's a complete example of a well-structured blog post:

```markdown
---
title: "10 Tips for Better Lead Generation"
date: "2024-01-15"
excerpt: "Discover actionable strategies that successful agencies use to generate more qualified leads consistently."
author: "WebLeads Team"
tags: ["lead generation", "digital marketing", "sales", "agency growth"]
image: "/images/blog/lead-generation-tips.jpg"
---

# 10 Tips for Better Lead Generation

Lead generation is crucial for agency success. Here are proven strategies...

## 1. Know Your Ideal Client

Understanding your target audience is the foundation...

### Research Methods
- Surveys and interviews
- Analytics data analysis
- Competitor research

## 2. Create Valuable Content

Content that solves problems attracts the right prospects...

**Content Types That Work:**
- Case studies
- How-to guides
- Industry insights
- Video tutorials

> Pro Tip: Focus on quality over quantity when creating content.

## Conclusion

Implementing these strategies will help you...

---

*Ready to supercharge your lead generation? [Contact us](#) to learn more.*
```

## Tips for Great Blog Posts

### Content Tips
- **Start with your audience**: What problems do they need solved?
- **Be specific**: Detailed, actionable advice performs better
- **Use examples**: Real scenarios help readers understand concepts
- **Include visuals**: Images, charts, and diagrams improve engagement
- **End with a call-to-action**: Guide readers to the next step

### SEO Tips
- **Use relevant keywords** naturally throughout your content
- **Write compelling titles** that include target keywords
- **Create detailed excerpts** that entice readers to click
- **Use proper heading structure** (H1, H2, H3, etc.)
- **Include internal links** to other relevant content

### Writing Best Practices
- **Keep paragraphs short** for better readability
- **Use bullet points** to break up information
- **Write in active voice** when possible
- **Proofread carefully** before publishing
- **Update content** regularly to keep it current

## Publishing Workflow

1. **Write** your post in `content/blog/filename.md`
2. **Add images** to `public/images/blog/` if needed
3. **Preview** your changes locally (`npm run dev`)
4. **Commit** your changes to Git
5. **Deploy** to your live site

## Troubleshooting

### Common Issues

**Post not showing up?**
- Check that the file is in `content/blog/`
- Verify the frontmatter format is correct
- Ensure the date format is YYYY-MM-DD

**Images not loading?**
- Confirm images are in `public/images/blog/`
- Check that image paths start with `/images/blog/`
- Verify image file names match exactly (case-sensitive)

**Styling looks wrong?**
- The system uses Tailwind CSS classes
- Custom styling is applied automatically
- Check browser console for any JavaScript errors

## Advanced Features

### Custom Styling
You can add custom CSS classes to specific elements:

```markdown
<div className="bg-blue-100 p-4 rounded-lg">
This content will have a blue background with padding and rounded corners.
</div>
```

### Embedding Content
You can embed videos, tweets, and other content:

```markdown
<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

## Need Help?

If you run into any issues or need help with the blog system:
1. Check this guide first
2. Look at the example blog posts for reference
3. Ensure your Markdown syntax is correct
4. Test locally before deploying

Your blog system is now ready to help you share valuable content and attract more leads to your business! 