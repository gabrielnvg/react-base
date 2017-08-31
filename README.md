# React Template
Projeto Template de React.
<br />
Suporte para ES6 com Babel.

# Uso
A pasta "app" é a pasta de desenvolvimento.
<br />
Uma vez o webpack tendo feito o build, o resultado é gerado na pasta "build".

# NPM Scripts
- Para fazer o build do projeto:
```sh
$ npm run build
```
- Para fazer o build minificado do projeto:
```sh
$ npm run build-min
```
- Para rodar o projeto:
```sh
$ npm run start
```
Após rodar o projeto, o browser irá abrir na URL do projeto e a cada alteração no código, ocorrerá refresh automático.
<br />
Caso deseje mudar a porta padrão (9000), basta alterar a mesma no arquivo "webpack.config.babel.js".