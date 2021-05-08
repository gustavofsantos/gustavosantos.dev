import Head from 'next/head'
import Link from 'next/link'
import readingTime from 'reading-time'
import { Footer } from '../components/footer'
import {
  parseArticle,
  readArticleBySlug,
  readArticlesDir
} from '../lib/article'
import { Coffees } from '../lib/components/article/coffees'

export default function ArticlesPage({ articles }) {
  return (
    <main className="flex flex-col justify-start items-center w-full pb-64 pt-24">
      <Head>
        <title>Blog do Gustavo</title>
      </Head>
      <article className="prose prose-blue w-full px-2 md:px-0">
        <h1>Artigos</h1>

        <section data-testid="articles-section" className="space-y-2">
          {articles.map((article) => (
            <Link href={`/a/${article.slug}`} key={article.slug}>
              <div className="flex flex-col cursor-pointer">
                <h3 className="m-0">{article.title}</h3>
                <p>{article.summary}</p>
                <Coffees minutes={article.readingTime} />
              </div>
            </Link>
          ))}
        </section>
      </article>
      <section className="prose prose-blue w-full">
        <Footer />
      </section>
    </main>
  )
}

export function getStaticProps() {
  const slugs = readArticlesDir()
  const articles = slugs
    .map(readArticleBySlug)
    .map(parseArticle)
    .map(({ data, content }, index) => ({
      ...data,
      slug: slugs[index],
      readingTime: Math.ceil(readingTime(content).minutes)
    }))

  return {
    props: {
      articles
    }
  }
}
