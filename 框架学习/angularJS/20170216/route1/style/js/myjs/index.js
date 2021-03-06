var app = angular.module('myapp',['ui.router','oc.lazyLoad']);
app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/indexcont');
	$stateProvider
		.state('indexcont',{
			url:'/indexcont',
			views:{
				"cont1":{
					templateUrl:'html/indexcont.html'
				}
			}
		})
		.state('p1',{
			url:'/p1',
			views:{
				"cont1":{
					templateUrl:'html/p1.html'
				}
			}
		})
		.state('p2',{
			url:'/p2',
			views:{
				"cont1":{
					templateUrl:'html/p2.html'
				}
			},
			resolve:{
				loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('style/js/myjs/p2.js');
				}]
			}
		})
		.state('p3',{
			url:'/p3',
			views:{
				"cont1":{
					templateUrl:'html/p3.html'
				}
			},
			resolve:{
				loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
					return $ocLazyLoad.load('style/js/myjs/p3.js');
				}]
			}
		})
		.state('p4',{
			url:'/p4',
			views:{
				"cont1":{
					templateUrl:'html/p4.html'
				}
			}
		})
}])