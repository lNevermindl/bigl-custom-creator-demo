var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{ test: /\.css$/, loader: 'style-loader!css-loader' }]
    }
};
