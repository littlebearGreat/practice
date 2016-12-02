window.onload = function(){
	$('#add-li').click(function(){
		var newli = document.createElement('li');
		var ul = document.getElementsByTagName('ul');
		// newli.appendTo(ul[ul.length]);
		// newli.addClass('newli');
		// ul[1].appendChild(newli);
		newli.insertBefore($('#add-li'));
		// newli.removeClass('newli');
	})
}