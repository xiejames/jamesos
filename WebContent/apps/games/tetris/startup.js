function _guishTetrisStart(){
	CreateElement('tetrisgame', 'main', 'Tetris');
			
	$('#tetrisgame').jWindow({
		resizable: false,
		width: 440,
		height: 500,
		minimizable: true,
		theme: 'jwindow',
		flexify: false,
		onBeforeClose: function() {try {
			$('#tstop').click();
		} catch (e){};},
		onClose: function() {tetris.gameOver;}
	});
	
	$('#tetrisgame div.container').load('apps/games/tetris/tetris.html', function(){				
		tetris.init();
		$('#next table').css('backgroundColor', tetris.colors[0]);
		$('#tstart').click(tetris.start);
		$('#tstop').click(tetris.gameOver);
		$('#tetrisabout').click(function(){
			$('#tetrisabout').fadeOut('slow');					
		});
		ShowElement('tetrisgame', 'Tetris loaded !', 'Content loaded.');
		var _tout = setInterval(function(){$('#tetrisabout').fadeOut('slow'); clearInterval(_tout); _tout = null;}, 6000);
	});
}
