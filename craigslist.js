(function () {

	$('.right-h2-link').click(function(){
		var lists = $('.right-list'),
			target = $(this).parent().next();
		if (lists.is(':visible')) {
			lists.slideUp();
		}
		if (!target.is(':visible')) {
			target.slideDown();
		}
	});

})(jQuery);
