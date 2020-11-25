const zoomIn = document.querySelector('.in');
let windowIn = `<img src="svg/func/add.svg">`
let windowOut = `<img src="svg/func/line.svg">`
let zoom = false;

zoomIn.addEventListener('click', () => {
	document.body.classList.toggle('zoom-in');
	zoom = !zoom;
	zoomIn.innerHTML = (zoom) ? windowOut :  windowIn;
});
