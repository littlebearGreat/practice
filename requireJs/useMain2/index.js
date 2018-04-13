require.config({
    // 配置路径
    paths: {
        'jq':'../jquery',
        'mA':'mA'
    },

    // 配置依赖关系
    shim: {
        'mA':{
            deps:['jq']
        }
    }
});
require(['mA'],function(mA){
    console.log(mA)
})