/**
 * Created by Administrator on 2018-03-07.
 */
    $(function() {
    $('#navigator a').click(function() {
        $(this).addClass("start").siblings().removeClass("start");
    });
});
