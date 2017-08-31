var Path = require('path'),
    Process = require('process'),
    webpack = require('webpack'),
    yargs = require('yargs'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin,
    DefinePlugin = webpack.DefinePlugin,

    rootPath = Process.cwd(),
    distDir = './dist',
    srcDir = '.',
    publicPath = "./../bundle/admin/",

    options = yargs
        .alias('p', 'optimize-minimize')
        .argv,

    config = {
        entry: {
            admin: Path.resolve(srcDir, 'admin', 'index.tsx')
        },
        output: {
            path: Path.resolve(distDir),
            filename: '[name].js',
            // chunkFilename: '[id]' + (options.optimizeMinimize ? '.mim' : "") + '.js',
            // publicPath: Path.resolve(distDir)
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css'
                },
                {
                    test: /\.less$/, 
                    loader: 'style!css!less'
                },
                {
                    test: /\.png$/,
                    loader: "url-loader",
                    query: { 
                        mimetype: "image/png"
                    }
                },
                {
                    test: /\.tsx?$/, 
                    loader: 'babel-loader!ts-loader?harmony',
                }
            ]
        },
        plugins: [
            // // new CommonsChunkPlugin('common.js'),
            // new DefinePlugin({
            //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
            // })
        ],
        resolve: {
            extensions: ['.tsx', '.js', ".less"],
            // alias: {
            //     'react-router': 'react-router'
            // },
            // modules: [
            //   "node_modules"
            // ]
        },
        // externals: {
        //     'react': 'React'
        // },
    };

if (!options.optimizeMinimize) {
    config.devtool = 'source-map';
}

module.exports = config;