function _guishFontCStart(){
	CreateElement('fcolorpicker', 'main', 'Select font color');			
	$('#fcolorpicker').jWindow({
		resizable: false,
		width: 195,
		height: 220,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#fcolorpicker div.container').html('<div id="fpicker" class="fontcolor"></div><input style="width: 70px; text-align: center; font-weight: bold; font-family: Verdana; font-size: 9pt; border: none; margin-left: 62px" type="text" id="fcolor" name="color" value="#123456" />');
	$('#fpicker').farbtastic('#fcolor');
	ShowElement('fcolorpicker', 'Font color-picker loaded!', 'Content loaded');
}