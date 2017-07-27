(function(angular) {
	"use strict"
	/**
	* fengM Module
	*
	* Description
	*/
	angular.module('fengM', []).
	constant('fengData', {
		color:'red'
	}).directive('fengModle', ['$compile','fengData', function($compile,fengData){
		// Runs during compile
		return {
			scope: {
				data:'=',
				set:'='
			},
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			templateUrl: 'html/dom.html',
			replace: false,
			link: function($scope, element, attrs) {
				var setData = $scope.set;
				$scope.answer = '';
				$scope.showAnswer = null;
				$scope.getAnswer = function(){
					if ($scope.answer) {
						$scope.showAnswer = $scope.answer;
					}else{
						alert('不写答案就想提交？')
					}
				};

				$scope.tan = function(){
					if (typeof setData.action == 'function') {
						setData.action();
					}else{
						alert('action必须是函数')
					}
				};
			}
		};
	}]);
})(angular);