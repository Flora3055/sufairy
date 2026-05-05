// Set the date we're counting down to
var countDownDate = new Date("Dec 1, 2025 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate the days, hours, minutes and seconds left
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the HTML elements
  document.getElementById("days").innerHTML = days.toString().padStart(2, "0");
  document.getElementById("hours").innerHTML = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds
    .toString()
    .padStart(2, "0");

  // If the countdown is over, show a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


// categories_hd_inner



// $(function(){
    // var lastScrollTop = 0, delta = 1;
    // $(window).scroll(function(event){
       // var st = $(this).scrollTop();
       
       // if(Math.abs(lastScrollTop - st) <= delta)
          // return;
// if ((st > lastScrollTop) && (lastScrollTop > 0)) {
      
      // $(".categories_hd_inner").css({"opacity": "0", "visibility": "hidden"});
	  
  
   // } else {
      
      // $(".categories_hd_inner").css({"opacity": "1", "visibility": "visible"});
	
   // }
       // lastScrollTop = st;
    // });
// });





 

 
// categories_hd_inner end


// main menu
// $(function ($) {
  // $(".mobile_btn").on("click", function () {
    // $(".main_menu").slideToggle();
    // $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  // });

  // if ($(window).width() < 768) {
    // $(".main_menu  ul li  i").on("click", function () {
      // $(this)
        // .parent(".has_dropdown")
        // .children(".sub_menu")
        // .css({ "padding-left": "15px" })
        // .stop()
        // .slideToggle();

      // $(this)
        // .parent(".has_dropdown")
		// .children("i")
        // .find(".fa-angle-right")
        // .stop()
        // .toggleClass("fa-rotate-90");
    // });
  // }
// });
$(document).ready(function() {
    const data = ["Motor Car", "Generate", "Teddy Bear", "Learning Toy", "Toy", "Horse" , "walker"]; // Example data

    // Perform search function
    $('#search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase(); // Get search term and convert to lowercase
        const filteredData = data.filter(item => item.toLowerCase().includes(searchTerm)); // Case-insensitive filter
        displayResults(filteredData);
    });

    // Display filtered results
    function displayResults(results) {
        $('#results').empty(); // Clear previous results

        if (results.length === 0) {
            $('#results').html("<p>No results found.</p>");
            return;
        }

        const ul = $('<ul>'); // Create a new <ul> element
        results.forEach(item => {
            const li = $('<li>').text(item); // Create a <li> for each result
            ul.append(li); // Append <li> to the <ul>
        });
        $('#results').append(ul); // Append <ul> to the results div
    }
});

 $(document).ready(function(){
$(function ($) {
  $(".mobile_btn").on("click", function () {
    $(".main_menu").slideToggle();
    $(".mobile_btn i").toggleClass("fa-xmark fa-xl");
  });

  if ($(window).width() < 768) {
    $(".main_menu  ul li  i").on("click", function () {
      $(this)
        .parent(".has_dropdown")
        .children(".sub_menu")
        .css({ "padding-left": "15px" })
        .stop()
        .slideToggle();

      $(this)
        .parent(".has_dropdown")
        .children("i")
        .find(".fa-angle-right")
        .stop()
        .toggleClass("fa-rotate-90");
    });
  }
});
});

  // page_up_button
$(document).ready(function(){
var btn = $('#page_up_button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
});

// slider 
 $(document).ready(function(){
  $('.testimonials_slider_inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        speed: 300,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
		
  });
});


// loading process start

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})
// loading process end


$(document).ready(function(){
document.querySelectorAll(".accordion-item").forEach((item) => {
  item.querySelector(".accordion-item-header").addEventListener("click", () => {
    item.classList.toggle("open");
  });
});
});


// click

$(document).ready(function() {
	
    $('.dropdown_sec').click(function() {
        $('.dropdown_sec .dd-menu').toggleClass('dd-menu-open');
    });
});

