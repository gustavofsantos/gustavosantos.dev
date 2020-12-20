import { BlogPage } from '../../components/blog/blog-page'
import { BlogParagraph } from '../../components/blog/blog-paragraph'
import { BlogSubtitle } from '../../components/blog/blog-subtitle'
import { BlogResume } from '../../components/blog/blog-resume'
import { BlogTitle } from '../../components/blog/blog-title'
import { CodeSnippet } from '../../components/code-snippet'
import { OuterLink } from '../../components/outer-link'

export const metadata = {
  title: 'Testando servidores REST em Node com confiança',
  lang: '🇧🇷',
  resume: `Antes de colocar qualquer tipo de software em produção você precisa
 estar confiante com seus testes. Você está confiante? Você faz mock de banco de dados?
 Se sim, provavelemnte esse texto vai te ajudar muito!`,
  href: '/blog/node-mongo-setup-tests'
}

export default function Post() {
  return (
    <BlogPage title={metadata.title}>
      <BlogTitle>{metadata.title}</BlogTitle>
      <BlogResume>{metadata.resume}</BlogResume>

      <BlogParagraph>
        Vamos aprender como configurar o Jest, Mongo e Fastify em um projeto
        pequeno o suficiente para que seja possível discutirmos sobre assuntos
        mais direcionados, como automações e testes com garantias de que você
        está reproduzindo o ambiente de produção durante os seus testes!
      </BlogParagraph>

      <BlogParagraph>
        O projeto envolve um servidor simples com uma rota que lista os usuários
        salvos no banco, mas partindo desse projeto tão simples, vamos
        configurar seeders e fixtures para popularmos o banco automaticamente,
        também vamos resolver alguns problemas associados com conexões no banco
        de dados.
      </BlogParagraph>

      <BlogSubtitle>Preparando o projeto</BlogSubtitle>

      <BlogParagraph>
        Vamos começar criando um diretório chamado{' '}
        <code>node-mongo-testing</code>:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ mkdir node-mongo-testing`}
      </CodeSnippet>

      <BlogParagraph>
        Agora entre nesse diretório e inicialize um projeto com o npm (ou yarn
        -- nesse tutorial vou usar o npm):
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ cd node-mongo-testing
$ npm init -y`}
      </CodeSnippet>

      <BlogParagraph>
        É boa prática inicializar o git nesse diretório e criar o primeiro
        commit, vou descrever esse passo agora, mas outros passos que envolvem
        commits e criação de branches vou deixar para você, caro leitor, decidir
        quando proceder.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ git init 
$ touch .gitignore 
$ git add . 
$ git commit -m "project created"`}
      </CodeSnippet>

      <BlogParagraph>
        Agora podemos começar instalando as dependências base, que é só o driver
        nativo do Mongo. Não vou usar o Mongoose aqui porque particularmente
        gosto muito de trabalhar com o driver nativo do Mongo. Além disso,
        entendo que se você não tem muito conhecimento em Mongo, lidar com o
        driver nativo vai te deixar mais próximo de entender como esse banco de
        dados funciona.
      </BlogParagraph>

      <BlogParagraph>Vamos adicionar o mongo como dependência:</BlogParagraph>

      <CodeSnippet showLineNumbers={false}>$ npm i mongodb</CodeSnippet>

      <BlogParagraph>
        Não esqueça de adicionar o diretório <code>node_modules</code> ao
        arquivo
        <code>.gitignore</code>. Adicione todos os arquivos no staging do git e
        faça um commit. Exemplo:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ git add .
$ git commit -m "added mongodb as dependency"`}
      </CodeSnippet>

      <BlogParagraph>
        Agora estamos prontos para começar a sujar as mãos!
      </BlogParagraph>

      <BlogSubtitle>Estruturando o projeto</BlogSubtitle>

      <BlogParagraph>
        Vamos criar uma API REST simples que vai listar os usuários no banco de
        dados. Para isso vou adicionar o Fastify como dependência só para esse
        não ser qualquer outro tutorial de Node com Express:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ npm i fastify`}
      </CodeSnippet>

      <BlogParagraph>
        Novamente, vou criar um novo commit com essa dependência. Aqui vale uma
        dica, sempre que você causar alguma mudança no seu projeto, faça um
        commit logo após para que o processo de voltar ao estado anterior seja
        mais fácil. Criar dependências entre commits é vai causar muitas dores
        de cabeça.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ git add .
$ git commit -m "added fastify as dependency"`}
      </CodeSnippet>

      <BlogParagraph>
        Vou começar criando um diretório <code>/app</code> na raíz do projeto,
        nesse diretório vamos colocar o código que tem valor direto ao negócio.
        Em outras palavras, o código que representa a aplicação vai ficar dentro
        dessa pasta <code>/app</code>.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        $ mkdir /app
      </CodeSnippet>

      <BlogParagraph>
        Para evitar de deixar o projeto bagunçado, dentro desse diretório{' '}
        <code>/app</code>
        vou criar um novo diretório onde vou organizar os roteadores do projeto.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        $ mkdir app/routers
      </CodeSnippet>

      <BlogParagraph>
        Dentro do diretório <code>app/routers</code> vou criar nosso roteador de
        usuários:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        $ touch app/routers/users-router.js
      </CodeSnippet>

      <BlogParagraph>
        Vou escrever o mínimo necessário pra dar uma estrutura básica ao
        roteador:
      </BlogParagraph>

      <CodeSnippet>
        {`// app/routers/users-router.js

async function usersRouter(fastify) {
  fastify.get("/users", (req, reply) => {
    reply.send({ hello: "world" });
  });
}

module.exports = usersRouter;
`}
      </CodeSnippet>

      <BlogParagraph>
        Não conseguimos fazer muito com esse roteador, precisamos configurar um
        servidor mínimo para conseguirmos fazer alguma requisição. Vou criar um
        arquivo em <code>app/server.js</code>. Seu conteúdo é:
      </BlogParagraph>

      <CodeSnippet>
        {`// app/server.js

const fastify = require("fastify")({ logger: true });

fastify.register(require("./routers/users-router"), {
  prefix: "/api/v1",
});

fastify.listen(3000, (err, addr) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(\`server listening on $\{addr\}\`);
});`}
      </CodeSnippet>

      <BlogParagraph>
        Basicamente o que esse servidor faz: registra o roteador dos usuários
        como um plugin do fastify e começa a escutar por requisições na porta
        3000.
      </BlogParagraph>

      <BlogParagraph>Vamos colocar esse roteador pra funcionar:</BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ node app/server.js 
{"level":30,"time":1608390038481,"pid":59629,"hostname":"tinhoso","msg":"Server listening at http://127.0.0.1:3000"}
{"level":30,"time":1608390038481,"pid":59629,"hostname":"tinhoso","msg":"server listening on http://127.0.0.1:3000"}`}
      </CodeSnippet>

      <BlogParagraph>
        Aparentemente temos sucesso! Em outra janela do terminal, vamos fazer
        uma requisição simples via curl e testar se o nosso servidor retorna
        corretamente:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`{"hello":"world"}
