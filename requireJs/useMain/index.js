// index.js
require.config({
    paths: {
        'jquery':'../jquery',
        'b':'../js/b',
        'c':'../js/c'
    }
});
require(['jquery','c'],function(jquery,c){
    console.log(jquery);

    // var ib = b.b();
    // console.log(ib);

    var ic = c.cf1();
    console.log(ic);
})