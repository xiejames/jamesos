function _worldTimeWinStart(){
	CreateElement('worldtimetest', 'main', "time");			
	$('#worldtimetest').jWindow({
		resizable: true,
		width: 1000,
		height: 500,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#worldtimetest div.container').load('apps/worldtime/worldtime.app', function(){
		ShowElement('worldtimetest', ' Page loaded!', 'Have fun!');
	})
}
