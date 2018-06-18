

// SCROLL UP 

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {        
        $('.arrow-up').fadeIn(200);    
    } else {
        $('.arrow-up').fadeOut(200);  
        }
});

$(document).ready(function(){
    $('.arrow-up').click(function(){
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});

// SCROLL DOWN

$(document).ready(function() {
    $(".navbar-nav a").click(function() {
        var href = $(this).attr( 'href' );
         $('html, body').animate({
             scrollTop: $(href).offset().top
         }, 1000);
     });
});
