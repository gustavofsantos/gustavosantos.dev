import { OuterLink } from '../components/outer-link'
import { InnerLink } from '../components/inner-link'

export default function HomePage() {
  return (
    <article className="flex flex-col justify-center items-center pt-36 pb-36 text-coolGray-900 dark:text-coolGray-300 bg-white dark:bg-coolGray-900">
      <section className="flex flex-col w-full p-6 lg:p-0 max-w-lg lg:max-w-2xl">
        <h1 className="style-display mb-12 font-bold text-coolGray-900 dark:text-coolGray-50 text-3xl md:text-4xl lg:text-6xl">
          E aí 👋
        </h1>

        <section>
          <h3 className="style-display mb-8 font-semibold text-2xl text-coolGray-700 dark:text-coolGray-200">
            Meu nome é Gustavo Santos. Sou aquele cara que de TI que gosta de
            transformar ideias em código.
          </h3>

          <p className="text-lg mb-6">
            Esse aqui é o meu pedacinho na internet 🌎.
          </p>

          <p className="text-lg mb-6">É o meu jardim digital 🌱.</p>

          <p className="text-lg mb-6">
            Eventualmente escrevo algumas coisas no meu{' '}
            <InnerLink href="/knowledge">blog</InnerLink>.
          </p>

          <p className="text-lg mb-6">
            Aqui você vai encontrar algumas palavras e links para coisas que são
            do meu interesse. Esse site foi construído por mim, para mim. Mas
            talvez você encontre alguma coisa legal aqui.
          </p>

          <p className="text-lg mb-6">
            Atualmente trabalho na{' '}
            <OuterLink href="https://after.sale">aftersale</OuterLink> onde
            escrevo código, atuo no planejamento de atividades e vez e outra
            ajudo outras pessoas a crescerem nas suas carreiras.
          </p>

          <p className="text-lg mb-6">
            Se você quiser, pode me mandar uma DM no{' '}
            <OuterLink href="https://twitter.com/gufs0z">twitter</OuterLink>. Se
            você prefere a formalidade, então envie um{' '}
            <OuterLink href="mailto:gustavogustav54@gmail.com">
              e-mail
            </OuterLink>
            .
          </p>
        </section>

        <section>
          <h2 className="style-display text-3xl font-bold text-coolGray-900 dark:text-coolGray-50 mb-4 mt-4">
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
