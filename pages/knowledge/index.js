import Head from 'next/head'
import { SnippetList } from '../../components/snippets/snippet-list'
import { getAllSnippets } from '../../lib/snippets'

export default function KnowledgePage({ snippets }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Knowledge</title>
      </Head>
      <article className="flex flex-col items-center bg-white dark:bg-coolGray-900">
        <section className="pt-20 pb-10 w-full pl-4 pr-4 md:max-w-xl lg:max-w-3xl">
          <h1 className="style-display text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-6 text-gray-800 dark:text-gray-100">
            Knowledge
          </h1>
          <h3 className="text-coolGray-700 dark:text-coolGray-300 text-lg text-center">
            A collection of code snippets, commands, config and tooling that
            could be very useful
          </h3>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-xl lg:max-w-3xl md:p-0">
            <SnippetList snippets={snippets} />
          </section>
        </div>
      </article>
    </>
  )
}

export async function getStaticProps() {
  const snippets = await getAllSnippets()

  return {
    props: { snippets }
  }
}
