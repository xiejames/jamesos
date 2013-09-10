function _coolclockWinStart(){
	CreateElement('wdgClock', 'main', '');
	var rndnum = Math.floor(Math.random()*9);	
	$('#wdgClock').load('apps/coolclock/coolclock.app', function(){
		$('#wdgClock').append('<span class="wdgclose"></span>');
		//$('#coolclockdiv').css('background','url(apps/coolclock/skins/' + rndnum + '.jpg) ' + ((rndnum == 8) ? '' : 'fixed'));
		CoolClock.findAndCreateClocks();
		$('#wdgClock').hover(function(){
			$('div.clocktheme,span.wdgclose',this).stop().animate({'opacity':'1'});
			$(this).css('border-color','#fff');
		}, function(){
			$('div.clocktheme,span.wdgclose',this).stop().animate({'opacity':'0'});
			$(this).css('border-color','transparent');
		});
		$('#wdgClock span.wdgclose').hover(function(){
			$(this).css('background','url(apps/widgets/img/wdgclosered.gif');
		}, function(){
			$(this).css('background','url(apps/widgets/img/wdgclose.gif');
		}).click(function(){
			$(this).remove();
			$('#wdgClock').animate({opacity: 0, scale:'0.1',rotate:'-350deg'},600, function(){
				$('#wdgClock').parent().remove();
			});
		});
		
		$('#coolclockdiv div.titletext').bind('click', function(){
			var rndnum = Math.floor(Math.random()*9);
			$('#coolclockdiv').css('background','url(apps/coolclock/skins/' + rndnum + '.jpg) ' + ((rndnum === 8) ? '' : 'fixed'));
		});
		
		$('#widgetscontainer').append('<li style="text-align: centar;"></li>');
		$('#widgetscontainer li:last').append($('#wdgClock'));

		ShowElement('wdgClock', 'Coolclock widget loaded!', 'Have fun!');
	})
}
