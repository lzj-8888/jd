require.config({
    paths: {
        'jquery': 'https://cdn.bootcdn.net/ajax/libs/jquery/1.12.4/jquery.min'
    }
});
// 放大镜
require(['jquery'], function($) {
    var mod = $('#currentpage').attr('currentmod');
    if (mod) {
        require([mod], function(moddetails) {
            moddetails.magnifying();
        })
    }
});
// 轮播图和顶部导航下滑
require(['jquery'], function($) {
    var mod = $('#currentpage').attr('currentmod');
    if (mod) {
        require([mod], function(modindex123) {
            modindex123.slideshow();
            modindex123.topnavshow();
        });
    }
});