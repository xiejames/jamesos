function _guishDesktopCStart(){
	CreateElement('dcolorpicker', 'main', 'Select desktop color');			
	$('#dcolorpicker').jWindow({
		resizable: false,
		width: 195,
		height: 220,
		minimizable: true,
		theme: 'jwindow'
	});
	$('#dcolorpicker div.container').html('<div id="picker" class="bkgcolor"></div><input style="width: 70px; text-align: center; font-weight: bold; font-family: Verdana; font-size: 9pt; border: none; margin-left: 62px" type="text" id="color" name="color" value="#123456" />');
	$('#picker').farbtastic('#color');
	ShowElement('dcolorpicker', 'Desktop color-picker loaded!', 'Content loaded');
}