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
})