import { getAllSnippets } from './snippets'
import { getAllPosts } from './blog'

export async function createSearchIndex() {
  const searchIndex = {}

  const snippets = await getAllSnippets()
  snippets.forEach((snippet) => {
    searchIndex[snippet.href] = {
      title: snippet.meta.title,
      href: snippet.href,
      excerpt: snippet.meta.excerpt,
      tags: snippet.meta.tags
    }
  })

  const blogPosts = await getAllPosts()
  blogPosts.forEach((post) => {
    searchIndex[post.href] = {
      title: post.meta.title,
      href: post.href,
      excerpt: post.meta.excerpt,
      tags: post.meta.tags
    }
  })

  return searchIndex
}
