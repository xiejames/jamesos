function _guishMapsStart(){
	CreateElement('guishmaps', 'main', 'Atlas');			
	$('#guishmaps').jWindow({
		resizable: true,
		width: 800,
		height: 600,
		minimizable: true,
		theme: 'jwindow',
		onResizeEnd: gmapRefresh,
		onStart: gmapRefresh
	});
	$('#guishmaps div.container').load('apps/maps/maps.app', function(){
		gmapinitialize();
	});
	
	ShowElement('guishmaps', 'Google maps loaded!', 'Have fun!');
	setTimeout(function(){gmapRefresh();},1800);
}
var guishmapObject = null; var guishmapMoonObject = null; var guishmapMarsObject = null; var guishmapSkyObject = null;
function gmapRefresh(){
	guishmapObject.checkResize();
	guishmapMoonObject.checkResize();
	guishmapMarsObject.checkResize();
	guishmapSkyObject.checkResize();
}
function gmapinitialize() {
	if (GBrowserIsCompatible()) {
	  var mapOptions = {
		googleBarOptions : {
		  style : "new"
		}
	  }
	  
	  // earth
	  guishmapObject = new GMap2(document.getElementById("map_canvas_earth"), mapOptions);
	  guishmapObject.setCenter(new GLatLng(44.833553, 20.427003), 8, G_SATELLITE_MAP);
	  guishmapObject.setUIToDefault();
	  guishmapObject.enableGoogleBar();
	  
	  // moon
	  guishmapMoonObject = new GMap2(document.getElementById("map_canvas_moon"), {
        mapTypes : G_MOON_MAP_TYPES 
      });
	  guishmapMoonObject.setCenter(new GLatLng(0, 0), 4);
	  guishmapMoonObject.addControl(new GLargeMapControl());
	  guishmapMoonObject.addControl(new GMapTypeControl());
	  
	  // mars
	  guishmapMarsObject = new GMap2(document.getElementById("map_canvas_mars"), {
        mapTypes : G_MARS_MAP_TYPES 
      });
      guishmapMarsObject.setCenter(new GLatLng(0, 0), 5);
      guishmapMarsObject.addControl(new GLargeMapControl());
      guishmapMarsObject.addControl(new GMapTypeControl());
	  
	  // sky
	  guishmapSkyObject = new GMap2(document.getElementById("map_canvas_sky"), {
        mapTypes : G_SKY_MAP_TYPES
        });
      guishmapSkyObject.setCenter(new GLatLng(0, 0), 2);
      guishmapSkyObject.addControl(new GLargeMapControl());
      guishmapSkyObject.addControl(new GMapTypeControl());
	}
}
