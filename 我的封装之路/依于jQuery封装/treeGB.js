
;(function($,win,doc,unde){
	$.fn.treeGB = function(options){  /*外部调用treeGB函数即可，传入json参数*/

		var defaults = {
			listBoxGB : $(this),
			div 	  : $(this).find('div')
		};

		var opts = $.extend({},defaults,options);
		var Method = {
			init : function(){
				Method.getData(); /*请求接口获得数据*/
				Method.handleEvent(); /*事件处理*/
			},

			getData : function(){
                        
			},
			handleEvent : function(){
				opts.listBoxGB.on('click','div',function(){
					console.log(opts.listBoxGB.get(0))
					alert('我点击了');
				});

				opts.div.click(function(){
					alert(66)
				})

			},
			xhhtml : function(index,count){
				for (var i = ((index-1)*opts.displayCount); i < count; i++) {
                    opts.pageDiv.append(opts.dataFun(opts.res[i],(i+1)));
                }
                opts.keuInput.val(index);
			}
		}

		Method.init();

	}
})(jQuery,window,document,undefined)