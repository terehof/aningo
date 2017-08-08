$(function() {

	/* Slick slider
	=========================*/

	$("#slider").slick({
	  infinite: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	  rows: 1,
	  arrows: false,
	  speed: 700,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  dots: false,

	  responsive: [
	      {
	        breakpoint: 960,
	        settings: {
	          slidesToShow: 1,
	          rows: 2,
	          slidesToScroll: 1,
	          infinite: true,
	          dots: false
	        }
	      }
	    ]  
	});

	$(".reviews__btn--prev").on("click", function() {
		$("#slider").slick("slickPrev");
	});

	$(".reviews__btn--next").on("click", function() {
		$("#slider").slick("slickNext");
	});


	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});



	/* Slick slider Num 2
	=========================*/
	$('#slider-product').on('init', function (event, slick, direction) {

	    // check to see if there are one or less slides
	    if (($('#slider-product .slick-slide').length <= 5)) {

	        // remove arrows
	        $('.product__btn').hide();

	        $('#slider-product').css({"margin-left" : "0px"});
	        $('.product__slides').css({"text-align" : "left"});
	        $('.slick-track').css({"margin" : "0px"});

	    }

	});

	$("#slider-product").slick({
	  infinite: true,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  rows: 1,
	  arrows: false,
	  speed: 700,
	  dots: false,

	  responsive: [
	      {
	        breakpoint: 510,
	        settings: {
	          slidesToShow: 3,
	          rows: 1,
	          slidesToScroll: 1,
	          infinite: true,
	          dots: false
	        }
	      }
	    ] 

	});


	$(".product__btn--prev").on("click", function() {
		$("#slider-product").slick("slickPrev");
	});

	$(".product__btn--next").on("click", function() {
		$("#slider-product").slick("slickNext");
	});


	/* Table Open slide-down
	=========================================*/

	$( ".btn-open-js" ).click(function() {
		$(this).prev(".table-js").toggleClass('opened');
		$(this).hide();
		/*$(".table-js").toggleClass('opened');*/
	});

	var count = $(".product__table-content .table-js >tbody >tr").length;

	console.log(count);

	$(".table-js").each(function(i,item) {
		if($(item).find("tbody >tr").length <= 3) {
			$(item).next(".btn-open-js").hide();
		}
	})


	/* Overflow
	=========================================*/

	$('#menu-toggle').on('click', function() {
		$('body').toggleClass('overflowHidden');
	});


	/* Video
	=======================*/

	var $btnOpenVideo = $(".btn-open-video"),
		$videoOverlay  = $('.video-overlay'),
		$videoOverlayClose  = $('.video-overlay-close'),
		$vimeo = $('#vimeo');

	var videoSrc = $vimeo.attr('src');

	$btnOpenVideo.on("click", function(e) {
		e.preventDefault();
		$('body').addClass('overflowHidden');
		$videoOverlay.fadeIn().addClass('wide');
		setTimeout(function () {
			$videoOverlayClose.fadeIn();
			$vimeo.css({
				opacity: 1
			});
			$vimeo.attr('src', (videoSrc + '&autoplay=1'));
		}, 700);
	});

	$videoOverlayClose.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.fadeOut();
		$vimeo.css({
			opacity: 0
		});
		$vimeo.attr('src', videoSrc);
		$('body').removeClass('overflowHidden');

		setTimeout(function () {
			$videoOverlay.removeClass('wide');
			setTimeout(function () {
				$videoOverlay.fadeOut()
			}, 500)
		}, 200)
	});


	/*Telephone Mask
	=================*/

	 $(".input-mask").inputmask("+7 (999) 999-99-99", { clearMaskOnLostFocus: true, showMaskOnHover: false, });



	 /*+ -
	=================*/

	$('.plus').on('click', function() {
	  var $this = $(this);
	  var val = parseFloat($this.closest('.basket__counter').find('.sum').val());
	  $this.closest('.basket__counter').find('.sum').val(val + 1);
	})
	$('.minus').on('click', function() {
	  var $this = $(this);
	  var val = parseFloat($this.closest('.basket__counter').find('.sum').val());
	  $this.closest('.basket__counter').find('.sum').val(val - 1);
	});


	 /*Filter open
	=================*/

	$( ".open-filter" ).click(function(e) {
		e.preventDefault();

		$( ".open-filter" ).toggleClass('rotate');

		$( ".catalog__filter-js" ).slideToggle( "slow", function() {
		});
	});



	 /*Window risize for slider
	=================*/

	var winWidth = $(window).width();
	// берешь ширину окна
	var blocksLength = $('.product__slides').length

	var visibleCount;
	if (winWidth <= 509) {
	  visibleCount = 3;
	  // для экранов меньших чем 480px - только два слайда видимых
	}

	if ($('.block').length <= visibleCount) {
	  $('.product__btn').hide();
	  $('.product__slides').css({"text-align" : "center"});
	}


	/*Validate
	=================*/


	$("#form-js").validate({
		messages: {
			name: "Пожалуйста,представьтесь",
			telephone: "Пожалуйста,укажите номер телефона",
			email: "Пожалуйста,укажите E-mail",
		}
	});

	$("[data-fancybox]").fancybox({
		touch : false,
	});

});