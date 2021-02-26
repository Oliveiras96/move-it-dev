# CSS Modules

Todo o  conteúdo desta página possibilita o encapsulamento de estilos, ou seja cada componente terá seu estilo deinido em um arquivo o que permite a organização do código e previne a invasão de estilos de um componente em outras partes do código.

É uma boa prática usar CSS Modules para cada componente do projeto, mas para isso precisamos dizer ao componente, onde buscar os estilos, por isso no topo do arquivo do componente importamos o  etilo:
```
import styles from "<caminho-para-o-arquivo>";
```

outra convenção é nomear os arquivos com o final `module.css` ao invés de somente `.css`

código do dia 2: #jornadainfinita

## Dia 3

### Context API

A Api de contextos do react permite fazer com que vários componentes se comuniquem entre si, isto permite fazer com que uma mudança de estado em um componente dispare um evento em outro e vice-versa.

código do desafio do dia: #focopraticagrupo

## Dia 4

código do desafio: #neverstoplearning

## Dia 5

Ensinamentos:
- Ter foco em uma tecnologia e se aprofundar nela;
- Focar na prática! 80% do tempo prática e 20% de estudos teóricos;


### Storage via cookies

Basicamente no desenvlvimento web existem algumas ferramentas do navegardor que podem ser usadas para armazenamento:

- Local Storage: salva dados da aplicação, esses dados ficam disponíveis mesmo depois de fechar e reabrir o navegador. Salvam iinformações no formato de chave e valor (texto);
- Session Storage: Quase igual ao local storage mas tudo é perdido quando a sessão é encerrada, ou seja quando o navegador é fechado;
- Indexed DB;
- Web SQL: Não disponível em todos os navegadores;
- Cookies: funciona de forma semelhante ao local storage. O seu uso aqui é justificado pela presença do Next.js porque sendo uma camada intermediária, se salvarmos as informações no local Storage, o next não teria acesso à essas informações (pois ele é uma camada intermediária entre o front e o back). Salvando os dados em cookies, garantimos que tanto o front quando o back end da aplicação terão acesso à essas  informações.

Para trabalhar com cookies geralmente se usa a biblioteca `js-cookies`. Esta biblioteca é escrita em js puro então para adicionar as tipagens em um projeto com typescript, usamos a dependência `@types/js-cookie`

```
yarn add @types/js-cookie -D
```


O método `getServerSideProps` permite fazer chamadas API ou para um servidor e repassa essas propriedades ao componente antes que ele termine de carregar, ou seja o componente espera as informações do servidor/API resultantes do método para ai terminar de carregar e mostrar essas informações.

Importante, este método roda no next ou seja no servidor node da aplicação então tudo o que é executado dentro do método é executado no servidor da aplicação.


### Deploy da aplicação

Plataformas de hospedagem de aplicações front-end: `net-fly` e `vercel`.


Faremos o deploy com o vercel. Depois de criar uma conta na plataforma, precisamos baixar a CLI da vercel, podemmos fazer isso usando o `npm`:

```
npm i -g vercel
```

- depois de intralar a CLI, fazemos o login com 
```
vercel login
```
- agora pra fazer o deploy usamos
```
vercel
```

se tudo deu certo, a aplicação já está no ar (em produção) com o enrdereço do app passado pela própria CLI. Podemos ainda integrar com o Github para fazer um redeploy toda vez que um novo commit for feito e ainda podemos fazer novos deploys para produção com:

```
vercel --prod
```


# Desafios extras:

1. OBRIGATÓRIO: Documenta o projeto, adicionar animações, prints explocar as tecnologias usadas no desenvolvimento do projeto, como rodar localmente a partir de um repositório clonado no github etc.

- Como clonar;
- Como rodar o projeto localmente, instalar dependências do yarn;
- Explicar a logística;
- **Detalhar o projeto muito bem**!

2. Adicionar funcionalidades da versão 2.0: [layout disponível aqui](https://www.figma.com/file/vRbW1u0CEZuG2zE6bU5qLg/Move.it-2.0/duplicate?node-id=160%3A2761)


código do desafio do dia: #missioncomplete