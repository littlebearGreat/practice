window.onload = function (){
	// 下面是登陆框的弹出隐藏效果
	$('.btn').click(function(){
		$('.box').fadeIn(200);
	})
	$('#close').click(function(){
		$('.box').fadeOut(200);
	})
	// 下面是登陆框中的内容
	var test = document.getElementById('test');
	var red = document.getElementById('red');
	test.onfocus = function(){
		var cont = '';
		var contlen = 0;
		var num = 0;
		setInterval(function(){
			cont = test.value;
			for (var i = 0; i < cont.length; i++) {
				if (cont.charCodeAt(i)>255) {
					contlen +=2;
				}else{
					num = 1;
				};
			};
			if (contlen>3 & contlen<9 & num == 0) {
				red.innerHTML = '输入正确';
				red.style.color = 'green';
			}else{
				red.innerHTML = '中文名为2-4个字符';
				red.style.color = 'red';
			};
			contlen = 0;
			num = 0;
		},500)
	}
}