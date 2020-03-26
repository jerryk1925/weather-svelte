const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const postcssVarsConfig = require('./postcss.vars.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
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
                                            'custom-media-queries': {
                                                preserve: false,
                                                importFrom: [postcssVarsConfig]
                                            }
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
                    name: 'images/[name]-[hash:base64:5].[ext]',
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader',
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: './public/index.html',
        }),
        new WebpackPwaManifest({
            name: 'Weather',
            short_name: 'Weather',
            display: 'standalone',
            background_color: '#7768E5',
            "theme-color": '#7768E5',
            crossorigin: 'use-credentials',
        })
    ]
};
