import { MDXProvider } from '@mdx-js/react'
import { BlogPage } from './blog-page'
import { BlogTitle } from './blog-title'
import { BlogSubtitle } from './blog-subtitle'
import { BlogParagraph } from './blog-paragraph'
import CodeBlock from '../code-block'

export default function BlogLayout(props) {
  const components = {
    h1: BlogTitle,
    h2: BlogSubtitle,
    p: BlogParagraph,
    code: CodeBlock
  }

  return (
    <MDXProvider components={components}>
      <BlogPage {...props} />
    </MDXProvider>
  )
}
