var _guishLinks = null;
function _guishLinksStart(){
	CreateElement('guishlinks', 'main', 'Links to visit ...');			
	$('#guishlinks').jWindow({
		resizable: false,
		width: 800,
		height: 500,
		minimizable: true,
		onBeforeClose: function(){ guishLinksCleanUp(); }
	});	
	$('#guishlinks div.container').load('apps/links/links.app', function(){
		
		$(this).css('background-color', '#111');
		
		var desc = $('div.linkdescription');
		$('#linksitem ul li a').hover(function(){
			desc.html($(this).attr('rel'));
		}, function(){
			desc.html('');
		});
		
		var camera = new Camera3D();
		camera.init(0,0,0,300);
		
		var container = $("#linksitem");
		
		var item = new Object3D(container);

		item.addChild(new Ring(180, $("#linksitem ul li").length));
		
		var scene = new Scene3D();
		scene.addToScene(item);
		
		
		var mouseX,mouseY = 0;
		var offsetX = $("#linksitem").offset().left;
		var offsetY = $("#linksitem").offset().top;
		var speed = 3000;
		
		$('#guishlinks div.container').mousemove(function(e){
			mouseX = e.clientX - $('#guishlinks').position().left - 400 - offsetX - (container.width() / 2);
			mouseY = e.clientY - $('#guishlinks').position().top - offsetY - (container.height() / 2);
		});
		
		axisRotation.x = 1.9;
		
		var animateIt = function(){
			if (mouseX != undefined){
				axisRotation.y += (mouseX) / speed;
			}
			
			scene.renderCamera(camera);
			
		};
		
		
		_guishLinks = setInterval(animateIt, 30);
			
		ShowElement('guishlinks', 'Links loaded!', 'Have fun!');
	});
}

function guishLinksCleanUp(){
	scene = null;
	item = null;
	animateIt = null;
	clearInterval(_guishLinks);
	_guishLinks = null;
}
