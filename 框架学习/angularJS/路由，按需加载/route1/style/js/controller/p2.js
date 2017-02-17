// angular.module('myapp')
var app = angular.module('myapp',[]);
app.controller('p2c', ['$scope', function($scope){
	$scope.btn = function(){
		alert('点击事件');
	}
}])