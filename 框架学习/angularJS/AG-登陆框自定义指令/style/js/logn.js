// 登陆框js
$(function(){
	$('.logn').click(function(){
		$('.box').fadeIn();
	});
	$('.close').click(function(){
		$('.box').fadeOut();
	});
	$('.btn-close').click(function(){
		$('.box').fadeOut();
	});
	$('.btn').click(function(){
		$('.box').hide();
	});
	$('.diqu').click(function(){
		$('.diquC').slideDown();
	})
	$('.diquC li').click(function(){
		$('.diquC').hide();
	})
	$('.area-box').mouseleave(function(){
		$('.diquC').slideUp(200);
	})
	// 单选框js
	$('.sex label').click(function(){
		$('.sex div label').css('background-position','22px 1px');
		$(this).css('background-position','22px -25px');
	})
	// 复选框
	var hobbyMu = '0';
	var hobbyRe = '0';
	var hobbyRu = '0';
	$('.hobby label').click(function(){
		if ($(this).css('background-position') == '18px 1px') {
			$(this).css('background-position','18px -25px');
		}else{
			$(this).css('background-position','18px 1px');
		}
	})
})
	// 登陆框控制器
	app.controller('logn',function($scope){
		var areaData = $('#areaData').val();
		var areaArray = new Array();
		areaArray = areaData.split(',');
		$scope.area = areaArray;
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	});
	// 下拉列表自定义指令
	app.directive('mylogn',function(){
		var str = '<div class="area-box"><span class="diqu"><span ng-bind="diqu"></span><i class="iconfont">&#xe63c;</i></span><ul class="diquC"><li ng-repeat="x in area track by $index" ng-bind="x" ng-click="diquC(x)"></li></ul></div>'
		return{
			restrict:"ACE",
			template:str
		};
	});