$ curl localhost:3000/api/v1/users`}
      </CodeSnippet>

      <BlogParagraph>
        Note que quando registrei o plugin, atribuí o prefixo{' '}
        <code>/api/v1</code> para as rotas daquele plugin. Nesse caso, o fastify
        vai montar aquela rota em
        <code>/api/v1/users</code>. Não quero entrar em mais detalhes sobre o
        Fastify para evitar deixar esse texto muito longo, mas saiba mais sobre
        esse excelente framework na{' '}
        <OuterLink href="https://www.fastify.io/docs/latest">
          documentação oficial
        </OuterLink>
        .
      </BlogParagraph>

      <BlogParagraph>
        Essa é uma boa hora de criar um novo commit.
      </BlogParagraph>

      <BlogSubtitle>Lendo dados do Mongo</BlogSubtitle>

      <BlogParagraph>
        Agora vamos de fato começar a configurar nosso projeto para usar o
        MongoDB com confiança! Antes de tudo, vou criar um diretório chamado
        <code>db</code> e dentro desse diretório, vou criar um arquivo que vai
        expor uma função para realizar a conexão com o Mongo.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ mkdir db
$ touch db/mongo.js`}
      </CodeSnippet>

      <BlogParagraph>
        Dentro desse arquivo vou definir e exportar uma função chamada
        <code>connect</code>. O trabalho dessa função é conectar com o Mongo e
        devolver uma instância da conexão com o banco de dados.
      </BlogParagraph>

      <CodeSnippet>
        {`// db/mongo.js

const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://admin:admin@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();
  return client.db("demo-testing");
}

module.exports = { connect };`}
      </CodeSnippet>

      <BlogParagraph>
        Estou assumindo que você já tem um Mongo rodando com um usuário chamado
        <code>admin</code> cuja senha é <code>admin</code>. Se você não tem, é
        interessante usar o<code>docker-compose</code> pra subir uma instância
        do Mongo. Veja esse exemplo, que também vou deixar no repositório de
        exemplo:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        $ touch docker-compose.yml
      </CodeSnippet>

      <BlogParagraph>
        E o arquivo YAML que descreve o serviço do mongo:
      </BlogParagraph>

      <CodeSnippet>
        {`version: "3.7"

services:
  local_mongo:
    image: mongo
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: admin
      MONGO_INITDB_DATABASE: demo_testing
    ports:
      - 27017:27017
    volumes:
      - ./db_data:/data/db`}
      </CodeSnippet>

      <BlogParagraph>Para iniciar o serviço do mongo:</BlogParagraph>

      <BlogParagraph>
        <code>$ docker-compose up -d</code>
      </BlogParagraph>

      <BlogParagraph>
        Só para confirmar, veja se o serviço está de fato rodando:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ docker-compose ps
              Name                           Command             State            Ports          
-------------------------------------------------------------------------------------------------
node-mongo-testing_local_mongo_1   docker-entrypoint.sh mongod   Up      0.0.0.0:27017->27017/tcp`}
      </CodeSnippet>

      <BlogParagraph>
        Agora estamos prontos para conectar com o banco de dados! Vou começar
        adicionando a leitura da coleção de usuários e retornando na rota
        <code>/api/v1/users</code>:
      </BlogParagraph>

      <CodeSnippet>
        {`// app/routers/users-router.js

const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  fastify.get("/users", async (req, reply) => {
    const users = await db.collection("users").find({}).toArray();
    reply.send(users);
  });
}

