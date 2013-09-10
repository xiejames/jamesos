function _guishCalStart(){
	CreateElement('calculator', 'main', 'Calculator');			
	$('#calculator').jWindow({
		resizable: false,
		width: 270,
		height: 170,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#calculator div.container').calculator({
		layout: $.calculator.standardLayout
	}).css('overflow','hidden');
	ShowElement('calculator', 'Calculator loaded!', 'Application loaded');
}

function _guishCalSciStart(){
	CreateElement('scicalculator', 'main', 'Scientific calculator');
	
	$('#scicalculator').jWindow({
		resizable: false,
		width: 510,
		height: 210,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#scicalculator div.container').calculator({
		layout: $.calculator.scientificLayout
	}).css('overflow','hidden');
	ShowElement('scicalculator', 'Calculator loaded!', 'Application loaded');
}
