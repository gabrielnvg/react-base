import HTMLWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';

module.exports = {
    context: __dirname + '/app',
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
                //A ordem de execucao dos loaders se segue da direita para a esquerda (ou baixo para cima)
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                             minimize: true
                        }
                    },
                    'sass-loader'
                ]
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
        }),
        //Copia as imagens
        new CopyWebpackPlugin([{
            from: 'img/',
            to: 'img/'
        }]),
        //Minifica as imagens (precisa sempre vir depois de plugins que adicionam imagens)
        new ImageminPlugin({
            disable: process.env.NODE_ENV !== 'PROD', //Desabilita caso a build nao seja de Prod
            test: /\.(jpe?g|png|gif|bmp|svg)$/i
        })
    ],

    //A flag "--hot" no script que roda o "webpack-dev-server" no JSON, atualiza o browser automaticamente caso o codigo seja alterado (Hot Reload)
    devServer: {
        //Porta do servidor
        port: 9000,
        //Abre o browser automaticamente
        open: true
    }
};