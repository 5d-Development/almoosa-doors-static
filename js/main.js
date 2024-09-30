
	// scrolled navbar 
var scrollWindow = function () {
  
    $(window).scroll(function () {
      let bars = document.getElementById("bars");
   var navbar = document.querySelector(".navbar");
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 80) {
				if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                  
               document.getElementById("logo").src = "../images/home/navbar/colored-logo.svg";

				}
                
			} 
			if (st < 80) {
				if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                                   document.getElementById("logo").src = "../images/home/navbar/logo.svg";

				}
			} 
			if ( st > 150 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 150 ) {
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

         if (link.closest(".dropdown-menu")) {
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
 
 
// contact us logic...........
document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll('.branch-details').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action (optional based on link usage)

    // Remove the 'active' class from all .branch-details links
    document.querySelectorAll('.branch-details').forEach(function(item) {
      item.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    this.classList.add('active');
  });
});

})
//remove e letter from input in contact us page 
   document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('inquiries');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  const phoneInput = document.getElementById('phone');

  phoneInput.addEventListener('keypress', function (e) {
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode < 48 || charCode > 57) {
      e.preventDefault();
    }
  });
  
  phoneInput.addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9]/g, '');
  });
});
// map logic in contact us page 
  var map = L.map('map').setView([51.505, -0.09], 2); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var marker;
  var locationButton = document.getElementById('locationButton'); // Get the button element
 
  var customIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    shadowSize: [41, 41]
  });

   function addMarker(lat, lng, location) {
    if (marker) {
      map.removeLayer(marker); 
    }
    marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);  
    map.setView([lat, lng], 10); 

  
    locationButton.onclick = function() {
       window.open('https://maps.google.com/?q=' + lat + ',' + lng, '_blank');
    };
    locationButton.style.display = 'block'; 
  }

   var links = document.querySelectorAll('.branch-details');
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();  

       var lat = link.getAttribute('data-lat');
      var lng = link.getAttribute('data-lng');
      var location = link.getAttribute('data-location');

 
      addMarker(lat, lng, location);
    });
  });
