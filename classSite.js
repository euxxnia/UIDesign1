
console.log('dark mode');


$(document).ready(function(){

	//------------------------------------
	// show hide each itme
	//------------------------------------

	$('.item').click(function(){
		$(this).toggleClass('active');
	});

	//---------------------------
	// setup show hide all button
	//---------------------------
	$("#showhide").click(function(){
		
		$('.item').toggleClass('active');
	});

	//------------------------------------
	// adds a a darkmode class to the body
	//------------------------------------
	$("#darkmode").click(function(event){
        event.preventDefault();
        $('img').attr('src', 'dark_road.png');
		$('body').toggleClass('darkmode');
        $('.mac-book-pro-14-2').toggleClass('darkmode');
        $('.rectangle-1').toggleClass('darkmode');
        $('.ascii-town').toggleClass('darkmode');
        $('.still-life-css').toggleClass('darkmode');
        $('.project-1-lightcal-figma').toggleClass('darkmode');
        $('.project-2-your-emotion-friend-website').toggleClass('darkmode');
        $('.what-s-in-my-bag').toggleClass('darkmode');
        $('.light-road-1').toggleClass('darkmode');
        $('.ascii-left').toggleClass('darkmode');
        $('.ascii-right').toggleClass('darkmode');
        $('.still-l').toggleClass('darkmode');
        $('.still-r').toggleClass('darkmode');
        $('.p-1-l').toggleClass('darkmode');
        $('.p-1-r').toggleClass('darkmode');
        $('.wimb-l').toggleClass('darkmode');
        $('.wimb-r').toggleClass('darkmode');
        $('.p-2-l').toggleClass('darkmode');
        $('.p-2-r').toggleClass('darkmode');
	});

});