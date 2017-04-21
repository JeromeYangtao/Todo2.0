module.exports = {
    entry: './app/app.js',
    output: {
        filename: './public/bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!'
            },
            {
                test: /\.scss?$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!node-sass!'
            }
        ]
    },

    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}