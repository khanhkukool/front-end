$(document).ready(function() {
	$('.li-menu a').mouseenter(function() {
		$(this).css('color','#ff6760');
	});
	$('.li-menu a').mouseleave(function() {
		$(this).css('color', '#fff');
	});
	$('.btn-danger').mouseenter(function() {
		$(this).css('color','#595959');
	});
	$('.btn-danger').mouseleave(function() {
		$(this).css('color', '#fff');
	});
});