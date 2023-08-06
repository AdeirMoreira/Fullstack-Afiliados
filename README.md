>  This is a challenge by [Coodesh](https://coodesh.com/)

# Coodesh - Full-Stack Afiliados 👨‍💻

Projeto Full-Stack para o desafio Coodesh. No Front-End, uma aplicação React para fazer login e cadastrar usuários. Além de fazer upload e processamento de arquivo e listagem das transacões de vendedores. No Back-End, foi desenvolvida uma API em NodeJS que verifica os dados e os armazena em um banco de dados MySQL. O Docker foi usado para rodar o Front, Back e o Banco de dados em contêineres.

## Screenshots do site 📸

<p  align="center">
    <img src="https://github.com/AdeirMoreira/Fullstack-Afiliados/assets/98994187/4d9d6700-3cf6-492f-80dc-61d710ebd2ab" width="300" height="200">
    <img src="https://github.com/AdeirMoreira/Fullstack-Afiliados/assets/98994187/99aabf94-9199-4451-83bd-cfb3f931b612" width="300" height="200">
<p/>

## Tecnologias 🛠

- [React](https://pt-br.reactjs.org/)
- [MaterialUI](https://mui.com/material-ui/getting-started/)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [typeORM](https://typeorm.io/)
- [MySQL](https://www.mysql.com/)
- [Docker](https://www.docker.com/)
- [Axios](https://www.npmjs.com/package/axios)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Class-Validator](https://github.com/typestack/class-validator)
- [Multer](https://www.npmjs.com/package/multer)
- [Moment](https://www.npmjs.com/package/moment)

## Requisitos atendidos ✔

- ✅ Tela para fazer upload de arquivo.
- ✅ Fazer o parsing do arquivo recebido, normalizar os dados e armazená-los em um banco de dados relacional.
- ✅ Exibir a lista das transações de produtos importadas com um totalizador do valor das transações realizadas.
- ✅ Fazer tratamento de erros no backend, e reportar mensagens de erro amigáveis no frontend.
- ✅ A aplicação simples de configurar e rodar com apenas um comando.
- ✅ Utulizar Docker e Docker Compose.
- ✅ Lidar com autenticação e/ou autorização.
- ✅ Código limpo, legível e em ingles.

## Como o projeto funciona? ❓

A primeira tela é a de login, ao digitar um email e uma senha são exibidos mensagens de feedback caso não estejam corretos. Caso os dados estejam corretos o login será efetuado, encaminhando o usuario para tela principal. Há um link na tela de login para encaminhar o usuário para a tela de cadastro. No formulário há validações nos campos email, que deve ser único, e senha, que deve conter pelo menos 8 caracteres. O usuário criado pode ser Administrador ou não, caso ele seja poderá fazer upload do arquivo de transações, caso contrário não. É exibido um feedback se o usuário foi criado com sucesso ou não. Na tela principal, há um botão para fazer o upload do arquivo de transações, exibido apenas para usuários administradores. Mensagens de feedback são exibidas caso aconteça algum erro no procesamento do arquivo. Não é possível processar o mesmo arquivo duas vezes. Após o processamento do arquivo, é exibida uma lista dos vendedores que tiveram vendas processadas, além do somatório total do seu saldo após o processamento. Clicar em um vendedor abrirá um colapso com os detalhes de todas as transações realizadas por aquele vendedor.

## 🎲 Modelagem do Banco de dados

O Projeto possui 5 tabelas: Users, Sellers, Transactions, DOM_Type_Transaction e migrations.

### → Users
Tabela onde são registrados os usuários com informações de nome, email, senha e administrador.
### → Sellers
Tabela onde são registrados os vendedores que tiveram transações registradas com informações de nome e saldo.
### → Transactions
Tabela onde são registrados as transações que foram processadas com informações de nome do arquivo, tipo, produto, valor e vendedor.
### → DOM_Type_Transaction
Tabela de domínio onde são registradas os tipos de transações e sua descrição
### → migrations
Tabela onde são registradas as migrações.

<p  align="center">
    <img src="https://github.com/AdeirMoreira/Fullstack-Afiliados/assets/98994187/15544321-777f-44be-95d1-4231e9594708" width="300" height="200">
<p/>

## Rodando o projeto 🔛
#### 1️⃣ Clonar e abrir
```
git clone git@github.com:AdeirMoreira/Fullstack-Afiliados.git
cd Fullstack-Afiliados/fullstack-afiliados/
```

Renomeie o arquivo ```.env.exemple``` para ```.env``` e configure as variaveis de ambiente como preferir.

Caso você não pretenda usar o docker para rodar o banco de dados ou a api ou o app react, lembre-se de comentar o serviço do arquivo docker-compose.yaml

#### 2️⃣ Iniciar os Contêineres
```
docker compose up
```

O projeto necessita apenas do comando acima para rodar. Durante o processo, o container do banco de dados irá subir primeiro, em seguinda o container do react app irá subir e comecerá a instalar as dependencias, ao terminar irá subir subir a aplicação react. O container da api aguardará até que o banco de dados esteja disponível. Quando o banco de dados estiver dispónivel para novas conexões, o container da api começará a instalar as dependencias e logo em seguida rodará as migrações para criar e popular as tabelas e por fim subirá o servidor da api. 

Quando essas duas mensagens aparecerem no terminal, o projeto estará pronto para ser usado.
```
You can now view fullstack-afiliados in the browser.
react-app  |
react-app  |   Local:            http://localhost:3000
```
``` 
Server is running in http://localhost: 3003
api        | successful database connection
```

#### 🟢 [App-React](http://localhost:3000/)

O App-React rodará na porta 3000 e estará disponivel no endereço http://localhost:3000/. 

#### 🟢 [API-Node](http://localhost:3003/)

A API Node, por sua vez, rodará na porta 3003 e seu endereço base é http://localhost:3003/.

## Usando o projeto 🚀

Você pode encontrar o arquivo de testes original e variações dele [aqui](https://github.com/AdeirMoreira/Fullstack-Afiliados/tree/main/challenge-files).

## 👨‍💻 Desenvolvedor
<table>         
<td><a href="https://github.com/future4code/silveira-Adeir-Maia"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/98994187?v=4" width="100px;" alt="Imagem profile Adeir Moreira desenvolvedor"/><br /><sub><b>Adeir Moreira</b></sub></a><br />   
</table>


