$(document).ready(function(){
    /* gnb click scroll-effect */
    var gnbLi = $('.gnb > li > a');
    /*gnbLi.click(function(){
        var target = $(this).attr('href');
        $('html, body').stop().animate({scrollTop:$(target).offset().top},500,'swing'); 
    });*/
    
    var $menu, $body, $pages;
    $menu = $('.gnb li');
    $body = $('body, html');
    $pages = $('.content > div');
    
    $menu.click(function(){
        var index = $menu.index(this);
        var offset = $pages.eq(index).offset().top;
        
        $body.stop().animate({scrollTop : offset}, 500);
    });
    
    $(document).trigger('scroll');
    
    $(document).scroll(function(){
        var index = Math.round($(this).scrollTop() / 768);
        $menu.removeClass('active');
        $menu.eq(index).addClass('active');
    });
    
    
    var winWidth = $(window).width();
    /* 320 */
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
    
    
    /* 2000 */
    /* change window width2000 */
    $(window).resize(function(){
        if(winWidth > 2000){
            //console.log(winWidth);
            $(document).scroll(function(){
                var index = Math.round($(this).scrollTop() / 920);
                $menu.removeClass('active');
                $menu.eq(index).addClass('active');
            });
        }
    });
    if(winWidth > 2000){
        //console.log(winWidth);
        $(document).scroll(function(){
            var index = Math.round($(this).scrollTop() / 920);
            $menu.removeClass('active');
            $menu.eq(index).addClass('active');
        });
    }
    
})
