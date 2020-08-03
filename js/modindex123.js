define([], function() {
    return { // 轮播图
        slideshow: function() {
            // var timer = null;
            // var num = 0;

            // function rightclick() {
            //     $('.slideshow li').eq(num).addClass('current').siblings('li').removeClass('current');
            //     $('.slideshow img').eq(num).stop().fadeIn().siblings('img').stop().fadeOut();
            // };
            // $('.slideshow li').on('mouseover', function() {
            //     num = $(this).index();
            //     rightclick();
            // });
            // $('.slideshow .right').on('click', function() {
            //     num++;
            //     if (num === $('.slideshow li').length) {
            //         num = 0;
            //     }
            //     rightclick();
            // });
            // $('.slideshow .left').on('click', function() {
            //     num--;
            //     if (num === -1) {
            //         num = $('.slideshow li').length - 1;
            //     }
            //     rightclick();
            // });
            // timer = setInterval(function() {
            //     $('.slideshow .right').click();
            // }, 1000);
            // $('.slideshow').hover(function() {
            //     clearInterval(timer);
            // }, function() {
            //     clearInterval(timer);
            //     timer = setInterval(function() {
            //         $('.slideshow .right').click();
            //     }, 1000);
            // });
        },
        // 顶部导航
        topnavshow: function() {
            // $(window).scroll(function() {
            //     if ($('body, html').scrollTop() >= $('.seckill').offset().top) {
            //         $('.suspension_nav').slideDown();
            //     } else {
            //         $('.suspension_nav').hide();
            //     }
            // })
        },

        // 楼梯效果
        // stairs:$(window).scroll(function() {
        //     if ($('body, html').scrollTop() > $('.seckill').offset().top) {
        //         $('.suspension_nav').slideDown();
        //     } else {
        //         $('.suspension_nav').hide();
        //     }
        // });
    };
});