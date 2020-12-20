import { BlogPage } from '../../../components/blog/blog-page'
import { BlogParagraph } from '../../../components/blog/blog-paragraph'
import { BlogSubtitle } from '../../../components/blog/blog-subtitle'
import { BlogResume } from '../../../components/blog/blog-resume'
import { BlogTitle } from '../../../components/blog/blog-title'
import { CodeSnippet } from '../../../components/code-snippet'

export const metadata = {
  title: 'Dica: Faça o bind em métodos de classes ao usar inversão de controle',
  lang: '🇧🇷',
  resume: `
    Nunca esqueça de anexar o escopo da classe ao passar o controle para um executor externo. Para isso use o método bind ou arrow functions.`,
  href: '/blog/pt-br/tip-js-class-bind'
}

const snippetWrong = `// example1.js

class Observer {
  message = "Hello you!"

  subscribe(cb) {
    setTimeout(() => cb(this.message), 1000)
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

const chat = new Chat(new Observer()).start()`

const snippetLogTimerContext = `// example2.js

class Observer {
  message = "Hello you!"

  subscribe(cb) {
    setTimeout(() => cb(this.message), 1000)
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

const chat = new Chat(new Observer()).start()
`

const snippetRight = `// example3.js

class Observer {
  message = "Hello you!"

  subscribe(cb) {
    setTimeout(() => cb(this.message), 1000)
  }
}

class Chat {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe(this.handleMessage.bind(this))
  }

  handleMessage(message) {
    this.print(message)
  }

  print(receivedMessageText) {
    console.log('> ' + receivedMessageText)
  }
}

const chat = new Chat(new Observer()).start()`

