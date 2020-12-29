import Link from 'next/link'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { When } from '../components/when'
import { getAllSnippets } from '../lib/snippets'
import { searchByTerm } from '../lib/search'
import { getAllPosts } from '../lib/blog'

export default function FindPage({ searchIndex }) {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (search.trim().length === 0) {
      return setResults([])
    }
    if (search.trim().length > 0) {
      return setResults(searchByTerm(search, searchIndex))
    }
  }, [search])

  return (
    <>
      <Head>
        <title>Gustavo Santos | Find</title>

        <meta
          name="description"
          content="Find any blog post and knowledge as code snippets, commands and concepts"
          key="siteDescription"
        />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Gustavo Santos" />
        <meta
          name="og:description"
          property="og:description"
          content="Find any blog post and knowledge as code snippets, commands and concepts"
        />
        <meta property="og:site_name" content="Gustavo Santos" />
        <meta property="og:url" content="https://www.gustavosantos.dev" />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10 w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Search anything
          </h1>
          <div className="flex justify-center items-center">
            <input
              placeholder="Type here"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              className="pt-2 pb-2 pr-4 pl-4 border border-gray-300 rounded-md transition shadow-sm focus:shadow-md"
            />
          </div>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl divide-y divide-gray-100 dark:divide-gray-800">
            <When value={results.length === 0 && search === ''}>
              <p className="text-gray-700 text-center">
                Search by tags, titles, url and excerpts
              </p>
            </When>

            <When value={results.length === 0 && search !== ''}>
              <p className="text-gray-700 text-center">No result found</p>
            </When>

            <When value={results.length > 0}>
              {() => (
                <ul className="divide-y divide-y-4">
                  {results.map((result) => (
                    <li className="pt-4 pb-4">
                      <Link href={result.href}>
                        <h2 className="poppins font-bold text-xl text-gray-900 pb-2 cursor-pointer">
                          {result.title}
                        </h2>
                      </Link>

                      <p className="text-gray-700">{result.excerpt}</p>
                    </li>
                  ))}
                </ul>
              )}
            </When>
          </section>
        </div>
      </article>
    </>
  )
}

export async function getStaticProps() {
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

  const blogPosts = await getAllPosts()
  blogPosts.forEach((post) => {
    searchIndex[post.href] = {
      title: post.meta.title,
      href: post.href,
      excerpt: post.meta.excerpt,
      tags: post.meta.tags
    }
  })

  return {
    props: { searchIndex }
  }
}
