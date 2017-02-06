	// 假设下面是获取到的数据，input的value值需与数据名字相同
	var num = ['1','2','3','4','5'];
	var area = ['河南','广东','湖南','湖北','山西'];
	var names = ['小明','小红','小白','小绿','小花'];
	var fruit = ['苹果','香蕉','菠萝','橘子','榴莲'];
	// 开始angular
	var app = angular.module('myapp',[]);
	// 下拉列表自定义指令
	app.directive('myselect',function(){
		var str1 = '<div class="myDirectiveBox area-box"><myselectList></myselectList></div>';
		return{
			restrict:"ACE",
			template:str1
		};
	});
	var getval;// 定义得到的value
	app.directive('myselectlist',function(){
		getval = $('.myDirectiveBox').parent().siblings('input').val(); // 获得input的value，
		var str2 = '<span class="diqu"><span ng-bind="diqu"></span><i class="iconfont">&#xe63c;</i></span><input type="hidden" ng-model="diqu" name="selectVal"/><ul class="diquC"><li ng-repeat="x in area track by $index" ng-bind="x" ng-click="diquC(x)"></li></ul>';
		return{
			restrict:"ACE",
			template:str2
		};
	});
	// 个人空间控制器
	app.controller('select', ['$scope', function($scope){
		var obj = eval("("+getval+")");// 把获取到的value转换成对象
		$scope.area = obj.name;
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	}]);

// 下拉框js点击效果
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