// 在config中定义jquery的exports后在回调函数中传入接口名称才可以使用jquery，否则不要传入$
require(['jq','d'],function($,d){
    d.f1();
    console.log($)
    $(function(){
        console.log('可以用jquery')
    })
})