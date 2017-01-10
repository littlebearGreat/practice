var app = angular.module('myapp',[]);
app.controller('myCtrl',function($scope){
	$scope.userInfo = {
		email:'364815552@qq.com',
		password:'123456',
		autoLogin:true
	};
	$scope.one = function(){
		$scope.userInfo = {
			email:'364615572@qq.com',
			password:'1234566',
			autoLogin:false
		}
	};
	$scope.two = function(){
		$scope.userInfo = {
			email:'1169644530@qq.com',
			password:'123456',
			autoLogin:false
		}
	};
	$scope.reset = function(){
		$scope.userInfo = {
			email:'364815552@qq.com',
			password:'123456',
			autoLogin:true
		}
	};
	$scope.console = function(){
		console.log($scope.userInfo);
	};
})