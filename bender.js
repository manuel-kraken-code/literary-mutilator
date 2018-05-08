function addImage(){
	var src = document.getElementById("bender");
	var img = document.createElement("img");
	img.src = "img/bender.jpg";
	src.appendChild(img);
}
function changeFont(){
	document.getElementById("font").style.fontFamily = "sans-serif";
}

function addImage2() {
	document.getElementById("farnsworth").innerHTML = "<img src='img/hqdefault.jpg'/>";
}

//<h2>I'll make my own theme park! With Black Jack </h2>