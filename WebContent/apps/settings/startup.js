function _guishSetStart(){
	CreateElement('settingswin', 'main', 'Preferences');
	$('#settingswin').jWindow({
		resizable: false,
		width: 482,
		height: 350,
		minimizable: true
	});
	$('#settingswin .container').load('apps/settings/settings.app .main', function(){
		$('.wpaper').tooltip({
			track: true,
			delay: 0,
			showURL: false,
			showBody: " - ",
			fade: false
		});
		ShowElement('settingswin','Visual settings loaded!','Content loaded');
	});	
}