$(document).ready(function() {
	
    $('.dropdown_three').click(function() {
        $('.dropdown_three .dd-menu').toggleClass('dd-menu-open');
    });
});

// categories



// accordion.js
document.addEventListener('DOMContentLoaded', function() {
    const accordionTitles = document.querySelectorAll('.filter_menu');

    accordionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling;

            // Toggle the active class for content and title
            content.classList.toggle('active');
            this.classList.toggle('active-title');

            // Optionally, close other sections
            const allContents = document.querySelectorAll('.filter_submenu');
            allContents.forEach(item => {
                if (item !== content) {
                    item.classList.remove('active');
                    const correspondingTitle = item.previousElementSibling;
                    correspondingTitle.classList.remove('active-title'); // Optional class for title
                }
            });
        });
    });
});

// filter

$(document).ready(function() {
	
    $('.filter_product img').click(function() {
        $('.accordion').toggleClass('add_open');
    });
});



$(document).ready(function() {
    // When a FAQ question is clicked
    $('.faq-item').click(function() {
        // Toggle the answer inside the clicked faq-item
        $(this).find('.faq-answer').slideToggle();

        // Toggle the icon between plus and minus inside the clicked faq-item
        var icon = $(this).find('.faq-icon');
        if (icon.hasClass('fa-plus')) {
            icon.removeClass('fa-plus').addClass('fa-minus');
        } else {
            icon.removeClass('fa-minus').addClass('fa-plus');
        }

        // Toggle the 'active' class on the clicked faq-item
        $(this).toggleClass('active');

        // Optionally close other answers and remove 'active' class from other faq-items
        $('.faq-item').not(this).find('.faq-answer').slideUp();
        $('.faq-item').not(this).find('.faq-icon').removeClass('fa-minus').addClass('fa-plus');
        $('.faq-item').not(this).removeClass('active'); // Remove 'active' class from other faq-items
    });
});


 // form
	
    function errorMessage() {
             var name__error = document.getElementById("name__error");
             if (document.getElementById("name").value == "") 
             {
                   
                 // Changing content and color of content
                 name__error.textContent = "Please enter a valid name";
                 name__error.style.color = "red";
                 return false;
             }else {
                 name__error.textContent = "";
             }
			 
			 
			
			 
             var email__error = document.getElementById("email__error");
             if (document.getElementById("email").value == "") 
             {
                   
                 // Changing content and color of content
                 email__error.textContent = "Please enter a valid email";
                 email__error.style.color = "red";
                 return false;
             } else {
                 email__error.textContent = "";
             }
			 
			    var tel__error = document.getElementById("tel__error");
             if (document.getElementById("phone").value == "") 
             {
                   
                 // Changing content and color of content
                 tel__error.textContent = "Please enter a valid email";
                 tel__error.style.color = "red";
                 return false;
             } else {
                 tel__error.textContent = "";
             }
         
         
          	    var tel__error = document.getElementById("subject__error");
             if (document.getElementById("subject").value == "") 
             {
                   
                 // Changing content and color of content
                 tel__error.textContent = "Please enter a valid email";
                 tel__error.style.color = "red";
                 return false;
             } else {
                 tel__error.textContent = "";
             }
		
         
          
             var message__error = document.getElementById("message__error");
             if (document.getElementById("message").value == "") 
             {
                   
                 // Changing content and color of content
                 message__error.textContent = "Please enter a valid message";
                 message__error.style.color = "red";
                 return false;
             } else {
                 message__error.textContent = "";
             }
         
             alert('Successfully Submited !');
         }
         
           // form


$(function(){
  
  $('#eye').click(function(){
       
        if($(this).hasClass('fa-eye-slash')){
           
          $(this).removeClass('fa-eye-slash');
          
          $(this).addClass('fa-eye');
          
          $('#password').attr('type','text');
            
        }else{
         
          $(this).removeClass('fa-eye');
          
          $(this).addClass('fa-eye-slash');  
          
          $('#password').attr('type','password');
        }
    });
});



