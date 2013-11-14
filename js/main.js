window.onload = function(){
	(function(){
		var STAR = {
				smallActive : "sprite-star_100_per_cent",
				bigActive : "sprite-star_big_100_per_cent",
				smallNon : "sprite-star_0_per_cent",
				bigNon : "sprite-star_big_0_per_cent",
				smallStars : document.getElementsByClassName("sprite-star_0_per_cent"),
				bigStars : document.getElementsByClassName("sprite-star_big_0_per_cent")
		}
		function setStarActive(obj){
			var _class, _object, _newClass;
			switch(obj.typeStars){
			case "small" : _class = STAR.smallNon;
							_object = STAR.smallStars;
							_newClass = STAR.smallActive;
			break;
			case "big" : _class = STAR.bigStars;
						_object = STAR.bigStars;
						_newClass = STAR.bigNon;
			}
			setStarUnactive();
			for(var i = 0; i <= obj.counter; i++){
				var regExp = /\b_newClass\b/;
				_object[i].className = _object[i].className.replace(_class,_newClass);				
			}
		}
		function setStarUnactive () {
			var _classAct = STAR.smallActive;
			for(var i = 0; i < STAR.smallStars.length; i++){
				STAR.smallStars[i].className = STAR.smallStars[i]
													.className.replace(STAR.smallActive,STAR.smallNon);
			}
		}
		for(var i = 0; i < STAR.smallStars.length; i++){
			STAR.smallStars[i].className += " st" + i;
		}
		for(var i = 0; i < STAR.smallStars.length; i++){
			STAR.smallStars[i].addEventListener("click",function(){
				var regExp = /\bst[0-9]\b/, 
					a = (this.className.match(regExp)).toString().substring(2);
				setStarActive({counter : a, typeStars : "small"});
			});
		}

	}());
}

	// }
			

