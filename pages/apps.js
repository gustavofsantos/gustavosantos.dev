import Head from 'next/head'
import { Footer } from '../components/footer'
import { AppCardShhh } from '../components/apps/app-card-shhh'
import { AppCardTimerMachine } from '../components/apps/app-card-timer-machine'

export default function AppsPage() {
  return (
    <>
      <Head>
        <title>Gustavo Santos | Os Apps</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <article className="flex flex-col items-center">
        <section className="pt-20 pb-10">
          <h1 className="poppins text-3xl md:text-4xl lg:text-5xl font-bold text-center">
            Os Apps
          </h1>
        </section>

        <div className="flex flex-col items-center pb-36 w-full">
          <section className="flex flex-col w-full pl-4 pr-4 md:max-w-lg md:p-0 lg:max-w-xl divide-y divide-gray-100 dark:divide-gray-800">
            <AppCardShhh />
            <AppCardTimerMachine />
          </section>
        </div>

        <Footer />
      </article>
    </>
  )
}
