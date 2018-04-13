// c.js
define([
    'b'
], function(b) {
    function cf1(){
        var r = b.a() + 'side';
        return r;
    };

    return {
        cf1: cf1
    };
    
});