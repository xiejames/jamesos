function _chatWinStart(isVideo){
	if(isVideo){
		CreateElement('chattest', 'main', "video chat");			
	}else{
		CreateElement('chattest', 'main', "chat");			
	}
	$('#chattest').jWindow({
		resizable: true,
		width: 1000,
		height: 800,
		minimizable: true,
		theme: 'jwindow'
	});
	if(isVideo){
		$('#chattest div.container').load('apps/chat/videochat.app', function(){
			ShowElement('chattest', ' Page loaded!', 'Have fun!');
		})
	}else{
		$('#chattest div.container').load('apps/chat/chat.app', function(){
			ShowElement('chattest', ' Page loaded!', 'Have fun!');
		})
	}
	
}
