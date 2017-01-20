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
// angular
var app = angular.module('myapp',[]);
// 个人空间控制器
	app.controller('select',function($scope){
		$scope.area = ['河南','焦作','沁阳','柏香','小位'];
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	});
	// 下拉列表自定义指令
	app.directive('myselect',function(){
		var text = $('.area-box').parent().siblings('input').val();
		console.log(text);
		console.log('1');
		
		console.log('222222');
		// var st = text + 'Name';
		// console.log(st);
		var str = '<div class="area-box"><span class="diqu"><span ng-bind="diqu"></span><i class="iconfont">&#xe63c;</i></span><ul class="diquC"><li ng-repeat="x in area track by $index" ng-bind="x" ng-click="diquC(x)"></li></ul></div>'
		return{
			restrict:"ACE",
			template:str
		};
	});