function changeBk(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('onclick').style.backgroundColor  = '#' + randomColor;
	document.getElementById('code').innerHTML = '#' + randomColor;
}