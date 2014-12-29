console.log('\'Allo \'Allo!');



$(document).ready(function(){

setTimeout(function() {
    // Do something after 5 seconds
	$('.overlay').addClass('fadeOut').delay(2000);
	$('.overlay').fadeOut(1000).delay(1000);
}, 1000);

});