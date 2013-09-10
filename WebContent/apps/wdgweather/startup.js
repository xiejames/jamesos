/*
 *    google js api key
 *    ABQIAAAAAuqJW0mgltvWJDwDFdw4xxSQ9fGo64ghyYiZXTYQSScgk-UWGxQ6vA4b2PJVQa0f3FABqKlO_zpcug
 */


function _weatherWidgetStart(){
	$('#widgetscontainer').append('<li style="text-align: centar;"></li>');
	$('#widgetscontainer li:last').load("apps/wdgweather/weather.app", function(){
		$('#wdgWeather a.notyourcity').click(function(){
			$('#wdgWeather div.weatherinfodiv').slideUp('slow', function(){
				$('#wdgWeather div.weatherFind').slideDown('slow');
			});
			$('#wdgWeather #weatherCityName').focus(); 
		});
		$('#wdgWeather a.wback').click(function(){
			$('#wdgWeather div.weatherFind').slideUp('slow', function(){
				$('#wdgWeather div.weatherinfodiv').slideDown('slow');
			});		
		});
		$('#wdgWeather').append('<span class="wdgclose"></span>').hover(function(){
			$(this).find('span.wdgclose').stop().animate({opacity: 1});
		}, function(){
			$(this).find('span.wdgclose').stop().animate({opacity: 0});
		});
		$('#wdgWeather').find('span.wdgclose').hover(function(){
			$(this).css('background','url(apps/widgets/img/wdgclosered.gif');
		}, function(){
			$(this).css('background','url(apps/widgets/img/wdgclose.gif');
		}).click(function(){
			$('#wdgWeather').animate({opacity: 0, scale:'0.1',rotate:'-350deg'},600, function(){
			$('#wdgWeather').parent().remove();
		});
		});
		$('#wdgWeather #weathersearch').click(function(){
			$('#weatherLoader').show();
			GetWeatherForCity($('#wdgWeather div.weatherFind input').val());
		});
		$('#wdgWeather #wselftry').click(function(){
			$('#wdgWeather div.weatherError').stop().slideUp('slow', function(){
				$('#wdgWeather div.weatherFind').stop().slideDown('slow');
			});
			$('#wdgWeather #weatherCityName').focus(); 
		});
	
		try{
			GetWeatherForCity(google.loader.ClientLocation.address.city);
		} catch (e) {
			$('#weatherLoader').hide();
			$('#wdgWeather div.weatherinfodiv, div.weatherFind').slideUp('slow', function(){
				$('#wdgWeather div.weatherError').slideDown('slow');
			});
		}
	});	
}	

function childData(selector, arg)
{
	return selector.find(arg).attr('data');
}	
	
function _getWeather(city){
	
}
function GetWeatherForCity(city){
	try {
		$.ajax({
			type: "GET",
			data:"where="+city,
			url: "apps/wdgweather/weather.php",//URL of our php page
			dataType: "xml",
			success: function(data){

				forecast	= $(data).find('forecast_information');
				cCondition	= $(data).find('current_conditions');

				city	= childData(forecast, 'city');
				if(city!=undefined)
				{
					date	= childData(forecast, 'forecast_date');
					condition	= childData(cCondition, 'condition');
					tempC	= childData(cCondition, 'temp_c');
					humidity	= childData(cCondition, 'humidity');
					windcondition = childData(cCondition, 'wind_condition');
					icon	= childData(cCondition, 'icon');
					$('#wdgWeather .city').text(city).attr('title',city).tooltip({
						track: true,
						delay: 1,
						showURL: false,
						showBody: " - ",
						fade: 250
					});
					$('#wdgWeather .date').text(date);
					$('#wdgWeather .condition').text(condition);
					$('#wdgWeather .tempC').text(tempC+' C');
					$('#wdgWeather .humidity').text(humidity);
					$('#wdgWeather .wind_condition').text(windcondition);
					$('#wdgWeather .weathericon').attr({'src':'http://www.google.com'+icon});					
					$('#weatherLoader').hide();
					$('#wdgWeather div.weatherFind').slideUp('slow', function(){
						$('#wdgWeather div.weatherinfodiv').slideDown('slow');
					});					
				}
				else
				{
					$('#weatherLoader').hide();
					$('#wdgWeather div.weatherinfodiv, div.weatherFind').slideUp('slow', function(){
						$('#wdgWeather div.weatherError').slideDown('slow');
					});
				}
			}
		});
	} catch (e) {
		$('#weatherLoader').hide();
		$('#wdgWeather div.weatherinfodiv, div.weatherFind').slideUp('slow', function(){
			$('#wdgWeather div.weatherError').slideDown('slow');
		});
	}
	ShowElement('wdgWeather', 'Weather widget loaded!', 'Have fun!');
}
