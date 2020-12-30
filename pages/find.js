import Link from 'next/link'
import Head from 'next/head'
import { When } from '../components/when'
import { useSearch } from '../lib/hooks/use-search'
import { createSearchIndex } from '../lib/create-search-index'

export default function FindPage({ searchIndex }) {
  const { search, results, searchText } = useSearch({ searchIndex })

  return (
    <>
      <Head>
        <title>Gustavo Santos | Busca</title>

        <meta
          name="description"
          content="Procure por qualquer postagem no blog ou conhecimento em geral como trechos de código, comandos e conceitos."
          key="siteDescription"
        />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Gustavo Santos" />
        <meta
          name="og:description"
          property="og:description"
          content="Procure por qualquer postagem no blog ou conhecimento em geral como trechos de código, comandos e conceitos."
        />
        <meta property="og:site_name" content="Gustavo Santos" />
        <meta property="og:url" content="https://www.gustavosantos.dev" />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10 w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8">
            Busca por qualquer coisa
          </h1>
          <div className="flex justify-center items-center">
            <input
              placeholder="Escreva aqui"
              value={searchText}
              onChange={(ev) => search(ev.target.value)}
              className="pt-2 pb-2 pr-4 pl-4 border border-gray-300 rounded-md transition shadow-sm focus:shadow-md"
            />
          </div>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl divide-y divide-gray-100 dark:divide-gray-800">
            <When value={results.length === 0 && searchText === ''}>
              <p className="text-gray-700 text-center">
                Procure por tags, títulos, trechos de url e resumos
              </p>
            </When>

            <When value={results.length === 0 && searchText !== ''}>
              <p className="text-gray-700 text-center">
                Nenhum resultado encontrado
              </p>
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
  const searchIndex = await createSearchIndex()

  return {
    props: { searchIndex }
  }
}
