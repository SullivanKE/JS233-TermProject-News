const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// this loads all of the variables in the .env file
// they're available in your code as process.env.KEY
require('dotenv').config();

/**
 * flag Used to check if the environment is production or not
*/
const isProduction = (process.env.NODE_ENV === 'production');

/**
* Include hash to filenames for cache busting - only at production
*/
const fileNamePrefix = isProduction? '[chunkhash].' : '';

module.exports = {
    mode: !isProduction ? 'development': 'production',
    entry: {
      app: './src/js/app.js',
    },
    watchOptions: {
      followSymlinks: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      //path: '/',
      filename: fileNamePrefix + '[name].js',
      assetModuleFilename: "assets/[name][ext]",
      clean: true,
    },
    target: 'web',
    devServer: { 
      static: "./dist",
      historyApiFallback: true
    }, 
    /* no separate source map files in production */
    devtool: !isProduction ? 'source-map' : 'inline-source-map', 
    module: {
      rules: [	
        { 
          test: /\.jsx?$/i,
          exclude: /(node_modules)/,
          use: { 
            loader: 'babel-loader', 
            options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }}
        }, 
        { 
          test: /\.css$/i, 
          /* separate js code and css in production */
          use: isProduction ?
            [ MiniCssExtractPlugin.loader, 'css-loader']	:
            [ 'style-loader', 'css-loader']		
        },
        { 
            test: /.s[ac]ss$/i, 
            use: isProduction ?
              [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']	:
              [ 'style-loader', 'css-loader' , 'sass-loader']		
        },
        {  
          test: /\.(svg|eot|ttf|woff|woff2)$/i,  
          type: "asset/resource",
        },
        {
          test: /\.(png|jpg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.resolve(__dirname, "./src/index.html"),
        chunks: ["app"],
        inject: "body",
        filename: "index.html",
      }),
      new copyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "src/img/"),
            to: path.resolve(__dirname, "dist/img/"),
          },
        ],
      }),
      /* app uses global SERVER_URL rather than process.env.SERVER_URL */
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        NEWS_FEED_API_TOKEN: JSON.stringify(process.env.NEWS_FEED_API_TOKEN),
        NEWS_ARTICLE_API_TOKEN: JSON.stringify(process.env.NEWS_ARTICLE_API_TOKEN)
      }),
    ],
    /* separates js (and css) that is shared between bundles - allows browser to cache */
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
}

/**
 * Production only plugins
 */
 if(isProduction) {
  module.exports.plugins.push(
    new MiniCssExtractPlugin({
      filename: fileNamePrefix + "[name].css",
    })
  );
};
  