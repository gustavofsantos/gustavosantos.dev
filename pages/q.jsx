export default function QueryPage() {
  const router = useRouter()

  return (
    <main className="flex flex-col justify-start items-center">
      <article className="prose prose-blue w-full md:max-w-lg lg:max-w-xl">
        <h1>Pesquisa</h1>
      </article>
    </main>
  )
}

export function getStaticProps() {
  return {
    props: {}
  }
}
