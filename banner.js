/**
 * Created by Administrator on 2018-03-08.
 */

window.onload=function () {
    var slideIndex = 1;
    showSlides(slideIndex); //与上处代码的变化是加了一个slideIndex参数
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {  // 此处必须要用一个形参n，否则会卡死。
        var slides = document.getElementsByClassName('showpic');
        if (n < 1) {
            slideIndex = slides.length;
        }
        if (n > slides.length) {
            slideIndex = 1;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[slideIndex - 1].style.display = 'block';
        if (slideIndex <= 5) {
            slideIndex++;
        }
        else {
            slideIndex = 1
        }
        setTimeout(showSlides, 3000);
    }
}