/**
 * Created by Administrator on 2017-11-22.
 */
$(function () {
    var vm=$(".child-list p");
    vm.click(function () {
        var ax=$(this);
        if(ax.next("ul").is(":hidden")){
            vm.next("ul").hide();
            ax.next("ul").show();
        }
        else {
            ax.next("ul").hide();
        }
    });
});
