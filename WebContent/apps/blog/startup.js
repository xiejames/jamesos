function _guishBlogStart(){
	CreateElement('jamesblog', 'main', 'blog loading ...');
	$('#jamesblog').jWindow({
		resizable: true,
		width: 480,
		height: 660,
		minimizable: true
	});
	$('#jamesblog div.container').load('apps/blog/blog.html', function(){
		ShowElement('jamesblog','blog loaded!','Content loaded');
	});	
}