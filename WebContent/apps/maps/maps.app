<div id='map_canvas_earth' class="guishmap"></div>
<div id='map_canvas_moon' class="guishmap" style='display: none;'></div>
<div id='map_canvas_mars' class="guishmap" style='display: none;'></div>
<div id='map_canvas_sky' class="guishmap" style='display: none;'></div>

<select class="guishmapselect">
	<option onclick="$('.guishmap').fadeOut('slow');$('#map_canvas_earth').fadeIn();gmapRefresh();">Earth</option>
	<option onclick="$('.guishmap').fadeOut('slow');$('#map_canvas_moon').fadeIn();gmapRefresh();">Moon</option>
	<option onclick="$('.guishmap').fadeOut('slow');$('#map_canvas_mars').fadeIn();gmapRefresh();">Mars</option>
	<option onclick="$('.guishmap').fadeOut('slow');$('#map_canvas_sky').fadeIn();gmapRefresh();">Sky</option>
</select>
