console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

function duckCompliment(){
	alert('Super Duck says "Your Awesome"')
}

let duck = document.querySelector('img')

duck.addEventListener('mouseover', duckCompliment)


