//  const languageDropdown = document.querySelector('.language-dropdown');

// // add event listener to the language dropdown ar,en
// languageDropdown.addEventListener('click', function(event) {
//     const target = event.target;

//     if (target && target.classList.contains('dropdown-item')) {
//         event.preventDefault();

//         const lang = target.getAttribute('data-lang');

//         // update the current language display
//         document.getElementById('current-language').textContent = lang.toUpperCase();

//         // get the current URL and split it into parts
//         const currentUrl = window.location.href;
//         const urlParts = currentUrl.split('/');
//         const lastSegment = urlParts[urlParts.length - 1];

//         // logic for Arabic (default) language
//         if (lang === 'ar' && (lastSegment === 'en' || lastSegment === '')) {
//             urlParts.pop(); // remove 'en' or trailing slash for Arabic
//         }

//         // logic for english language
//         if (lang !== 'ar') {
//             const newUrl = urlParts.join('/').replace(/\/$/, ''); // remove any trailing slash
//             if (!newUrl.endsWith(/${lang})) {
//                 // append en if it's not already at the end
//                 window.location.href = newUrl + '/' + lang;
//                 return;
//             }
//         }

//         // if Arabic or not changed navigate to the constructed URL
//         const newUrl = urlParts.join('/');
//         window.location.href = newUrl;
//     }
// });

// // set the styling direction based on the URL
// function updateDirectionBasedOnURL() {
//     const currentUrl = window.location.href;
//     if (currentUrl.endsWith('/en')) {
//         document.documentElement.dir = 'ltr';
//     } else {
//         document.documentElement.dir = 'rtl';
//     }
// }

// // call function on page load
// document.addEventListener('DOMContentLoaded', function () {
//     updateDirectionBasedOnURL();

//     // translation
//     const isRTL = document.documentElement.getAttribute("dir") === "rtl";

//     // Update text content based on language direction
//     document.querySelectorAll('[data-ar][data-en]').forEach(function(element) {
//         element.textContent = isRTL ? element.getAttribute('data-ar') : element.getAttribute('data-en');
//     });
// });

// // tab
// document.addEventListener('DOMContentLoaded', function () {
//     function updateURL(tabId) {
//         const url = new URL(window.location.href);
//         url.searchParams.set('tab', tabId);
//         window.history.pushState({}, '', url);
//     }

//     const tabButtons = document.querySelectorAll('.nav-link');
//     tabButtons.forEach(button => {
//         button.addEventListener('click', function () {
//             const tabId = this.getAttribute('data-tab');
//             updateURL(tabId);
//         });
//     });

//     const params = new URLSearchParams(window.location.search);
//     const tabFromUrl = params.get('tab');
//     if (tabFromUrl) {
//         const targetTab = document.querySelector([data-tab="${tabFromUrl}"]);
//         if (targetTab) {
//             new bootstrap.Tab(targetTab).show();
//         }
//     }
// });

// customer support page 

  //remove e letter from input in customer support page 
   document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('customer-contact-form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });

  const phoneInput = document.getElementById('Phone');

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
 document.addEventListener('DOMContentLoaded', function() {
    const searchResults = document.getElementById('searchResults');
    const results = JSON.parse(sessionStorage.getItem('searchResults')) || [];
    console.log('Results on Search Page:', results); // Debugging line
    if (results.length === 0) {
        let noDataItem = document.createElement("div");
        noDataItem.className = "result-item";
        noDataItem.innerHTML = "<p>No data found</p>";
        searchResults.appendChild(noDataItem);
    } else {
        results.forEach(result => {
            let item = document.createElement("div");
            item.className = "result-item";
            item.innerHTML = `<h3 class="text-green">${result.title}</h3><p class="search-context">${result.context}</p><a href="${result.url}">${window.location.origin}/${result.url}</a>`;
            searchResults.appendChild(item);
        });
    }
});
 


// our products tabs logic 
 
document.addEventListener('DOMContentLoaded', function () {
  // Function to update URL with tab query parameter
  function updateURL(tabId) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tabId);
      window.history.pushState({}, '', url); // Update the URL without reloading the page
  }

  // Get all tab buttons
  const tabButtons = document.querySelectorAll('.nav-link');

  // Add event listener for each tab button
  tabButtons.forEach(button => {
      button.addEventListener('click', function () {
          const tabId = this.getAttribute('data-tab'); // Get the tab ID from data-tab attribute
          updateURL(tabId); // Update the URL with the selected tab
      });
  });

  // Optional: Load the correct tab based on URL (if user refreshes or navigates directly to a specific tab)
  const params = new URLSearchParams(window.location.search);
  const tabFromUrl = params.get('tab');
  if (tabFromUrl) {
      const targetTab = document.querySelector(`[data-tab="${tabFromUrl}"]`);
      if (targetTab) {
          new bootstrap.Tab(targetTab).show(); // Activate the tab programmatically
      }
  }
});

