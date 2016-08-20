module.exports = {
    entry: './client/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/client/webpacked_code'
    },
    module:{
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
}
