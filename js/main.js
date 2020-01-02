$(function() {
    
// Активные вкладки "WHAT YOU GET" //

    $('.info__selection').click(function(){
        $(this).toggleClass('info__selection__active').next('p').slideToggle('slow');
       });

// Активные вкладки "WHAT YOU GET" //


// Tabs //

    $('.tabs__content-item').not(':first').hide();
    $('.tabs__content-wrapper .tabs__tab').click(function(){

        $('.tabs__content-wrapper .tabs__tab').removeClass('tabs__tab__active').eq($(this).index()).addClass('tabs__tab__active');
        $('.tabs__content-item').hide().eq($(this).index()).fadeIn(1000);
    }).eq(1).addClass('tabs__tab__active');

// Tabs //


// Slider //

$('.slider__block').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    dots: true,
    arrows: false,
    slidesToScroll: 1,
});

// Slider //


// burger menu

$('.menu__btn').on('click', function() {
    $('.menu__list').slideToggle('slow');
    $('.header__right-blocks').slideToggle('slow');
});

// burger menu
});