console.log("hello world");

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit successfully');
}



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let mouse = document.querySelector('#img-mouse')

const mouseOver = (event) => {
	event.preventDefault();

	mouse.style.opacity = 0.5;

}

const mouseOut = (event) => {
	event.preventDefault();

	mouse.style.opacity = 1.0;
}

mouse.addEventListener('mouseover', mouseOver)

mouse.addEventListener('mouseout', mouseOut )