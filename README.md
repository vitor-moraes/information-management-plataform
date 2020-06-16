Esse projeto foi criado com o [Create React App](https://github.com/facebook/create-react-app).

## Procedimento inicial

Para iniciar esse projeto, você precisará:
Certificar-se que o [npm](https://www.npmjs.com/) está instalado em sua máquina.
Certificar-se que o [adonis](https://adonisjs.com/) está instalado em sua máquina.
Fazer o clone do repositório.
Abrir o projeto no seu editor.

### Consigurações iniciais (front-end)

Abrir o terminal
Fazer a instalação dos node.modules utilizando-se do comando "npm install".

Após esse comando o frond-end do projeto já deverá estar funcionando.

### Configurando o back-end

No seu terminal, utilize o comando "cd backend" para acessar a sua pasta backend.
Então, utilize o comando "npm install" para baixar o node.modules.
Criar o arquivo ".env" diretamente na pasta do back end.
Copiar o conteúdo do arquivo ".env.example" para o ".env".
Configurar o "HOST" e "PORT" para a respectiva configuração da sua máquina.
Realizar as configurações referentes ao seu respectivo banco de dados.
Alterar a variável DB_CONNECTION para "mysql".
Então, rodar o código "npm install --save mysql" no seu terminal.

### Configurando alguns outros arquivos do backend

Acessar o "auth.js", altere o valor de "autenticator" para "jwt".
Acessar o "cors.js", altere o valor de "origin" para "\*".
Acessar o "database.js", certifique-se de que "connection" está setado para "mysql".
Agora, ainda dentro de "database.js", na variável "mysql" realize suas configurações referentes ao seu banco de dados.

**Suas configurações deverão ser as mesmas apresentadas no documento ".env"**

Execute o comando "adonis migration:run" para criar as tabelas no seu respectivo banco de dados.
Dentro do arquivo "shield.js", certifique-se de que em "csrf" o valor "enable" está setado como false.

### Rodando o projeto na sua máquina

Com o seu terminal setado para a pasta "backend", realize o comando "adonis serve --dev", para que o seu backend esteja plenamente funcional.
Com o comando "cd ..", retorne o termianl a pasta raiz do seu projeto.
Rode o comando "npm start" para iniciar o projeto no seu navegador.
