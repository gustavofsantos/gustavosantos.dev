import { getAllSnippets } from './snippets'

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

  return searchIndex
}