module.exports = usersRouter;`}
      </CodeSnippet>

      <BlogParagraph>
        Agora vamos fazer uma nova requisição nesse endpoint via curl e...
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ curl localhost:3000/api/v1/users
[]`}
      </CodeSnippet>

      <BlogParagraph>
        É, retornou nada! E isso é bom, nós subimos uma nova versão do mongo sem
        nenhum dado armazenado, seria muito, muito estranho se algum dado fosse
        retornado!
      </BlogParagraph>

      <BlogParagraph>
        Vamos começar adicionando dados aleatórios no banco antes de fazer a
        leitura:
      </BlogParagraph>

      <CodeSnippet>
        {`const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  await db.collection("users").deleteMany({});
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
  ]);

  fastify.get("/users", async (req, reply) => {
    const users = await db.collection("users").find({}).toArray();

    reply.send(users);
  });
}

module.exports = usersRouter;`}
      </CodeSnippet>

      <BlogParagraph>
        Note que eu primeiro deleto todos os registros na coleção de usuários
        antes de adicionar novos, isso vai evitar que você veja dados diferentes
        dos que estou mostrando aqui nesse texto.
      </BlogParagraph>

      <BlogParagraph>
        Fazendo novamente uma requisição GET via curl, temos o resultado
        esperado (não esqueça de reiniciar o servidor):
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ curl localhost:3000/api/v1/users
[{"_id":"5fde1ca9391ce0f008b82059","name":"João","email":"joao@email.com"},
{"_id":"5fde1ca9391ce0f008b8205a","name":"Maria","email":"maria@email.com"}]`}
      </CodeSnippet>

      <BlogParagraph>
        Faça um novo commit e vamos passar para a próxima etapa.
      </BlogParagraph>

      <BlogSubtitle>A primeria refatoração</BlogSubtitle>

      <BlogParagraph>
        Bom, já temos uma estrutura que está gritando que precisa ser
        refatorada. Temos que ter alguma forma de popular o banco de dados no
        inicio do projeto. Aqui a ideia de <i>seeds</i> entra em jogo.
      </BlogParagraph>

      <BlogParagraph>
        Semear um banco de dados é basicamente executar um script que vai
        popular o banco com dados padrão. É um script que vai preparar o banco
        com todos os dados necessários para começarmos a desenvolver a nossa
        aplicação.
      </BlogParagraph>

      <BlogParagraph>
        Pense que você é um novo desenvolvedor(a) entrando em um time de
        tecnologia, seu primeiro trabalho é configurar o seu computador com o
        ambiente de desenvolvimento desse novo time. Uma dessas etapas (se o
        time é suficientemente profissional) é semear o banco de dados com dados
        e geralmente esse processo é feito ao executar um script.
      </BlogParagraph>

      <BlogParagraph>
        Esse script tem diversas formas diferentes. Se o projeto é uma aplicação
        Rails, provavelmente executar <code>rails db:seed</code> vai ser
        suficiente. Se o projeto é uma aplicação Go, os times geralmente
        costumam usar ferramentas unix que já existem pra realizar procedimentos
        automatizados, então provavelmente vai existir um <code>Makefile</code>{' '}
        no repositório onde você vai precisar executar algo parecido com `make
        db_seed`.
      </BlogParagraph>

      <BlogParagraph>
        Esse projeto é um projeto em Node, é muito interessante se nós
        conseguirmos de alguma forma, criar um script no arquivo{' '}
        <code>package.json</code>
        que vai cuidar do processo de semear o banco de dados. Vamos começar
        pelo fim, qual tipo de API que nós queremos?
      </BlogParagraph>

      <BlogSubtitle>Configurando o seeder</BlogSubtitle>

      <BlogParagraph>
        No <code>package.json</code> vamos adicionar dois scripts, um para
        iniciar a aplicação automaticamente (algo que estamos fazendo ao invocar
        o node manualmente) e outro para semear o banco de dados:
      </BlogParagraph>

      <CodeSnippet>
        {`{
  "name": "node-mongo-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app/server.js",
    "db:seed": "node scripts/db/seed.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fastify": "^3.9.2",
    "mongodb": "^3.6.3"
  }
}`}
      </CodeSnippet>

      <BlogParagraph>
        Note que já estou causando um efeito colateral de cara: vamos precisar
        criar um arquivo <code>seed.js</code> no diretório{' '}
        <code>scripts/db</code>. Vamos fazer isso:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ mkdir scripts
$ mkdir scripts/db
$ touch scripts/db/seed.js`}
      </CodeSnippet>

      <BlogParagraph>
        Dentro desse arquivo vamos usar o utilitário de conexão com o Mongo que
        já haviamos criado:
      </BlogParagraph>

      <CodeSnippet>
        {`// scripts/db/seed.js

const { connect } = require("../../db/mongo");

async function run() {
  const db = await connect();

  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany({});
    await coll.dropIndexes();
    await coll.drop();
  }

  // call the seeder with db instance
}

run()
  .then(() => {
    console.log("Seed done");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Seed error:", err);
    process.exit(1);
  });`}
      </CodeSnippet>

      <BlogParagraph>
        Tem algumas coisas acontecendo aqui. Eu defini essa função{' '}
        <code>run</code> que vai executar todo o código preparatório que
        precisamos e então vai invocar o semeador (vou chamar de <i>seeder</i>{' '}
        daqui em diante).
      </BlogParagraph>

      <BlogParagraph>
        O código preparatório é basicamente ler todas as coleções do banco de
        dados e deletar tudo que existe nessas coleções, inclusive os índices
        criados e a coleção em si. Resumindo, essa preparação vai deletar todo o
        banco de dados.
      </BlogParagraph>

      <BlogParagraph>
        Esse tipo de comportamento é muito importante e essencial para o seeder
        funcionar com sucesso. O objetivo aqui é preparar o banco de dados para
        começar a ser usado, o banco de dados precisa partir do estado limpo.
      </BlogParagraph>

      <BlogParagraph>
        Em seguida eu deixei aquele comentário indicando que, após limpar o
        banco de dados, vamos chamar uma outra função que faz o processo de
        semear o banco de dados. Vou criar essa função dentro do módulo
        <code>seeder.js</code> que vou deixar no diretórios <code>db</code>:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        $ touch db/seeder.js
      </CodeSnippet>

      <BlogParagraph>
        Vou escrever o mínimo possível para ilustrar o que vai ser feito nesse
        módulo:
      </BlogParagraph>

      <CodeSnippet>
        {`// db/seeder.js

async function seed(db) {
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
  ]);
}

module.exports = { seed };`}
      </CodeSnippet>

      <BlogParagraph>
        Ainda faltam duas coisas: chamar essa função no nosso script de
        automação e remover o trecho que adiciona dados no banco dentro do
        roteador. Embora não seja trabalho do roteador de ter que lidar com o
        banco de dados, vamos manter aquele trecho de código que lê os usuários
        do banco dentro do callback, por enquanto.
      </BlogParagraph>

      <CodeSnippet>
        {`// scripts/db/seeder.js

const { connect } = require("../../db/mongo");
const { seed } = require("../../db/seeder");

async function run() {
  const db = await connect();

  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany({});
    await coll.dropIndexes();
    await coll.drop();
  }

  await seed(db);
}

run()
  .then(() => {
    console.log("Seed done");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Seed error:", err);
    process.exit(1);
  });`}
      </CodeSnippet>

      <CodeSnippet>
        {`// app/routers/users-router.js

const { connect } = require("../../db/mongo");

async function usersRouter(fastify) {
  const db = await connect();

  fastify.get("/users", async (req, reply) => {
    const users = await db.collection("users").find({}).toArray();

    reply.send(users);
  });
}

module.exports = usersRouter;`}
      </CodeSnippet>

      <BlogParagraph>
        Agora é a hora da verdade, se você seguiu todos os passos basta rodar o
        seguinte comando no terminal e seu banco de dados estará pronto.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ npm run db:seed

> node-mongo-testing@1.0.0 db:seed /home/gustavo/Workspace/blog-projects/node-mongo-testing
> node scripts/db/seed.js

