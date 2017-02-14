app.controller('page1C', ['$scope', function($scope){
	$scope.cont = '';
	$scope.left = function(){
		var num = 100 - $scope.cont.length;
		return num;
	};
	$scope.save = function(){
		alert('保存成功');
	};
	$scope.clear = function(){
		$scope.cont = '';
	}
}])