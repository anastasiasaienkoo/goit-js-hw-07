function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputinf = document.querySelector('.input');
const buttonCre = document.querySelector('[data-create]');
const buttonDl = document.querySelector('[data-destroy]');
const box = document.querySelector('#boxes');




function createBoxes(amount){
  box.innerHTML = '';
  const boxFragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const boxcreate = document.createElement('div');
    boxcreate.classList.add("box");
    const size = 30 + i * 10;
    boxcreate.style.width = `${size}px`;
    boxcreate.style.height = `${size}px`;
    boxcreate.style.backgroundColor = getRandomHexColor();
    boxFragment.appendChild(boxcreate);
  }
  box.append(boxFragment);
  inputinf.value = "";
  }




function deletedBoxes() {
  boxDel.innerHTML = '';
}

buttonCre.addEventListener('click', () => {
  const amount = Number(inputinf.value);
  if(amount >= 1 && amount <= 100){
    createBoxes(amount);
  }
});

buttonDl.addEventListener('click', deletedBoxes);