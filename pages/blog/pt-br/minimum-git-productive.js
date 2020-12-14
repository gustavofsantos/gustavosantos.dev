import Link from 'next/link'
import { BlogPage } from '../../../components/blog/blog-page'
import { BlogParagraph } from '../../../components/blog/blog-paragraph'
import { BlogSubtitle } from '../../../components/blog/blog-subtitle'
import { BlogResume } from '../../../components/blog/blog-resume'
import { BlogTitle } from '../../../components/blog/blog-title'
import { CodeSnippet } from '../../../components/code-snippet'

export const metadata = {
  title: 'O mínimo de git que você precisa saber para trabalhar com confiança',
  lang: '🇧🇷',
  resume: `Vai trabalhar em uma funcionalidade nova? git checkout -b feature/*. Fez cagada? git reset`,
  href: '/blog/pt-br/minimum-git-productive'
}

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>
      <BlogSubtitle>O meu maior defeito</BlogSubtitle>
      <BlogParagraph>
        Eu tenho falhas em muitos aspectos, mas tem uma coisa que acaba
        inclusive me prejudicando profissionalmente: falha na memória. Sério, a
        minha capacidade de reter informação é péssima, pode ser comparada com a
        capacidade que um passarinho tem pra lembrar quem foi o humano que deu
        alpiste.
      </BlogParagraph>
      Provavelmente você não percebeu ainda, até porque nós não nos conhecemos,
      porém eu crio diversas armadilhas pra eu mesmo cair quando tiver prestes a
      fazer cagada. Nesse texto vou compartilhar algumas coisas que você também
      pode fazer e ainda melhorar suas skills com git.
      <BlogSubtitle>Memorize somente o necessário</BlogSubtitle>
      Memorizar só o necessário para fazer o trabalho com um certo nível de
      descencia é essencial. Você não vai memorizar tudo que o git faz, nem
      deveria fazer isso. Você deveria encarar você mesmo como aquela classe que
      está precisando de uma refatoração, mas você somente refatora o necessário
      para concluir o trabalho. Melhoria constante deveria ser seu mantra. Você
      é como uma base de código que está constantemente recebendo melhorias,
      refatorações, testes e eventualmente alguns bugs. É, você é a melhor
      pessoa que existe pra te levar a dar um tiro no pé. Portanto vamos começar
      com o básico: <b>git checkout -b feature/XXX</b>
      Não faça commits na master em seu emprego. Se sua equipe trabalha com três
      ambientes, assim como a minha, você provavelmente tem um ambiente de
      testes, que é usado pra quebrar o sistema. Quebrar o sistema é importante,
      quebrar o sistema como se fosse em produção é ainda mais importante. Sua
      equipe deveria ter um ambiente de produção pronto para os desenvolvedores
      quebrar. Aqui vai o primeiro conselho: nunca misture esse ambiente com o
      seu branch de trabalho.
    </BlogPage>
  )
}
