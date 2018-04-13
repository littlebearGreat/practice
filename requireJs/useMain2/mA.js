
define(function(){
    function a(){
        console.log('aaa');
    };

    function b(){
        console.log('bbb');
    };

    function c(){
        console.log($);
    };

    return {
        a:a,
        b:b,
        c:c
    };
})