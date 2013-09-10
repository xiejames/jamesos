function _guishExpStart(){
	CreateElement('guishExpWin', 'main', 'Experiments');
	$('#guishExpWin').jWindow({
		width: 800,
		height: 600,
		resizable: false,
		theme: 'jwindow',
		minimizable: true
	});
	$('#guishExpWin div.container').load('apps/exp/categories/expments.app', function(){
		ShowElement('guishExpWin', 'Experiments browser loaded!', 'Have fun!');
		$('#guishExpWin div.container div.tabs-container').tabs();
	})
}
