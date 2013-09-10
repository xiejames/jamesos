function _bmarkWinStart(){
	CreateElement('guishBMarkWin', 'main', 'Bookmark');
	$('#guishBMarkWin').jWindow({
		resizable: false,
		width: 500,
		height: 400,
		minimizable: true,
		onStart: _bmarkFixTooltip()
	});
	$('#guishBMarkWin div.container').bookmark({url: 'http://www.jshanghai.cn/'});
	ShowElement('guishBMarkWin','Bookmark app loaded!','Have fun !');
}
function _bmarkFixTooltip(){
	setTimeout(
		function(){ 
			$('.bookmark_icons').tooltip({track: true,delay: 1,showURL: false,showBody: " - ",fade: 250});
		}, 3000);
}