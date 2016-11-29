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
	},3000);
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
		},3000);
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
	// 下面是“小额贷款”这里的效果
	var gbox = document.getElementById('grow-list-click-box');
	var bli = gbox.getElementsByTagName('li');
	var gNormal = document.getElementById('grow-list-tit-normal');
	var nli = gNormal.getElementsByTagName('li');
	var gActive = document.getElementById('grow-list-tit-active');
	var ali = gActive.getElementsByTagName('li');
	var gCont = document.getElementById('grow-cont');
	var cdiv = gCont.getElementsByTagName('div');
	for (var i = 0; i < bli.length; i++) {
		bli[i].index = i;
		nli[i].index = i;
		ali[i].index = i;
		cdiv[i].index = i;
		bli[i].onclick = function(){
			for (var j = 0; j < nli.length; j++) {
				nli[j].style.display = 'block';
				ali[j].style.display = 'none';
				cdiv[j].style.display = 'none';
			}
			nli[this.index].style.display = 'none';
			ali[this.index].style.display = 'block';
			cdiv[this.index].style.display = 'block';
		}
	}

})