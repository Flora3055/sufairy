
// animation

$(document).ready(function(){
    AOS.init({
	offset: 100,
	delay: 20,
	 duration: 800
	});
});
document.addEventListener('DOMContentLoaded', function() {
    AOS.init(); // Initialize AOS
    var video = document.querySelector('video');
    if (video) {
        video.addEventListener('loadeddata', function() {
            AOS.refresh(); // Refresh AOS animations
        });
    }
});