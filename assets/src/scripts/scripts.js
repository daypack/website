NProgress.start();

$(document).ready(function() {

	$("#menu-container").hide();

	$("#menu").click(function(e){
		e.preventDefault();

		var txt = $("#menu-container").is(':visible') ? 'menu' : 'close';

		$("#menu-container").fadeToggle(500);
		$(this).text(txt);
	});

	$("#menu-container").click(function(){
		$(this).fadeOut(500);
		$("#menu").text("menu");
	});

    // List of adjectives
    var words = [
    	"design user friendly web applications", 
    	"provide design solutions to unique business needs", 
    	"create satisfying online experiences", 
    	"make business systems scalable and efficient"
    ];

	$.each(words,function(i, word) {

		setTimeout(function(){
			$(".ticker").html(word).hide().fadeIn(400);
		}, 5000 * i);

	});

	$(".banner").fadeIn(2000);

    NProgress.done(true);
    
    $(".btn-top").click(function() {
        console.log("click");
	  $("html, body").animate({scrollTop: 0}, "slow");
	});

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'assets/src/scripts/particlesjs-config.json', function() {
	  console.log('callback - particles.js config loaded monkey');
	});

    
});