require.config({
    paths: {
        'jquery' : 'jquery',
        'a': "js/a"
    },
    shim: {
        'a' : {
            deps : ['jquery']
        }
    }
})