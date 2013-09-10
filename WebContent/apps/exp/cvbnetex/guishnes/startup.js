function _guishCSVBStart(){
	CreateElement('csvbexp', 'main', 'C#/VB.NET experiments');
	$('#csvbexp').jWindow({
		resizable: true,
		width: 1000,
		height: 600,
		minimizable: true
	});
	$('#csvbexp div.container').load('apps/exp/cvbnetex/guishnes/cvb.app', function(){
		ShowElement('csvbexp','C#/VB.NET experiments loaded!','Content loaded');
	});	
}