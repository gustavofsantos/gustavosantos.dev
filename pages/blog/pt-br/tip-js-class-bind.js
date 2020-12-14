import Link from "next/link";
import { BlogPage } from "../../../components/blog/blog-page";
import { BlogParagraph } from "../../../components/blog/blog-paragraph";
import { BlogSubtitle } from "../../../components/blog/blog-subtitle";
import { BlogResume } from "../../../components/blog/blog-resume";
import { BlogTitle } from "../../../components/blog/blog-title";
import { CodeSnippet } from '../../../components/code-snippet'

export const metadata = {
  title: "Dica: Faça o bind em métodos de classes ao usar inversão de controle",
  lang: "🇧🇷",
  resume: `
    Nunca esqueça de anexar o escopo da classe ao passar o controle para um executor externo. Para isso use o método bind ou arrow functions.`,
  href: "/blog/pt-br/tip-js-class-bind",
};

const snippetWrong = `// example1.js

class Observer {
  subscribe(cb) {
    setTimeout(cb, 1000)
  }
}

class Chat {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe(this.handleMessage)
  }

  handleMessage(message) {
    this.print(message)
  }

  print(receivedMessageText) {
    console.log('> ' + receivedMessageText)
  }
}

const chat = new Chat(new Observer()).start()
`

const snippetLogTimerContext = `// example2.js

class Observer {
  subscribe(cb) {
    setTimeout(cb, 1000)
  }
}

class Chat {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe(this.handleMessage)
  }

  handleMessage(message) {
    console.log(this)
    this.print(message)
  }

  print(receivedMessageText) {
    console.log('> ' + receivedMessageText)
  }
}

const chat = new Chat(new Observer()).start()`

const snippetRight = `// example3.js


`

export default function Post() {
  return (
    <BlogPage
      title={metadata.title}
      // imgPath="/images/blog/js-class-tip-bind/image.jpg"
      // imgAlt="Blog landing image"
      // imgAuthorName="Hello I'm Nik"
      // imgAuthorHref="https://unsplash.com/@helloimnik?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
    >
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>

      <BlogSubtitle>Vamos encarar o problema</BlogSubtitle>

      <BlogParagraph>
        Nós temos uma classe chamada <code>Chat</code> que escuta por mensagens entregues por uma dependência chamada <code>observer</code>. O trabalho da classe <code>Chat</code> é, sempre que receber uma mensagem, mostrar ela no console.
      </BlogParagraph>
      
      <BlogParagraph>
        Uma solução simples pra esse problema é a seguinte:
      </BlogParagraph>

      <CodeSnippet>
        {snippetWrong}
      </CodeSnippet>


      <BlogParagraph>
        Mas dê uma olhada na linha 15, você consegue identificar algum problema?
      </BlogParagraph>

      <BlogParagraph>
        Essa forma de design de código é muito comum, é o que chamamos de inversão de controle. Basicamente deixamos que o método <code>.subscribe</code> execute o método <code>Chat#handleMessage</code> quando bem entender.
      </BlogParagraph>

      <BlogParagraph>
        Entretanto, da forma que o código está escrito, temos um problema de delay de criação de escopo. Classes em JavaScript são nada mais que um <i>syntax sugar</i> em cima do mecanismo de protótipos.
      </BlogParagraph>

      <BlogParagraph>
      O que isso significa? Sempre que uma classe é definida em JavaScript, cada método dessa classe é encarado com uma função usando a sintaxe clássica de funções (usando a palavra chave <code>function</code>). É dessa forma que temos acesso ao <code>this</code> dentro de cada método.
      </BlogParagraph>

      <BlogParagraph>
        
      O problema é que engines que executam JavaScript não criam o contexto de execução dessas funções até que a função seja executada. Executando o código acima no node temos o seguinte erro:
      </BlogParagraph>

      <code>
$ node example1.js

    this.print(message)
         ^

TypeError: this.print is not a function
      </code>

      <BlogParagraph>
       Note que existe um objeto <code>this</code> no contexto da execução, porém o método <code>print</code> não existe no <code>this</code>. Isso acontece porque o contexto anexado ao callback executado é o contexto do <code>setTimeout</code>.
      </BlogParagraph>

      <BlogSubtitle>WTF??</BlogSubtitle>

      <BlogParagraph>
        Por mais estranho que pareça, nós conseguimos acesso ao contexto de quem está chamando o método <code>Chat#handleMessage</code>. Veja no exemplo abaixo que foi adicionado um log no console antes de chamar o método <code>.print</code> para mostrar o objeto this.
      </BlogParagraph>

      <CodeSnippet>
        {snippetLogTimerContext}
      </CodeSnippet>

      <BlogParagraph>
        Executando o código novamente, veja que interessante:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false}>
        {`
node example1.js

>> 1000

    this.print(message)
         ^

TypeError: this.print is not a function
`}
      </CodeSnippet>

      <BlogParagraph>
        O que aconteceu é que, o contexto de execução do método <code>Chat#handleMessage</code> só é criado quando o callback <code>cb</code> é executado. Nesse caso, o contexto anexado ao callback é o contexto do timer, dessa forma temos acesso ao <code>this</code> do <code>setTimeout</code> dentro do método <code>Chat#handleMessage</code>!
      </BlogParagraph>

      <BlogParagraph>
        E isso é bom? Não! É terrivelmente ruim. Porém é o comportamento do JavaScript. Esse comportamento esquisito deveria nos afastar da linguagem? Particularmente eu acredito que não. JavaScript é uma linguagem incrível com alguns defeitos que não podem ser concertados.
      </BlogParagraph>

      <BlogSubtitle>
        Corrigindo o problema
      </BlogSubtitle>

      <BlogParagraph>
        Existem algumas formas bem simples de corrigir o problema encontrado. Uma delas é fazer o que todo esse texto se propõe a explicar: usar o método <code>bind</code>.
      </BlogParagraph>

      <BlogParagraph>
        Quando é feito o <code>bind</code> de uma função com um determinado objeto, este objeto é usado como o valor do this dessa função quando a função for executada. Em outras palavras, nós conseguimos anexar o contexto da classe na qual o método está definido e, quando esse método for executado pelo controle externo, a função vai encontrar todos os atributos e outros métodos da classe anexados ao <code>this</code>.
      </BlogParagraph>

      <BlogParagraph>
        Executando o programa <i>example3.js</i> temos a seguinte saída, que é o que de fato estávamos esperando:
      </BlogParagraph>


      <CodeSnippet showLineNumbers={false}>
        {`
$ deno run public/code/blog/tip-js-class-bind/example3.js 
> Hello you!
`}
      </CodeSnippet>      
    </BlogPage>  
  );
}
