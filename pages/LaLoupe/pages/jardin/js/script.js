$(document).ready(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() > 60) {
            $('button').fadeIn();
        } else {
            $('button').fadeOut();
        }
    });

    $('button').click(function() {
        $('html').animate({ scrollTop: 0 }, 1000);
    });

});