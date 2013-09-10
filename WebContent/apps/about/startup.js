function _aboutWinStart(){
	CreateElement('guishAboutWin', 'main', 'About');			
	$('#guishAboutWin').jWindow({
		resizable: false,
		width: 500,
		height: 344,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#guishAboutWin div.container').load('apps/about/about.app', function(){
		$(this).css('background','url(apps/about/aboutbkg.jpg) no-repeat');
		$('.aboutCom', $(this)).click(function() { StartComments(); });
		$('.aboutCon', $(this)).click(function() { StartContact(); });
		ShowElement('guishAboutWin', 'About loaded!', 'Have fun!');
	})
}
