//remove e letter from input in  our new projects page (collaborate with us tab)
   document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('collaborate-with-us-form');

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
//  search bar logic 
         document.addEventListener("DOMContentLoaded", function() {
             let searchBar = document.getElementById("search-bar");
             let closeSearch = document.getElementById("close-search");
             let searchButton = document.getElementById("search-button");
             let searchInput = document.getElementById("search-input");
             let searchResults = document.getElementById("search-results");
         
             const pages = ["about-us.html", "career-1.html", "career-2.html", "contact-us.html", "customer-support.html", "home.html", "how-we-work.html", "our-clients.html", "products.html", "what-we-do.html"];
             document.querySelectorAll(".search-icon").forEach(function(icon) {
                 icon.addEventListener("click", function() {
                     searchBar.classList.toggle("d-none");
                     searchResults.classList.add("d-none");
                 });
             });
         
             closeSearch.addEventListener("click", function() {
                 searchBar.classList.add("d-none");
                 searchResults.classList.add("d-none");
             });
         
             searchInput.addEventListener("input", function() {
                 let query = searchInput.value.toLowerCase();
                 if (query.length === 0) {
                     searchResults.classList.add("d-none");
                 }
             });
         
             searchInput.addEventListener("keypress", function(event) {
                 if (event.key === "Enter") {
                     event.preventDefault();
                     let query = searchInput.value.toLowerCase();
                     if (query.length > 0) {
                         searchInAllPages(query);
                     } else {
                         searchResults.classList.add("d-none");
                     }
                 }
             });
         
             searchButton.addEventListener("click", function(event) {
                 event.preventDefault();
                 let query = searchInput.value.toLowerCase();
                 if (query.length > 0) {
                     searchInAllPages(query);
                 } else {
                     searchResults.classList.add("d-none");
                 }
             });
         
             async function searchInAllPages(query) {
                 let results = [];
                 for (let page of pages) {
                     let content = await fetchPageContent(page);
                     results = results.concat(searchInContent(query, content, page));
                 }
                 displayResults(results);
             }
         
             function searchInContent(query, { content, title }, pageUrl) {
                 let results = [];
                 let lowerCaseContent = content.toLowerCase();
                 let index = lowerCaseContent.indexOf(query);
                 while (index !== -1) {
                     let context = content.substring(index - 200, index + 50 + query.length);
                     results.push({ context, url: pageUrl, title });
                     index = lowerCaseContent.indexOf(query, index + 1);
                 }
                 return results;
             }
         
             async function fetchPageContent(url) {
                 try {
                     let response = await fetch(url);
                     if (response.ok) {
                         const html = await response.text();
                         const tempElement = document.createElement('div');
                         tempElement.innerHTML = html;
         
                         // Remove footer
                         const footer = tempElement.querySelector('footer');
                         if (footer) {
                             footer.remove();
                         }
         
                         // Remove copyright section
                         const copyrightSection = tempElement.querySelector('.copyright');
                         if (copyrightSection) {
                             copyrightSection.remove();
                         }
         
                         const title = tempElement.querySelector('.banner-title')?.innerHTML;
                         return { content: tempElement.textContent, title };
                     } else {
                         console.error("Failed to fetch content from", url);
                         return { content: "", title: "Error" };
                     }
                 } catch (error) {
                     console.error("Error fetching content from", url, error);
                     return { content: "", title: "Error" };
                 }
             }
         
             function displayResults(results) {
                 searchResults.innerHTML = "";
                 if (results.length === 0) {
                     let noDataItem = document.createElement("div");
                     noDataItem.className = "result-item";
                     noDataItem.innerHTML = "<p>No data found</p>";
                     searchResults.appendChild(noDataItem);
                 } else {
                     sessionStorage.setItem('searchResults', JSON.stringify(results));
                     window.location.href = '/search.html';
                 }
                 searchResults.classList.remove("d-none");
             }
         });
    
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
  const currentUrl = window.location.pathname;

  // Handle the home page
  const homeLink = document.querySelector('a[href="/"]');
  if (currentUrl === "/") {
    homeLink.classList.add("active");
  }

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === "#") {
      return; // Skip links with "#" href
    }

    const linkPath = new URL(link.href).pathname;

    if (linkPath === currentUrl) {
      link.classList.add("active");

      // Check if the link is inside a dropdown
      if (link.closest(".dropdown-menu")) {
        const parentNavItem = link.closest(".nav-item");
        parentNavItem.querySelector(".nav-link").classList.add("active");
      }
    }
  });

  // Special case for the "منتجاتنا" menu
  const productDropdownItems = document.querySelectorAll('.dropdown-item[href*="roller-doors.html"]');
  
  productDropdownItems.forEach((item) => {
    const itemPath = new URL(item.href).pathname;
    if (itemPath === currentUrl) {
      const parentNavItem = item.closest(".nav-item");
      parentNavItem.querySelector(".nav-link").classList.add("active");
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

function updateIframe(element) {
    var iframe = document.getElementById('map');

    var newSrc = element.getAttribute("href");

    iframe.src = newSrc;

    return false;
}
