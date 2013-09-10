
$(document).ready(function () {
	//icon action
	var b = $(".icon");
	IconsLineUp('left');
	b.slideDown(1500);
	$('.icon').bind('click', function (a) {
		if ($('#startmenu').is(':visible')) $('#startmenu').toggle()
	}).bind('mousedown', function (a) {
		if ($('#startmenu').is(':visible')) $('#startmenu').toggle()
	}).bind('dragstart', function (a) {
		return $(this).css('opacity', .5).clone().addClass('active').insertAfter(this)
	}).bind('drag', function (a) {
		E = $(a.dragProxy);
		E.css({
			top: a.offsetY - E.parent().position().top,
			left: a.offsetX - E.parent().position().left
		});
		if (E.position().top < 0) E.css({
			top: 0
		});
		if (E.position().top > E.parent().height() - E.height()) E.css({
			top: E.parent().height() - E.height()
		});
		if (E.position().left < 0) E.css({
			left: 0
		});
		if (E.position().left > E.parent().width() - E.width()) E.css({
			left: E.parent().width() - E.width()
		})
	}).bind('dragend', function (a) {
		E = $(a.dragProxy);
		$(this).animate({
			top: E.position().top,
			left: E.position().left,
			opacity: 1
		});
		E.remove()
	});
	//tooltip
	$('.icon,#navigation div,.leftpane img,#guishSpecials .go3d, #wshaddowon').tooltip({
		track: true,
		delay: 1,
		showURL: false,
		showBody: " - ",
		fade: 250
	});
	//pulse icon text
	$('.icon').hover(
		function () {
			$(this).find('.name').pulse({
				speed: 600,
				backgroundColors: ['#fff', '#444']
			})
		},	function () {
				$(this).find('.name').recover()
		}
	);
	// TODO
	$('#loading').jWindow({
		width: 200,
		height: 30,
		draggable: false,
		resizable: false
	}).css({
		position: 'absolute',
		'left': '',
		'top': '',
		'right': '0px',
		'bottom': '30px',
		'display': 'none',
		'z-index': 6999
	}).find('div.container').css({
		'overflow': 'hidden',
		'text-align': 'center'
	});
	
	//main 
	$('#main').mousedown(function () {
		if ($('#startmenu').is(':visible')) $('#startmenu').toggle()
	});
		//JeeGoo context
	$('#main').jeegoocontext('menu_1', {
		widthOverflowOffset: 0,
		heightOverflowOffset: 3,
		submenuLeftOffset: -4,
		submenuTopOffset: -5,
		onSelect: function (e, a) {
			switch ($(this).attr('id')) {
			case 'align_right':
				IconsLineUp('right');
				break;
			case 'align_left':
				IconsLineUp('left');
				break;
			case 'style_italic':
				$('.icon').css('fontStyle', 'italic');
				break;
			case 'style_normal':
				$('.icon').css('fontStyle', 'normal');
				break;
			case 'style_arial':
				$('.icon').css({
					'fontFamily':
					'Arial',
					'fontSize': '100%'
				});
				break;
			case 'style_verdana':
				$('.icon').css({
					'fontFamily':
					'Verdana',
					'fontSize': '80%'
				});
				break;
			case 'style_courier':
				$('.icon').css({
					'fontFamily':
					'Courier New',
					'fontSize': '80%'
				});
				break;
			case 'style_tahoma':
				$('.icon').css('fontFamily', 'Tahoma');
				break;
			case 'style_color':
				StartFontColor();
				break;
			case 'system_settings':
				SetUpDesktop();
				break;
			case 'wshaddowon':
				$('.jwindow').css({
					'-moz-box-shadow':
					'0 0 16px #000000',
					'-webkit-box-shadow': '0 0 16px #000000',
					'box-shadow': '0 0 16px #000000'
				});
				$.fn.jWindow.shadow = true;
				break;
			case 'wshaddowoff':
				$('.jwindow').css({
					'-moz-box-shadow':
					'none',
					'-webkit-box-shadow': 'none',
					'box-shadow': 'none'
				});
				$.fn.jWindow.shadow = false;
				break;
			default:
				return false
			}
		}
	});

//TODO
	$('.leftpane img').hover(function () {
		$(this).css({
			'-moz-box-shadow':
			'0 0 8px #fff',
			'-webkit-box-shadow': '0 0 8px #fff',
			'box-shadow': '0 0 8px #fff',
			backgroundColor: '#fff'
		})
	},
	function () {
		$(this).css({
			'-moz-box-shadow': 'none',
			'-webkit-box-shadow': 'none',
			'box-shadow': 'none',
			backgroundColor: ''
		})
	});
	
	//start menu : left top
	$('#startmenu div.leftside a').hover(function () {
		$(this).find('img').pulse({
			speed: 300,
			opacityRange: [1, 0.4]
		})
	},
	function () {
		$(this).find('img').recover()
	}).bind('click', function () {
		$('#startmenu div.leftside a').removeClass('active');
		$(this).addClass('active')
	});
	$('.rscontainer a').hover(function () {
		$(this).stop().animate({
			letterSpacing: 3,
			fontSize: '8pt'
		},
		100).pulse({
			speed: 300,
			opacityRange: [1, 0.4]
		})
	},
	function () {
		$(this).recover();
		$(this).stop().animate({
			letterSpacing: 0,
			fontSize: '10pt'
		},
		100)
	});
		//TODO
	$('.winicon').live('mouseover', function () {
		$('.name', this).pulse({
			speed: 400,
			backgroundColors: ['#fff', '#aaa']
		})
	});
	$('.winicon').live('mouseout', function () {
		$('.name', this).recover()
	});

//TODO
	$(window).resize(function () {
		$('#topbarcont').css({
			'width': $(window).width() - (290 + $('#clock').width())
		})
	});
	$('#topbarcont').css({
		'width': $(window).width() - (290 + $('#clock').width())
	});
	
	jQuery.each(jQuery.browser, function (i) {
		if ($.browser.msie) {}
	});
/*
	$('#guishSpecials').bind('mouseleave', function () {
		$(this).animate({
			bottom: -417
		})
	});
	$('#guishSpecials .go3d').click(function () {
		ensure({
			js: "js/jquery.roundabout-1.0.js"
		},
		function () {
			if ($('#main div.jwindow').size() < 3) {
				$('#error3D').animate({
					left: -20
				},
				function () {
					var a = setTimeout(function () {
						$('#error3D').animate({
							left: -260
						});
						a = null
					},
					2000)
				})
			} else $('#guishSpecials').animate({
				bottom: 0
			})
		})
	});
	$('#guishSpecials .go2d').click(function () {
		Unroundabout();
		$(this).hide();
		$('#guishSpecials .go3d').show();
		$('#guishSpecials').bind('mouseenter', function () {
			$(this).animate({
				bottom: -417
			})
		})
	});
	$('#guishSpecials .threeDoption').click(function () {
		var a = $(this).attr('rel').split(',');
		$('#guishSpecials').animate({
			bottom: -417
		}).unbind('mouseleave');
		$('#guishSpecials .go3d').hide();
		$('#guishSpecials .go2d').show();
		WindowsRoundabout(a[0], a[1])
	}).hover(function () {
		$(this).pulse({
			speed: 400,
			backgroundColors: ['#fff', '#aaa'],
			textColors: ['#ff0000', '#4859ff', '#4859ff', '#73ff48', '#fff']
		})
	},
	function () {
		$(this).recover()
	});
	*/
	//widget drag and sort
	$("#widgetscontainer").dragsort({
		dragSelector: "li",
		dragSelectorExclude: "input, button, a[href], div.titletext, span.wdgclose",
		dragBetween: true,
		placeHolderTemplate: "<li class='placeHolder'><div></div></li>"
	});
	//LoadWallpaper("images/wallpapers/jDesktop.1.0.jpg", "#000000", "right bottom", "no-repeat")
});


//navigation at the bottom center like iMAC
$(function () {
	var d = 300;
	$('#navigation div.title').each(function () {
		$(this).stop().animate({
			'bottom': '-80px'
		},
		d += 350)
	});
	$('#navigation div.title').hover(function () {
		$(this).stop().animate({
			'bottom': '0px'
		},
		400);
		$('div', this).stop().animate({
			opacity: 0
		});
		$('img', this).stop().animate({
			opacity: 1
		})
	},
	function () {
		$(this).stop().animate({
			'bottom': '-80px'
		},
		400);
		$('div', this).stop().animate({
			opacity: 1
		});
		$('img', this).stop().stop().animate({
			opacity: 0
		})
	})
});

(function ($) {
	var c = [];
	$.preLoadImages = function () {
		var a = arguments.length;
		for (var i = a; i--;) {
			var b = document.createElement('img');
			b.src = arguments[i];
			c.push(b)
		}
	}
})(jQuery);
(function ($) {
	$('#main').css({'background-image': 'none'});
	$('#main').css({'background-color': '#639cd4'});
})(jQuery);

