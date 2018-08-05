/**
 * Created by Administrator on 2017-10-26.
 */
$(document).ready(function() {
    $('nav li').hover(function() {
        $(this).find('.sub-menu').css('display', 'block');
    }, function() {
        $(this).find('.sub-menu').css('display', 'none');
    });
});

