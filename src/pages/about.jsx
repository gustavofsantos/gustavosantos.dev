import Head from 'next/head'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote'
import { MDXHelpers } from '../lib/mdx-helpers'

const components = {
  Image
}

export default function AboutPage({ content, mdxSource }) {
  return (
    <div className="flex flex-col w-full justify-start items-center pb-64 pt-24 bg-gray-50">
      <article className="segoe-font prose prose-lg prose-blue">
        <Head>
          <title>About</title>
        </Head>
        <MDXRemote {...mdxSource} components={{ ...components }} />


        <h3>Timeline</h3>

        <h4>2019 - Aftersale</h4>

        <p>
          Atualmente estou trabalhando na <b>aftersale</b> onde atuo entregando
          novos produtos, dando manutenção em produtos antigos e resolvendo
          novos problemas para que a empresa escale e cresça com velocidade e
          segurança.
        </p>

        <h4>2019 - Engenheiro de Computação 🤘</h4>

        <p>
          Em 2019 eu terminei o meu bacharelado em Engenharia de Computação.
          Depois de 5 anos de dedicação e esforço, com um trabalho de conclusão
          que envolveu o desenvolvimento de um esquema de autenticação e
          autorização em blockchain, consegui o título sem reprovações ou
          exames, com média final de 8,3.
        </p>

        <p>
          Neste mesmo ano eu dei um abraço na minha mãe e no meu irmão e saí da
          pequena Pelotas no RS em direção à capital do Paraná para tentar
          encontrar um emprego massa.
        </p>

        <p>
          Posso dizer que fui muito sortudo em encontrar a aftersale nesse
          caminho.
        </p>

        <h4>2019 - Estágio na Bridge Management Technologies</h4>

        <p>
          É desafiador o primeiro estágio, você até faz alguma ideia do que te
          espera, mas são tantas as possibilidades que é impossível se sentir
          preparado. Eu estava longe de me sentir preparado mas era um passo na
          minha vida que eu não poderia desperdiçar.
        </p>

        <p>
          Na Bridge eu atuei principalmente dando manutenção em sistemas
          legados. O que foi muito importante porque o código fonte legado da
          Bridge era melhor que muito código novo escrito usando frameworks
          modernos como React.
        </p>

        <p>
          Nessa etapa da minha vida eu aprendi muito sobre como sistemas
          internacionalizados funcionam. Vivenciei problemas com timezones, UI
          que compreendia a lingua inglesa, porém no alemão (com palavras
          gigantes) a interface volta e meia não funcionava muito bem.
        </p>

        <h4>2017 - Primeira experiência com IOT na vida real</h4>

        <p>Nesse projeto de graduação eu </p>

        <h4>
          2015 - Extensioniasta ensinando o Pensamento Computacional a crianças
          👨‍🏫
        </h4>

        <p>
          Esse projeto de extensão foi desafiador. Dizem que você só aprende
          alguma coisa se souber ensinar essa coisa. Imagine fazer isso
          ensinando conceitos e pensamentos computacionais para crianças do
          ensino fundamental em escolas públicas, de baixo orçamento e
          infraestrutura precária (basicamente as escolas que estudei no
          passado).
        </p>

        <p>
          Nesse projeto eu ensinei algoritmos e como montar sequências lógicas,
          bem como modelos mentais simplificados sobre programação. Foi muito
          valioso tanto para as crianças que até arriscaram programar no
          Scratch, quanto para mim e meus colegas.
        </p>

        <h4>
          2014 - Começo da nova jornada, agora como Eng de Computação (UFPel)
        </h4>

        <p>
          Era um misto de muita insegurança, ansiedade e sindrome do impostor. A
          maioria dos meus colegas tinham vindo de escolas muito melhores do que
          todas as que eu havia estudado antes. Engenharia de Computação na
          UFPel é um curso muito difícil de entrar.
        </p>

        <p>
          Várias vezes eu me sentia deslocado, mas a paixão pela computação me
          manteve firme e forte no primeiro semestre do curso.
        </p>

        <h4>2014 - Larguei o bacharelado em Meteorologia</h4>

        <p>
          Esse ano foi marcante na minha vida. Com a perda do meu pai, repensei
          o que eu estava fazendo com a minha vida. Decidi largar Meteorologia
          no último ano e me dedicar em estudar Computação, que era o que eu
          realmente tinha prazer em estudar.
        </p>

        <p>
          Nessa época eu já sabia programar em algumas linguagens, porém nada
          muito além do necessário para resolver exercícios do{' '}
          <a href="https://www.urionlinejudge.com.br/" target="_blank">
            URI
          </a>
          .
        </p>

        <h4>2013 - Monitor de Cálculo 3 🤓</h4>

        <p>
          Eu dava apoio para professores de Cálculo do Instituto de Matemática e
          Estatística, durante 20 horas por semana. As vezes eu lecionava
          algumas coisas como aulas de reforço. O conteúdo era desde limites,
          derivadas e integrais até derivadas pariciais, integrais múltiplas em
          espaços de N dimensões, rotacionais, divergentes, operações com
          Jacobianos e provavelmente mais algumas outras coisas que já esqueci.
        </p>

        <h4>2012 - Monitor de Algebra Linear e Geometria analítica 🤓</h4>

        <p>
          Eu dava apoio para professores do Instituto de Matemática e
          Estatística, durante 20 horas por semana.
        </p>

        <h4>2011 - Comecei o bacharelado em Meteorologia (UFPel)</h4>

        <p>
          Já no primeiro semestre tive o primeiro contato com programação usando
          a linguagem Fortran. Escrever os primeiros programas foi marcante na
          minha vida. Pela primeira vez eu tinha sentido algo de diferente, um
          poder de criação que eu nunca tinha experimentado antes.
        </p>

        <p>
          Aprender programação foi o tapa na cara que eu precisava. Nesse mesmo
          ano eu comecei a aprender Java e Python sozinho e descobri que eu
          conseguia aprender sozinho coisas relacionadas a computação,
          principalmente linguagens de programação.
        </p>

        <p>
          Não era o meu sonho cursar Meteorologia, foi o que eu consegui com a
          minha nota no ENEM. Nessa época eu não sabia pensar em muito além da
          próxima semana.
        </p>

        <h4>2011 - Ensino médio completado 🤘</h4>

        <p>
          Depois de três anos e muitas amizades, terminou uma etapa muito
          importante da minha vida que foi o ensino médio. Embora isso não seja
          nada especial para muitas importantes, para um rapaz que cresceu em
          uma familia onde os pais e parentes mais próximos não conseguiram
          completar o ensino fundamental, foi uma grande conquista.
        </p>
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const fileContent = MDXHelpers.readFile('about')
  const { data, content } = MDXHelpers.parseFile(fileContent)
  const mdxSource = await MDXHelpers.serializeFile(content)

  return {
    props: {
      content: fileContent,
      mdxSource
    }
  }
}
