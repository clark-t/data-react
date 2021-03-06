/**
 * @file webpack.config.js
 * @author clarkt(clarktanglei@163.com)
 */

module.exports = {
    entry: {
        index: './index.js'
    },
    output: {
        path: './dist',
        filename: 'data-observer.js',
        library: 'DataObserver',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'],
                    plugins: ['add-module-exports']
                }
            }
        ]
    }
};
