function _guishWeBStart(){
	$('#guishBrowser').jWindow({
		resizable: true,
		width: 650,
		height: 450,
		theme: 'jwindow',
		minimizable: true,
		closeConfirm: true,
		flexify: true,
		onStart: $('div.container', $(this)).flexify()
	});
	
	$('#guishBrowser div.container').load('apps/webbrowser/webbrowser.html', function(){
		$('#guishBrowser div.container iframe').flex('height', 1).flex('width', 1).load(function(){
			$('.browserstatus').attr('src', 'css/images/ajaxok.png');
		});
		$('#guishBrowser div.browsersearchbar').flow('horizontal');
		$('#guishBrowser .browserfullurl').flex('width', 4).keypress(function(e){
	        if(e.which==13) {
				if($(this).val().substr(0,3) != 'http' || $(this).val().substr(0,2) != 'www'){
					$('#guishBrowser div.container iframe').attr('src', 'http://' + $(this).val());
				}
				else $('#guishBrowser div.container iframe').attr('src', $(this).val());
				$('.browserstatus').attr('src', 'css/images/loadingsmall.gif');
			};
	    });
		
		$('#guishBrowser .browsersearch').flex('width', 1).keypress(function(e){
	        if(e.which==13) {
				 $('#guishBrowser div.container iframe').attr('src', 'http://www.google.com/search?q=' + $(this).val());
				 $('.browserstatus').attr('src', 'css/images/loadingsmall.gif');
			};
	    });
		
		var ta = setTimeout( function() { $('#guishBrowser div.container').flexify(); ta = null; }, 500);
		ShowElement('guishBrowser', 'Web browser loaded!', 'Content loaded.');
	});
}
