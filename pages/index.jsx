import { OuterLink } from '../components/outer-link'
import { InnerLink } from '../components/inner-link'

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center items-center pt-36 pb-36 text-coolGray-900 dark:text-coolGray-300 bg-white dark:bg-coolGray-900">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="mb-12 font-bold text-coolGray-900 dark:text-coolGray-50 text-3xl md:text-4xl lg:text-6xl">
          Hey, Gustavo aqui👋
        </h1>

        <section>
          <p className="text-lg mb-6">
            Esse aqui é o meu pedacinho na internet 🌎. O meu jardim digital 🌱.
          </p>

          <p className="text-lg mb-6">
            Eventualmente escrevo algumas coisas no meu{' '}
            <InnerLink href="/a">blog</InnerLink>.
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
            onde escrevo código, atuo no planejamento de atividades e vez e
            outra ajudo outras pessoas a crescerem nas suas carreiras.
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

        <section>
          <h2 className="text-3xl font-bold text-coolGray-900 dark:text-coolGray-50 mb-4 mt-4">
            Projetos open-source
          </h2>

          <section className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
                <a
                  href="https://clipboard.gustavosantos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web Clipboard
                </a>
              </h3>
              <p>Um clipboard simples na web.</p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
                <a
                  href="https://shhh.gustavosantos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shhh
                </a>
              </h3>
              <p>
                Compartilhamento seguro de segredos.{' '}
                <OuterLink href="https://https://github.com/gustavofsantos/shhh">
                  Código fonte.
                </OuterLink>
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-lg font-bold text-coolGray-800 dark:text-coolGray-300">
                <a
                  href="https://timer.gustavosantos.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Quick timer
                </a>
              </h3>
              <p>
                Timer simples escrito com uma máquina de estado e testes
                generativos.{' '}
                <OuterLink href="https://github.com/gustavofsantos/timer-xstate-demo">
                  Código fonte
                </OuterLink>
                .
              </p>
            </div>
          </section>
        </section>
      </section>
    </article>
  )
}
