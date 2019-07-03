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
    
    /* change window width */
    var winWidth = $(window).width();
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
    
    /* not change window width */
    if(winWidth > 2000){
        //console.log(winWidth);
        $(document).scroll(function(){
            var index = Math.round($(this).scrollTop() / 920);
            $menu.removeClass('active');
            $menu.eq(index).addClass('active');
        });
    }
    
})
