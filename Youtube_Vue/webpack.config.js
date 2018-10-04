const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
module.exports={
    mode:"development",
    entry:['./Src/index.js',
            'webpack/hot/dev-server'
    ],
    output:{
        path:__dirname +'/Dist/',
        filename:'app.js'
    },
    module:{
        rules:[
            {test:/\.css$/, use:[
//                    "style-loader",                                      
                    "vue-style-loader",
                    "css-loader"
                ]},
            {test: /\.vue$/,
             use: 'vue-loader'},
              {
                test: /\.(png|jpg|gif)$/i,
                use: [
                {
                    loader: 'url-loader',
                    options: {
                    limit: 8192
                    }
              }
            ]
          }
        ]
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
      },
     plugins: [
    
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};