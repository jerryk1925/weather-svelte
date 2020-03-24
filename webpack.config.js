const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/' + process.env.CI_PROJECT_NAME + '/'
      : '/',
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
                options: {
                    removeSVGTagAttrs: true
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            hash: false,
            template: './public/index.html',
        }),
    ]
};
