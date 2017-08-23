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
	catContainer.innerHTML += strang;
}
var cats = [];
function executeThisCodeAfterFileLoads() {
	var data = JSON.parse(this.responseText);
	cats = data.cats;
	myRequest2.send();
}
function executeThisCodeAfterFileLoads2() {
	console.log("this", this.responseText);
	var data = JSON.parse(this.responseText);
	domString(data.dogs);
	domString(cats);
}
function executeThisCodeIfFileErrors () {
	console.log("shits broke yo");
}
//transfering data from json file to js file
var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
myRequest.addEventListener("error", executeThisCodeIfFileErrors);
myRequest.open("GET", "cats.json");
myRequest.send();

var myRequest2 = new XMLHttpRequest();
myRequest2.addEventListener("load", executeThisCodeAfterFileLoads2);
myRequest2.addEventListener("error", executeThisCodeIfFileErrors);
myRequest2.open("GET", "dogs.json");

