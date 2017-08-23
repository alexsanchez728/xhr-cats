var cats = [
	{name: "fluffy", color: "green", url: "https://i.ytimg.com/vi/-OJMIqVrON0/maxresdefault.jpg"},
	{name: "Mr. Cat", color: "white", url: "https://i.pinimg.com/originals/9c/a7/80/9ca78053e139fdd84c262690a3dd3d09.jpg"},
	{name: "Mrs. Cat", color: "black", url: "http://www.lifewithcats.tv/wp-content/uploads/2015/11/Black-Cat-random-32500172-1280-1024.jpg"},
	{name: "Jiji", color: "black", url: "https://i.pinimg.com/originals/1e/03/22/1e0322c4b7f31ebd8a390ca825f6eac3.jpg"}
];
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