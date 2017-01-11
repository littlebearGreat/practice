var app = angular.module('myapp',[]);
app.directive('zdyZl',function(){
	return{
		restrict:"ACE",
		template:'<h4>自定义指令</h4>'
	};
});