Seed done`}
      </CodeSnippet>

      <BlogParagraph>
        Rodando o servidor novamente e acessando a rota{' '}
        <code>/api/v1/users</code> vemos que tudo segue funcionando como antes:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ curl localhost:3000/api/v1/users
[{"_id":"5fde235d074ba3f2f5309b86","name":"João","email":"joao@email.com"},{"_id":"5fde235d074ba3f2f5309b87","name":"Maria","email":"maria@email.com"}]`}
      </CodeSnippet>

      <BlogParagraph>
        Legal. Mas e se agora precisamos criar um novo usuário chamado{' '}
        <code>Laura</code>
        no nosso banco sempre que inicializar o projeto? Basta alterar o arquivo
        <code>db/seeder.js</code>:
      </BlogParagraph>

      <CodeSnippet>
        {`// db/seeder.js

async function seed(db) {
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
    { name: "Laura", email: "laura@email.com" },
  ]);
}

module.exports = { seed };`}
      </CodeSnippet>

      <BlogParagraph>
        E agora rodar o script de automação do banco novamente:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ npm run db:seed

> node-mongo-testing@1.0.0 db:seed /home/gustavo/Workspace/blog-projects/node-mongo-testing
> node scripts/db/seed.js

Seed done`}
      </CodeSnippet>

      <BlogParagraph>
        Sem reiniciar o servidor, se você fazer novamente a mesma requisição,
        verá que o usuário que representa a Laura será retornado:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ curl localhost:3000/api/v1/users
[{"_id":"5fde247fb807daf3b999480d","name":"João","email":"joao@email.com"},{"_id":"5fde247fb807daf3b999480e","name":"Maria","email":"maria@email.com"},{"_id":"5fde247fb807daf3b999480f","name":"Laura","email":"laura@email.com"}]`}
      </CodeSnippet>

      <BlogParagraph>
        Sejamos sinceros, está dificil de ler esse JSON não formatado. Se você
        usa Linux, basta instalar o utilitário <code>jq</code> e direcionar a
        saída do
        <code>curl</code>:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>
        {`$ curl localhost:3000/api/v1/users | jq
[
  {
    "_id": "5fde247fb807daf3b999480d",
    "name": "João",
    "email": "joao@email.com"
  },
  {
    "_id": "5fde247fb807daf3b999480e",
    "name": "Maria",
    "email": "maria@email.com"
  },
  {
    "_id": "5fde247fb807daf3b999480f",
    "name": "Laura",
    "email": "laura@email.com"
  }
]`}
      </CodeSnippet>

      <BlogParagraph>
        Bem melhor, não? Aproveitando, é uma boa hora para fazer um novo commit.
      </BlogParagraph>

      <BlogSubtitle>Adicionando testes</BlogSubtitle>

      <BlogParagraph>
        Agora que temos um projeto minimamente configurado, está na hora de
        começar a escrever os testes. Testes que envolvem o banco de dados não
        deveriam ser mockados. Eu vejo muitos desenvolvedores criando dublês
        (mocks) mirabolantes para o banco de dados. Nós podemos facilemten
        configurar automações para popular o banco sempre que os testes rodarem.
      </BlogParagraph>

      <BlogParagraph>
        Popular o banco de dados nos testes e usar o banco de dados durante os
        testes aproxima a nossa aplicação do ambiente real onde ela será
        executada em produção. Em produção um cliente não vai fazer uma
        requisição e receber um retorno que veio de um mock, vai receber um
        retorno que partiu de um dado armazenado no banco de dados. Testar esse
        comportamento é muito importante.
      </BlogParagraph>

      <BlogParagraph>
        Vamos começar adicionando o jest no projeto:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ npm i -D jest`}</CodeSnippet>

      <BlogParagraph>
        Agora vamos criar o arquivo de configuração do jest. Esse arquivo vai
        indicar para o jest usar um arquivo de setup. Esse arquivo de setup vai
        cuidar das automações no banco de dados.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ touch jest.config.js
$ touch jest.setup.js`}</CodeSnippet>

      <BlogParagraph>
        Em <code>jest.config.js</code> vou definir para o jest carregar o
        arquivo
        <code>jest.setup.js</code> sempre que configurar o ambiente de testes:
      </BlogParagraph>

      <CodeSnippet>
        {`// jest.config.js

module.exports = {
  setupFilesAfterEnv: ["./jest.setup.js"],
};`}
      </CodeSnippet>

      <BlogParagraph>
        Vou deixar o arquivo <code>jest.setup.js</code> vazio por enquanto. Vou
        criar também um script no <code>package.json</code> para rodar o jest
        automaticamente no modo <i>watch</i>:
      </BlogParagraph>

      <CodeSnippet>{`{
  "name": "node-mongo-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app/server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "db:seed": "node scripts/db/seed.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fastify": "^3.9.2",
    "mongodb": "^3.6.3"
  },
  "devDependencies": {
    "jest": "^26.6.3"
  }
}`}</CodeSnippet>

      <BlogSubtitle>Criando o primeiro teste</BlogSubtitle>

      <BlogParagraph>
        Por padrão, o jest procuta por arquivos com a extensão{' '}
        <code>*.test.js</code>. Onde você vai deixar os testes depende do seu
        gosto pessoal e dos padrões adotados no projeto em que você está
        trabalhando. Aqui vou começar escrevendo um teste para um arquivo que
        nem ao menos existe ainda:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ mkdir app/services
$ touch app/services/user-service.test.js`}</CodeSnippet>

      <BlogParagraph>
        Vou escrever o mínimo necessário para o jest idenficar e executar os
        testes nesse arquivo:
      </BlogParagraph>

      <CodeSnippet>{`// app/services/user-service.test.js

const { UserService } = require("./user-service");

