// 登陆框控制器
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
	app.controller('logn',function($scope){
		$scope.area = ['深圳','惠州','广州','惠州','广州'];
		$scope.diqu = '请选择';
		$scope.diquC = function(data){
			$scope.diqu = data;
		}
	})