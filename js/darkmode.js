const listItems = document.body.getElementsByTagName('a');
const moonBtn = document.querySelector('.moon');
const footer = document.getElementById('footer');
const front = document.querySelector('.front');
const cost = document.querySelector('.price');
const details = document.querySelector('.details');
const ul = document.body.getElementsByTagName('ul');
const li = document.querySelectorAll('.l-items');
const h3 = document.body.getElementsByTagName('h3');

const moon = `<img src="svg/func/moon.svg">`;
const sun = `<img src="svg/func/sun.svg">`;

let dark = false;

let getDarkMode = () => {
	moonBtn.innerHTML = (dark) ? moon : sun;
	dark = !dark;
	footer.classList.toggle('dark-background');
	footer.classList.toggle('dark-font');
	document.body.classList.toggle('dark-wallpaper');

	for (let i = 0; i < listItems.length; i++) {
		listItems[i].classList.toggle('dark-font');
	}
	for (let i = 0; i < ul.length; i++) {
		ul[i].classList.toggle('dark-ul');
	}
	for (let i = 0; i < li.length; i++) {
		li[i].classList.toggle('dark-li');
	}
	for (let i = 0; i < h3.length; i++) {
		h3[i].classList.toggle('dark-font');
	}

	cost.classList.toggle('light-font');
	details.classList.toggle('dark');
}

moonBtn.addEventListener('click', getDarkMode);
