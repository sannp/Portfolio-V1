var pad = document.querySelector('#pad');

makeGrid(16);

function makeGrid(size){
pad.setAttribute("style", `grid-template: repeat(${size},1fr)/repeat(${size},1fr)`);
for (var i = 1; i <= (size * size); i++) {
	const box = document.createElement('div');
	box.classList.add('box');
	box.style.backgroundColor = 'white';
	box.onmouseover = function(){
		box.style.backgroundColor = 'black';
	}
	pad.appendChild(box);
}
}
let boxes = document.querySelectorAll(".box");
var btn = document.querySelector('button');
btn.addEventListener('click', function(){
  boxes.forEach(bx => {
  	bx.setAttribute("style","background : white");
  })
});