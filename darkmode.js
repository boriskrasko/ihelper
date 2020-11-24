const listItems = document.body.getElementsByTagName('a');
const moonBtn = document.querySelector('.moon');
const footer = document.querySelector('.footer');
const front = document.querySelector('.front');
const cost = document.querySelector('.price');
const details = document.querySelector('.details');
const ul = document.body.getElementsByTagName('ul');
const li = document.querySelectorAll('.l-items');
let dark = false;


let getDarkMode = () => {
	document.body.classList.toggle('dark-wallpaper');
  cost.classList.toggle('light-font');
	footer.classList.toggle('dark-background');
	footer.classList.toggle('dark-font');
	details.classList.toggle('dark');

	for (let i = 0; i < listItems.length; i++) {
		listItems[i].classList.toggle('dark-font');
	}
	for (let i = 0; i < ul.length; i++) {
		ul[i].classList.toggle('dark-ul');
	}
	for (let i = 0; i < li.length; i++) {
		li[i].classList.toggle('dark-li');
	}
	dark = !dark;
}

moonBtn.addEventListener('click', getDarkMode);
