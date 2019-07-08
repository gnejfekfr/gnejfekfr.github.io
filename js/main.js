$(document).ready(function(){
    /* section1 h2 animate */
    $('.section1 > h2').animate({opacity:1},400,'swing');
    
    
    /* mouse-bt click scroll-effect */
    $('.mouse-bt').click(function(){
        $('html, body').stop().animate({scrollTop:$('.section2').offset().top},500,'swing');
    });
    
    
    /* section3 down click */
    $('.down').click(function(){
        $('html, body').stop().animate({scrollTop:$('.section4').offset().top},500,'swing');
    })
    
    
    /* slime character slide */
    var swiper = new Swiper('.slime-txt-slide',{
        spaceBetween:  30,
        effect: 'fade',
        loop: false,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev'
        },
        on: {
            init: function(){
                var index = this.activeIndex;

                var target = $('.txt-slide').eq(index).data('target');

                //console.log(target);

                $('.slime-img').removeClass('active');
                $('.slime-img#' + target).addClass('active');
            }
        }
    });

    swiper.on('slideChange', function(){
        var index = this.activeIndex;

        var target = $('.txt-slide').eq(index).data('target');

        //console.log(target);

        $('.slime-img').removeClass('active');
        $('.slime-img#' + target).addClass('active');

        if(swiper.isEnd){
            $('.prev').removeClass('disabled');
            $('.next').addClass('disabled');
        }else{
            $('.next').removeClass('disabled');
        }

        if(swiper.isBeginning){
            $('.prev').addClass('disabled');
        }else{
            $('.prev').removeClass('disabled');
        }
    });
    
    
    /* top-bt */
    $('.top-bt').click(function(event){
        $('html, body').stop().animate({scrollTop:0},500,'swing');
        event.preventDefault();
    });
    $(window).scroll(function(){
        if($(window).scrollTop() < 110){
            $('.top-bt').removeClass('on');
        }
        else{
            $('.top-bt').addClass('on');
        }
        
        if($(window).scrollTop() > 5490){
            $('.top-bt').addClass('move');
        }
        else{
            $('.top-bt').removeClass('move');
        }
        //console.log($('body').height());
    });
    
    /* update-slider */
    $('.update-slide-wrap').owlCarousel({
        nav: true,
        center: true,
        dots: true,
        loop: false,
        margin: 480,
        responsiveClass:true,
        responsive:{
            320:{
                nav:false,
                margin:150
            },
            768:{
                nav:false,
                margin: 150
            },
            1024:{
                nav:true,
                margin:480
            }
        }
    });
    $('.mo-update-slide-wrap').owlCarousel({
        nav: false,
        center: true,
        dots: true,
        loop: false,
        margin: 150
    });
    
    
    /* window resize -> refresh */
    $(window).resize(function(){
        document.location.reload();
    })
    
    /* 640 */
    /* change window width640 */
    var winWidth = $(window).width();
    $(window).resize(function(){
        if(winWidth <= 640){
            /* slimerancher_logo img h2 */
            $('.section1 > h2 img').attr({'src':'img/slimerancher_logo_mo.png'});
            
            /* section1 slime animate */
            /*setInterval(function() {
                $('.pink').animate({
                    'bottom': '-60px'
                }, 500).animate({
                    'bottom': '-69px'
                }, 500);

                $('.blue').animate({
                    'bottom': '59px'
                }, 600).animate({
                    'bottom': '50px'
                }, 600);

                $('.gold').animate({
                    'bottom': '150px'
                }, 600).animate({
                    'bottom': '160px'
                }, 600);
            }, 0);*/
            
            /* system requirements tab */
            var systemTab = $('.mo-system-box-wrap > div > h3');
            systemTab.click(function(){
                $('.system-box > div').hide();
                $(this).next('div').show();
            });
            systemTab.eq(0).click();
            
            /* top-bt */
            $(window).scroll(function(){
                if($(window).scrollTop() > 4400){
                    $('.top-bt').addClass('move');
                }
                else{
                    $('.top-bt').removeClass('move');
                }
                //console.log($('body').height());
            });
        }
    });
    if(winWidth <= 640){
        /* slimerancher_logo img h2 */
        $('.section1 > h2 img').attr({'src':'img/slimerancher_logo_mo.png'});
        
        /* section1 slime animate */
        /*setInterval(function() {
            $('.pink').animate({
                'bottom': '-60px'
            }, 500).animate({
                'bottom': '-69px'
            }, 500);

            $('.blue').animate({
                'bottom': '59px'
            }, 600).animate({
                'bottom': '50px'
            }, 600);

            $('.gold').animate({
                'bottom': '150px'
            }, 600).animate({
                'bottom': '160px'
            }, 600);
        }, 0);*/
        
        /* system requirements tab */
        var systemTab = $('.mo-system-box-wrap > div > h3');
        systemTab.click(function(){
            $('.system-box > div').hide();
            $(this).next('div').show();
        });
        systemTab.eq(0).click();
        
        /* top-bt */
        $(window).scroll(function(){
            if($(window).scrollTop() > 4400){
                $('.top-bt').addClass('move');
            }
            else{
                $('.top-bt').removeClass('move');
            }
            //console.log($('body').height());
        });
    }
    
    
    /* 1000 */
    /* change window width1000 */
    $(window).resize(function(){
        if(winWidth >= 1000){
            /* slimerancher_logo img h2 */
            $('.section1 > h2 img').attr({'src':'img/slimerancher_logo.png'});
            
            /* section1 slime animate */
            /*setInterval(function() {
                $('.pink').animate({
                    'bottom': '-160px'
                }, 500).animate({
                    'bottom': '-169px'
                }, 500);

                $('.blue').animate({
                    'bottom': '229px'
                }, 500).animate({
                    'bottom': '220px'
                }, 500);

                $('.gold').animate({
                    'bottom': '150px'
                }, 500).animate({
                    'bottom': '160px'
                }, 500);
            }, 0);*/
        }
    });
    if(winWidth >= 1000){
        /* slimerancher_logo img h2 */
        $('.section1 > h2 img').attr({'src':'img/slimerancher_logo.png'});
        
        /* section1 slime animate */
        /*setInterval(function() {
            $('.pink').animate({
                'bottom': '-160px'
            }, 500).animate({
                'bottom': '-169px'
            }, 500);

            $('.blue').animate({
                'bottom': '229px'
            }, 500).animate({
                'bottom': '220px'
            }, 500);

            $('.gold').animate({
                'bottom': '150px'
            }, 500).animate({
                'bottom': '160px'
            }, 500);
        }, 0);*/
    }
});


/* notice slide */
var noticeCurIdx = 1;
var noticeMaxIdx = 8;	// 최대 우측 슬라이드시 보여줄 첫번째 인덱스 (리스트 -3)

function goNoticeLeft() {
    //console.log('left : ' + $('#test').css("margin-left"));
    if(noticeCurIdx == 1) {
        $("#notice_slide").stop().animate({"margin-left":"+=80px"},100).animate({"margin-left":"0px"},300, 'easeOutBounce');	
    }
    else {
        var divWidth = 262+19;	
        $("#notice_slide").animate({"margin-left":"+=" + divWidth + "px"},300);

        noticeCurIdx--;
    }
}

function goNoticeRight() {
    //console.log('right : ' + $('#test').css("margin-left"));	
    if(noticeCurIdx == noticeMaxIdx) {
        var maxWidth = (262+19)*(noticeMaxIdx-1);
        $("#notice_slide").stop().animate({"margin-left":"-=80px"},100).animate({"margin-left":"-"+maxWidth+"px"},300, 'easeOutBounce');
    }
    else {
        var divWidth = 262+19;
        $("#notice_slide").animate({"margin-left":"-=" + divWidth + "px"},300);

        noticeCurIdx++;
    }
}