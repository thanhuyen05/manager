$(document).ready(function() {
	$("[data-target='#menutren']").click(function(){
		$("nav.menu .collapse ul li ul.menuphu").addClass("mattam");
		$("#menutren").toggleClass("mattam");
	});
	$("div.hello .phai div._1select").click(function(){
		$(this).toggleClass("hien");
		
	});
	$("nav .navbar-light .navbar-toggler-icon").css("display","block");
});