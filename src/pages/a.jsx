import Head from 'next/head'
import Link from 'next/link'
import readingTime from 'reading-time'
import { Footer } from '../components/footer'
import { When } from '../components/when'
import {
  parseArticle,
  readArticleBySlug,
  readArticlesDir,
  orderArticlesByDate
} from '../lib/article'
import { Coffees } from '../lib/components/article/coffees'

export default function ArticlesPage({ articles }) {
  return (
    <main className="flex flex-col justify-start items-center w-full bg-gray-50 pb-64 pt-24">
      <Head>
        <title>Gustavo Santos - Blog</title>
      </Head>
      <article className="prose prose-lg w-full px-2 bg-gray-50 md:px-0">
        <h1>Blog</h1>

        <section data-testid="articles-section" className="space-y-2">
          {articles.map((article) => (
            <div className="flex flex-col" key={article.slug}>
              <Link href={`/a/${article.slug}`}>
                <a className="cursor-pointer">
                  <h3 className="m-0">{article.title}</h3>
                </a>
              </Link>
              <When value={article.summary}>
                <p className="text-gray-700">{article.summary}</p>
              </When>
              <When value={article.language === 'pt'}>
                <Coffees minutes={article.readingTime} />
              </When>
              <When value={article.language === 'en'}>
                <Coffees
                  message="Reading time: "
                  minutes={article.readingTime}
                />
              </When>
            </div>
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
    .map((slug) => ({ article: readArticleBySlug(slug), slug }))
    .map(({ article, slug }) => ({ article: parseArticle(article), slug }))
    .filter(({ article }) => article.data.published !== false)
    .map(({ article: { data, content }, slug }) => ({
      ...data,
      slug,
      readingTime: Math.ceil(readingTime(content).minutes)
    }))

  return {
    props: {
      articles: orderArticlesByDate(articles)
    }
  }
}
