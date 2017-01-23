var creator = setInterval( function() {

	var howMany = document.body.children.length;

	if ( howMany < 100 ) {

		  create();

	}

}, 33 );

// //ALTERNATE: KEYBOARD
// window.addEventListener("keyup", function(e){
// 	//******** ON DEMAND PARTICLES ***********
// 		e.preventDefault();
// 		create();
// });

// document.body.style.background = "black";
var create = function() {
	var snow = document.createElement("div");
	document.body.appendChild( snow);
	snow.style.position = 'absolute';


	var size = Math.round( Math.random() * 50 );
	snow.style.width = size + "px";
	
	snow.style.top = ( 0 - size ) + "px";
	snow.style.borderRadius = '50%';
	snow.style.left = Math.random() * ( window.innerWidth + size ) + "px";
	snow.style.background = 'white';
	snow.style.height = size + "px";






	//setup stuff for movement
	var lCount = 0;
	var rCount = 0;
	var movementThreshold = Math.ceil( Math.random() * 15 )+5;

	var makeItSnow = setInterval(function(){
		var l = parseInt( snow.style.left );
		var t = parseInt(snow.style.top);
		var newT = t + 10;
		var newL;
		if(lCount === 0 ||
			lCount <= movementThreshold){
			newL = l - Math.random()*10 + 1;
					if(lCount == movementThreshold){
						rCount = 0;
					}
					lCount++;
					//l hits, set r to 0 and resatrt count
		} else if(rCount <= movementThreshold){
newL = l + Math.random()*10 + 1;
		if(rCount == movementThreshold){
		 lCount = 0;
		}
		rCount++;
		}

		if(newL < (0 - size) ||
				newT > window.innerHeight){
				//has gone off screen, remove snow
				snow.remove();
				window.clearInterval(makeItSnow);
				return;
		}

		snow.style.left = newL + 'px';
		snow.style.top = newT + 'px';

	}, ( Math.random() * 50 ) + 50 );





}


window.addEventListener( "keyup", function(e){
	if ( e.keyCode === 32 ) {
	  window.clearInterval(creator);
	}
});
