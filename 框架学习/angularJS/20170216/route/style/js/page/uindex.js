var app = angular.module('myapp',['ui.router','oc.lazyLoad'])
// .controller("MyCtrl", function($ocLazyLoad) {
//   $ocLazyLoad.load('style/js/page/one.js');
// })
.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/indexr');
	$stateProvider
	.state('indexr',{
		url:'/indexr',
		views: {  
	        "lazyLoadView": {  
				templateUrl:'html/indexr.html'
	        } 
	    },
	    resolve:{
	    	loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
	    		return $ocLazyLoad.load('style/js/page/indexr.js');
	    	}]
	    }
	})
	.state('one',{
		url: '/one',   
	    views: {  
	        "lazyLoadView": {  
	            templateUrl: 'html/one.html' ,
	            // controller:'MyCtrl'
	        } 
	    },
		resolve:{
	    	loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
	    		return $ocLazyLoad.load('style/js/page/one.js');
	    	}]
	    }
	})
	.state('two',{
		url:'/two',
		views: {  
	        "lazyLoadView": {  
				templateUrl:'html/two.html'
	        } 
	    },
	    resolve:{
	    	loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
	    		return $ocLazyLoad.load('style/js/page/two.js');
	    	}]
	    }
	})
	.state('three',{
		url:'/three',
		views: {  
	        "lazyLoadView": {  
				templateUrl:'html/three.html',
				controller:'threec'
	        } 
	    },
	    resolve:{
	    	loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
	    		return $ocLazyLoad.load('style/js/page/three.js');
	    	}]
	    }
	})
	.state('four',{
		url:'/four',
		views: {  
	        "lazyLoadView": {  
				templateUrl:'html/four.html'
	        } 
	    },
	    resolve:{
	    	loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
	    		return $ocLazyLoad.load('style/js/page/four.js');
	    	}]
	    }
	})
});
app.controller('threec', ['$scope', function($scope){
	$scope.text = '在上面的输入框中输入内容';
}])