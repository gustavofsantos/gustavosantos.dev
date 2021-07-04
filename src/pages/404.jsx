import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="flex flex-col bg-cararra-500 dark:bg-nile-blue-700 text-nile-blue-500 dark:text-cararra-500 justify-center items-center w-full h-full">
      <article className="flex flex-col items-center space-y-6">
        <h1 className="inter-font font-extrabold text-5xl">Oops 🤨</h1>

        <h2 className="text-3xl">You seems lost</h2>

        <p>
          What about go to{' '}
          <Link href="/">
            <a>index page?</a>
          </Link>{' '}
          or maybe give a look ay my{' '}
          <Link href="/a">
            <a>blog</a>
          </Link>
          ?
        </p>
      </article>
    </main>
  )
}
