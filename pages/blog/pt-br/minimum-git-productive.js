import Link from 'next/link'
import { BlogPage } from '../../../components/blog/blog-page'
import { BlogParagraph } from '../../../components/blog/blog-paragraph'
import { BlogSubtitle } from '../../../components/blog/blog-subtitle'
import { BlogResume } from '../../../components/blog/blog-resume'
import { BlogTitle } from '../../../components/blog/blog-title'
import { CodeSnippet } from '../../../components/code-snippet'

export const metadata = {
  title: 'O mínimo de git que você precisa saber para trabalhar com confiança',
  lang: '🇧🇷',
  resume: `Vai trabalhar em uma funcionalidade nova? git checkout -b feature/*. Fez cagada? git reset`,
  href: '/blog/pt-br/minimum-git-productive'
}

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>
    </BlogPage>
  )
}
