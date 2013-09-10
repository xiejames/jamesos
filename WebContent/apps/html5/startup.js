function _html5WinStart(pageName,title,path){
	CreateElement('html5test'+pageName, 'main', ""+title);			
	$('#html5test'+pageName).jWindow({
		resizable: true,
		width: 1000,
		height: 500,
		minimizable: true,
		theme: 'jwindow'
	});
	if(path===undefined) path="";
	$('#html5test'+pageName+' div.container').load('apps/html5/'+path+pageName+'.app', function(){
		ShowElement('html5test'+pageName, pageName+' Page loaded!', 'Have fun!');
	})
}