describe(UserService.name, () => {
  test.todo("should list all users");
});`}</CodeSnippet>

      <BlogParagraph>
        Se rodarmos o jest, claramente vamos receber um erro:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ npm run test       
> node-mongo-testing@1.0.0 test /home/gustavo/Workspace/blog-projects/node-mongo-testing                                            
> jest

 FAIL  app/services/user-service.test.js
  ● Test suite failed to run

    Cannot find module './user-service' from 'app/services/user-service.test.js'`}</CodeSnippet>

      <BlogParagraph>
        É óbvio que isso iria acontecer, porém sabemos que precisamos criar um
        módulo em <code>app/services/user-service.js</code> e esse módulo deve
        exportar alguma coisa chamada <code>UserService</code>, porém essa coisa
        precisa ter a propriedade <code>name</code> e <code>name</code> deve ser
        uma <code>string</code>.
      </BlogParagraph>

      <BlogParagraph>
        Com todas essas informações em mente, vamos escrever o mínimo nesse
        módulo para fazer o jest executar sem erros:
      </BlogParagraph>

      <CodeSnippet>{`// app/services/user-service.js

class UserService {}

module.exports = { UserService };`}</CodeSnippet>

      <BlogParagraph>Se rodarmos a suíte de testes novamente:</BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ npm run test

> node-mongo-testing@1.0.0 test /home/gustavo/Workspace/blog-projects/node-mongo-testing
> jest

 PASS  app/services/user-service.test.js
  UserService
    ✎ todo should list all users

Test Suites: 1 passed, 1 total
Tests:       1 todo, 1 total
Snapshots:   0 total
Time:        1.207 s
Ran all test suites.`}</CodeSnippet>

      <BlogParagraph>
        Ótimo! Mas espere um segundo: temos um teste que na verdade faz nada,
        vamos implementar o que esperamos que a classe <code>UserService</code>{' '}
        entregue via API:
      </BlogParagraph>

      <CodeSnippet>{`// app/services/user-service.test.js

const { UserService } = require("./user-service");

describe(UserService.name, () => {
  test("should list all users", async () => {
    const userService = new UserService();
    await userService.connect();

    const allUsers = await userService.listAll();

    expect(allUsers.length).toBe(3);
  });
});`}</CodeSnippet>

      <BlogParagraph>
        Agora sabemos que <code>UserService</code> espera ser uma classe que
        quando instanciada vai oferecer um método assíncrono{' '}
        <code>connect</code> e um método assíncrono <code>listAll</code>. Além
        disso, esperamos que o método <code>listAll</code>
        resolva para uma lista com três elementos!
      </BlogParagraph>

      <BlogParagraph>
        Se você juntar os pauzinhos, verá que nosso seeder insere três usuários
        no banco de dados, então partindo do princípio de que o banco estará
        semeado antes de rodar os testes, é razoável esperar que três usuários
        serão retornados através do método <code>listAll</code>. Vamos
        implementar esses métodos:
      </BlogParagraph>

      <CodeSnippet>{`// app/services/user-service.js

const { connect } = require("../../db/mongo");

class UserService {
  constructor() {
    this._db = undefined;
  }

  async connect() {
    this._db = await connect();
  }

  listAll() {
    return this._db.collection("users").find().toArray();
  }
}

module.exports = { UserService };`}</CodeSnippet>

      <BlogParagraph>
        Não estou preocupado com a devida abstração e o quanto esse código é
        DRY. O objetivo aqui é criar uma suíte de testes com confiança e com o
        mongo devidamente configurado!
      </BlogParagraph>

      <BlogParagraph>
        Se você rodar os testes novamente, notará que passarão, mas o jest vai
        informar um aviso:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`Jest did not exit one second after the test run has completed.

This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with \`--detectOpenHandles\` to troubleshoot this issue.`}</CodeSnippet>

      <BlogParagraph>
        Isso aconteceu porque iniciamos uma conexão com o banco mas não
        fechamos. Vou expor uma função <code>disconnect</code> do módulo{' '}
        <code>mongo.js</code>
        (db/mongo.js) e usar essa função para desconectar do mongo após todos os
        testes serem executados:
      </BlogParagraph>

      <CodeSnippet>{`// db/mongo.js

const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://admin:admin@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  await client.connect();
  return client.db("demo-testing");
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };`}</CodeSnippet>

      <BlogParagraph>
        E agora no arquivo <code>jest.setup.js</code>:
      </BlogParagraph>

      <CodeSnippet>{`// jest.setup.js

const { disconnect } = require("./db/mongo");

afterAll(async () => {
  await disconnect();
});`}</CodeSnippet>

      <BlogParagraph>
        Se rodarmos os testes novamente, veremos que obtemos sucesso e que o
        jest não acusa nenhum novo problema.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ npm run test

