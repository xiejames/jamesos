function _jqPuzzleStart(){
	CreateElement('jqpuzzle', 'main', 'Puzzle game');
	$('#jqpuzzle').jWindow({
		resizable: false,
		width: 644,
		height: 520,
		minimizable: true,
		closeConfirm: true
	});

	
	$('#jqpuzzle div.container').load('apps/games/jqpuzzle/jqpuzzle.app', function(){		
		 setTimeout( function(){
			$('#jqpuzzleimg').jqPuzzle({ 
            cols: 5, 
            hole: 16, 
            numbers: true, 
			shuffle: true,
            language: 'en', 
            success: { 
                callback: function(results) {  
                    alert('Finished in ' + results.moves + ' moves and ' +  
                        results.seconds + ' secconds.'); 
                } 
            }, 
            animation: { 
                shuffleRounds: 1, 
                slidingSpeed: 100, 
                shuffleSpeed: 200 
            }, 
            style: { 
                gridSize: 0, 
                overlap: false, 
                backgroundOpacity: 0 
            } 
        }, { 
            secondsLabel: 'Sec.' 
        }); 
		}, 2000);
		ShowElement('jqpuzzle','Puzzle game loaded!','Content loaded');
	});
}