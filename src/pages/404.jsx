import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <article className="flex flex-col items-center space-y-6">
        <h1 className="font-extrabold text-5xl">Oops 🤨</h1>

        <h3>You seems lost</h3>

        <p>
          What about go to{' '}
          <Link href="/">
            <a>index page?</a>
          </Link>{' '}
          or maybe give a look ay my {' '}
          <Link href="/a">
            <a>blog</a>
          </Link>
          ?
        </p>
      </article>
    </main>
  )
}
