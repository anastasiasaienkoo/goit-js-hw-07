function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputinf = document.querySelector('.input');
const buttonCre = document.querySelector('[data-create]');
const buttonDl = document.querySelector('[data-destroy]');
  


function createBoxes(amount){
  const box = document.querySelector('#boxes');
  box.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const boxcreate = document.createElement('div');
    const size = 30 + i * 10;
    boxcreate.style.width = `${size}px`;
    boxcreate.style.height = `${size}px`;
    boxcreate.style.backgroundColor = getRandomHexColor();
    box.appendChild(boxcreate);
  }
}

function deletedBoxes() {
  const boxDel = document.querySelector('#boxes');
  boxDel.innerHTML = '';
}

buttonCre.addEventListener('click', () => {
  const amount = Number(inputinf.value);
  if(amount => 1 && amount <= 100){
    createBoxes(amount);
  }
  inputinf.value = '';
});

buttonDl.addEventListener('click', deletedBoxes);