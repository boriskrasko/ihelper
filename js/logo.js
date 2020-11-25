let grid = document.querySelector('.grid');

for (let i = 0; i < 77; i++) {
  let box = document.createElement('span');
  box.classList.add('box');
  grid.appendChild(box);
}

let box = document.querySelectorAll('.box');
let numberBlueBoxOfGrid = [1, 3, 5, 7, 9, 12, 14, 15, 18, 24, 27, 28, 31, 35, 37, 40, 42, 43, 46, 48, 52, 57, 59, 61, 63, 66, 70, 72, 75, 76];

for (let i = 0; i < numberBlueBoxOfGrid.length; i++) {
  box[numberBlueBoxOfGrid[i]].classList.add('blue');
}
