$(function(){
	var icon =$('.icon');
	$('.icon a img').on('click',function(){
		$('.popup').css('display','block')
		icon.css('positon','fixed');
		icon.css('left',($(window).width()-icon.outerWidth())/2);
		icon.css('top',($(window).width()-icon.outerWidth())/2);
	})
	})
