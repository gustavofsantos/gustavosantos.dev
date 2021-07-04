import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import readingTime from 'reading-time'
import Link from 'next/link'

import { ArticleHead } from '../../lib/components/article/head'
import * as Article from '../../lib/article'
import { ptDayOptions, enDayOptions, emojiOptions } from '../../lib/day-options'
import { chooseOne } from '../../lib/utils'
import { Coffees } from '../../lib/components/article/coffees'
import { Footer } from '../../components/footer'
import { When } from '../../components/when'
import { ArticleCover } from '../../lib/components/article/cover'
import { ArticleAuthor } from '../../lib/components/article/author'

const components = {
  Image
}

export default function ArticlePage({
  slug,
  mdxSource,
  readingTime,
  title,
  summary,
  publishedAt,
  tags = [],
  coverUrl,
  language,
  coverCredits,
  coverWidth,
  coverHeight
}) {
  return (
    <main
      className="flex flex-col w-full justify-start items-center pb-64 pt-24 bg-cararra-500 dark:bg-nile-blue-800"
      data-testid="article-page"
    >
      <ArticleHead title={title} summary={summary} coverUrl={coverUrl} />

      <article className="prose prose-green prose-lg text-nile-blue-500 dark:text-cararra-500 w-full px-2 md:px-0 lg:max-w-xl xl:max-w-2xl">
        <h1 className="inter-font font-black mb-8 text-nile-blue-600 dark:text-cararra-400">
          {title}
        </h1>

        {!!coverUrl && (
          <ArticleCover
            url={coverUrl}
            credit={coverCredits}
            height={coverHeight}
            width={coverWidth}
          />
        )}

        <MDXRemote {...mdxSource} components={{ ...components }} />

        <section
          className="flex flex-col items-start justify-between space-y-1 mb-4 md:items-center md:flex-row"
          data-testid="data-section"
        >
          {!!publishedAt && (
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          )}

          <When value={language === 'pt'}>
            <Coffees minutes={Math.ceil(readingTime)} />
          </When>
          <When value={language === 'en'}>
            <Coffees message="Reading time" minutes={Math.ceil(readingTime)} />
          </When>
        </section>

        <section className="my-8 w-full">
          <When value={language === 'en'}>
            <ArticleAuthor />
          </When>
          <When value={language === 'pt'}>
            <ArticleAuthor message="Sou um desenvolvedor, engenheiro e aprendiz. Este site e o conteúdo nele é opionado." />
          </When>
        </section>

        <section
          className="space-x-4 mt-8"
          data-testid="share-edit-page-section"
        >
          <span>
            👈{' '}
            <Link href="/a">
              <a>
                <When value={language === 'pt'}>Todos os artigos</When>
                <When value={language === 'en'}>All blog posts</When>
              </a>
            </Link>
          </span>
          <a
            href={`https://github.com/gustavofsantos/gustavosantos.dev/blob/master/data/blog/${slug}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <When value={language === 'pt'}>
              <span>📝 Edite esta página</span>
            </When>
            <When value={language === 'en'}>
              <span>📝 Edit this page</span>
            </When>
          </a>
        </section>
      </article>

      <section
        className="flex flex-col justify-center items-center w-full space-y-4 mt-12"
        data-testid="thanks-section"
      >
        <h3 className="text-5xl">{chooseOne(emojiOptions)}</h3>
        <When value={language === 'en'}>
          <p className="font-bold text-nile-blue-500 dark:text-cararra-600">
            Have a{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              {chooseOne(enDayOptions)}
            </span>{' '}
            day
          </p>
        </When>
        <When value={language === 'pt'}>
          <p className="font-bold text-nile-blue-500 dark:text-cararra-600">
            Tenha um dia{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              {chooseOne(ptDayOptions)}
            </span>
          </p>
        </When>
      </section>
      <Footer />
    </main>
  )
}

export function getStaticPaths() {
  const files = Article.readArticlesDir()

  return {
    paths: files.map((file) => ({
      params: {
        slug: file.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const fileContent = Article.readArticleBySlug(params.slug).toString()
  const { data, content } = Article.parseArticle(fileContent)
  const mdxSource = await Article.serializeArticle(content)

  return {
    props: {
      content: fileContent,
      slug: params.slug,
      mdxSource,
      readingTime: readingTime(content).minutes,
      ...data
    }
  }
}
