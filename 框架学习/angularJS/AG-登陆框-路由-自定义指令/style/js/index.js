	// nav路由
	var app = angular.module('myapp',['ngRoute'])
	.config(['$routeProvider',function($routeProvider) {
		$routeProvider
		.when('/mark',{templateUrl:'html/index.html'})
		.when('/index',{templateUrl:'html/index.html'})
		.when('/page1',{templateUrl:'html/page1.html'})
		.when('/page2',{templateUrl:'html/page2.html'})
		.when('/space',{templateUrl:'html/space.html'})
		.otherwise({redirectTo:'/index'});
	}])
	// 个人空间控制器
	app.controller('space',function($scope){
		$scope.area = ['河南','焦作','沁阳','柏香','小位'];
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	});
	// 下拉列表自定义指令
	app.directive('myspace',function(){
		var str = '<div class="area-box"><span class="diqu"><span ng-bind="diqu"></span><i class="iconfont">&#xe63c;</i></span><ul class="diquC"><li ng-repeat="x in area track by $index" ng-bind="x" ng-click="diquC(x)"></li></ul></div>'
		return{
			restrict:"ACE",
			template:str
		};
	});