
// Product slider
 



$(document).ready(function(){
  const imgs = document.querySelectorAll('.img-select a');
         const imgBtns = [...imgs];
         let imgId = 1;
         
         imgBtns.forEach((imgItem) => {
             imgItem.addEventListener('click', (event) => {
                 event.preventDefault();
                 imgId = imgItem.dataset.id;
                 slideImage();
             });
         });
         
         function slideImage(){
             const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;
         
             document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
         }
         
         window.addEventListener('resize', slideImage);
		 
		 });
// active


// Quantity

document.addEventListener('DOMContentLoaded', () => {
    const quantityDisplay = document.getElementById('quantity');
    let quantity = 1;

    const updateDisplay = () => {
        quantityDisplay.textContent = quantity;
    };

    document.getElementById('increment').addEventListener('click', () => {
        quantity++;
        updateDisplay();
    });

    document.getElementById('decrement').addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateDisplay();
        }
    });
});


 
 
 
$(document).ready(function() {
  $(".trending_categories_inner").slick({
    autoplay: true,
    speed: 1000,
	slidesToShow: 5,
	Autoplay: true,
	autoplaySpeed:1000,
	   		 responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        
        slidesToShow: 1
      }
    }
  ]
  });
});

 
