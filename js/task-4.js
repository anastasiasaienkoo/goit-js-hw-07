const infos = document.querySelector('.login-form');


infos.addEventListener("submit", (event) => {
    const infInpt = infos.querySelectorAll('input');
    event.preventDefault();
    let allFills = true;

    infInpt.forEach(el => {
        if (el.value.trim() === ""){
        alert('All form fields must be filled in');
        allFills = false;
        return;
        }
    });
    if(allFills){
        infos.submit();
    }
});


