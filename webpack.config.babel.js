import HTMLWebpackPlugin from 'html-webpack-plugin';

module.exports = {
    entry: __dirname + '/app/index.js',

    module: {
        rules: [
            //Passa o babel para converter de ES6 para ES5 e cria um bundle dos arquivos JS
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            //Compila os arquivos SASS para CSS e juntamente com o import via JS, o injeta em uma tag "<style>" no HTML
            {
                test: /\.scss$/,
                loaders: 'style-loader!css-loader!sass-loader'
            }
        ]
    },

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    
    plugins: [
        //Injeta o script de import do "bundle.js" no final da tag "<body>" do "index.html"
        new HTMLWebpackPlugin({
            template: __dirname + '/app/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],

    //A flag "--hot" no script que roda o "webpack-dev-server" no JSON, atualiza o browser automaticamente caso o codigo seja alterado
    devServer: {
        //Porta do servidor
        port: 9000,
        //Abre o browser automaticamente
        open: true
    }
};