$(function () {
    $(window).scroll(function(){
        if ($(document).scrollTop() < 50) {
            $('.back-top').addClass('f-opacity-0').removeClass('f-opacity-1')
        } else {
            $('.back-top').addClass('f-opacity-1').removeClass('f-opacity-0')
        }
    });
    $('.back-top').click(function () { //返回顶部
        $("html,body").animate({ scrollTop: 0 }, 500);
    });
    let url = document.URL;
    url = url.split('/');
    if (url[url.length -1] === 'cart.html' || url[url.length -1] === 'checked.html') {
        $('.sidebar-list .cart').addClass('f-opacity-0')
    } else {
        $('.sidebar-list .cart').removeClass('f-opacity-0')
    }
});
