var LoadBar = function(){
	this.totalFiles = 8;
	this.loadedFiles = 0;
};

//Set the value position of the bar (Only 0-100 values are allowed)
LoadBar.prototype.setValue = function(value){
	if(value >= 0 && value <= 100){
		document.getElementById("progressBar").style.width = value + "%";
		document.getElementById("infoProgress").innerHTML = parseInt(value) + "%";
	}
};
//Set the bottom text value
LoadBar.prototype.setAction = function(action){
	document.getElementById("infoLoading").innerHTML = action;
};
//Called when a script is loaded. Increment the progress value and check if all files are loaded
LoadBar.prototype.loaded = function(file) {
	this.loadedFiles++;
	var pc = (this.loadedFiles * 100) / this.totalFiles;
	this.setValue(pc);
	this.setAction(file + " loaded");
};
//Global var to reference from other scripts
var myBar = new LoadBar();

ensure({
	js: "js/jquery.event.drag-1.5.min.js"
	}, 
	function(){
		myBar.loaded('jquery.event.drag-1.5.min.js');
		ensure({
			js: "js/jquery.jeegoocontext.min.js"
		}, function(){
			ensure({
				js: "js/jWindow.min.js"
			}, function(){
				ensure({
					js: "js/jquery.tooltip.pack.js"
				}, function(){
					ensure({
						js: "js/pulse.jquery.js"
					}, function(){
						ensure({
							js: "js/jquery.dragsort-0.3.10.js"
						}, function(){
								ensure({
									js: "js/jquery.transform-0.7.0.min.js"
								}, function(){
									ensure({
										js: "js/system.min.js"
									}, function(){
										ensure({
											js: "js/system.my.js"
										}, function(){
											myBar.loaded('system.js');
											$('#progressBar').css('background','url(images/progressbg_green.jpg)');
											$('#loadingZone div.fblogo').animate({'left':'50px'}, 200, function(){
												$('#infoLoading').text('All scripts loaded !');
												$('#loadingZone div.welcomemsg').animate({'opacity': 1}, 200, function(){
													setTimeout(function(){
														$('#loadingZone').fadeOut('slow');
														//StartXeyes();
													}, 500);												
												});
											});
											setTimeout(function(){
											//$('#loadingZone').fadeOut();
											$('#topbar,#wallpaper').fadeIn();}, 200);
										}); 
									}); myBar.loaded('system.my.js');
								}); myBar.loaded('jquery.transform-0.7.0.min.js');
						}); myBar.loaded('jquery.dragsort-0.3.10.js');
					}); myBar.loaded('pulse.jquery.js');
				}); myBar.loaded('jquery.tooltip.pack.js');
			});	myBar.loaded('jWindow.js');
		}); myBar.loaded('jquery.jeegoocontext.min.js');
}); 


