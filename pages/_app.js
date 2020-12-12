import Head from "next/head";
import { Header } from "../components/header";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gustavo Santos</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className="h-full w-full pt-10 bg-white dark:bg-gray-900">
        <Component {...pageProps} />
      </main>
    </>
  );
}
