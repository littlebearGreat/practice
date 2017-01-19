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