module.exports = {
  entry: `${__dirname}/client/src/index.js`,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      },
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
    path: `${__dirname}/client/dist`,
  },
};
