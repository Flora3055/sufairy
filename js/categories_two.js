
$(document).ready(function() {
    var clickCount = 0;
    $('.categories_hd img').click(function() {
        clickCount++;
        if (clickCount % 2 === 0) {
			
			$('.categories_hd_inner').addClass('categories_hd_inner_two');
			$(".categories_hd_inner_two").css({"opacity": "0", "visibility":"hidden", "height":"0"});

           
        } else {
            
            $('.categories_hd_inner').addClass('categories_hd_inner_one');
			$(".categories_hd_inner_one").css({"opacity": "1", "visibility":"visible" , "height":"100%"});
        }
    });
});

$(document).ready(function() {
	
    $('.categories_hd img').click(function() {
        $('.categories_hd_section').toggleClass('categories_open');
    });
});