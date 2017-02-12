$(function() {

	$(document).ready(function() {
		//==========Top Mobile Menu=======================

		$('.main-head .mnu-mobile').click(function(e) {
			if ($(window).width() <= 992) {
				$(this).toggleClass('opened');
				$('.main-head .mnu').slideToggle('normal');
			}
			e.stopPropagation();
		});
		
		$('.mnu a').click(function(e) {
			if ($(window).width() <= 992) {
				$('.main-head .mnu').slideUp('normal');				
			}
		});

		$('.main-head').click(function(e) {
			var opened = $('.main-head .mnu-mobile').hasClass('opened');
			if (opened && $(window).width() <= 992) {
				$('.main-head .mnu-mobile').removeClass('opened');
				$('.main-head .mnu').slideUp('fast');			
			}
		});
		//==============================================
		//==========Footer Mobile Menu=======================
		$('.footer-mnu-mobile').click(function(e) {
			$(this).toggleClass('opened');
			$('.footer-mnu').slideToggle('normal');
			$('html, body').animate({ scrollTop: $(document).height() }, "normal");
			return false;		
			e.stopPropagation();
		});
		
		$('.footer-mnu a').click(function(e) {
			$('.footer-mnu').slideUp('fast');
		});

		$('body').click(function(e) {
			var opened = $('.footer-mnu-mobile').hasClass('opened');
			if (opened) {
				$('.footer-mnu-mobile').removeClass('opened');
				$('.footer-mnu').slideUp('fast');
			}
			e.stopPropagation();
		});
		//==============================================
	});

});
