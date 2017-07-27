var app = angular.module('myapp',['fengM']);
app.controller('myCon', ['$scope', function($scope){
	$scope.data = ['苹果','香蕉','榴莲'];
	$scope.set = {
		fontsize : '16px',
		style 	 : {'font-size':'16px','color':'orange'},
		txt 	 : '你喜欢吃上面的哪种水果？',
		action 	 : function(){alert('弹弹弹')}
	};
}])