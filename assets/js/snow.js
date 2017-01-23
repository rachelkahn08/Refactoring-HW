
var snowFallInterval = function () {
		var numberOfSnowflakes = document.body.children.length;

		if ( numberOfSnowflakes < 100 ) {

			  createSnowflakes();

		}
	}

	
setInterval( snowFallInterval, 33);

var letItSnow = function() {
	setInterval( snowFallInterval, 33 );
}

var createSnowflakes = function() {

	// CREATE AND STYLE SNOWFLAKES:
		// create snowflakes:
	var snowflake = document.createElement( "div" );
	document.body.appendChild( snowflake );
	snowflake.className = "snow";
	
		// style snowflakes:
	snowflake.style.position = "absolute";
	snowflake.style.borderRadius = "50%";
	snowflake.style.background = "white";

		// size and location styling:
	var size = Math.round( Math.random() * 50 );
		snowflake.style.width = size + "px";
		snowflake.style.height = size + "px";
		snowflake.style.top = ( 0 - size ) + "px";
		snowflake.style.left = Math.random() * ( window.innerWidth + size ) + "px";

	// SNOWFLAKE MOVEMENT:
		// setting up initial conditions for movement:
	var leftMovement = 0;
	var rightMovement = 0;
	var movementThreshold = Math.ceil( Math.random() * 15 ) + 5;

		// movement function:
	var moveSnowflakes = setInterval( function() {
		
		// x-axis movement:
		var getLeft = parseInt( snowflake.style.left );
		var newLeft;
			if ( leftMovement === 0 ||
				leftMovement <= movementThreshold ) {
					newLeft = getLeft - Math.random() * 10 + 1;

						if ( leftMovement == movementThreshold ) {
							rightMovement = 0;
						}

					leftMovement++;

			} else if ( rightMovement <= movementThreshold ) {
					newLeft = getLeft + Math.random() * 10 + 1;

						if ( rightMovement == movementThreshold ) {
						 leftMovement = 0;
						}

					rightMovement++;
			}

		// y-axis movement:
		var getTop = parseInt( snowflake.style.top );
		var newTop = getTop + 10;
			// delete snowflakes that are past the window edge:
			if ( newLeft < ( 0 - size ) ||
					newTop > window.innerHeight ) {
					snowflake.remove();
					window.clearInterval ( moveSnowflakes );
					return;
			}

			snowflake.style.left = newLeft + "px";
			snowflake.style.top = newTop + "px";

	}, ( Math.random() * 50 ) + 50 );
}



// ALTERNATE: KEYBOARD

// I want to be able to make this so that when you click the keyboard, the entire screen clears except for one new snowflake, then all the snow starts up again after a delay. But that's super complicated and what we got with the original file just broke it, so I am not gonna include that except to reference it here. 

// window.addEventListener("keypress", function() {
// 	clearInterval(snowFallInterval);
// 	var removeThese = document.querySelector( ".snow" )
// 	i = 0;
// 	while (i < (document.body.children.length + 1)) {
// 	document.body.removeChild(removeThese);
// 	i++;
// 	}
// });
