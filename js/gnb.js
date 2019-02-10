$(document).ready(function(){
    /* gnb click scroll-effect */
    var gnbLi = $('.gnb > li > a');
    gnbLi.click(function(){
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop:$(target).offset().top},500,'swing'); 
    });
})