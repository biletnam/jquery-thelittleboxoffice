(function ( $ ) {
	$.extend($.fn.thelittleboxoffice, {

		templateString : function(dataset, template_source) {
			var template = Handlebars.compile(template_source);
			return this.bakeTemplate(
				template, 
				dataset
			);
		},

		template : function(dataset, template_name) {
			return this.bakeTemplate(
				this.getTemplate(template_name), 
				dataset
			);
		},

		getTemplate : function(template_name) {
			return templates["src/templates/" + template_name + ".html"];
		},

		bakeTemplate : function(template, dataset) {
			return template(dataset);
		}
		
	});
}( jQuery ));

