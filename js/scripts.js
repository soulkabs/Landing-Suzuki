$(document).ready(function(){
	/*-Models-*/
	$("[src='img/image-17.png']").click(function() {
		$(".suzuki:even").addClass("suzuki_active");
		$(".suzuki:odd").removeClass("suzuki_active");
		$(".sx4").fadeOut(600).css("display","");
		$(".vitara").fadeIn(600).css("display","flex");
	}); 
	$("[src='img/image18.png']").click(function() {
		$(".suzuki:even").removeClass("suzuki_active");
		$(".suzuki:odd").addClass("suzuki_active");
		$(".sx4").fadeIn(600).css("display","flex");
		$(".vitara").fadeOut(600).css("display","none");
	});
	/*-Window about Model-*/
	$(".suzukiItem__button1").click(function(){$(".about").slideToggle(800)});
	$(".content__close").click(function(){ $(".about").css("display", "none")});
	/*-Bunner-*/
	$(".next__right").click(function(){
		$(".bunner").fadeOut(600).css("display", "none");
		$(".bunner2").fadeIn(600).css("display", "block");});
	$(".next__left").click(function(){
		$(".bunner2").fadeOut(600).css("display", "");
		$(".bunner").fadeIn(600).css("display", "block");});
});