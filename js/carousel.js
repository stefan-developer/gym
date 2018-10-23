
	// JQuery code
	// Owl-carousel functionality
	$(document).ready(function(){
       $('.owl-carousel').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:true,
            autoplay:true,  
            responsive:{
              0:{
                  items:1,
                  nav:false
              },
              600:{
                  items:2,
                  nav:false
              },
              1000:{
                  items:3,
                  nav:false,
                  loop:true
              }
          }
        })
    });