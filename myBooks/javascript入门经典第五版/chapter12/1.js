// 此脚本写在一个函数中，在页面，scr加载完成后执行
function outJs(){
	$('.changeColor').css('color','red');
	$('.alert').click(function(){
		alert('出来了');
	})
}
// 在脚本最后执行脚本函数
outJs();
