const searchIndex = {}

export function register({ title, href, tags, excerpt }) {
  searchIndex[href] = { href, title, tags, excerpt }
}

export function searchByTerm(term, searchIndex = {}) {
  const re = new RegExp(term, 'ig')
  const results = []

  Object.values(searchIndex).forEach((entry) => {
    const entryString = [
      entry.href,
      entry.title,
      entry.tags.join(','),
      entry.excerpt
    ].join(';')

    if (re.test(entryString)) {
      results.push(entry)
    }
  })

  return results
}
