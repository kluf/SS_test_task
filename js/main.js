window.onload = function(){
	// (function(){
		window.STAR = {
				smallActive : "sprite-star_100_per_cent",
				bigActive : "sprite-star_big_100_per_cent",
				smallNon : "sprite-star_0_per_cent",
				bigNon : "sprite-star_big_0_per_cent",
				smallStars : document.getElementsByClassName("sprite-star_0_per_cent"),
				bigStars : document.getElementsByClassName("sprite-star_big_0_per_cent"),
				dropDowns : document.getElementsByTagName("select"),
		}
		var arr = [];
		// var lenghDD = STAR.dropDowns.length;
		for(var i = 0; i < STAR.dropDowns.length; i++){
			arr[i] = STAR.dropDowns[i].getElementsByTagName("option");
			console.log("----------------")
			for(var j = 0; j < arr[i].length; j++){
				arr[i][j].addEventListener("mouseover", function(){
					this.style.color = "#fef";
					this.style.background = "#002134";
				});
				arr[i][j].addEventListener("mouseout", function(){
					this.style.color = "#edc";
				});
			}
		}
		// function _addIndexes(element, _index){
		// 	console.log(element + " " + _index);
		// 	element.className += "ind" + _index;
		// }

		// function _addActiveState(element, _class, newClass){
		// 	element.className = element.className.replace(_class, newClass);
		// }

		// for(var i = 0; i < STAR.bigStars.length; i++){
		// 	var st = STAR.bigStars[i];
		// 	_addIndexes(st,i);
		// 	st.addEventListener("click", function(){
		// 		// _addActiveState(this,STAR.bigNon, STAR.bigActive);
		// 		// this = this.previousSibling;
		// 		// console.log(this.indexOf);
		// 		// _addActiveState(this,STAR.bigNon, STAR.bigActive);
		// 	});
		// }
		// for(var i = 0; i < STAR.smallStars.length; i++){
		// 	STAR.smallStars[i].addEventListener("click", function(){
		// 		_addActiveState(this,STAR.smallNon, STAR.smallActive);
		// 	});
		// }
	// }());
}

	// }
			

