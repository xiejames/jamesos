var timeline = require( "timeline" );
var tools = require( "tools" );
var sence = require( "sence" );
var Ucren = require( "lib/ucren" );
var buzz = require( "lib/buzz" );
var control = require( "control" );
var csl = require( "object/console" );
var message = require( "message" );
var state = require( "state" );

var game = require( "game" );

var collide = require( "collide" );

var setTimeout = timeline.setTimeout.bind( timeline );

var log = function(){
    var time = 1e3, add = 300, fn;
    fn = function( text ){
        setTimeout( function(){ csl.log( text ); }, time );
        time += add;
    };
    fn.clear = function(){
        setTimeout( csl.clear.bind( csl ), time );
        time += add;
    };
    return fn;
}();

exports.start = function(){

    [ timeline, sence, control ].invoke( "init" );

    log( "姝ｅ湪鍔犺浇榧犳爣鎺у埗鑴氭湰" );
    log( "姝ｅ湪鍔犺浇鍥惧儚璧勬簮" );
	log( "姝ｅ湪鍔犺浇娓告垙鑴氭湰" );
    log( "姝ｅ湪鍔犺浇鍓ф儏" );
	log( "姝ｅ湪鍚姩娓告垙..." );
    log.clear();

    setTimeout( sence.switchSence.saturate( sence, "home-menu" ), 3000 );
};

message.addEventListener("slice", function( knife ){
    var fruits = collide.check( knife ), angle;
    if( fruits.length )
        angle = tools.getAngleByRadian( tools.pointToRadian( knife.slice(0, 2), knife.slice(2, 4) ) ),
        fruits.forEach(function( fruit ){
           message.postMessage( fruit, angle, "slice.at" );
        });
});

message.addEventListener("slice.at", function( fruit, angle ){

    if( state( "sence-state" ).isnot( "ready" ) )
        return ;

    if( state( "sence-name" ).is( "game-body" ) ){
        game.sliceAt( fruit, angle );
        return ;
    }

    if( state( "sence-name" ).is( "home-menu" ) ){
        fruit.broken( angle );
        if( fruit.isHomeMenu )
            switch( 1 ){
                case fruit.isDojoIcon:
                    sence.switchSence( "dojo-body" ); break;
                case fruit.isNewGameIcon:
                    sence.switchSence( "game-body" ); break;
                case fruit.isQuitIcon:
                    sence.switchSence( "quit-body" ); break;
            }
        return ;
    }
});

var tip = "";

if( !Ucren.isChrome )
    tip = "<span class='b'>Google Chrome</span> ";

if( !buzz.isSupported() )
    tip = tip.replace( "$", "鎮ㄧ殑娴忚鍣ㄤ笉鏀寔 &lt;audio&gt 鎾斁澹版晥锛屼笖" );

tip = tip.replace( "$", "" );

Ucren.Element( "browser" ).html( tip );