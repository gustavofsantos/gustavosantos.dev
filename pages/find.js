import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { When } from '../components/when'
import { useSearch } from '../lib/hooks/use-search'
import { createSearchIndex } from '../lib/create-search-index'
import { useEffect } from 'react'

export default function FindPage({ searchIndex }) {
  const { search, results, searchText } = useSearch({ searchIndex })
  const router = useRouter()

  useEffect(() => {
    if (router.query.q) {
      search(router.query.q)
    }
  }, [router.query])

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
              placeholder="Ex: javascript"
              value={searchText}
              onChange={(ev) => search(ev.target.value)}
              className="pt-2 pb-2 pr-4 pl-4 border-2 border-gray-900 transition shadow-sm focus:shadow-md"
            />
          </div>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl divide-y divide-gray-100 dark:divide-gray-800">
            <When value={results.length === 0 && searchText === ''}>
              <p className="text-gray-700 text-center">
                Search by tags, titles, url and excerpts
              </p>
            </When>

            <When value={results.length === 0 && searchText !== ''}>
              <p className="text-gray-700 text-center">No result found</p>
            </When>

            <When value={results.length > 0}>
              {() => (
                <ul className="divide-y divide-y-4">
                  {results.map((result) => (
                    <li className="pt-4 pb-4" key={result.key}>
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
  const searchIndex = await createSearchIndex()

  return {
    props: { searchIndex }
  }
}
