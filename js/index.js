$('#activity-carousel').on('slide.bs.carousel', function (e) {
    var nextH = jQuery(e.relatedTarget).height();
    jQuery(this).find('.active.carousel-item').parent().animate({
        height: nextH+100
    }, 500);
});