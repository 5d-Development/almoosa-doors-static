
	// scrolled navbar 
var scrollWindow = function () {
  
    $(window).scroll(function () {
      let bars = document.getElementById("bars");
   var navbar = document.querySelector(".navbar");
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                  
               document.getElementById("logo").src = "../images/home/navbar/colored-logo.svg";
               document.getElementById("bars").style.color="red!important"

				}
                
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                                   document.getElementById("logo").src = "../images/home/navbar/logo.svg";

				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();
 
// start our products logic
$('.products-carousel').owlCarousel({
   loop:true,
    margin:10,
    rtl:true,
    animateOut: 'fadeOut',
    autoplay:true,

    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
      }, 
        1500:{
            items:6
        }
    }
})
//active link in navbar
   document.addEventListener("DOMContentLoaded", function () {
     const navLinks = document.querySelectorAll(".nav-link");

     const currentUrl = window.location.href;

     navLinks.forEach((link) => {
       if (link.href === currentUrl) {
         link.classList.add("active");

         if (link.closest(".nav-dropdown")) {
           link
             .closest(".nav-item")
             .querySelector(".nav-link")
             .classList.add("active");
         }
       }
     });
   });
//  companies section  logic
$('.companies-carousel').owlCarousel({
   loop:true,
    rtl:true,
    animateOut: 'fadeOut',
    autoplay:true,

    navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"], // Replace navigation text with Font Awesome icons

    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})
// shutter window logic 


$('.window-carousel').owlCarousel({
    loop:true,
  margin: 10,
        rtl:true,

    responsiveClass:true,
    responsive:{
     0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// animation on scroll logic
 AOS.init();
// scroll animation logic
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500, // Duration in milliseconds (e.g., 1000ms = 1 second)
    speedAsDuration: true // Ensures that the speed is treated as duration
});
var arrowDown = document.getElementById("scroll-down");

arrowDown.addEventListener("click", function () {
  window.scrollTo({ top:700, behavior: "smooth" });
});

// active link in navbar
document.querySelectorAll('.dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', function(event) {
         document.querySelectorAll('.nav-link').forEach(function(navLink) {
            navLink.classList.remove('active-link');
        });

         const parentNavLink = event.target.closest('.dropdown').querySelector('.nav-link');
        parentNavLink.classList.add('active-link');
    });
});


 