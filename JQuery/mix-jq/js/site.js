$(function(){
	//Slide 
	$(".close-btn").click(function(){
		$(".slider").slideUp();
		});

	$(".open-btn").click(function(){
		$(".slider").slideDown();
		});

	$(".toggle-btn").click(function(){
		$(".slider").slideToggle();
		});


	//----------------DROPDOWN-----------------\\
	$("li").has(".dropdown").hover(
		function() {
			$(this).find(".dropdown").slideDown();
		},
		function() {
			$(this).find(".dropdown").slideUp();
		}
	);
	
	//---------------THUMBNAILS-------------\\
	$(".thumbnail").animate({
		left: "400px"
	},	
	2000);



	//Thumbs images animation
	$(".thumbs li img").hover(
		function(){
			$(this).animate({
				width:"200px",
				height:"134px"
			
			},	500);
		},

		function(){
			$(this).animate({
				width:"150px",
				height:"101px"
			
			},	500);
		}
	);

	
	//Gallery
	$(".gallery div").hover(
		function(){
			$(this).find("img").fadeIn();
		},

		function(){
			$(this).find("img").fadeOut();
		}


		);

	// Tabs All
	//Tab2
	$(".tab-list .tab2 a").click(function(e) {
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab2").addClass("active");

	});
	//Tab1
	$(".tab-list .tab1 a").click(function(e) {
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab1").addClass("active");

	});	
	//Tab3
	$(".tab-list .tab3 a").click(function(e) {
		e.preventDefault();
		$(".tabs .active").removeClass("active");
		$(".tab3").addClass("active");

	});	

	// Accordian <3 F.A.Q
	$(".faq dt").click(function(e){
		// e.preventDefault();
		$(this).next().slideToggle();
	});



});
