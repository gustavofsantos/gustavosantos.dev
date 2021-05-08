import Head from 'next/head'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos, Dev e escritor nas horas vagas</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Gustavo Santos" key="authorName" />
        <meta
          name="description"
          content="Esse site contém links para meus projetos, redes sociais e algumas postagens sobre programação e tecnologia"
          key="siteDescription"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Site do Gustavo" />
        <meta
          name="og:description"
          property="og:description"
          content="Esse site contém links para meus projetos, redes sociais e algumas postagens sobre programação e tecnologia"
        />
        <meta property="og:site_name" content="Gustavo Santos" />
        <meta property="og:url" content="https://www.gustavosantos.dev" />
      </Head>

      <main className="h-full w-full text-lg text-coolGray-900 dark:text-coolGray-400 bg-white dark:bg-coolGray-900">
        <Component {...pageProps} />
      </main>
    </>
  )
}