console.log("hello world");

//setp one: selecting an element
let form = document.querySelector('#contact');

//step two: write a function
function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('It submit successfully!');
}



// step 3: combine them with eventlistener
form.addEventListener('submit', handleSubmit);

// mouseover event focusing on image

let mouse = document.querySelector('#img-mouse')

// const mouseOverCompliment = () => {
// 	alert(' Lokk it is a Duck!')
// }

// mouse.addEventListener('mouseover', mouseOverCompliment)

// write a function to alert with a message
const mouseOver = (event) => {
	event.preventDefault();
	alert('It is a Duck!')
	mouse.style.opacity = 0.5;

}

const mouseOut = (event) => {
	event.preventDefault();

	mouse.style.opacity = 1.0;
}


mouse.addEventListener('mouseover', mouseOver)

mouse.addEventListener('mouseout', mouseOut )