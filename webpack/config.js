const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = function(env, args) {
    const isProduction = env.production || false;
    return {
        context: path.resolve(__dirname, '..', 'src'),
        entry: './index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, '..', 'dist'),
        },
        mode: isProduction ? 'production': 'development',
        devtool: isProduction ? 'source-map' : 'eval',
        resolve: {
            alias: {
                actions: path.resolve(__dirname, '..', 'src', 'actions/'),
                assets: path.resolve(__dirname, '..', 'src', 'assets/'),
                components: path.resolve(__dirname, '..', 'src', 'components/'),
                hooks: path.resolve(__dirname, '..', 'src', 'hooks/'),
                layout: path.resolve(__dirname, '..', 'src', 'layout/'),
                pages: path.resolve(__dirname, '..', 'src', 'pages/'),
                util: path.resolve(__dirname, '..', 'src', 'util/'),
            },
            extensions: ['.tsx', '.ts', '.js', '.scss', '.sass', '.css'],
            extensionAlias: {
                '.js': ['.js', '.ts'],
                '.cjs': ['.cjs', '.cts'],
                '.mjs': ['.mjs', '.mts']
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s(a|c)ss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                esModule: true,
                                modules: {
                                    namedExport: true,
                                },
                            },
                        },
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(jpe?g)$/i,
                    use: 'asset/resource',
                    dependency: { not: ['url'] },
                    type: 'javascript/auto',
                },
                {
                    test: /\.(svg)$/i,
                    issuer: /\.tsx$/,
                    use: ['@svgr/webpack'],
                }
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Growfy',
                template: path.resolve(__dirname, '..', 'index.html'),
            }),
            new MiniCssExtractPlugin({
                filename: `[name]${isProduction ? '.[contenthash]' : ''}.css`,
                chunkFilename: `[id]${isProduction ? '.[contenthash]' : ''}.css`,
            }),
            new webpack.DefinePlugin({
                'process.env.AUTHENTICATION_SERVICE_URL': JSON.stringify('http://localhost:3000'),
                'process.env.COUNTRY_SERVICE_URL': JSON.stringify('https://restcountries.com/v3.1/alpha'),
                'process.env.USER_DATA_SERVICE_URL': JSON.stringify('http://localhost:3000'),
            }),
        ],
        devServer: {
            historyApiFallback: true,
            hot: true,
            liveReload: false,
            open: true,
            port: 5120,
            watchFiles: [`${path.resolve(__dirname, '..', 'src')}/**/*`],
        },
    };
};