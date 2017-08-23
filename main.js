function domString(catCrap) {
	var domString = "";
	for (var i = 0; i < catCrap.length; i++){
		domString += 	`<div class="cat">`
		domString += 		`<img src= ${catCrap[i].url}>`
		domString += 		`<h3>${catCrap[i].name}</h3>`
		domString += 		`<h5>${catCrap[i].color}</h5>`
		domString += 	`</div>`
	}
		writeToDom(domString);
}
function writeToDom(strang) {
	var catContainer = document.getElementById("kat-koral");
	catContainer.innerHTML = strang;
}
domString(cats);