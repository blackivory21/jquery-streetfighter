$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show()
  			.animate(
    			{'left': '300px'},
   				500,
    			function() {
      			$(this).hide();
      			$(this).css('left', '-153px');
    		});
	})
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu.ready').show();
		$('.ryu-cool').hide();
	});
	$('body').keydown(function(event) {
		if(event.keyCode==88){
			$('.ryu-cool').show();
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
		}
	});
	$('body').on('keyup', function(event) {
		if(event.keyCode==88){
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
		}
	});
});
function playHadouken () {
	$('#hadouken-sound')[0].volume=0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}