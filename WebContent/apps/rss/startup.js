function _rssWinStart(){
	CreateElement('rsstest', 'main', "rss");			
	$('#rsstest').jWindow({
		resizable: true,
		width: 1000,
		height: 500,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#rsstest div.container').load('apps/rss/rss.app', function(){
		ShowElement('rsstest', ' Page loaded!', 'Have fun!');
	})
}