> node-mongo-testing@1.0.0 test /home/gustavo/Workspace/blog-projects/node-mongo-testing
> jest

 PASS  app/services/user-service.test.js
  UserService
    ✓ should list all users (58 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.538 s
Ran all test suites.`}</CodeSnippet>

      <BlogSubtitle>O problema do acoplamento</BlogSubtitle>

      <BlogParagraph>
        Não sei se você notou, mas criamos um forte acoplamento com o seeder.
        Toda vez que for necessário adicionar um novo usuário no seeder, teremos
        que alterar os nossos testes. Não está satisfeito com esse argumento?
        Vamos adicionar o usuário Mário no seeder:
      </BlogParagraph>

      <CodeSnippet>{`// db/seeder.js

async function seed(db) {
  await db.collection("users").insertMany([
    { name: "João", email: "joao@email.com" },
    { name: "Maria", email: "maria@email.com" },
    { name: "Laura", email: "laura@email.com" },
    { name: "Mario", email: "mario@email.com" },
  ]);
}

module.exports = { seed };`}</CodeSnippet>

      <BlogParagraph>
        Se rodarmos o script de automação do banco e os testes logo em seguida:
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`$ npm run db:seed

> node-mongo-testing@1.0.0 db:seed /home/gustavo/Workspace/blog-projects/node-mongo-testing                                         
> node scripts/db/seed.js

Seed done

$ npm run test

> node-mongo-testing@1.0.0 test /home/gustavo/Workspace/blog-projects/node-mongo-testing
> jest

 FAIL  app/services/user-service.test.js
  UserService
    ✕ should list all users (63 ms)

  ● UserService › should list all users

    expect(received).toBe(expected) // Object.is equality

    Expected: 3
    Received: 4

       8 |     const allUsers = await userService.listAll();
       9 | 
    > 10 |     expect(allUsers.length).toBe(3);
         |                             ^
      11 |   });
      12 | });
      13 | 

      at Object.<anonymous> (app/services/user-service.test.js:10:29)`}</CodeSnippet>

      <BlogParagraph>
        Esse tipo de coisa não é legal, concorda? Nós não podemos acoplar os
        nossos testes com o estado eventual do banco de dados. Precisamos de
        testes preditivos e para isso, precisamos preparar o nosso banco de
        dados em cada teste.
      </BlogParagraph>

      <BlogParagraph>
        Não se assuste com esse tipo de coisa, grandes frameworks já fazem isso
        faz muito tempo.
      </BlogParagraph>

      <BlogSubtitle>Fixtures e mais automação</BlogSubtitle>

      <BlogParagraph>
        O que precisamos fazer é preparar uma automação para limpar e inserir
        dados no banco toda vez que um determinado teste for executado. Não
        estou falando do callback que o <code>describe</code> recebe, mas sim os
        callbacks que as funções <code>it</code> e <code>test</code> recebem.
        Precisamos preparar o banco de dados sempre antes de executar essas
        funções.
      </BlogParagraph>

      <BlogParagraph>
        Esse processo envolve deletar todos os dados no banco de dados e inserir
        novamente.
      </BlogParagraph>

      <BlogParagraph>
        Você deve estar se perguntando: vamos inserir dados no banco onde? De
        onde vão vir esses dados?
      </BlogParagraph>

      <BlogParagraph>
        Muitos frameworks fazem o processo de ler fixtures e salvar no banco de
        forma automatizada, tão automatizada que parece mágica, porém é uma
        mágica que aumenta muito a produtividade do desenvolvedor. O que vamos
        fazer aqui envolve menos mágica, mas será o suficiente para que você
        entenda o procedimento.
      </BlogParagraph>

      <BlogParagraph>
        Vou começar criando um diretório chamado <code>tests/fixtures</code>:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ mkdir -p tests/fixtures`}</CodeSnippet>

      <BlogParagraph>
        Dentro desse diretório vou criar um arquivo JavaScript com alguns
        usuários:
      </BlogParagraph>

      <CodeSnippet>{`// tests/fixtures/users.js

const ana = { name: "Ana", email: "ana@email.com" };
const roberto = { name: "Roberto", email: "roberto@email.com" };

module.ana = ana;
module.roberto = roberto;
module.exports = [ana, roberto];`}</CodeSnippet>

      <BlogParagraph>
        Em <code>jest.setup.js</code> vou declarar no hook{' '}
        <code>beforeEach</code> instruções para zerar o banco de dados e inserir
        os usuários na coleção de, ...usuários.
      </BlogParagraph>

      <CodeSnippet>{`// jest.setup.js

const { disconnect, connect } = require("./db/mongo");
const users = require("./tests/fixtures/users");

beforeEach(async () => {
  const db = await connect();
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
  }

  await db.collection("users").insertMany(users);
});

afterAll(async () => {
  await disconnect();
});`}</CodeSnippet>

      <BlogParagraph>
        Se rodarmos os testes novamente, você verá que irão falhar, porém note a
        falha:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{` FAIL  app/services/user-service.test.js
 UserService
    ✕ should list all users (106 ms)
                      
  ● UserService › should list all users

    expect(received).toBe(expected) // Object.is equality
    
    Expected: 3
    Received: 2 `}</CodeSnippet>

      <BlogParagraph>
        A falha indica que era esperado um array com tres usuários, mas foi
        retornado um array com dois usuários, os exatos dois que inserimos no
        banco via fixtures! Mas além disso, o driver do mongo acusou diversos
        erros. Isso aconteceu porque estamos criando uma nova conexão sempre e
        isso é um problema. Podemos, em todos os testes, criar novas conexões ou
        reutilizar a conexão existente. Vou modificar o nosso utilitário para
        reutilizar a conexão com o banco de dados:
      </BlogParagraph>

      <CodeSnippet>{`// db/mongo.js

const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://admin:admin@localhost:27017", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connected = false;

async function connect() {
  if (connected) return client.db("demo-testing");

  await client.connect();
  connected = true;

  return connect();
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };`}</CodeSnippet>

      <BlogParagraph>
        Assim, sempre que uma nova conexão for necessária, a função connect vai
        checar se já existe uma conexão pronta, caso exista, essa conexão será
        devolvida. Existem problemas relacionados com essa abordagem, é uma
        abordagem realmente bem simples, mas fazer algo mais robusto faria esse
        artigo ser ainda mais longo.
      </BlogParagraph>

      <BlogParagraph>
        Agora vamos nos voltar aos testes. Podemos alterar os nossos fixtures e
        criar um novo usuário ou alterar o teste e esperar que dois usuários
        sejam retornados. Vou modificar o fixture e adicionar um novo usuário:
      </BlogParagraph>

      <CodeSnippet>{`// tests/fixtures/users.js

const ana = { name: "Ana", email: "ana@email.com" };
const roberto = { name: "Roberto", email: "roberto@email.com" };
const claudio = { name: "Claudio", email: "claudio@email.com" };

module.ana = ana;
module.roberto = roberto;
module.claudio = claudio;
module.exports = [ana, roberto, claudio];`}</CodeSnippet>

      <BlogParagraph>
        Se rodarmos os testes novamente, veremos que temos sucesso.
      </BlogParagraph>

      <CodeSnippet>{` PASS  app/services/user-service.test.js
  UserService
    ✓ should list all users (67 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.535 s
Ran all test suites.`}</CodeSnippet>

      <BlogSubtitle>Novo acoplamento, nova refatoração</BlogSubtitle>

      <BlogParagraph>
        Notou que o nosso roteador ainda está acessando o banco? Vamos resolver
        esse problema:
      </BlogParagraph>

      <CodeSnippet>{`// app/routers/users-router.js

const { UserService } = require("../services/user-service");

async function usersRouter(fastify) {
  const userService = new UserService();
  await userService.connect();

  fastify.get("/users", async (req, reply) => {
    const users = await userService.listAll();
    reply.send(users);
  });
}

module.exports = usersRouter;`}</CodeSnippet>

      <BlogParagraph>
        Se você reiniciar o servidor e fizer uma nova requisição, verá que o
        serviço ainda segue retornando o João, a Maria e a Laura... Ops, parece
        que não!
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ curl localhost:3000/api/v1/users | jq
[
  {
    "_id": "5fde45132bbcca053895bb47",
    "name": "Ana",
    "email": "ana@email.com"
  },
  {
    "_id": "5fde45132bbcca053895bb48",
    "name": "Roberto",
    "email": "roberto@email.com"
  },
  {
    "_id": "5fde45132bbcca053895bb49",
    "name": "Claudio",
    "email": "claudio@email.com"
  }
]`}</CodeSnippet>

      <BlogParagraph>
        O que a Ana, o Roberto e o Claudio estão fazendo aqui? Bom, o nosso
        teste usa o mesmo banco de desenvolvimento. Ainda temos um acoplamento,
        agora entre ambientes de execução da nossa aplicação. Vamos resolver
        esse problema com variáveis de ambiente!
      </BlogParagraph>

      <BlogParagraph>
        Eu gosto bastante do pacote <code>dotenv</code>. Esse pacote existe em
        quase todos gerenciadores de pacote das linguagens de programação. Vou
        usar esse pacote pra carregar variáveis de ambiente diferentes entre os
        ambientes. Ou seja, vou definir um banco de dados para ser usado durante
        os testes e um banco de dados para ser usado durante o desenvolvimento.
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ npm i -D dotenv`}</CodeSnippet>

      <BlogParagraph>
        Agora vou criar dois novos arquivos <code>.env.local</code> e{' '}
        <code>.env.test</code>. Não esqueça de adicionar esses arquivos no{' '}
        <code>.gitignore</code>. Nesse momento não é exatamente ignorar esses
        arquivos, mas a partir do momento que você quiser fazer testes usando
        credenciais de produção, você vai precisar dar atenção em dobro para
        esses arquivos que não deveriam merecer qualquer tipo de atenção
        especial.
      </BlogParagraph>

      <BlogParagraph>
        Para evitar eventuais dores de cabeça, ignore esses dois arquivos e crie
        um novo, chamado <code>.env.example</code>. Nesse arquivo você vai
        definir as variáveis que precisam ser definidas por outras pessoas que
        queiram dar manutenção nesse projeto.
      </BlogParagraph>

      <CodeSnippet showLineNumbers={false} wrapLines>{`# .env.example

MONGO_URI=
MONGO_DATABASE=`}</CodeSnippet>

      <BlogParagraph>
        Já no arquivo <code>.env.local</code>, vou definir as variáveis
        referentes ao meu banco de desenvolvimento:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`MONGO_URI="mongodb://admin:admin@localhost:27017"
MONGO_DATABASE=demo-testing`}</CodeSnippet>

      <BlogParagraph>
        E no <code>.env.test</code>, vou definir as mesmas variáveis, porém com
        os valores relacionados ao meu ambiente de teste:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`MONGO_URI="mongodb://admin:admin@localhost:27017"
MONGO_DATABASE=demo-testing_test`}</CodeSnippet>

      <BlogParagraph>
        Note que estou usando a mesma instância do banco de dados, porém bancos
        de dados diferentes.
      </BlogParagraph>

      <BlogParagraph>
        Agora precisamos instruir o <code>dotenv</code> a carregar as variáveis
        de ambiente a partir dos arquivos corretos, vou começar pelo ambiente de
        teste. O melhor local para invocar o <code>dotenv</code> é no arquivo de
        <i>setup</i>, o<code>jest.setup.js</code>. Esse arquivo será carregado
        sempre pelo jest, já que nós configuramos esse comportamento.
      </BlogParagraph>

      <CodeSnippet>{`// jest.setup.js

const dotenv = require("dotenv");
dotenv.config({ path: ".env.test" });

const { disconnect, connect } = require("./db/mongo");
const users = require("./tests/fixtures/users");

beforeEach(async () => {
  const db = await connect();
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
  }

  await db.collection("users").insertMany(users);
});

afterAll(async () => {
  await disconnect();
});`}</CodeSnippet>

      <BlogParagraph>
        Note que eu invoquei o <code>dotenv</code> nas primeiras linhas desse
        módulo. É importante invocar o dotenv antes de qualquer uso das
        variáveis de ambiente. Falando em variáveis de ambiente, precisamos
        alterar o módulo
        <code>db/mongo.js</code> para consumir o valor das variáveis de ambiente
        ao invés de declarar a url de conexão e o nome do banco de dados de
        forma estática.
      </BlogParagraph>

      <CodeSnippet>{`// db/mongo.js

const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let connected = false;

async function connect() {
  if (connected) return client.db(process.env.MONGO_DATABASE);

  await client.connect();
  connected = true;

  return connect();
}

async function disconnect() {
  await client.close();
}

module.exports = { connect, disconnect };`}</CodeSnippet>

      <BlogParagraph>Feito isso, vou rodar os testes e...</BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{` PASS  app/services/user-service.test.js
  UserService
    ✓ should list all users (129 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.612 s
Ran all test suites.`}</CodeSnippet>

      <BlogParagraph>Sucesso!</BlogParagraph>

      <BlogParagraph>
        Antes de prosseguirmos, precisamos invocar o dotenv também para ler o
        arquivo com as variáveis de ambiente de desenvolvimento. Nesse momento
        precisamos nos preocupar com a natureza cheia de efeitos colaterais do
        dotenv.
      </BlogParagraph>

      <BlogParagraph>
        Você precisa conhecer a forma que sua aplicação é <i>parseada</i>, senão
        você vai se encontrar em meio a vários problemas bem difíceis de
        debugar. Essa aplicação que estamos construindo depende de variáveis de
        ambiente definidas. Nós usamos o dotenv para definir essas variáveis
        automaticamente.
      </BlogParagraph>

      <BlogParagraph>
        Se por algum motivo você chamar o dotenv novamente após ele já ter sido
        invocado, porém passando um arquivo de definição de variáveis de
        ambiente diferente, o dotenv vai sobrescrever as variáveis já definidas
        e o restante do programa, após a execução da linha que redefine as
        variáveis de ambiente, vai consumir outras variáveis de ambiente.
      </BlogParagraph>

      <BlogParagraph>
        Uma forma rápida e segura de resolver esse problema é chamar o dotenv no
        script que inicializa o nosso servidor:
      </BlogParagraph>

      <CodeSnippet>{`{
  "name": "node-mongo-testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node -r dotenv/config app/server.js dotenv_config_path=./.env.local",
    "test": "jest",
    "test:watch": "jest --watch",
    "db:seed": "node -r dotenv/config scripts/db/seed.js dotenv_config_path=./.env.local"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "fastify": "^3.9.2",
    "mongodb": "^3.6.3"
  },
  "devDependencies": {
    "dotenv": "^8.2.0",
    "jest": "^26.6.3"
  }
}`}</CodeSnippet>

      <BlogParagraph>
        Feche o servidor, execute o seeder e inicie o servidor novamente. Ao
        fazer uma nova requisição a <code>/api/v1/users</code>, obtemos o
        resultado esperado:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ curl localhost:3000/api/v1/users | jq
