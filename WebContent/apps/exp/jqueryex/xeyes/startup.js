function StartImWatchingYou(){
	HideStartMenu();
	if (ChkEl($('#xeyesbkg'))) {
		LoadingStart('Loading eyes widget ...<br />Please wait', 'Loading ...');
		$('#bckgexperiments').load('apps/exp/jqueryex/xeyes/xeyes.app', function(){
			ensure({
				js: "apps/exp/jqueryex/xeyes/xeyes.min.js"
			}, function(){	
				var i = new Image();    
				var j = new Image();
				i.onload = function(){
					j.onload = function(){
						$('#bckgexperiments').fadeIn();			
						LoadingEnd('Im watching you loaded!','Have fun!');
						$('#xeyesbkg').css({scale:[0.7,0.7]});
						$('#xeyesbkg').animate({scale:[1.3,1.3]}, 'fast',function(){
							$('#xeyesbkg').animate({scale:[1,1]}, 'slow');
						});
						initEyes();	
						$('#main').css('background','#000');
					}
				};
				i.src = 'apps/exp/jqueryex/xeyes/images/evil/eye.jpg';
				j.src = 'apps/exp/jqueryex/xeyes/images/evil/face.png';
			});
		});	
	}
}


var eyesEvil;
function initEyes()
{
  var e1Lft = 57.50;   
  var e1Top = 30.08;   
  var e2Lft = 69.75;  
  var e2Top = 34.24;   
  var e1Radius = 12.3;  
  var e2Radius = 2.3;
  eyesEvil = new Xeyes("face", "leftEye", e1Lft, e1Top, e1Radius, "rightEye", e2Lft, e2Top, e2Radius);
}
