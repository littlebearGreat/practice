;(function($,win,doc,unde) {
	$.fn.TT = function(options){
		var defaults = {
			ul: $(this).find('.list'),
			btn : $(this).find('.btn')
		};

		var TY = $.extend({},defaults,options);

		var Method = {
			init:function(){
				Method.getData();
				Method.setCss();
				Method.handleEvent();
			},
			getData:function(){
				var list = TY.data;
				for (var i = 0; i < list.length; i++) {
					var li = $('<li>');
					li.text(list[i]);
					TY.ul.append(li);
				}
			},
			setCss:function(){
				TY.ul.css(TY.css);
			},
			handleEvent:function(){
				TY.ul.on('click','li',function(){
					alert($(this).index() + 1);
				});

				TY.btn.click(function(){
					if (typeof TY.goFn == 'function') {
						TY.goFn();
					}
				})
			}
		};

		Method.init();
	}
})(jQuery,window,document,undefined)