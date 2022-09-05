# Aula 6 - Bcrypt, JWT e Auth

## Dependencias do projeto:

npm i nodemon sequelize-cli -D

npm i express pg pg-hstore sequelize jsonwebtoken bcryptjs
<br><br>

## Configuração do projeto:

acessar diretório `./src/db` e rodar o comando `npx sequelize-cli init`

mudar a extensão do arquivo ./src/db/config/config.json para `.js` e exportar o
objeto de configuração

criar um arquivo `.sequelizerc` na raiz do projeto, configurar o path dos
diretórios

alterar a extensão (.json para .js) do arquivo de configuração `/src/db/models/index.js`
na linha 8, variável `config`
<br><br>

## Comandos do sequelize-cli:

criar migration
`npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string`

rodar migration
`npx sequelize-cli db:migrate`

desfazer migration
`npx sequelize-cli db:migrate:undo`
<br><br>

## Passos da aula:

Criar o server.js com as rotas <br>
Criar o UserController.js <br>
Criar Rota /user/register <br>
Criar o método register para cadastrar usuários na aplicação, usar senha criptografada <br>
Criar Rota /user/authenticate <br>
Criar o método authenticate para validar os dados do usuário e gerar seu token <br>
Criar o middleware de validação do token do usuário <br>
Criar Rota /user/me <br>
Criar método me para trazer informações do usuário autenticado <br>
