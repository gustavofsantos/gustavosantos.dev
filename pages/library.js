import Head from 'next/head'
import { Footer } from '../components/footer'

export default function LibraryPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Library</title>
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="style-display text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Library
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl">
            <p>
              A collection of things that I've already read and I think that
              worth reading.
            </p>

            <div>
              <h3>The Pragmatic Programmer</h3>
            </div>
          </section>
        </div>
      </article>
      <Footer />
    </>
  )
}
