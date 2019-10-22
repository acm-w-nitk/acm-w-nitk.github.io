$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 0) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
});

$("button.hamburger").click(function(){
    if($("button.hamburger").text() == "🞬"){
        $("button.hamburger").text("☰");
    }else{
        $("button.hamburger").text("🞬");
    }
    $(".nav-options li").toggle("slow");
});