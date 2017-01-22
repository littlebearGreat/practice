// angular
	var num = ['1','2','3','4','5'];
	var di = ['河南','焦作','沁阳','柏香','小位'];
	var app = angular.module('myapp',[]);
	// 下拉列表自定义指令
	app.directive('myselect',function(){
		var str1 = '<div class="myDirectiveBox area-box"><myselectList></myselectList></div>';
		return{
			restrict:"ACE",
			template:str1
		};
	});
	var getval;
	app.directive('myselectlist',function(){
		getval = $('.myDirectiveBox').parent().siblings('input').val();
		var str2 = '<span class="diqu"><span ng-bind="diqu"></span><i class="iconfont">&#xe63c;</i></span><input type="hidden" ng-model="diqu" name="selectVal"/><ul class="diquC"><li ng-repeat="x in area track by $index" ng-bind="x" ng-click="diquC(x)"></li></ul>';
		return{
			restrict:"ACE",
			template:str2
		};
	});
	// 个人空间控制器
	app.controller('select',function($scope){
		var obj = eval("("+getval+")");
		$scope.area = obj.name;
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	});

	// 下拉框js
$(function(){
	$('.diqu').click(function(){
		$('.diquC').slideDown(200);
	})
	$('.diquC li').click(function(){
		$('.diquC').hide();
	})
	$('.area-box').mouseleave(function(){
		$('.diquC').slideUp(200);
	})
	
})