[
  {
    "_id": "5fde4d1133647a0b7b031d2d",
    "name": "João",
    "email": "joao@email.com"
  },
  {
    "_id": "5fde4d1133647a0b7b031d2e",
    "name": "Maria",
    "email": "maria@email.com"
  },
  {
    "_id": "5fde4d1133647a0b7b031d2f",
    "name": "Laura",
    "email": "laura@email.com"
  }
]`}</CodeSnippet>

      <BlogParagraph>
        Legal! Se você quiser examinar o banco de dados, pode fazer isso através
        do Mongo Shell:
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`> db.adminCommand({ listDatabases: 1})
{
        "databases" : [
                {
                        "name" : "admin",
                        "sizeOnDisk" : 163840,
                        "empty" : false
                },
                {
                        "name" : "config",
                        "sizeOnDisk" : 110592,
                        "empty" : false
                },
                {
                        "name" : "demo-testing",
                        "sizeOnDisk" : 40960,
                        "empty" : false
                },
                {
                        "name" : "demo-testing_test",
                        "sizeOnDisk" : 40960,
                        "empty" : false
                },
                {
                        "name" : "local",
                        "sizeOnDisk" : 73728,
                        "empty" : false
                }
        ],
        "totalSize" : 430080,
        "ok" : 1
}`}</CodeSnippet>

      <BlogParagraph>
        Ambos os bancos de dados existem! Se você quiser listar os dados em cada
        banco de dados, basta usar a clausula <code>{`use <db bame>`}</code> do
        mongo e inspecionar cada coleção e documento. Se você inspecionar o
        suficiente, verá que os nossos testes deixam vestígios no banco de dados
        e isso é ruim. Não é algo que vai prejudicar os testes, porque sempre
        que um teste executar o banco de dados será zerado. Porém é uma
        convenção boa deixar o banco de dados limpo.
      </BlogParagraph>

      <BlogParagraph>
        Vou alterar o arquivo <code>jest.setup.js</code> para limpar o banco de
        dados após todos os testes serem executados.
      </BlogParagraph>

      <CodeSnippet>{`// jest.setup.js

