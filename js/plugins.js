/* 
 * Template Name      : Template 2
 * Template Version   : V 1.0.0
 * Template Url       : ...
 * Language           : HTML5, CSS3, jQuery 
 * Contact Me : Skaype   :- Boudraa.Hamani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com
 */
/*global $, window*/
$(function () {
    "use strict";
    
    /* ======================== Start Cash Varriable ======================== */
    var myHeader    = $('header'),
        mySlider    = $('.bxslider'),
        myLoading   = $(".loading");
    /* ======================== End Cash Varriable ======================== */
    
    /* ======================== Start Navbar ======================== */
    //--> Toggle The Navbar
    $("nav .links i.fa").click(function () {
        $(this).toggleClass("fa-bars fa-close");
        $(this).next("ul").slideToggle(500);
    });
    /* ======================== End Navbar ======================== */
    
    /* ======================== Start Header ======================== */
    
    //--> Make Height Of Header Equal Height Of Window
    myHeader.height($(window).height());
    
    //--> On Resize Event
    $(window).resize(function () {
        //--> Resizing The Height Of Header
        myHeader.height($(window).height());
        
        //--> Make Liste Item Center
        mySlider.each(function () {
            var heightSlider = ($(window).height() - $('.bxslider li').height()) / 2;
            $(this).css('padding', heightSlider);
        });
    });
    
    //-->Smooth Scroll To Services
    $('.links ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
        $('html, body').animate({ scrollTop: $($(this).data('value')).offset().top}, 1000);
        if ($(window).width() < 992) {
            $("nav .links ul").slideUp(500);
            $("nav .links i.fa").toggleClass("fa-bars fa-close");
        }
    });
    
    //--> Start Trigger The BxSlider
    mySlider.bxSlider({
        auto : true,
        pager: false,
        onSlideAfter : function () {
            $(".title").addClass("animated rotateInDownLeft");
            $(".text").addClass("animated rotateInUpLeft");
        },
        onSlideBefore : function () {
            $(".title").removeClass("animated rotateInDownLeft");
            $(".text").removeClass("animated rotateInUpLeft");
        }
    });
    
    //--> Make A List Items Slider Center
    mySlider.each(function () {
        var heightSlider = ($(window).height() - $('.bxslider li').height()) / 2;
        $(this).css('padding-top', heightSlider);
    });
    /* ======================== End Header ======================== */
    
    /* ======================== Start Trigger Nice Scroll Library ======================== */
    $('html').niceScroll({ cursorcolor: '#1BBC9D', cursorborder: '1px solid #1BBC9D' });
    /* ======================== End Trigger Nice Scroll Library ======================== */
    
    /* ======================== Start Our Auto Slider ======================== */
    (function autoSlider() {
        $('.slider .active').each(function () {
            if (!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active');
                    $('.slider .client').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());
    /* ======================== End Our Auto Slider ======================== */
    
    /* ======================== Start Project ======================== */
    //--> Trigger MixItUp
    $('.gallery').mixItUp();
    
    //--> Costomiz Shuffle
    $('.project .container li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    /* ======================== End Project ======================== */
    
    /* ======================== Start Make Width & Height To Loading ======================== */
    
    myLoading.width($(window).width());
    myLoading.height($(window).height());
    
    /* ======================== End Make Width & Height To Loading ======================== */
});

$(window).load(function () {
    "use strict";
    $(".loading").fadeOut(2000);
});