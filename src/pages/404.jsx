import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-full">
      <article className="flex flex-col items-center space-y-6">
        <h1 className="font-extrabold text-5xl">Oops 🤨</h1>

        <h3>Acho que você se perdeu</h3>

        <p>
          Que tal voltar para a{' '}
          <Link href="/">
            <a>página inicial</a>
          </Link>{' '}
          ou dar uma olhadinha 👀 no meu{' '}
          <Link href="/a">
            <a>blog</a>
          </Link>
          ?
        </p>
      </article>
    </main>
  )
}
