var app = angular.module('myapp',['ngRoute','oc.lazyLoad'])
.controller('indexrC', ['$scope','$ocLazyLoad', function($scope,$ocLazyLoad){
	$ocLazyLoad.load('style/js/page/indexr.js');
}])
.controller('oneC', ['$scope','$ocLazyLoad', function($scope,$ocLazyLoad){
	$ocLazyLoad.load('style/js/page/one.js');
}])
.controller('twoC', ['$scope','$ocLazyLoad', function($scope,$ocLazyLoad){
	$ocLazyLoad.load('style/js/page/two.js');
}])
.controller('threeC', ['$scope','$ocLazyLoad', function($scope,$ocLazyLoad){
	$ocLazyLoad.load('style/js/page/three.js');
}])
.controller('fourC', ['$scope','$ocLazyLoad', function($scope,$ocLazyLoad){
	$ocLazyLoad.load('style/js/page/four.js');
}])
.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/indexr',{
		templateUrl:'html/indexr.html',
		controller:'indexrC'
	})
	.when('/one',{
		templateUrl:'html/one.html',
		controller:'oneC'
	})
	.when('/two',{
		templateUrl:'html/two.html',
		controller:'twoC'
	})
	.when('/three',{
		templateUrl:'html/three.html',
		controller:'threeC'
	})
	.when('/four',{
		templateUrl:'html/four.html',
		controller:'fourC'
	})
	.otherwise({
		redirectTo:'/indexr'
	})
}])