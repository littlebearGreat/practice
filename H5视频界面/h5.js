window.onload = function (){
	var video = document.getElementById('video');
	console.log(typeof video)
	$('#btn').click(function(){
		if (video.paused) {
			video.play();
		}else{
			video.pause();
		};
		return false;
	})
	$('#video').click(function(){
		if (video.paused) {
			video.play();
		}else{
			video.pause();
		};
		return false;
	})
	var time = document.getElementById('time');
	var tnum = video.duration;
	function tim(){
		time.innerHTML = parseInt(tnum) + 's';
	}
	var ptim = document.getElementById('ptime');
	var progress = document.getElementById('progress');
	video.onloadedmetadata = tim();
	video.ontimeupdate = function(){
		var num = video.currentTime;
		if (num < 10) {	
			ptim.innerHTML = '0' + parseInt(num) + 's';
		}else{
			ptim.innerHTML = parseInt(num) + 's';
		}
		progress.style.left = 260 * num / tnum - 5 + 'px';
	}
	// 下面是控制进度
	progress.onmousedown = function(ev){
		var event = ev || event;
		var iW = event.clientX - progress.offsetLeft;
		var bLeft = 0;
		var body = document.getElementsByTagName('body');
		body[0].style.cursor = 'pointer';
		document.onmousemove = function(ev){
			var event = ev || event;
			bLeft = event.clientX - iW;
			if (bLeft < 5) {
				progress.style.left = '-5px';
			} else if (bLeft > 260) {
				progress.style.left = '255px';
			}
			else{
				progress.style.left = bLeft -5 + 'px';
			}
			// return bLeft;
		}

		// 鼠标松开的时候要停止这两个函数
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
			video.currentTime = bLeft / 260 * tnum;
			body[0].style.cursor = 'default';
		}
	}
}	