const path = require('path')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    lintOnSave: false, //关闭eslint
    devServer: {
        proxy: {
            //配置代理服务器
            "/food": {
                target: "http://yapi.demo.qunar.com", //目标网址
                changeOrigin: true,
                pathRewrite: {
                    "^/food": ''
                }
            },
        }
    },
    chainWebpack:(config)=>{//起别名 地址简称
        config.resolve.alias
        .set('@',resolve('./src'))//src的绝对路径起一个别名叫@
        // .set('api',resolve('./src/api'))
        .set('style',resolve('./src/style'))
        .set('components',resolve('./src/components'))
    }
};