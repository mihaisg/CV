		$(document).ready(function($) 
		
		{
			$('#navigation').onePageNav
			
		({
			
				currentClass: 'current',
				changeHash: false,
				scrollSpeed: 1000,
				scrollOffset: 50,
				scrollThreshold: 0.5,
				filter: '',
				easing: 'swing'
				
			 });
			 
			$(".header-wrapper").sticky({topSpacing:0});
			
		});
		
		$(function()
		
		{
		
			$("a[rel^='prettyPhoto']").prettyPhoto({slideshow:10000, autoplay_slideshow:true});
			
		});
		
		$(function()
		
		{
		
			$("a[rel^='prettyPhoto1']").prettyPhoto({theme:'dark_rounded',slideshow:10000, autoplay_slideshow:true});
			
		});
		
		$(function()
		
		{
		
			$("a[rel^='prettyPhoto2']").prettyPhoto({theme:'dark_square',slideshow:10000, autoplay_slideshow:true});
			
		});				