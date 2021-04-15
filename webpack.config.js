import path from 'path';

module.exports = {
  entry: path.join(__dirname, '/client/src/index.js'),
  module: {
    rules: [
      {
        test: [/\.(js|jsx)?/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/client/dist'),
  },
};
