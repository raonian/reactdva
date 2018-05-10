import path from 'path';
import webpack from 'webpack';
// import precss from 'precss';
// import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import ExtractTextPlugin from 'extract-text-webpack-plugin';
// import CopyWebpackPlugin from 'copy-webpack-plugin';

const STATIC_PATH = 'static';
// const extractVendor = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].vendor.css`);
// const extractStyle = new ExtractTextPlugin(`${STATIC_PATH}/css/[contenthash].style.css`);
const LOCAL_HOST = process.env.npm_package_server_local_host;
const LOCAL_PORT = process.env.npm_package_server_local_port;

export default {
    entry: {
        main: ['babel-polyfill', './src/index.js'],
        vendor: ['react', 'react-dom', 'dva']
    },
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'build'),
        filename: `${STATIC_PATH}/js/[chunkhash].[name].js`
    },
    // resolve: {
    //     extensions: ['.js', '.jsx', '.css', '.scss']
    // },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            use: ['babel-loader']
            // exclude: /node_modules/, 
            // loader: "babel-loader"
        }]
    },
    plugins: [
        // extractVendor,
        // extractStyle,
        new CleanWebpackPlugin(['build']),                  // 清除编译目录
        // new webpack.optimize.CommonsChunkPlugin('vendor'),  // 提取公共模块
        new HtmlWebpackPlugin({                             // 主页面入口index.html
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    optimization: {
        splitChunks: {                             // 提取公共模块
            chunks: 'all',
            name: 'vendor',
        },
        runtimeChunk: {
            name: 'main',
        },
        minimize: true                             // 压缩
    },
    devServer: {
        host: LOCAL_HOST,
        port: LOCAL_PORT,
        disableHostCheck: true,
        inline: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'build')
    }
}