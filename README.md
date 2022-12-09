# JS without build tools

Prova de Conceito (PoC) de frameworks/libs JS sem o uso de ferramentas de contrução (build tools).

## Sobre

Esse repositório surgiu com a ideia de criar aplicações web sem a necessidade de uma ferramenta de construção (build tool). De forma que apenas criando os arquivos html, js e css da aplicação, ela já esteja pronta para distribuição sem nenhuma etapa de build. Assim basta abrir diretamente o arquivo html no browser ou a url dele em um servidor e a aplicação já será executada.

O uso de ferramentas de construção (build tool) como vite, webpack, etc, traz muitas vantagens como o uso de um gerenciador de pacotes como npm, yarn, etc, centralização das dependências no bundle, redução do tamanho final do bundle, permite o uso do typescript entre outras vantagens. Mas para tudo isso funcionar é necessário o preparo de um ambiente com Node.js e as vezes você não quer isso, ou inserir isso no fluxo da sua aplicação não faz sentido, ou sua aplicação é simples mesmo. Com a abordagem de não usar ferramentas de construção (build tool) permite-se que projetos simples ou até complexos possam ser iniciados e distribuidos rapidamente.

O repositório contém implementações de uma aplicação simples usando diferentes frameworks para ser possível comparar a complexidade de implementação em cada um e o tamanho do download que o browser deve fazer para executar cada um.

## Demonstrações

Esse repositório está hospedado no GitHub Pages, assim basta acessar os arquivos desse projeto a partir do link para vê-las em execução: [demo js-without-build-tools](https://guilhermerodrigues680.github.io/js-without-build-tools/)

## Desenvolvimento

É possível executar todas as implementações apenas colocando o path completo do arquivo no browser.

As aplicações que usam _ECMAScript Modules (ESM)_ podem necessitar de um servidor web como nginx, python http.server, etc, se forem usados modulos locais: [JavaScript modules | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
