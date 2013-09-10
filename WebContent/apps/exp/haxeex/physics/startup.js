function _guishExpHxPhysics1(){
	CreateElement('guishExpHxPhysics1', 'main', 'Physics');
	$('#guishExpHxPhysics1').jWindow({
		width: 765,
		height: 600,
		resizable: true,
		theme: 'jwindow',
		minimizable: true,
		hideContentOnMove: false,	// stop flash movie reseting on window move/resize
		onBeforeClose: function() { $('div.container', $('#guishExpHxPhysics1')).remove();}
	});
	$('#guishExpHxPhysics1 div.container').load('apps/exp/haxeex/physics/physics.app', function(){
		ShowElement('guishExpHxPhysics1', 'Experiments browser loaded!', 'Have fun!');
	})
}