const snippetExample4 = `// example4.js

class Observer {
  message = "Hello you!"

  subscribe(cb) {
    setTimeout(() => cb(this.message), 1000)
  }
}

class Chat {
  constructor(observer) {
    this._observer = observer
  }

  start() {
    this._observer.subscribe((message) => this.handleMessage(message))
  }

  handleMessage(message) {
    this.print(message)
  }

  print(receivedMessageText) {
    console.log('> ' + receivedMessageText)
  }
}

const chat = new Chat(new Observer()).start()`

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>

      <BlogSubtitle>Vamos encarar o problema</BlogSubtitle>

      <BlogParagraph>
        Nós temos uma classe chamada <code>Chat</code> que escuta por mensagens
        entregues por uma dependência chamada <code>observer</code>. O trabalho
        da classe <code>Chat</code> é, sempre que receber uma mensagem, mostrar
        ela no console.
      </BlogParagraph>

      <BlogParagraph>
        Uma solução simples pra esse problema é a seguinte:
      </BlogParagraph>

      <CodeSnippet>{snippetWrong}</CodeSnippet>

      <BlogParagraph>
        Mas dê uma olhada na linha 17, você consegue identificar algum problema?
      </BlogParagraph>

      <BlogParagraph>
        Essa forma de design de código é muito comum, é o que chamamos de
        inversão de controle. Basicamente deixamos que o método{' '}
        <code>observer#subscribe</code> execute o método{' '}
        <code>Chat#handleMessage</code> quando bem entender.
      </BlogParagraph>

      <BlogParagraph>
        Entretanto, da forma que o código está escrito, temos um problema de
        delay de criação de escopo. Classes em JavaScript são nada mais que um{' '}
        <i>syntax sugar</i> em cima do mecanismo de protótipos.
      </BlogParagraph>

      <BlogParagraph>
        O que isso significa? Sempre que uma classe é definida em JavaScript,
        cada método dessa classe é encarado como uma função usando a sintaxe
        clássica de funções (usando a palavra chave <code>function</code>). É
        dessa forma que temos acesso ao <code>this</code> dentro de cada método
        (lembre-se, arrow functions não tem um <code>this</code> próprio, mas
        podem acessar o contexto lexico mais próximo de seu contexto).
      </BlogParagraph>

      <BlogParagraph>
        O problema é que engines que executam JavaScript não criam o contexto de
        execução dessas funções até que a função seja executada. Executando o
        código acima no <code>deno</code> temos o seguinte erro:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false}>
        {`$ deno run https://gustavosantos.dev/code/blog/tip-js-class-bind/example1.js

error: Uncaught TypeError: Cannot read property 'print' of undefined
    this.print(message)
         ^
    at handleMessage (https://gustavosantos.dev/code/blog/tip-js-class-bind/example1.js:19:10)
    at https://gustavosantos.dev/code/blog/tip-js-class-bind/example1.js:5:22
    at fire (deno:cli/rt/11_timers.js:441:5)
    at handleTimerMacrotask (deno:cli/rt/11_timers.js:302:7)`}
      </CodeSnippet>

      <BlogParagraph>
        Note que existe um nome <code>this</code> no contexto da execução, porém
        o seu valor é <code>undefined</code>. Já era esperado o nome{' '}
        <code>this</code> existir já que ele é criado durante o <i>parsing</i>{' '}
        do programa.
      </BlogParagraph>

      <BlogSubtitle>Entendendo o problema</BlogSubtitle>

      <BlogParagraph>
        O motivo do valor do <code>this</code> ser <code>undefined</code> é
        porque o callback (<code>cb</code>) foi chamado fora do escopo da classe{' '}
        <code>Chat</code>. Lembre-se, a engine vai esperar até o último momento
        para criar os contextos de execução das funções. O V8, SpiderMonkey ou
        qualquer outra engine que executa JavaScript não pode se dar ao luxo de
        criar o escopo de todas as funções antes de começar a execução de
        programas JavaScript.
      </BlogParagraph>

      <BlogParagraph>
        Quando nós passamos um método de uma classe para um controle externo,
        eventualmente, chamar esse método; precisamos indicar explicitamente ao
        JavaScript para anexar a esse método o contexto da classe antes de
        passar a função a diante. Engines JavaScript não criam links entre
        métodos e classes automaticamente. Esse processo é custoso em termos de
        memória e processamento.
      </BlogParagraph>

      <BlogParagraph>
        Dessa forma, sempre que um callback que dependende de um{' '}
        <code>this</code> é passado para um executor externo e não é feito
        nenhum anexo de contexto nessa função, o valor do <code>this</code> não
        será definido.
      </BlogParagraph>

      <BlogParagraph>
        Você pode simular o mesmo esquema em uma classe bem mais simples, veja o
        seguinte:
      </BlogParagraph>

      <CodeSnippet>
        {`// example_class_a.js

class A {
  name = "class A"

  run() {
    [1,2,3].map(this.handle)
  }

  handle(index) {
    console.log(index, ":", this.name)
  }
}

new A().run()`}
      </CodeSnippet>

      <BlogParagraph>
        Executando o código acima com o deno, vemos o mesmo erro ocorrer
        novamente.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} language="markup">
        {`$ deno run gustavosantos.dev/code/blog/tip-js-class-bind/example_class_a.js

error: Uncaught TypeError: Cannot read property 'name' of undefined
    console.log(index, ":", this.name)
                                 ^
    at handle (gustavosantos.dev/code/blog/tip-js-class-bind/example_class_a.js:9:34)
    at Array.map (<anonymous>)
    at A.run (gustavosantos.dev/code/blog/tip-js-class-bind/example_class_a.js:5:13)
    at gustavosantos.dev/code/blog/tip-js-class-bind/example_class_a.js:13:9`}
      </CodeSnippet>

      <BlogParagraph>
        O problema é o mesmo que enfrentamos anteriormente. O executor externo
        nesse caso é o método <code>map</code>. Quando a função{' '}
        <code>A#handle</code> é passada para o <code>map</code>, o contexto de
        execução de <code>handle</code> só será criado quando for executado e,
        novamente, por padrão, o valor do <code>this</code> não será definido
        automaticamente.
      </BlogParagraph>

      <BlogSubtitle>Corrigindo o problema</BlogSubtitle>

      <BlogParagraph>
        Existem algumas formas bem simples de corrigir o problema encontrado.
        Uma delas é fazer o que todo esse texto se propõe a explicar: usar o
        método <code>bind</code>.
      </BlogParagraph>

      <CodeSnippet>{snippetRight}</CodeSnippet>

      <BlogParagraph>
        Quando é feito o <code>bind</code> de uma função com um determinado
        objeto, este objeto é usado como o valor do this dessa função quando a
        função for executada. Em outras palavras, nós conseguimos anexar o
        contexto da classe na qual o método está definido e, quando esse método
        for executado pelo controle externo, a função vai encontrar todos os
        atributos e outros métodos da classe anexados ao <code>this</code>.
      </BlogParagraph>

      <BlogParagraph>
        Executando o programa <i>example3.js</i> temos a seguinte saída, que é o
        que de fato estávamos esperando:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} language="markup">
        {`
$ deno run https://gustavosantos.dev/code/blog/tip-js-class-bind/example3.js
> Hello you!
`}
      </CodeSnippet>

      <BlogParagraph>
        Você pode obter o mesmo resultado usando <i>arrow functions</i>. Dessa
        forma, no momento da definição da arrow function, o escopo de execução
        daquela função vai ser criado e anexado a função. Assim, quando o
        callback for executado pelo controle externo, o <code>this</code> já vai
        estar populado corretamente. Veja o exemplo abaixo.
      </BlogParagraph>

      <CodeSnippet>{snippetExample4}</CodeSnippet>

      <BlogParagraph>
        Por curiosidade, podemos fazer o mesmo com a classe <code>A</code>{' '}
        definida em <code>example_class_a.js</code>:
      </BlogParagraph>

      <CodeSnippet>
        {`// example_class_a_fixed.js

class A {
  name = "class A"

  run() {
    [1,2,3].map(this.handle.bind(this))
  }

  handle(index) {
    console.log(index, ":", this.name)
  }
}

new A().run()`}
      </CodeSnippet>

      <BlogParagraph>
        Executando o código acima vemos que ele é executado corretamente:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} language="markup">
        {`$ deno run gustavosantos.dev/code/blog/tip-js-class-bind/example_class_a_fixed.js

1 : class A
2 : class A
3 : class A`}
      </CodeSnippet>

      <BlogSubtitle>Resumo</BlogSubtitle>

      <BlogParagraph>
        Quando você executa o método <code>bind</code> passando um objeto
        (geralmente o <code>this</code>), é devolvido uma função cujo contexto
        já está definido. Assim, você pode passar essa função para um executor
        externo sem se preocupar com problemas do tipo{' '}
        <code>Cannot read property '*' of undefined</code>.
      </BlogParagraph>

      <BlogParagraph>
        JavaScript definitivamente não é a melhor linguagem para se praticar
        OOP, porém após entender como coisas tipo <code>this</code> ou contextos
        de execução funcionam, definitivamente temos mais confiança em organizar
        nosso código em classes, que definitivamente é uma forma muito
        conveniente de encapsulamento.
      </BlogParagraph>
    </BlogPage>
  )
}
