
// document ready
// (function ($) {

//     var previousScroll = 250;
//     // scroll functions
//     $(window).scroll(function(e) {
    
//         // add/remove class to navbar when scrolling to hide/show
//         var scroll = $(window).scrollTop();
//         if (scroll >= previousScroll) {
//             $('.navbar').addClass("navbar-hide");
//         }else if (scroll < previousScroll) {
//             $('.navbar').removeClass("navbar-hide");
//         }
//         previousScroll = scroll;
//     }); 

//     $("#showNavbar").mouseenter(function(){$('.navbar').removeClass("navbar-hide");console.log("działa");});       
//     })(jQuery);  


    $(function(){

        // jQuery methods go here...
        var previousScroll = 250;
        // scroll functions
        $(window).scroll(function(e) {
        
            // add/remove class to navbar when scrolling to hide/show
            var scroll = $(window).scrollTop();
            if (scroll >= previousScroll) {
                $('.navbar').addClass("navbar-hide");
            }else if (scroll < previousScroll) {
                $('.navbar').removeClass("navbar-hide");
            }
            previousScroll = scroll;
        }); 
    
        $("#showNavbar").mouseenter(function(){
                $('.navbar').removeClass("navbar-hide");
                // $('#showNavbar').css('zIndex',-1);
                console.log("działa");
            // },function(){
            //     $('.navbar').addClass("navbar-hide");
            //     console.log("działa");
            });    

        $(".navbar").mouseleave(function(){
            $('.navbar').addClass("navbar-hide");
            console.log("działa");
        });     
        
    
      });
