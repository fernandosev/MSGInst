<h1 align="center">MSGInst
</h1>
<h3 align="center">
Aplicativo de mensagens instantâneas desenvolvido com React Native
</h3>

## Tabela de conteúdos

 * [Layout](#-layout)
 * [Pré-requisitos](#pré-requisitos)
 * [Rodando o backend](#rodando-o-backend)
 * [Rodando o frontend](#rodando-o-frontend)
 * [Autor](#-autor)


## 🎨 Layout

O layout da aplicação está disponível [clicando aqui](https://www.figma.com/file/xZuTEqCeSpwWx1KwRGfzpw/MSGInst).

### Pré-requisitos

Antes de dar início, certifique-se que tenha em sua máquina:
- [ ] Gerenciador de Banco de Dados Relacional - MySQL
- [ ] Node versão 12.16.3 ou superior
- [ ] Yarn versão 1.22.4 ou superior


### Rodando o backend

```bash
1. Clone este repositório
$ git clone https://github.com/fernandosev/msginst.git

2. Acesse a pasta do projeto no seu terminal/cmd
$ cd msginst/backend

3. Instale as dependências
$ yarn

4. Crie o banco de dados utilizando o Script disponível disponível na pasta raíz do projeto (msginst.sql)

5. Configure o .env em ./msginst/backend com as seguintes variáveis de ambiente
BASE_URL = yourIP or localhost
SERVER_PORT = your port
DB_HOST = your dbhost
DB_USER = your user of db
DB_PASS = your password of db
DB = msginst
ONESIGNAL_APP_ID = your_app_id
ONESIGNAL_TOKEN = your_onesignal_token

6. Execute a aplicação
$ node server.js

```

### Rodando o frontend

```bash
1. Acesse a pasta do projeto no seu terminal/cmd
$ cd msginst/mobile

2. Instale as dependências
$ yarn

3. Configure o .env em ./msginst/.env com as seguintes variáveis de ambiente
API_BASE_URL=base url of server (backend) base_url:server_port
ONESIGNAL_APP_ID=your onesignal app id

4. Crie o arquivo gradle.properties na pasta mobile/android e adicione as seguintes propriedades:
android.useAndroidX=true
android.enableJetifier=true
FLIPPER_VERSION=0.54.0
ONESIGNAL_APP_ID=your_onesignal_app_id
ONESIGNAL_GOOGLE_PROJECT_NUMBER=your_onesignal_google_project_name

5. instale as dependências nativas do ios
$ npx pod-install

6. Execute a aplicação
$ react-native run-ios 
$ react-native run-android

```

## 👨‍💻 Autor


 Fernando Severino Almeida
 - [LinkedIn](https://www.linkedin.com/in/fernando-severino-782332172/) | [Instagram](https://www.instagram.com/fernandosev_/)

