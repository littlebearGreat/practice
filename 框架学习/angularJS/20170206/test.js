var app = angular.module('myapp',[]);
app.controller('timer', ['$scope','$interval', function($scope,$interval){
	$scope.time = new Date();
	$interval(function(){
		$scope.time = new Date();
	})
}])