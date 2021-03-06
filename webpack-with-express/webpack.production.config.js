// in webpack.config.js we can't use ecma 6 module so that means
// we can't use import and export in this file. this path is probably 
// comming from node_modules.
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// get clean plugin
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        'hello-world': './src/hello-world.js',
        'banana': './src/banana.js'
    }, 
    output: {
        filename: '[name].[contenthash].js', // the [name] will be taken from enetry point key.   // this [contenthas] will generate new file if you change something in a file so the can have diffrent name, and if it has a diffrent name then browser will load the newer version. otherwise it will keep loading it from cache wich is the file with changes. same goes for css file 
        path: path.resolve(__dirname, './dist' ),
        publicPath: ''
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 3000
        }
    },
    devServer: {
        port: 9000, // don't know why the server is not runnig on port 9000 and instead  it's running on port 8080
        static: {
            directory: path.resolve(__dirname, './dist')
        }, 
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true
        }
    }, // it can be set to development, production, and none mode. the production mode will display more debuggable error in-contrast to production mode 
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                // type: 'asset/inline', // this is just a type of there are many type and you can find out about them on google. don't get scared by novelty
                // type: 'asset/resource', // this is just a type of there are many type and you can find out about them on google. don't get scared by novelty
                // type: 'asset', // this is just a type of there are many type and you can find out about them on google. don't get scared by novelty
                type: 'asset', // this is just a type of there are many type and you can find out about them on google. don't get scared by novelty

                   parser: { // this is the property that defines how the asset will be treated: asset/resource asset or asset/inline
                       dataUrlCondition: {
                           maxSize: 3*1024 // 3kb
                       }
                   }
            },
            { 
                test: /\.txt/,
                type: 'asset/source'
            },
            { 
                test: /\.css$/,
                use:  [ // you put loaders inside 'use' array.
                    MiniCssExtractPlugin.loader, 'css-loader'// you need to install these loader with npm. if you don't understand this, go to https://webpack.js.org/loaders/style-loader/ . btw the order of the loaders is important.
                ]
            },
            { 
                test: /\.scss$/,
                use:  [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' // the order of loaders matter 
                ]
            },
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                use:  {
                    loader: 'babel-loader', // babel-loader convert es6+ code down to es5 so all browser can understand it. I don't perfectly know what are the presets  that are define in options.
                    options: {
                        presets: ['@babel/env'],
                        plugins: ['@babel/plugin-proposal-class-properties'], 
                    }
                }
            }
            ,
            { 
                test: /\.hbs/,
                use: [
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ // minicssextract  plugin makes separet css file and put it into a specified file in dist directory.
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin(), // cleanwebpackplugin is a plugin that cleans the dist directory before building the bundle. Don't understand? remove this plugin and make some changes in js file and run webpack you'll know.
        new HtmlWebPackPlugin({   // it generates index.html file for you and put the approrpriate css and js in it. for some reason it is putting script tag in header instead of in the bottom of the body. I don't wheather it's working or not here.
            filename: 'banana.html',
            chunks: ['banana'],
            title: 'hello world', 
            template: 'src/page-template.hbs',
            description: 'some description',
            minify: false
        }),
        new HtmlWebPackPlugin({   // it generates index.html file for you and put the approrpriate css and js in it. for some reason it is putting script tag in header instead of in the bottom of the body. I don't wheather it's working or not here.
            filename: 'hello-world.html',
            chunks: ['hello-world'],
            title: 'bye world', 
            template: 'src/index.hbs',
            description: 'some hello description',
            minify: false
        })

    ]
}