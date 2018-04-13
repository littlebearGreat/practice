// b.js
define(function() {
    function a (){
        return 'a';
    };
    function b(){
        console.log('我是b模块的b函数')
        return 'b';
    };

    return {
        a: a,
        b: b
    };
});