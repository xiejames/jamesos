function _wdgEyesStart(){
	CreateElement('wdgEyes', 'main', '');
	$('body').jEye();
	$('#wdgEyes').append($('#occhiob0')).append($('#occhio0')).append('<span class="wdgclose"></span>');
	$('#wdgEyes').hover(function(){
			$(this).css('border-color','#fff').find('span.wdgclose').stop().animate({'opacity':'1'});
		}, function(){
			$(this).css('border-color','transparent').find('span.wdgclose').stop().animate({'opacity':'0'});
		});
	$('#wdgEyes span.wdgclose').hover(function(){
			$(this).css('background','url(apps/widgets/img/wdgclosered.gif');
		}, function(){
			$(this).css('background','url(apps/widgets/img/wdgclose.gif');
		}).click( function(){
		$(this).remove();
		$('#wdgEyes').animate({opacity: 0, scale:'0.1',rotate:'-350deg'},600, function(){
			$('#wdgEyes').parent().remove();
		});
		$('body').unbind('mousemove');
	});
	$('#widgetscontainer').append('<li style="text-align: centar;"></li>');
	$('#widgetscontainer li:last').append($('#wdgEyes'));
	ShowElement('wdgEyes', 'Eyes widget loaded!', 'Have fun!');
}