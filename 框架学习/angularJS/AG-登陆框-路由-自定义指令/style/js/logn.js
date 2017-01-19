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
	// 单选框js
	$('.type-box div').click(function(){
		$('.type-box div').css('background-position','0px 4px');
		$(this).css('background-position','0px -22px');
	});
	// 复选框
	$('.remember-active').hover(function(){
		$('#auto-login').css('display','inline-block');
	},function(){
		$('#auto-login').css('display','none');
	});
	$('.remember-active label').click(function(){
		if ($('.remember-active').css('background-position') == '0px 0px') {
			$('.remember-active').css('background-position','-14px 0px');
		}else{
			$('.remember-active').css('background-position','0px 0px');
		}
	})
})