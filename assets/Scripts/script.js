const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});


var index = 0; 
var text = 'Hello Geeks of GeeksforGeeks'; 
var speed = 50; 

function textEffect() { 
	if (index < text.length) { 
		document.getElementById("effect") 
				.innerHTML += text.charAt(index); 
		index++; 
		setTimeout(textEffect, speed); 
	} 
}
