const inf = document.querySelector('#name-input');
const infSpan = document.querySelector('#name-output');

inf.addEventListener('input',(event) => {
infSpan.textContent = event.target.value.trim();
if(inf.value === ''){
infSpan.textContent = "Anonymuos";
}
});