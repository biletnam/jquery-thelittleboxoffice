(function ( $ ) {
	$.extend($.fn.thelittleboxoffice, {

		themeListEncode : function(dataset, options) {
			
			var html = '';
			var html_group = '';
			var i = null;

			if (dataset.cursor_with_object_group === false) {
				for (i = 0; i < dataset.data.length; i++) 
					html = html + $.fn.thelittleboxoffice.themeListItemEncode(dataset.data[i], options);
			} else {
				for (var index in dataset.data) {
					
					html_group = '';
					
					for (i = 0; i < dataset.data[index].data.length; i++) 
						html_group = html_group + $.fn.thelittleboxoffice.themeListItemEncode(dataset.data[index].data[i], options);
					
					html = html + $.fn.thelittleboxoffice.template({
						title : dataset.data[index].title, 
						content : html_group
					}, "list/list_group");
				}
			}
			
			return html;
		},

		themeListItemEncode : function(data_item, options) {
			data_item.options = options;

			data_item.first_performance = data_item.performances[0];
			data_item.last_performance = data_item.performances[data_item.performances.length - 1];

			return $.fn.thelittleboxoffice.template(data_item, "list/list_item");
		}
	});
}( jQuery ));