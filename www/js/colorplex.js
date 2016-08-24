Modernizr.load();

$(function() {
	// Blue Arrow in Nav
	var nav_arrow = '<div id="nav_arrow"></div>';
	$('#main_nav ul li a').on('mouseover', function() {
		if($(this).hasClass('no_arr')) { return; }
		var e = $(this);
		var id = e.attr('data-id');
		var subnavs = $('#subnavs ul[data-id=' + id + ']').html();
		$('#subnav').show();
		if($('#nav_arrow')) { $('#nav_arrow').remove(); }
		$(e.parent()).append(nav_arrow);
		$('#subnav ul').html(subnavs);
	});
	//
	// Login Panel
	// Expand Panel
	$("#open").click(function(){
		$("div#panel").slideDown("slow");
		$('#global_nav').css({'z-index': '500', 'display': 'none'});
		return false;
	
	});	
	
	// Collapse Panel
	$("#close").click(function(){
		$("div#panel").slideUp("slow", function() { $('#global_nav').css({'z-index': '1050', 'display': 'block'}); });	
	});		
	
	// Switch buttons from "Log In | Register" to "Close Panel" on click
	$("#toggle a").click(function () {
		$("#toggle a").toggle();
	});
	//
	
	$('#h_gallery .gallery').cycle({timeout:6000, speed: 2000});
	$('#gallery .gallery').cycle({timeout:6000, speed: 2000});
	$('#news_box ul li:last-child').css({border:0});
	$('form.validate').validationEngine();
	
	
	
});