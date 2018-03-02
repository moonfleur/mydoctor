$(document).ready(function() {

    sliders_init();

    $(".slider_left").on('click', function (e) {
        sliderMove(this);
    });

    $(".slider_right").on('click', function (e) {
        sliderMove(this);
    });

    function sliderMove(btn) {
        var slider_id = $(btn).parent(".slider_wr").find(".slider").attr("id");

        var slider = $("#" + slider_id);
        var slide_width = $("#" + slider_id + " .slide").outerWidth(true);

        if ($(btn).hasClass('slider_left')) {
            slider.animate({scrollLeft: slider.scrollLeft() - slide_width});
        } else if ($(btn).hasClass('slider_right')) {
            slider.animate({scrollLeft: slider.scrollLeft() + slide_width});
        }
    }

    function sliders_init() {
        $(".slider").each(function () {
            var slide_width = $(this).find(".slide").outerWidth(true);
            var slides = $(this).find(".slides");
            var slides_count = $(this).find(".slide").length;

            slides.width(slide_width * slides_count);

            var default_scroll_left = (slides.width() - $(this).width())/2;
            $(this).scrollLeft(default_scroll_left);
        });
    }
});