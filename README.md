# Base React
Projeto Base de React usando Webpack com suporte para ES6 (Babel) e SASS.

# Uso
A pasta "app" é a pasta de desenvolvimento.
<br />
Uma vez o webpack tendo feito o build, o resultado é gerado na pasta "build".

# NPM Scripts
- Para rodar o build de desenvolvimento e em seguida, o servidor do projeto:
```sh
$ npm run start
```
- Para rodar somente o servidor do projeto, sem build:
```sh
$ npm run server
```
- Para fazer o build do projeto minificado para produção:
```sh
$ npm run build
```
- Para fazer o build do projeto para desenvolvimento:
```sh
$ npm run build-dev
```
Após rodar o servidor, o browser irá abrir na URL do projeto e a cada alteração no código, ocorrerá refresh automático.
<br />
Caso deseje mudar a porta padrão (9000), basta alterar a mesma no arquivo "webpack.config.babel.js".