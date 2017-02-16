var app = angular.module('myapp',['ui.router'])
// .controller('indexrC', ['$scope', function($scope){
	
// }])
.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	$urlRouterProvider.otherwise('/indexr');
	$stateProvider
	.state('indexr',{
		url:'/indexr',
		views:{
			'lazyLoadView':{
				controller: 'indexrC',
				templateUrl:'html/indexr.html'
			}
		},
		resolve:{
			loadMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
				return $ocLazyLoad.load('style/js/page/indexr.js');
			}]
		}
	})
}])
