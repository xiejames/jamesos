<div onmouseover="this.style.borderColor='#fff';" onmouseout="this.style.borderColor='transparent';" id="wdgWeather" class="widgetcontainer">
	<div class="widgettitle">
		Weather
	</div>
	<div class="weatherinfodiv">
		<span class="weathericonspan"><img alt="" src="" class="weathericon" /></span>
		<div class="cityanddate">
			<div style="overflow: hidden; white-space: nowrap" class="city"></div>
			<span>Date:&nbsp;</span><span class="date"></span>
		</div>
		<div class="wdgdots"></div>
		<div class="weatherinfo">
			<span>Condition:&nbsp;</span><span class="condition"></span><br />
			<span>Temperature:&nbsp;</span><span class="tempC"></span><br />
			<span class="humidity"></span><br />
			<span class="wind_condition"></span><br />
			<a href="#" class="notyourcity">Not your city ?</a>
		</div>
	</div>
	<div class="weatherFind">
		<a href="#" class="wback" style="float: left; margin-bottom: 5px;">< Go back</a><img id="weatherLoader" alt="" src="apps/widgets/img/loading.gif" />
		<input type="text" id="weatherCityName" /><br />
		<button id="weathersearch"><span><span>Find</span></span></button><br /><br /><br />
		<span class="getwinfo">Get weather info for your city</span>
	</div>
	<div class="weatherError">
		<span class="werrtext">Oooops, something went wrong ... No info for your city.</span><br /><br />
		<button id="wselftry" style="margin-left: 40px;"><span><span>Go to search</span></span></button>
	</div>
</div>