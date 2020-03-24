const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[id].js',
        path: __dirname + '/dist',
    },
    mode: process.env.NODE_ENV,
    resolve: {
        extensions: ['.mjs', '.js', '.svelte']
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|svelte)$/,
                exclude: /node_modules\/(!svelte)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'svelte-loader',
                        options: {
                            hotReload: true,
                            legacy: true,
                            preprocess: require('svelte-preprocess')({
                                postcss: {
                                    plugins: [
                                        require('postcss-nested'),
                                        require('postcss-preset-env')({
                                            stage: 0,
                                            browsers: 'last 5 versions',
                                            autoprefixer: { grid: true },
                                        }),
                                    ]
                                },
                            })
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]',
                            }
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: [
                                require('postcss-nested'),
                                require('postcss-preset-env')({
                                    stage: 0,
                                    browsers: 'last 5 versions',
                                    autoprefixer: { grid: true },
                                }),
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: false,
            template: './public/index.html',
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/**/*.png',
                to: 'img',
                cache: true,
                force: true,
                flatten: true,
            },
        ]),
    ]
};
