$(document).ready(function(){
    /* gnb click */
    var $menu, $body, $pages;
    $menu = $('.gnb li');
    $body = $('body, html');
    $pages = $('.content > div');
    
    $menu.click(function(){
        var index = $menu.index(this);
        var offset = $pages.eq(index).offset().top;
        
        $body.stop().animate({scrollTop : offset}, 500);
    });
    $menu.eq(0).click();
    
    $(document).trigger('scroll');
    
    $(document).scroll(function(){
        var index = Math.round($(this).scrollTop() / 768);
        $menu.removeClass('active');
        $menu.eq(index).addClass('active');
    });
    
    
    var winWidth = $(window).width();
    /* 640 */
    /* change window width640 */
    $(window).resize(function(){
        if(winWidth <= 640){
            $(document).scroll(function(){
                var index = Math.round($(this).scrollTop() / 640);
                $menu.removeClass('active');
                $menu.eq(index).addClass('active');
            });
        }
    });
    if(winWidth <= 640){
        $(document).scroll(function(){
            var index = Math.round($(this).scrollTop() / 640);
            $menu.removeClass('active');
            $menu.eq(index).addClass('active');
        });
    }
    
    
    /* 1024 */
    /* change window width1024 */
    $(window).resize(function(){
        if(winWidth >= 1200 && winWidth <= 1500){
            /* gnb animate */
            $('.gnb').animate({
                opacity:1,
                right:'20px'
            },400,'swing');
        }
    });
    if(winWidth >= 1200 && winWidth <= 1500){
        /* gnb animate */
        $('.gnb').animate({
            opacity:1,
            right:'20px'
        },400,'swing');
    }
    
    
    /* 2000 */
    /* change window width2000 */
    $(window).resize(function(){
        if(winWidth >= 2000){
            //console.log(winWidth);
            $(document).scroll(function(){
                var index = Math.round($(this).scrollTop() / 850);
                $menu.removeClass('active');
                $menu.eq(index).addClass('active');
            });
        }
    });
    if(winWidth >= 2000){
        //console.log(winWidth);
        $(document).scroll(function(){
            var index = Math.round($(this).scrollTop() / 850);
            $menu.removeClass('active');
            $menu.eq(index).addClass('active');
        });
    }
    
})
