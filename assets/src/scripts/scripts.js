$(document).ready(function() {

	/*
	$('.banner').particleground({
		// dotColor: 'rgba(255, 255, 255, 0.5)',
		dotColor: '#ffb600',
		lineColor: 'rgba(0, 0, 0, 0.50)',
		density: 7500,
		lineWidth: 0.5,
		particleRadius: 4,
		proximity: 100,
		maxSpeedX: 0.5,
		maxSpeedY: 0.5,
		parallaxMultiplier: 9
	});
	*/

	$("#menu-container").hide();
	$(".about").hide();
	$(".work").hide();
	$(".contact").hide();
	$(".footer").hide();


	$("#menu").click(function(e){
		e.preventDefault();

		$("#menu-container").fadeIn(500);
		$(this).text("X");
	});

	$("#menu-container").click(function(){
		$(this).fadeOut(500);
		$("#menu").text("menu");
	});

    // List of adjectives
    var words = ["good", "creative", "professional", "awesome"];

    // Random Colour
    function get_random_color() {
	    var letters = '0123456789ABCDEF'.split('');
	    var color = '#';
	    for (var i = 0; i < 6; i++ ) {
	        color += letters[Math.round(Math.random() * 15)];
	    }
	    return color;
	}

	$.each(words,function(i, word) {

		setTimeout(function(){
			$(".ticker").html(word).hide().fadeIn(100);
		}, 2000 * i);

	});

	// Show and Hide

	// Index
	$("#title").click(function(e){
		e.preventDefault();

		$(".about").hide();
		$(".work").hide();
		$(".contact").hide();

		$(".banner").fadeIn("slow");
		$(".footer").hide();
	});

	// About
	$(".menu-about").click(function(){
		$(".about").show();

		$(".work").hide();
		$(".contact").hide();

		$(".banner").hide();
		$(".footer").show();
	});

	// Work
	$(".menu-work").click(function(){
		$(".work").show();

		$(".about").hide();
		$(".contact").hide();

		$(".banner").hide();
		$(".footer").show();
	});

	// Contact
	$(".menu-contact").click(function(){
		$(".contact").show();

		$(".about").hide();
		$(".work").hide();

		$(".banner").hide();
		$(".footer").hide();
	});

	// To Top
	$(".to-top").hide();

	$(window).scroll(function(){

        $(".to-top").fadeIn(1000);
        // console.log('scroll');

    })

    $(".to-top").click(function(){
    	console.log('scroll');
    	$("html, body").animate({scrollTop: 0}, "slow");
  		// return false;
    });

});