$(document).ready(function () {
    var distance1 = $("#sec_one").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance1) {
            $("#content1").removeClass("fadeout", 1000);
        }
    });
});

$(document).ready(function () {
    var distance2 = $("#sec_two").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance2) {
            $("#content2").removeClass("fadeout", 1000);
        }
    });
});

$(document).ready(function () {
    var distance3 = $("#sec_three").offset().top -100;
        $window = $(window);

    $window.scroll(function () {
        if ($window.scrollTop() >= distance3) {
            $("#content3").removeClass("fadeout", 1000);
        }
    });
});