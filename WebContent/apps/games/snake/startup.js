function _guishSnakeStart(){
	CreateElement('snakegame', 'main', 'Snake game');
			
	$('#snakegame').jWindow({
		resizable: false,
		width: 640,
		height: 440,
		minimizable: true, 
		theme: 'jwindow',
		flexify: false,
		onClose: function() {Snake.setup();}
	});
	
	$('#snakegame div.container').load('apps/games/snake/snake.app', function(){
		Snake.setup();			
		// start the game
		$("a#start-game").click(function(e){
			e.preventDefault();
			Snake.newGame(true);
		});
		ShowElement('snakegame', 'Snake game loaded!', 'Content loaded.');
	});
}
