$(document).ready(function() {

/*-------NAVBAR------*/
$('.year_2012').click(function() {
  $.scrollTo( { top:0, left:0}, 1000)
});
$('.year_2011').click(function() {
  $.scrollTo( { top:1405, left:0}, 1000)
});
$('.year_2010').click(function() {
  $.scrollTo( { top:2300, left:0}, 1000)
});
$('.year_2009').click(function() {
  $.scrollTo( { top:2955, left:0}, 1000)
});
$('.year_2008').click(function() {
  $.scrollTo( { top:3622, left:0}, 1000)
});
$('.year_2007').click(function() {
  $.scrollTo( { top:4176, left:0}, 1000)
});
$('.year_2006').click(function() {
  $.scrollTo( { top:5040, left:0}, 1000)
});
$('.year_2005').click(function() {
  $.scrollTo( { top:5282, left:0}, 1000)
});
$('.year_2004').click(function() {
  $.scrollTo( { top:6426, left:0}, 1000)
});
$('.year_2003').click(function() {
  $.scrollTo( { top:6996, left:0}, 1000)
});
$('.year_2002').click(function() {
  $.scrollTo( { top:7255, left:0}, 1000)
});
$('.year_2001').click(function() {
  $.scrollTo( { top:12147, left:0}, 1000)
});
/*----------takeoff---------*/
$('.takeoff').click(function() {
  $.scrollTo( { top:0, left:0}, 38000 )
});
/*-------VARIABLES PRINCIPALS------*/
	var $window = $(window);
	var ancho_navegador = $window.width();
	var alto_navegador = $window.height();
	var alto_y_ancho_navegador = ancho_navegador + 'x' + alto_navegador;
	var scroll_der = $window.scrollTop();
	var hand_position = $(".hand").position();
	$('.scroll_der').html('Scroll: ' + scroll_der);
	$('.alto_y_ancho_navegador').html('Resolucion Navegador: ' + alto_y_ancho_navegador);
	
	$.scrollTo( { top:12000, left:0}, 1000 )

	$('.stars_girls').scrollingParallax({
        staticSpeed : 0.90,
		reverseDirection : false,
        staticScrollLimit : false	
	});	
	$('.stars_big').scrollingParallax({
        staticSpeed : 1.1,
		reverseDirection : false,
        staticScrollLimit : false	
	});		
/*------------stage 1------------*/
	$('.cloud_1').scrollingParallax({
			staticSpeed : 0.70,
			reverseDirection : false,
			staticScrollLimit : false
			
		});
	$('.cloud_2').scrollingParallax({
			staticSpeed : 0.65,
			reverseDirection : false,
			staticScrollLimit : false
			
		});
	$('.cloud_4').scrollingParallax({
			staticSpeed : 0.70,
			reverseDirection : false,
			staticScrollLimit : false
			
		});
	$('.cloud_5').scrollingParallax({
			staticSpeed : 0.68,
			reverseDirection : false,
			staticScrollLimit : false
			
		});
	$('.cloud_3').scrollingParallax({
			staticSpeed : 0.70,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
/*------------stage 2------------*/
	$('.band_2').scrollingParallax({
			staticSpeed : 1.2,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.wiki_img').scrollingParallax({
			staticSpeed : 0.88,
			reverseDirection : false,
			staticScrollLimit : false
			
		});		
	$('.myspace').scrollingParallax({
			staticSpeed : 0.80,
			reverseDirection : false,
			staticScrollLimit : false
			
		});				
/*------------stage 3------------*/
	$('.band_3').scrollingParallax({
			staticSpeed : 1.2,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.satellite_1').scrollingParallax({
        staticSpeed : 0.40,
		reverseDirection : false,
        staticScrollLimit : false
		
	});
	$('.wave_1').scrollingParallax({
        staticSpeed : 0.40,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	
	$('.satellite_2').scrollingParallax({
        staticSpeed : 0.45,
		reverseDirection : false,
        staticScrollLimit : false
		
	});
	$('.wave_2').scrollingParallax({
        staticSpeed : 0.45,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.satellite_3').scrollingParallax({
        staticSpeed : 0.35,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.wave_3').scrollingParallax({
        staticSpeed : 0.35,
		reverseDirection : false,
        staticScrollLimit : false
		
	});		
	$('.stars_stage_3_a').scrollingParallax({
        staticSpeed : 0.60,
		reverseDirection : false,
        staticScrollLimit : false
		
	});		
	$('.stars_stage_3_b').scrollingParallax({
        staticSpeed : 0.50,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.stars_stage_3_c').scrollingParallax({
        staticSpeed : 0.40,
		reverseDirection : false,
        staticScrollLimit : false
		
	});						
/*------------stage 4------------*/
	$('.band_4').scrollingParallax({
			staticSpeed : 1.2,
			reverseDirection : false,
			staticScrollLimit : false
			
		});
	$('.gmail').scrollingParallax({
			staticSpeed : 0.88,
			reverseDirection : false,
			staticScrollLimit : false
			
		});		
	$('.youtube').scrollingParallax({
			staticSpeed : 0.75,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.rocket_addition_upper_left').scrollingParallax({
			staticSpeed : 0.75,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.rocket_addition_upper_right').scrollingParallax({
			staticSpeed : 0.75,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.rocket_addition_bottom_left').scrollingParallax({
			staticSpeed : 0.75,
			reverseDirection : true,
			staticScrollLimit : false
			
		});	
	$('.rocket_addition_bottom_right').scrollingParallax({
			staticSpeed : 0.75,
			reverseDirection : true,
			staticScrollLimit : false
			
		});	
	$('.chrome').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});		
										
/*------------stage 5------------*/
	$('.band_5').scrollingParallax({
			staticSpeed : 1.2,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
	$('.facebook').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.twitter01').scrollingParallax({
        staticSpeed : 0.90,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.twitter02').scrollingParallax({
        staticSpeed : 0.75,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.twitter03').scrollingParallax({
        staticSpeed : 0.80,
		reverseDirection : false,
        staticScrollLimit : false
		
	});			
	$('.detached_ship_right').scrollingParallax({
        staticSpeed : 0.90,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.detached_ship_left').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : true,
        staticScrollLimit : false
		
	});	
	
	$('.detached_ship_left_2').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});		

	$('.irevive_bubble').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});		

	$('.arctic_gurus_bubble').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	
	$('.woofpack_bubble').scrollingParallax({
        staticSpeed : 0.70,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
/*------------stage 6------------*/
	$('.band_6').scrollingParallax({
			staticSpeed : 1.2,
			reverseDirection : false,
			staticScrollLimit : false
			
		});	
/*------------stage 7------------*/	
	$('.plat_7_star_1').scrollingParallax({
        staticSpeed : 0.25,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.plat_7_star_2').scrollingParallax({
        staticSpeed : 0.20,
		reverseDirection : false,
        staticScrollLimit : false
		
	});
	$('.plat_7_star_3').scrollingParallax({
        staticSpeed : 0.30,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.plat_7_facebook').scrollingParallax({
        staticSpeed : 0.25,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
	$('.plat_7_twitter').scrollingParallax({
        staticSpeed : 0.23,
		reverseDirection : false,
        staticScrollLimit : false
		
	});
	$('.plat_7_facebook').scrollingParallax({
        staticSpeed : 0.25,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	
/*	$('.plat_7_facebook_link').scrollingParallax({
        staticSpeed : 0.23,
		reverseDirection : false,
        staticScrollLimit : false
		
	});			
	$('.plat_7_twitter_link').scrollingParallax({
        staticSpeed : 0.90,
		reverseDirection : false,
        staticScrollLimit : false
		
	});	*/
	$('.plat_7_stars').scrollingParallax({
        staticSpeed : 0.60,
		reverseDirection : false,
        staticScrollLimit : false
		
	});																					
//SCROLL TO REAL TIME
  $(document).scroll(function() {
	  
	var $window = $(window);
	var scroll_der = $window.scrollTop();
	var scroll_der_2 = -10  + (  + (scroll_der * 1.5 - 2390));
	$('.scroll_der').html('Scroll: ' + scroll_der);
	$('.scroll_der_2').html('Test Formulas: ' +scroll_der_2);	

/*-----------NAVBAR------------*/
/*-------2001------*/	
	if (scroll_der <= 12147) 
	{
 	  $(".navbar_back").css("top","477px");
	};
/*-------2002------*/	
	if (scroll_der <= 7564) 
	{
 	  $(".navbar_back").css("top","447px");
	};
/*-------2003------*/	
	if (scroll_der <= 6996) 
	{
  	  $(".navbar_back").css("top","417px");
	};
/*-------2004------*/	
	if (scroll_der <= 6426) 
	{
	  $(".navbar_back").css("top","385px");
	};
/*-------2005------*/	
	if (scroll_der <= 5626) 
	{
	  $(".navbar_back").css("top","354px");
	};
/*-------2006------*/	
	if (scroll_der <= 5040) 
	{
 	  $(".navbar_back").css("top","323px");
	};
/*-------2007------*/	
	if (scroll_der <= 4176) 
	{
	  $(".navbar_back").css("top","292px");
	};
/*-------2008------*/	
	if (scroll_der <= 3622) 
	{
 	  $(".navbar_back").css("top","262px");
	};
/*-------2009------*/	
	if (scroll_der <= 2955) 
	{
	  $(".navbar_back").css("top","230px");
	};	
/*-------2010------*/		
	if (scroll_der <= 2300) 
	{
		$(".navbar_back").css("top","199px");
	};	
/*-------2011------*/	
	if (scroll_der <= 1405) 
	{
  		$(".navbar_back").css("top","168px");
	};	
/*-------2012------*/
	if (scroll_der <= 250) 
	{
  		$(".navbar_back").css("top","137px");
	};				
/*-----------rocket------------*/
	if(scroll_der <= 10819  )
   {
		$(".rocket_fire").css('display','block');
		$(".rocket").css({
			'position' : 'fixed',
			'top' : '142px',
			'background-position' : '843px 0'
		});
   }
   else {
		$(".rocket_fire").css('display','none');
		$(".rocket").css({
			'position' : 'absolute',
			'top' : '10971px',
			'background-position' : '843px 0'
		});
	};

	if (scroll_der > 10819 ) 
	{
		$(".rocket_fire").css('display','none');
		$(".rocket_fire_2").css('display','none');
	};	
	
		
   if(scroll_der <= 10480  )
   {
		$(".rocket_fire").css('display','none');
		$(".rocket_fire_2").css('display','block');
   };
	
   if(scroll_der > 10480 && scroll_der <= 10819 )
   {
		$(".rocket_fire").css('display','block');
		$(".rocket_fire_2").css('display','none');
   };
	
	
	if (scroll_der <= 9533 ) 
	{
		$(".rocket_fire").css('display','block');
		$(".rocket_fire_2").css('display','none');
	};	
	
	if (scroll_der <= 630 ) 
	{
		$(".rocket_fire").css('display','none');
		$(".rocket_fire_2").css('display','none');
	};		
		
	
/*------------stage 1------------*/	
    if(scroll_der <= 10907 && scroll_der >= 10646)
   {
		$(".gate_right").css("left", -10  -  (scroll_der * 1.5 - 17322) );
   }
   else {
		
	};

   if(scroll_der <= 10646)
   {
		$(".gate_right").css("left", "1343px");
   }
   else {
		
	};
	
   if(scroll_der <= 10907 && scroll_der >= 10646)
   {
		$(".gate_left").css("left", 10 + (scroll_der * 1.5 - 15850) );
   }
   else {
		
	};
	
   if(scroll_der <= 10646)
   {
		$(".gate_left").css("left", "129px");
   }
   else {
		
	};	
	
   if(scroll_der <= 10831)
   {
		$(".cloud_1").css("opacity",(0.1-(scroll_der -10831)/100));
   }
   else {
		$(".cloud_1").css("opacity",0);
	};	
	
	if(scroll_der <= 10831)
   {
		$(".cloud_1").css("background-position", -10  - (  + (scroll_der * 1.5 - 16420)) + "px", "-100px");
   }
   else {
		
	};	
	
   if(scroll_der <= 10831)
   {
		$(".cloud_2").css("opacity",(0.1-(scroll_der -10831)/100));
   }
   else {
		$(".cloud_2").css("opacity",0);
	};	
	if(scroll_der <= 10831)
   {
		$(".cloud_2").css("background-position", -10  + (  + (scroll_der * 1.5 - 14700)) + "px", "-100px");
   }
   else {
		
	};	

	
   if(scroll_der <= 10350)
   {
		$(".cloud_4").css("opacity",(0.1-(scroll_der -10350)/100));
   }
   else {
		$(".cloud_4").css("opacity",0);
	};
	if(scroll_der <= 10831)
   {
		$(".cloud_4").css("background-position", -10  + (  + (scroll_der * 1.5 - 14000)) + "px", "-100px");
   }
   else {
		
	};		
		
   if(scroll_der <= 10350)
   {
		$(".cloud_5").css("opacity",(0.1-(scroll_der -10350)/100));
   }
   else {
		$(".cloud_5").css("opacity",0);
	};	
	if(scroll_der <= 10831)
   {
		$(".cloud_5").css("background-position", -10  - (  + (scroll_der * 1.5 - 15700)) + "px", "-100px");
   }
   else {
		
	};			

   if(scroll_der <= 10115)
   {
		$(".cloud_3").css("opacity",(0.1-(scroll_der -10115)/100));
   }
   else {
		$(".cloud_3").css("opacity",0);
	};	
	if(scroll_der <= 10831)
   {
		$(".cloud_3").css("background-position", -10  + (  + (scroll_der * 1.4 - 12800)) + "px", "-100px");
   }
   else {
		
	};		
/*------------stage 2------------*/

/*------------stage 3------------*/
	/*---------*/	
	if(scroll_der <= 7690 && scroll_der >= 7370 )
   {
		$(".satellite_1").css("background-position", -10  + (  + (scroll_der * 1.5 - 9790)) + "px", "-100px");
		$(".wave_1").hide(1);
   }
   else {
		
	};
 if(scroll_der <= 7370)
   {
		$(".satellite_1").css("background-position", "1265.5px");
		$(".wave_1").show(300);
   }
   else {
		
	};	
/*---------*/	
 if(scroll_der <= 7690 && scroll_der >= 7160)
   {
		$(".satellite_2").css("background-position", 2300 - (scroll_der * 1.5 - 8900) + "px", "100px");
		$(".wave_2").hide(1);
   }
   else {
		
	};	
	
 if(scroll_der <= 7160)
   {
		$(".satellite_2").css("background-position", "460px");
		$(".wave_2").show(300);
   }
   else {
		
	};			
/*---------*/		
 if(scroll_der <= 7655)
   {
		$(".satellite_3").css("opacity",(0.000001-(scroll_der -7655)/100));
   }
   else {
		$(".satellite_3").css("opacity",0);
	};	
	
 if(scroll_der <= 7690 && scroll_der >= 7300)
   {
		$(".satellite_3").css("background-position", 2300 - (scroll_der * 1.5 - 9045) + "px", "100px");
		$(".wave_3").hide(1);
   }
   else {
		
	};
 if(scroll_der <= 7300)
   {
		$(".satellite_3").css("background-position", "381.5px");
		$(".wave_3").show(300);
   }
   else {
		
	};	
	
	
	
	
 if(scroll_der > 7404)
   {
	   	$(".wave_1").css("display","none");
	    $(".wave_2").css("display","none");
		$(".wave_3").css("display","none");
   }
   else {
		
	};

	
/*------------stage 4------------*/
 	if(scroll_der <= 5635 && scroll_der >= 5169 )
   {
		$(".rocket_addition_upper_left").css("background-position", 2300 - (scroll_der * 1.5 - 6100) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 5635)
   {
		$(".rocket_addition_upper_left").css("opacity",(0.000001-(scroll_der -5635)/100));
   }
   else {
		$(".rocket_addition_upper_left").css("opacity",0);
	};	
	
  if(scroll_der <= 5169)
   {
		$(".rocket_addition_upper_left").css("background-position", "646.5px", "100px");
   }
   else {
		
	};	
/*---------*/		
  if(scroll_der <= 5635 && scroll_der >= 5169)
   {
		$(".rocket_addition_upper_right").css("background-position", 2300 + (scroll_der * 1.5 - 9280) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 5635)
   {
		$(".rocket_addition_upper_right").css("opacity",(0.000001-(scroll_der -5635)/100));
   }
   else {
		$(".rocket_addition_upper_right").css("opacity",0);
	};	
  if(scroll_der <= 5169)
   {
		$(".rocket_addition_upper_right").css("background-position", "775.5px", "100px");
   }
   else {
		
	};	
/*---------*/	
  if(scroll_der <= 5635 && scroll_der >= 5169 )
   {
		$(".rocket_addition_bottom_left").css("background-position", 2300 - (scroll_der * 1.5 - 6100) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 5635)
   {
		$(".rocket_addition_bottom_left").css("opacity",(0.000001-(scroll_der -5635)/100));
   }
   else {
		$(".rocket_addition_bottom_left").css("opacity",0);
	};	
	
  if(scroll_der <= 5169)
   {
		$(".rocket_addition_bottom_left").css("background-position", "646.5px", "100px");
   }
   else {
		
	};	
/*---------*/		
  if(scroll_der <= 5635 && scroll_der >= 5169)
   {
		$(".rocket_addition_bottom_right").css("background-position", 2300 + (scroll_der * 1.5 - 9280) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 5635)
   {
		$(".rocket_addition_bottom_right").css("opacity",(0.000001-(scroll_der -5635)/100));
   }
   else {
		$(".rocket_addition_bottom_right").css("opacity",0);
	};	
  if(scroll_der <= 5169)
   {
		$(".rocket_addition_bottom_right").css("background-position", "775.5px", "100px");
   }
   else {
		
	};		
	
	
 if(scroll_der <= 5152)
   {
	   	$(".rocket").css('display','none');
		$(".rocket_2").css('display','block');
	   	$(".rocket_addition_upper_left").css('display','none');
		$(".rocket_addition_upper_right").css('display','none');
		$(".rocket_addition_bottom_left").css('display','none');
		$(".rocket_addition_bottom_right").css('display','none');	
   };
   if (scroll_der > 5152) {
		$(".rocket").css('display','block');
		$(".rocket_2").css('display','none');	   
	   	$(".rocket_addition_upper_left").css('display','block');
		$(".rocket_addition_upper_right").css('display','block');
		$(".rocket_addition_bottom_left").css('display','block');
		$(".rocket_addition_bottom_right").css('display','block');
	};	

   if(scroll_der <= 630  )
   {
		$(".rocket_2").css('display','none');
   };
   
   if (scroll_der > 630 && scroll_der <= 5152 ) 
	{
		$(".rocket_2").css('display','block');
	};			
		
/*------------stage 5------------*/
	/*---------*/	
  if(scroll_der <= 3822 && scroll_der >= 3617 )
   {
		$(".detached_ship_right").css("background-position", 2300 + (scroll_der * 1.5 - 7300) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3822)
   {
		$(".detached_ship_right").css("opacity",(0.000001-(scroll_der -3822)/100));
   }
   else {
		$(".detached_ship_right").css("opacity",0);
	};	
	
  if(scroll_der <= 3617)
   {
		$(".detached_ship_right").css("background-position", "425.5px", "100px");
   }
   else {
		
	};
	
  if(scroll_der <= 4722 )
   {
		$(".twitter01").css("background-position", 2300 - (scroll_der * 0.35 - 350) + "px", "100px");
   }
   else {
		
	};	
  if(scroll_der <= 4722)
   {
		$(".twitter02").css("background-position", 2300 - (scroll_der * 0.3 - 97) + "px", "100px");
   }
   else {
		
	};
  if(scroll_der <= 4722)
   {
		$(".twitter03").css("background-position", 2300 - (scroll_der * 0.4 - 550) + "px", "100px");
   }
   else {
		
	};		
/*---------*/	
  if(scroll_der <= 3826 && scroll_der >= 3604)
   {
		$(".detached_ship_left").css("background-position", 2300 - (scroll_der * 1.5 - 4250) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3822)
   {
		$(".detached_ship_left").css("opacity",(0.000001-(scroll_der -3822)/100));
   }
   else {
		$(".detached_ship_left").css("opacity",0);
	};
	
  if(scroll_der <= 3604)
   {
	   	$(".detached_ship_left").css("display", "none");
		$(".detached_ship_left").css("background-position", "1143px", "100px");
		$(".detached_ship_left_2").css("display", "block");
		$(".irevive_bubble").css("background-position", "1100px", "100px"); /*NEW*/
		$(".arctic_gurus_bubble").css("background-position", "1000px", "100px"); /*NEW*/
   }
   else {
	   $(".detached_ship_left").css("display", "block");
	   $(".detached_ship_left_2").css("display", "none");
		
	};
	
	
	/* NEW */
	
 if(scroll_der <= 3520)
   {
		$(".irevive_bubble").css("background-position", 2300 - (scroll_der * 1.5 - 4250) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3520)
   {
		$(".irevive_bubble").css("opacity",(0.000001-(scroll_der -3510)/100));
   }
   else {
		$(".irevive_bubble").css("opacity",0);
	};
 
 /*if(scroll_der <= 3204)
   {
		$(".irevive_bubble").css("background-position", "1300px", "100px");
   }
   else {
		
	};
*/
	
	 if(scroll_der <= 3380)
   {
		$(".arctic_gurus_bubble").css("background-position", 2160 - (scroll_der * 1.5 - 4250) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3380)
   {
		$(".arctic_gurus_bubble").css("opacity",(0.000001-(scroll_der -3370)/100));
   }
   else {
		$(".arctic_gurus_bubble").css("opacity",0);
	};
	

	
 if(scroll_der <= 3240)
   {
		$(".woofpack_bubble").css("background-position", 2020 - (scroll_der * 1.5 - 4250) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3240)
   {
		$(".woofpack_bubble").css("opacity",(0.000001-(scroll_der -3230)/100));
   }
   else {
		$(".woofpack_bubble").css("opacity",0);
	};
	
	/**/
	
	
	
	
	  if(scroll_der <= 3822 && scroll_der >= 3617 )
   {
		$(".detached_ship_right").css("background-position", 2300 + (scroll_der * 1.5 - 7300) + "px", "100px");
   }
   else {
		
	};
 if(scroll_der <= 3822)
   {
		$(".detached_ship_right").css("opacity",(0.000001-(scroll_der -3822)/100));
   }
   else {
		$(".detached_ship_right").css("opacity",0);
	};	
	
  if(scroll_der <= 3617)
   {
		$(".detached_ship_right").css("background-position", "425.5px", "100px");
   }
   else {
		
	};
	/*--*/
	
	
	
	
	
	
//*------------stage 6------------*/
	if(scroll_der <= 2750)
   {
	   $(".rocket_small_platform_1").css("display","block");
		$(".rocket_small_platform_1").css("top", 2300 + (scroll_der * 1.5 - 6200) + "px");
   }
   else {
		
	};
  if(scroll_der > 2750)
   {
		$(".rocket_small_platform_1").css("display","none");
   }
   else {
		
	};	
/*---------*/
  if(scroll_der <= 1750)
   {
		$(".rocket_small_platform_2").css("top", 2300 + (scroll_der * 1.5 - 4350) + "px");
   }
   else {
		
	};	
/*---------*/
  if(scroll_der <= 2506)
   {
		$(".rocket_small_platform_3").css("top", 2300 + (scroll_der * 1.5 - 5500) + "px");
   }
   else {
		
	};	
/*---------*/
  if(scroll_der <= 2035)
   {
	   $(".rocket_small_platform_4").css("display","block");
		$(".rocket_small_platform_4").css("top", 2300 + (scroll_der * 1.5 - 5080) + "px");
   }
   else {
		
	};
  if(scroll_der > 2035)
   {
		$(".rocket_small_platform_4").css("display","none");
   }
   else {
		
	};		 
/*------------stage 7------------*/

/*--------------------*/

	});

});