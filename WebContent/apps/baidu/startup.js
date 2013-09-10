function _guishBaiduMapStart(){
	CreateElement('baiduMap', 'main', 'james\' baidu map');
	$('#baiduMap').jWindow({
		resizable: true,
		width: 800,
		height: 600,
		minimizable: true
	});
	$('#baiduMap div.container').load('apps/baidu/baidu.map', function(){
		ShowElement('baiduMap','map loaded!','Content loaded');
		initMap();
	});	
}
   
