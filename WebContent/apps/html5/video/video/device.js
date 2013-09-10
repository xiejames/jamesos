// Cookie handling generously provided by: http://quirksmode.org/js/cookies.html

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

if (!readCookie('screensize')) {
    var screensize = screen.width + 'x' + screen.height;
    
    // Send screensize to device.php
    var url = 'http://people.opera.com/danield/device/device.php?screensize=' + screensize;
    if (window.XMLHttpRequest) {
        req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.send(null);
    } else if (window.ActiveXObject) {
        req = new ActiveXObject("Microsoft.XMLHTTP");
        if (req) {
            req.open("GET", url, true);
            req.send();
        }
    }

    createCookie('screensize', screensize, 0);
}
