import { InnerLink } from '../../components/inner-link'
import { getAllNews } from '../../lib/news'

export default function NewsPage({ news }) {
  console.log({ news })

  return (
    <article>
      <section role="heading">
        <h1>Newsletter e dicas de conteúdo</h1>
      </section>

      <section>
        <p>
          Toda quinta feira você terá acesso ao conteúdo curado que eu mesmo
          consumo e indico a outros devs. Porém além de notícias e tutoriais,
          você vai encontrar três talks que vale muito a pena assistir! Boas
          palestras são atemporais, então você não vai encontrar somente
          conteúdo recente, mas também pérolas que estão perdidas no YouTube.
        </p>
      </section>

      <section>
        <span>lista...</span>
        <ul>
          {news.map((entry) => (
            <li key={entry.href} className="flex flex-col">
              <InnerLink href={entry.href}>
                <h3 className="text-xl font-bold">{entry.meta.title}</h3>
              </InnerLink>
              <p>{entry.meta.excerpt}</p>
              <span>{new Date(entry.meta.createdAt).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

export async function getStaticProps() {
  const news = await getAllNews()

  return {
    props: {
      news
    }
  }
}
