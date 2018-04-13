// require.js单独配置文件
// 单独config的话默认路径是加载config的html的路径
require.config({
    baseUrl:'../',
    paths:{
        'jq':'jquery',
        'd':'js/d'
    },
    // 定义依赖
    shim:{
        'd':{
            deps:['jq']
        },
        'jq':{
            exports: '$'
        }
    }
})