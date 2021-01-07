type Params = {
  title: string
  excerpt: string
  tags: string[]
}

type Metadata = Params

export const SnippetMetadata = (p: Params): Metadata => {
  if (!p.title) throw new Error('title is required')
  if (!p.excerpt) throw new Error('excerpt is required')
  if (!p.tags) throw new Error('tags are required')

  return p
}
