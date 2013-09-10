function _guishUnderCStart(){
	CreateElement('uconstruct', 'main', 'Under construction ...');
	$('#uconstruct').jWindow({
		resizable: false,
		width: 480,
		height: 350,
		minimizable: true
	});
	$('#uconstruct .container').load('apps/underc/uc.app', function(){
		ShowElement('uconstruct','Under construction loaded!','Content loaded');
	});	
}