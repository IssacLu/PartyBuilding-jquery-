/**
 * Created by Administrator on 2017-11-23.
 */
$(document).ready(function() {
    $('.enable').click(function () {

        if ($(".child-list").is(":hidden")) {
             $(".child-list").show();
        }
        else {
              $(".child-list").hide();
        }
    });
    var width = $(window).width();
    if(width>600){

        $(".child-list").removeClass("list-child");
    }
});



