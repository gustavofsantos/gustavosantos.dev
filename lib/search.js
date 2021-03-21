import Fuse from 'fuse.js'

export function searchByTerm(term, searchIndex = {}) {
  const fuse = new Fuse(Object.values(searchIndex), {
    includeScore: true,
    keys: ['href', 'title', 'tags', 'excerpt']
  })
  const results = fuse.search(term)

  return results
    .filter((result) => result.score * 10 < 1)
    .map((result) => result.item)
}
