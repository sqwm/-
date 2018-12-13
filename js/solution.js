$(function () {
    $(".solution-main").scroll(function () {
        let scrollTop = $(".solution-main").scrollTop();
        scrollTop === 0 ? $(".solution-header").css({ background: '#393C40' }) : (scrollTop < 200 ? $(".solution-header").css({ background: `rgba(0,0,0,${scrollTop / 400})` }) : $(".solution-header").css({ background: '#393C40' }))
    });
    $('.sku-link').click(function () {
        $('.popup').css({ 'top': '0', 'display': 'block' });
        setTimeout(() => {
            $('.popup .popup-main').css({ 'transform': 'translate3d(0,0,0)' })
        });
        $(document.body).css({
            "overflow-x": "hidden",
            "overflow-y": "hidden"
        });
    });
    $('.close-popup img').click(function (event) {
        event.stopPropagation();
        $('.popup').css({ 'top': '100%', 'display': 'none' });
        $('.popup .popup-main').css({ 'transform': 'translate3d(0, 4.95rem ,0)' });
        $(document.body).css({
            "overflow-x": "auto",
            "overflow-y": "auto"
        });
        return false
    });

    $('.sku-choose-list').on('click', 'li', function (event) {
        var target = $(event.target);
        target.addClass('selected').siblings().removeClass('selected');
        return false
    });

});
