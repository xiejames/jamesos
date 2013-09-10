function _gamesWinStart(){
	CreateElement('guishGamesWin', 'main', 'Game browser');
	$('#guishGamesWin').jWindow({
		width: 800,
		height: 600,
		resizable: true,
		theme: 'jwindow',
		minimizable: true
	});
	$('#guishGamesWin div.container').load('apps/games/games.app', function(){
		$('#guishGamesWin div.winicon')
			.bind('dragstart',function( event ){ 		
				return $( this ).css('opacity',.5)
							.clone().addClass('active')
							.insertAfter( this );
					})
			.bind('drag',function( event ){
					E = $(event.dragProxy);
					E.css({
						top: event.offsetY - $('#guishGamesWin').position().top - 40,left: event.offsetX - $('#guishGamesWin').position().left - 20
					});			
					if(E.position().top < 0 ) E.css({top: 0}); 
					if(E.position().top > E.parent().height() - 79 - E.height()) E.css({top: E.parent().height() - 79 - E.height()});
					if(E.position().left < 0) E.css({left: 0}); 
					if(E.position().left > E.parent().width() - E.width()) E.css({left: E.parent().width() - E.width()});
					})
			.bind('dragend',function( event ){
					E = $(event.dragProxy);            
					$( this ).animate({
							top: E.position().top,
							left: E.position().left,
							opacity: 1
							});
					E.remove();
            });
		ShowElement('guishGamesWin', 'Game browser loaded!', 'Have fun!');
	})
}

function StartJQPuzzle(){
	if(ChkEl($('#jqpuzzle'))){
		LoadingStart('Loading puzzle game ...<br />Please wait.','Loading ...');
		ensure({
			js:["apps/games/jqpuzzle/jquery.jqpuzzle.full.js","apps/games/jqpuzzle/startup.js"],
			css:["apps/games/jqpuzzle/jquery.jqpuzzle.css","apps/games/jqpuzzle/style.css"]
		}, function(){
			_jqPuzzleStart();
		});
	}
}
