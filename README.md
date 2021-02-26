# Move-It dev

Uma forma simples de se manter saudável enquanto aumenta sua produtividade. Use a técnica Pomodoro, fazendo pequenos intervalos durante o seus estudos/trabalho para se exercitar e se manter saudável. Conclua desafios para ganhar *xp* e avançar de nível. Veja seu ranking com relação aos seus amigos que também usam o aplicativo.

![alt-text](/img/app-inicio.png)

## Sobre

O Move.It é um projeto que foi desenvolvido durante a quarta edição do evento *Next Level Week* ministrado pela Rocketseat. A aplicação foi criada usando React.js (UI) e Next.js para SSR (Server Side Rendering). Neste projeto são explorados conceitos chave da biblioteca React.js como componentes, propriedades, estados e context API (troca de informação entre os componentes). O projeto conta com Typescript para adicionar tipagem à nossas interfaces.

### Como funciona ?

No final de cada ciclo, o usuário recebe um novo desafio aleatório. Esses desafios cobrem exerícios físicos e para os olhos (nós devs passamos incontáveis horas na frente das telas então precisamos cuidar da nossa visão!). Se o desafio for concluído com sucesso, o usuário recebe uma quantia de *xp*. Quanto mais desafios completados, mais *xp* e maior o seu nível!

![alt-text](/img/app-presentation.gif)

### Não conseguiu chegar ao fim de um ciclo? 

Tudo bem! Nos sabemos que as vezes somos interrompidos no nosso fluxo de trabalho! Neste caso você pode simplesmente reiniciar o ciclo abandonando e começando de novo!

### Não Conseguiu completar o desafio? 

Tudo bem também! Você pode simplesmente dizer que falhou e não será punido mas não receberá nenhuma experiência. :wink:

### Quanto mais experiência, mais chances de subir de nível!

 O Aplicativo incorpora a gamificação, então quando mais desafios você completa, mais *xp* você ganha e maiores as chances de subir de nivel.

![alt-text](/img/level-up.gif)

# Rodando o App localmente

Caso vc queira rodar o código localmente, basta clonar este repositório

```
git clone <url>
```

Com o repositório em sua máquina local é preciso instalar as dependências do App usando o **yarn**:


- yarn 
```
yarn install
```

Para começar a rodar o App localmente:
```
yarn start
```

Ou no modo desenvolvedor:
```
yarn dev
```

Se tudo correr bem, o aplicativo iniciará na porta 3000:

```
http://localhost:3000
```

Caso a janela do navegador não abra automaticamente, basta colar a URL acima no browser.


## Melhorias futuras:

:beginner: Tela inicial para login com o GitHub ou Email;

:beginner: Sistema de ranqueamento;

:beginner: Modo escuro;
