import Head from 'next/head'
import { Header } from '../components/header'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos</title>
        <meta charSet="utf-8" />
        <html lang="pt_BR" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Gustavo Santos" key="authorName" />
        <meta
          name="description"
          content="Esse site contém links para meus projetos, redes sociais e algumas postagens sobre programação e tecnologia"
          key="siteDescription"
        />

        <meta property="og:type" content="website" />
        <meta name="og:title" property="og:title" content="Site do Gustavo" />
        <meta
          name="og:description"
          property="og:description"
          content="Esse site contém links para meus projetos, redes sociais e algumas postagens sobre programação e tecnologia"
        />
        <meta property="og:site_name" content="Gustavo Santos" />
        <meta property="og:url" content="https://www.gustavosantos.dev" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          key="fontSans"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="h-full w-full pt-10 bg-white dark:bg-black">
        <Component {...pageProps} />
      </main>
    </>
  )
}