const dotenv = require("dotenv");
dotenv.config({ path: ".env.test" });

const { disconnect, connect } = require("./db/mongo");
const users = require("./tests/fixtures/users");

let db;
beforeAll(async () => {
  db = await connect();
});

beforeEach(async () => {
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
  }

  await db.collection("users").insertMany(users);
});

afterAll(async () => {
  const collections = await db.collections();
  for (const coll of collections) {
    await coll.deleteMany();
    await coll.dropIndexes();
    await coll.drop();
  }

  await disconnect();
});`}</CodeSnippet>

      <BlogParagraph>
        Aproveitei e fiz uma pequena modificação nesse arquivo para reutilizar
        uma instância do banco de dados, assim fica mais fácil realizar essas
        operações "sujas" em cima de uma só instância.
      </BlogParagraph>

      <BlogSubtitle>O fechamento</BlogSubtitle>

      <BlogParagraph>
        É muito importante rodar os testes sempre! Seu time agradece e o seu
        "eu" do futuro também agradece. Porém é importante que seus pares
        saibam, em tempo de <i>code review</i> que o seu código não introduziu
        nenhum bug que quebre os testes.
      </BlogParagraph>

      <BlogParagraph>
        Confiança é importante, mas mais que isso, automações que garantem a
        integridade de uma base de código é ainda mais importante.
      </BlogParagraph>

      <BlogParagraph>
        Vamos começar integrando esse projeto com o GitHub Actions. Vamos
        escrever um pequeno workflow para rodar os testes sempre que uma pull
        request for aberta no repositório. Para isso vou trabalhar em outro
        branch.
      </BlogParagraph>

      <CodeSnippet
        showLineNumbers={false}
        wrapLines
      >{`$ git checkout -b feature/gh-actions-setup
$ mkdir -p .github/workflows
$ touch .github/workflows/test.yml`}</CodeSnippet>

      <BlogParagraph>
        Nesse workflow vou definir que a aplicação precisa de uma instância do
        banco de dados e vou juntar as partes para rodar os nossos testes sempre
        que uma pull request for criada.
      </BlogParagraph>

      <CodeSnippet wrapLines>
        {`name: Tests

on:
  pull_request

env:
  NODE_ENV: test
    
jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mongo:
        image: mongo:4.4
        ports:
          - 27017:27017
    
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
        with:
          node-version: '14.x'

      - name: Install dependencies
        run: npm i

      - name: Run tests
        run: npm run test
        env:
          MONGO_URI: mongodb://127.0.0.1:27017
          MONGO_DATABASE: demo-testing
  `}
      </CodeSnippet>

      <BlogParagraph>
        Faço commit e um push. Agora no GitHub vou criar uma nova pull request e
        você vai poder acessar nesse link:{' '}
        <OuterLink href="https://github.com/gustavofsantos/node-mongo-testing/pull/1/checks">
          https://github.com/gustavofsantos/node-mongo-testing/pull/1/checks
        </OuterLink>
        .
      </BlogParagraph>

      <BlogSubtitle>Conclusão</BlogSubtitle>

      <BlogParagraph>
        Chega ao fim a nossa jornada de testes. Criamos algumas automações bem
        interessantes, além disso discutimos assuntos importantes sobre
        organização e integridade da base de código.
      </BlogParagraph>

      <BlogParagraph>
        Espero que, além de você ter gostado, que você tenha aprendido uma ou
        outra coisa, se esse for o caso, me dê um alô nas redes sociais, vou
        ficar muito contente em saber que consegui ajudar alguém!
      </BlogParagraph>
    </BlogPage>
  )
}
