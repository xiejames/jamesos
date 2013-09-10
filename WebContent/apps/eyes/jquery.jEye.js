/*
 * jEye jQuery plugin
 *
 * Copyright (c) 2009 Giovanni Casassa (senamion.com - senamion.it)
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * http://www.senamion.com
 *
 */

jQuery.fn.jEye = function(o) {

	o = jQuery.extend({
		xEye: 70,
		yEye: 10,
		wEye: 44,
		hEye: 60,
		wPupil: 14,
		hPupil: 14,
		eyes: 2
	}, o);

	return this.each(function(i) {
		var el = $(this);
		var xPupil = Math.floor((o.wEye - o.wPupil) / 2);
		var yPupil = Math.floor((o.hEye - o.hPupil) / 2);
		var radius = Math.floor((o.wEye - o.wPupil) / 2) - 1;
		var	position = el.position();
		var xEl = position.left;
		var yEl = position.top;

		el.append("<div id='occhio" + i + "' style='position: absolute; background: transparent url(apps/eyes/img/occhiob.png) center center no-repeat; top: " + o.yEye + "px; left: " + o.xEye + "px; width: " + o.wEye + "px; height: " + o.hEye + "px;' >" +
			"<img id='pupilla" + i + "' src='apps/eyes/img/pupilla.png' style='position: relative; top:" + yPupil + "px; left:" + xPupil + "px; width: " + o.wPupil + "px; height:" + o.hPupil + "px' />" + 
			"</div>");
		if (o.eyes == 2) {
			el.append("<div id='occhiob" + i + "' style='position: absolute; background: transparent url(apps/eyes/img/occhiob.png) center center no-repeat; top: " + o.yEye + "px; left: " + (o.xEye+o.wEye) + "px; width: " + o.wEye + "px; height: " + o.hEye + "px;' >" +
				"<img id='pupillab" + i + "' src='apps/eyes/img/pupilla.png' style='position: relative; top:" + yPupil + "px; left:" + xPupil + "px; width: " + o.wPupil + "px; height:" + o.hPupil + "px' />" + 
				"</div>");
			}

		el.mousemove(function(kmouse){
			var r = 12;
			var ym = kmouse.pageY - 20 - yEl;
			var xm = kmouse.pageX - xEl;
			var xo = $('body').width() - 141;
			var yo = $('#wdgEyes').parent().position().top + 55;
			ang = Math.atan((yo - ym) / (xm - xo));
			if (xo > xm)
				ang += Math.PI;
			$('#pupilla'+i).css("top", (radius - Math.floor(Math.sin(ang) * r) + 10)+"px").css("left", (Math.floor(Math.cos(ang) * r) + radius) + "px");
			
			if (o.eyes == 2) {
				xm -= o.wEye;
				ang = Math.atan((yo - ym) / (xm - xo));
				if (xo > xm)
					ang += Math.PI;
				$('#pupillab'+i).css("top", (radius - Math.floor(Math.sin(ang) * r) + 10)+"px").css("left", ((Math.floor(Math.cos(ang) * r) + radius) + 2) + "px");
				}
		});
	});
};