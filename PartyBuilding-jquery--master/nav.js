/**
 * Created by Administrator on 2017-10-29.
 */
$(function () {
    var vm=$(".btn p");
    vm.click(function () {
        var ax=$(this);
        if(ax.next("ul").is(":hidden")){
            //alert($(this).find('.find ul'));
            ax.next("ul").show();
        }
        else {
            ax.next("ul").hide();
        }
        $(this).css("background","#e9a9a7").siblings("").css("background","rgba(252,250,251,1)");
        ax.children("a").css("color","white").parent().siblings().children("a").css("color","black");
    });
});