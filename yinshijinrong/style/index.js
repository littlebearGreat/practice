$(function(){
	var i = 1;
	function move(){
		i ++;
		if (i > 4) {
			i = 2;
			$('.pic').css({left:-1080});
		};
		$('.circle li').removeClass('active');
		$('.circle li').eq(i-1).addClass('active');
		if (i == 4) {
			$('.circle li').eq(0).addClass('active');
		}
	}
	var turn = setInterval(function(){
		move();
		$('.pic').animate({
			left:-1080*i
		},1000);
	},3000000);
	// -------------------------------------------------------
	// 点击圆点控制图片
	$('.circle>li').click(function(){
		var index = $(this).index();
		$('.circle>li').removeClass('active');
		$(this).addClass('active');
		i = index + 1;
		$('.pic').animate({
				left:-1080*i
		},300);
	});
	//鼠标进入banner-box，箭头按钮显示
	$('.banner-box').hover(function(){
		$('.prev,.next').css({display:'block'});
	},function(){
		$('.prev,.next').css({display:'none'});
	});
	// 鼠标进去轮播窗口，图片停止轮播
	$('.banner-box').hover(function(){
		clearInterval(turn);
	},function(){
		turn = setInterval(function(){
			move();
			$('.pic').animate({
				left:-1080*i
			},1000);
		},3000000);
	});
	// ------------------------------------------
	// 点击箭头控制
	$('.next').click(function(){
		move();
		$('.pic').animate({
				left:-1080*i
		},100);
	});
	$('.prev').click(function(){
		i = i - 1;
		if (i < 0) {
			i = 2;
			$('.pic').css({left:-3000});
		};
		$('.circle li').removeClass('active');
		$('.circle li').eq(i-1).addClass('active');
		if (i == 0) {
			$('.circle li').eq(2).addClass('active');
		}
		$('.pic').animate({
				left:-1080*i
		},100);
	});
	// 第一个轮播框的动画
	$('.pic-circle-turn').hover(function(){
		$('.pic-circle-z-index1').removeClass('turn-l');
		$('.pic-circle-z-index2').removeClass('turn-r');
		$('.pic-circle-z-index1').addClass('turn-r');
		$('.pic-circle-z-index2').addClass('turn-l');
	},function(){
		$('.pic-circle-z-index1').removeClass('turn-r');
		$('.pic-circle-z-index2').removeClass('turn-l');
		$('.pic-circle-z-index1').addClass('turn-l');
		$('.pic-circle-z-index2').addClass('turn-r');
	})
})