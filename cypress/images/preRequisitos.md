# Pré-requisitos 

Garanta que os seguintes sistemas estejam instalados em seu computador.

- [git](https://git-scm.com/) (estou usando a versão `2.37.2`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v18.16.0` enquanto escrevo esta aula)
- NPM (estou usando a versão `9.5.1` enquanto escrevo esta aula)

**Obs.:** O professor recomanda utilizar as mesmas versões, ou versões mais recentes dos sistemas citados acima.

**Obs. 2:** Ao instalar o Node.js o NPM é instalado automaticamente.

**Obs. 3:** Para verificar as versões do git, Node.js e NPM instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

**Obs. 4:** Na lista de requisitos acima, deixei links para encontrar os instaladores, no caso de não tê-los instalados ainda.

## Clone o projeto e faça a instalação das pedendências de desenvolvimento 🐑

Visto que tais dependências já estão listadas no arquivo `package.json`, basta executar o comando `npm install` (ou `npm i` - versão curta) na raiz do projeto.

> 🧙 Este comando irá baixar o `cypress`, o `cypress-localstorage-commands`, o `faker`, e o `standardjs`, visto que estes estão listados na seção de `devDependencies`.
>


