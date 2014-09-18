var fruit = require( "factory/fruit" );
var Ucren = require( "lib/ucren" );

var fruits = fruit.getFruitInView();

/**
 * 纰版挒妫�祴
 */

exports.check = function( knife ){
	var ret = [], index = 0;

	fruits.forEach(function( fruit ){
	    var ck = lineInEllipse(
	    	knife.slice( 0, 2 ), 
	    	knife.slice( 2, 4 ), 
	    	[ fruit.originX, fruit.originY ],
	    	fruit.radius
	    );
	    if( ck )
	        ret[ index ++ ] = fruit;
	});
	return ret;
};

function sqr(x){
	return x * x;
}

function sign(n){
	return n < 0 ? -1 : ( n > 0 ? 1 : 0 );
}

function equation12( a, b, c ){
	if(a == 0)return;

	var delta = b * b - 4 * a * c;
	if(delta == 0)
		return [ -1 * b / (2 * a), -1 * b / (2 * a) ];
	else if(delta > 0)
		return [ (-1 * b + Math.sqrt(delta)) / (2 * a),  (-1 * b - Math.sqrt(delta)) / (2 * a) ];
}

// 杩斿洖绾挎鍜屾き鍦嗙殑涓や釜浜ょ偣锛屽鏋滀笉鐩镐氦锛岃繑鍥�null
function lineXEllipse( p1, p2, c, r, e ){
	// 绾挎锛歱1, p2    鍦嗗績锛歝    鍗婂緞锛歳    绂诲績鐜囷細e
	if (r <= 0) return;
	e = e === undefined ? 1 : e;
	var t1 = r, t2 = r * e, k;

	a = sqr( t2) * sqr(p1[0] - p2[0]) + sqr(t1) * sqr(p1[1] - p2[1]);

	if (a <= 0) return;
	
	b = 2 * sqr(t2) * (p2[0] - p1[0]) * (p1[0] - c[0]) + 2 * sqr(t1) * (p2[1] - p1[1]) * (p1[1] - c[1]);
	c = sqr(t2) * sqr(p1[0] - c[0]) + sqr(t1) * sqr(p1[1] - c[1]) - sqr(t1) * sqr(t2);
	
	if (!( k = equation12(a, b, c, t1, t2) )) return;
	
	var result = [
		[ p1[0] + k[0] * (p2[0] - p1[0]), p1[1] + k[0] * (p2[1] - p1[1]) ],
		[ p1[0] + k[1] * (p2[0] - p1[0]), p1[1] + k[1] * (p2[1] - p1[1]) ]
	];
	
	if ( !( ( sign( result[0][0] - p1[0] ) * sign( result[0][0] - p2[0] ) <= 0 ) &&
		( sign( result[0][1] - p1[1] ) * sign( result[0][1] - p2[1] ) <= 0 ) ) )
		result[0] = null;

	if ( !( ( sign( result[1][0] - p1[0] ) * sign( result[1][0] - p2[0] ) <= 0 ) &&
		( sign( result[1][1] - p1[1] ) * sign( result[1][1] - p2[1] ) <= 0 ) ) )
		result[1] = null;

	return result;
}

 function lineInEllipse( p1, p2, c, r, e ){
	var t = lineXEllipse( p1, p2, c, r, e );
	return t && ( t[0] || t[1] );
}