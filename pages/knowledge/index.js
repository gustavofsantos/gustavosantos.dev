import Head from 'next/head'
import { SnippetList } from '../../components/snippets/snippet-list'
import { getAllSnippets } from '../../lib/snippets'

export default function KnowledgePage({ snippets }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Knowledge</title>
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10 w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center pb-6">
            Knowledge
          </h1>
          <h3 className="text-gray-700 text-lg text-center">
            A collection of code snippets, commands, config and tooling that
            could be very useful
          </h3>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg lg:max-w-xl md:p-0">
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
