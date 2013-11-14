window.onload = function(){
	// (function(){

		var STAR = {
			smallActive : "sprite-star_100_per_cent",
			bigActive : "sprite-star_big_100_per_cent",
			smallNon : "sprite-star_0_per_cent",
			bigNon : "sprite-star_big_0_per_cent",
			smallStars : document.getElementsByClassName("sprite-star_0_per_cent"),
			bigStars : document.getElementsByClassName("sprite-star_big_0_per_cent"),
			prevSibl : ""
		}
		
		function addActiveState(element, oldClass, newClass){
			element.className = element.className.replace(oldClass, newClass);
			STAR.prevSibl = element.previousSibling;
			while(STAR.prevSibl){
				if(STAR.prevSibl.nodeType == 1){
					STAR.prevSibl.className = STAR.prevSibl.className.replace(oldClass, newClass);
				}
				STAR.prevSibl = STAR.prevSibl.previousSibling;
			}
		}

		for(var i = 0; i < STAR.bigStars.length; i++){
			STAR.bigStars[i].addEventListener("click", function(event){
				addActiveState(this, STAR.bigNon, STAR.bigActive);
			});
		}
		for(var i = 0; i < STAR.smallStars.length; i++){
			STAR.smallStars[i].addEventListener("click", function(event){
				addActiveState(this, STAR.smallNon, STAR.smallActive);
			});
		}
	// }());
}

			

