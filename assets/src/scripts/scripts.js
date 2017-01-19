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
    var words = ["good", "creative", "professional", "awesome"];

	$.each(words,function(i, word) {

		setTimeout(function(){
			$(".ticker").html(word).hide().fadeIn(100);
		}, 2000 * i);

	});

    NProgress.done(true);
});