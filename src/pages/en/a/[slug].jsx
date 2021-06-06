import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import readingTime from 'reading-time'
import Link from 'next/link'
import { ArticleHead } from '../../../lib/components/article/head'
import * as Article from '../../../lib/article'
import { Coffees } from '../../../lib/components/article/coffees'
import { Footer } from '../../../components/footer'
import { ArticleCover } from '../../../lib/components/article/cover'
import { ArticleAuthor } from '../../../lib/components/article/author'

const emojiOptions = ['✌', '🤙', '🤘', '👌', '🤞', '🤟']

const dayOptions = [
  'amazing',
  'incredible',
  'gorgeous',
  'stupendous',
  'fascinating',
  'stunning',
  'extra-natural',
  'sublime',
  'heavenly',
  'venerable',
  'radiant',
  'formidable',
  'magnificent',
  'divine',
  'prodigious',
  'glorious',
  'epic',
  'ethereal',
  'brillant',
  'pompous',
  'handsome',
  'delicious',
  'enviable',
  'loving',
  'munific'
]

const chooseOne = (array) => {
  const length = array.length
  const index = Math.round(Math.random() * 10) % length
  return array[index]
}

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
  coverCredits,
  coverWidth,
  coverHeight
}) {
  return (
    <main
      className="flex flex-col w-full justify-start items-center pb-64 pt-24"
      data-testid="article-page"
    >
      <ArticleHead title={title} summary={summary} coverUrl={coverUrl} />

      <article className="prose prose-blue w-full px-2 md:px-0 lg:max-w-xl xl:max-w-2xl">
        <h1 className="mb-8">{title}</h1>

        <section
          className="flex flex-col items-start justify-between space-y-1 mb-4 md:items-center md:flex-row"
          data-testid="data-section"
        >
          <div className="flex justify-center items-center space-x-2">
            <img
              src="/images/profile.jpg"
              className="rounded-full"
              style={{ width: '3rem', height: '3rem' }}
            />
            <div className="flex space-x-2">
              <span>Gustavo Santos</span>
              {!!publishedAt && (
                <>
                  <span>|</span>
                  <span>{new Date(publishedAt).toLocaleDateString()}</span>
                </>
              )}
            </div>
          </div>
          <Coffees minutes={Math.ceil(readingTime)} message="Reading time" />
        </section>

        {!!coverUrl && (
          <ArticleCover
            url={coverUrl}
            credit={coverCredits}
            height={coverHeight}
            width={coverWidth}
          />
        )}

        <MDXRemote {...mdxSource} components={{ ...components }} />

        <section className="my-8 w-full">
          <ArticleAuthor />
        </section>

        <section
          className="space-x-4 mt-8"
          data-testid="share-edit-page-section"
        >
          <span>
            👈{' '}
            <Link href="/en/a">
              <a>All articles</a>
            </Link>
          </span>
          <a
            href={`https://github.com/gustavofsantos/gustavosantos.dev/blob/master/data/blog/${slug}.mdx`}
            target="_blank"
            rel="noopener noreferrer"
          >
            📝 Edit this page
          </a>
        </section>
      </article>

      <section
        className="flex flex-col justify-center items-center w-full space-y-4 mt-12"
        data-testid="thanks-section"
      >
        <h3 className="text-5xl">{chooseOne(emojiOptions)}</h3>
        <p className="font-bold">
          Have a <span className="text-pink-600">{chooseOne(dayOptions)}</span>{' '}
          day
        </p>
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