// translation 
document.addEventListener("DOMContentLoaded", function() {
   // Check the dir attribute
   const isRTL = document.documentElement.getAttribute("dir") === "rtl";

   // Select all elements with data-ar and data-en attributes
   document.querySelectorAll('[data-ar][data-en]').forEach(function(element) {
      element.textContent = isRTL ? element.getAttribute('data-ar') : element.getAttribute('data-en');
   });
});


 //our products tabs logic    
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const activeTab = urlParams.get("tab");

    if (activeTab) {
        // select dynamically the button where data-bs-target equals `#${activeTab}`
        document.querySelector(`button[data-bs-target="#${activeTab}"]`)?.click();
    }
}); 

//  our products forms logic 
   window.onload = function () {
    emailjs.init("ytxIwvo3plZ-HBxyJ");  
    console.log("EmailJS initialized");  

    const serviceId = "service_jskajyt";
    const templateId = "template_w04yxyb";

    function sendEmail(serviceId, templateId, formData, resetFormId) {
      emailjs.send(serviceId, templateId, formData).then(
        function (response) {
          console.log("Email sent successfully!", response);  
          Swal.fire({
            title: "تم الارسال بنجاح",
            showClass: {
              popup: "animate__animated animate__fadeInUp animate__faster"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown animate__faster"
            }
          });
          document.getElementById(resetFormId).reset();
        },
        function (error) {
          console.log("Failed to send email", error); 
          Swal.fire({
            title: "عذرا ، فشل في الارسال. حاول مرة اخرى في وقت لاحق.",
            showClass: {
              popup: "animate__animated animate__fadeInUp animate__faster"
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutDown animate__faster"
            }
          });
        }
      );
    }

    // Set up the sales request form
    document
      .getElementById("sales-request-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Sales request form submission triggered");  

        const formData = {
         from_form:"Sales Request " , 
          to_name: "the magsement center",
          from_name: this.name.value,
          name: this.name.value,
          phone: this.phone.value,
          email: this.email.value,
          request: this.request.value,
        };
        console.log("Sales form data:", formData);  

        sendEmail(serviceId, templateId, formData, "sales-request-form");
      });

    // Set up the maintenance request form
    document
      .getElementById("maintenance-request-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("Maintenance request form submission triggered"); 

        const formData = {
             from_form:"Maintenance Request " , 
          to_name: "the magsement center",
          from_name: this.name.value,
          name: this.name.value,
          phone: this.phone.value,
          email: this.email.value,
          request: this.request.value,
        };
        console.log("Maintenance form data:", formData);  

        sendEmail(serviceId, templateId, formData, "maintenance-request-form");
      });
  };
 
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
         
             const pages = ["about-us-en.html" , "about-us.html", "car-park-barrier-system-en.html","car-park-barrier-system.html",  "career-1.html", "career-2.html", "contact-us.html","contact-us-en.html" ,"customer-support-en.html",  "customer-support.html","double-leaf-doors-operation.html","double-leaf-doors-operation-en.html" ,"hollow-metal-doors.html" ,"hollow-metal-doors-en.html"  ,  "home-en.html" ,  "home.html", "how-we-work.html","how-we-work-en.html" , "new-projects.html"  , "new-projects-en.html" , "metal-Shutter-doors.html","metallic-shutters.html" , "metallic-shutters-en.html" , "metal-Shutter-doors-en.html" ,"side-doors-operation.html" ,"our-products-en.html" , "our-clients-en.html" ,     "our-clients.html" , "roller-grills-doors.html","our-products.html","new-projects-en.html" , "roller-doors.html" , "side-doors-operation-en.html"  , "our-products-en.html","sectional-overhead-doors.html" , "our-products.html",  "roller-doors-en.html","sectional-overhead-doors-en.html" ,  "roller-doors-en.html", "roller-grills-doors-en.html" ,   "what-we-do.html" , "what-we-do-en.html"];
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
                         const navbar = tempElement.querySelector('.navbar');
                         if (navbar) {
                             navbar.remove();
                         }
         
                         // Remove footer
                         const footer = tempElement.querySelector('.footer');
                         if (footer) {
                             footer.remove();
                         }
         
                         // Remove copyright section
                         const copyrightSection = tempElement.querySelector('.copyright');
                         if (copyrightSection) {
                             copyrightSection.remove();
                         }
         
                         const offcanvasSection = tempElement.querySelector('.offcanvas');
                         if (offcanvasSection) {
                             offcanvasSection.remove();
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
// projects page logic 
 
   const allContent = document.getElementById("All").querySelector(".row") ; 
 

const projectsContent = document.querySelectorAll(".tab-pane-projects").forEach((item) => {
    const projectItem = item;
 allContent.innerHTML+=projectItem.querySelector(".row").innerHTML
  
})
