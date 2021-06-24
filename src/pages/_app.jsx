import Head from 'next/head'
import Script from 'next/script'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Gustavo Santos, curioso, desenvolvedor e metido a escritor nas horas
          vagas
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Gustavo Santos" key="authorName" />
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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
            rel="stylesheet"
            async
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&display=swap"
            rel="stylesheet"
            async
          />
      </Head>

      <main className="h-full w-full text-lg text-gray-800 dark:text-coolGray-400 bg-gray-50 dark:bg-gray-900">
        <Component {...pageProps} />
        <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-MJJHV4T" />
      </main>
    </>
  )
}
