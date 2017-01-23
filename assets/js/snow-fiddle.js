"use strict";

setInterval( function() {

			var numberOfSnowflakes = document.body.children.length;

			if ( numberOfSnowflakes < 100 ) {
				createSnowflake();
			}
		}, 33  // rate of interval
);

var createSnowflake = function (snowflake, size) {
	// create and set class for snowflake div:
	var snowflake = document.createElement( "div" );
	document.body.appendChild( snowflake );
	snowflake.className = "snow";
	
	// style snowflakes:
	snowflake.style.position = "absolute";
	snowflake.style.background = "white";
	snowflake.style.borderRadius = "50%";
	 
	// size and location styling:
	var size = Math.round( Math.random() * 50 );
	 	snowflake.style.height = size + "px";
	 	snowflake.style.width = size + "px";
	 	snowflake.style.top = ( 0 - size ) + "px";
		snowflake.style.left = Math.random() * ( window.innerWidth + size ) + "px"; 

	// var moveSnowflakesInterval = setInterval (moveSnowflakes(snowflake, size), ( Math.random() * 50 + 50 ));

	var moveSnowflakes = setInterval ( function() {	
		// snowflake.style.top = ( 0 - size ) + "px";
		// snowflake.style.left = Math.random() * ( window.innerWidth + size ) + "px"; 

		// stuff that will be used throughout:
		var movementThreshold = Math.ceil( Math.random() * 15 ) + 5; 
		var leftMovement = 0;	// start point for movement to the left
		var rightMovement = 0; // start point for movement to the right

		// move snowflakes back and forth along x-axis:
		var getLeft = parseInt ( snowflake.style.left );
		var newLeft; 
			// setup for back and forth:
			if ( leftMovement === 0 ||
				leftMovement <= movementThreshold ) {
					newLeft = getLeft - Math.random() * 10 + 1;
					
					if ( leftMovement == movementThreshold ) { 
						rightMovement = 0;
						}

					leftMovement++;
			} else if ( rightMovement <= movementThreshold ) {
					newLeft = getLeft - Math.random() * 10 + 1;
					
					if ( rightMovement == movementThreshold ) {
						leftMovement = 0;
					}

					rightMovement++;
			}

		// move snowflakes along y-axis:
		var getTop = parseInt ( snowflake.style.top );
		var newTop = getTop + 10;
			// delete snowflakes after they leave the screen:
			if ( newLeft < ( 0 - size ) ||
				newTop > window.innerHeight) {
					snowflake.remove();
					window.clearInterval(moveSnowflakes);
					return;
			}

		// apply new styling to execute on movement:
		snowflake.style.left = newLeft + "px";
		snowflake.style.top = newTop + "px";
	}, ( Math.random() * 50 ) + 50 );
}


















