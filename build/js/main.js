$(function(){$("#slider").slick({infinite:!0,slidesToShow:2,slidesToScroll:2,rows:1,arrows:!1,speed:700,autoplay:!0,autoplaySpeed:3e3,dots:!1,responsive:[{breakpoint:960,settings:{slidesToShow:1,rows:2,slidesToScroll:1,infinite:!0,dots:!1}}]}),$(".reviews__btn--prev").on("click",function(){$("#slider").slick("slickPrev")}),$(".reviews__btn--next").on("click",function(){$("#slider").slick("slickNext")}),$("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function(){$(this).toggleClass("open")}),$("#slider-product").on("init",function(e,t,s){$("#slider-product .slick-slide").length<=5&&($(".product__btn").hide(),$("#slider-product").css({"margin-left":"0px"}),$(".product__slides").css({"text-align":"left"}),$(".slick-track").css({margin:"0px"}))}),$("#slider-product").slick({infinite:!0,slidesToShow:5,slidesToScroll:1,rows:1,arrows:!1,speed:700,dots:!1,responsive:[{breakpoint:510,settings:{slidesToShow:3,rows:1,slidesToScroll:1,infinite:!0,dots:!1}}]}),$(".product__btn--prev").on("click",function(){$("#slider-product").slick("slickPrev")}),$(".product__btn--next").on("click",function(){$("#slider-product").slick("slickNext")}),$(".btn-open-js").click(function(){$(this).prev(".table-js").toggleClass("opened"),$(this).hide()});var e=$(".product__table-content .table-js >tbody >tr").length;console.log(e),$(".table-js").each(function(e,t){$(t).find("tbody >tr").length<=3&&$(t).next(".btn-open-js").hide()}),$("#menu-toggle").on("click",function(){$("body").toggleClass("overflowHidden")});var t=$(".btn-open-video"),s=$(".video-overlay"),o=$(".video-overlay-close"),i=$("#vimeo"),n=i.attr("src");t.on("click",function(e){e.preventDefault(),$("body").addClass("overflowHidden"),s.fadeIn().addClass("wide"),setTimeout(function(){o.fadeIn(),i.css({opacity:1}),i.attr("src",n+"&autoplay=1")},700)}),o.on("click",function(e){e.preventDefault(),$(this).fadeOut(),i.css({opacity:0}),i.attr("src",n),$("body").removeClass("overflowHidden"),setTimeout(function(){s.removeClass("wide"),setTimeout(function(){s.fadeOut()},500)},200)}),$(".input-mask").inputmask("+7 (999) 999-99-99",{clearMaskOnLostFocus:!1}),$(".plus").on("click",function(){var e=$(this),t=parseFloat(e.closest(".basket__counter").find(".sum").val());e.closest(".basket__counter").find(".sum").val(t+1)}),$(".minus").on("click",function(){var e=$(this),t=parseFloat(e.closest(".basket__counter").find(".sum").val());e.closest(".basket__counter").find(".sum").val(t-1)}),$(".open-filter").click(function(e){e.preventDefault(),$(".open-filter").toggleClass("rotate"),$(".catalog__filter-js").slideToggle("slow",function(){})});var l,c=$(window).width();$(".product__slides").length;c<=509&&(l=3),$(".block").length<=l&&($(".product__btn").hide(),$(".product__slides").css({"text-align":"center"})),$("#form-js").validate({messages:{name:"Пожалуйста,представьтесь",telephone:"Пожалуйста,укажите номер телефона",email:"Пожалуйста,укажите E-mail"}}),$("[data-fancybox]").fancybox({touch:!1})});