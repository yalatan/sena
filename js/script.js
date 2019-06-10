(function ($) {
    $(document).ready(function () {  
    
 $('.logo_language').click(function(){
     $('.logo_language').each(function () {
                $(this).removeClass('active');
            });

            $(this).addClass('active');
    
     
 });
    
    
    
 $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
    
    
    
    
    
    
    
    
});
})(jQuery);