import Link from 'next/link'
import Image from 'next/image'

const appsUrl = [
  {
    name: 'Timer',
    description:
      'Contador simples com a possibilidade de pausar e parar a contagem.',
    tech: '💻 React, Next.js, Xstate',
    url: 'timer.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/timer-xstate-demo'
  },
  {
    name: 'Clipboard',
    description: 'Uma área de transferência simples.',
    tech: '💻 React, Next.js, Firebase, TailwindCSS',
    url: 'clipboard.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/web-clipboard-next'
  },
  {
    name: 'Hell Yes or No',
    description: 'Decida rapidamente se você deve ou não fazer alguma coisa.',
    tech: '💻 React, Aleph.js, Xstate',
    url: 'hyon.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/aleph-hell-yes-or-no'
  },
  {
    name: 'Pomodoro timer',
    description: 'App para trabalhar com foco e qualidade',
    tech: '💻 React, Next.js, TypeScript, TailwindCSS',
    url: 'pomodoro.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/pomodoro-web'
  },
  {
    name: 'Shhh',
    description: 'Compartilhe segredos sem medo',
    tech: '💻 React, Next.js, TailwindCSS',
    url: 'shhh.gustavosantos.dev',
    githubUrl: 'https://github.com/gustavofsantos/shhh'
  }
]

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center items-center pt-36 pb-36 text-coolGray-900 dark:text-coolGray-300 bg-white dark:bg-coolGray-900">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="mb-12 domine-font font-bold text-gray-900 dark:text-gray-50 text-3xl md:text-4xl lg:text-6xl">
          Oi, Gustavo aqui👋
        </h1>

        <section>
          <p className="text-lg mb-6">
            Eu sou um baita curioso, desenvolvedor, fazedor de pão e metido a
            escritor nas horas vagas.
          </p>

          <p className="text-lg mb-6">
            Esse aqui é o meu pedaço na internet 🌎.
          </p>

          <p className="text-lg mb-6">
            Eventualmente escrevo algumas coisas no meu{' '}
            <Link href="/a">
              <a>blog</a>
            </Link>
            .
          </p>

          <p className="text-lg mb-6">
            Aqui você vai encontrar algumas palavras e links para coisas que são
            do meu interesse. Esse site foi construído por mim, para mim. Mas
            talvez você encontre alguma coisa legal aqui.
          </p>

          <p className="text-lg mb-6">
            Atualmente trabalho na{' '}
            <a
              href="https://after.sale"
              target="_blank"
              rel="noopener noreferrer"
            >
              aftersale
            </a>{' '}
            onde escrevo código, atuo no planejamento e execução de atividades e
            vez e outra ajudo outras pessoas a crescerem nas suas carreiras.
          </p>

          <p className="text-lg mb-6">
            Se você quiser, pode me mandar uma DM no{' '}
            <a
              href="https://twitter.com/gufs0z"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter
            </a>
            . Se você prefere a formalidade, então envie um{' '}
            <a
              href="mailto:gustavogustav54@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              e-mail
            </a>
            .
          </p>
        </section>

        <section data-testid="apps-section">
          <h2 className="text-3xl font-bold text-coolGray-900 dark:text-coolGray-50 mb-4 mt-4">
            Apps open-source
          </h2>

          <div className="flex flex-col space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0">
            {appsUrl.map((description) => (
              <div className="flex flex-col space-y-4">
                <div className="w-full">
                  <div className="rounded-lg shadow-lg mb-2">
                    <Image
                      src={`/images/${description.url}_.png`}
                      layout="responsive"
                      width={1328}
                      height={954}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{description.name}</h3>
                    <p>{description.description}</p>
                    <p>{description.tech}</p>

                    <div className="flex space-x-2">
                      <a
                        href={`https://${description.url}`}
                        target="_blank"
                        rel="noopener norefereer"
                      >
                        Acessar
                      </a>
                      <a
                        href={description.githubUrl}
                        target="_blank"
                        rel="noopener norefereer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </article>
  )
}
