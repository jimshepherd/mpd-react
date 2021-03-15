const path = require('path');

module.exports = {
  alias: {
    // point to the src/queries for the graphql-tag/loader loader
    queries: path.resolve(__dirname, '../src/queries/')
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  }
}