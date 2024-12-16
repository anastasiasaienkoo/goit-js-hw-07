const infos = document.querySelector('.login-form');


infos.addEventListener("submit", (event) => {
    event.preventDefault();
    const infInpt = infos.querySelectorAll('input');
    let allFills = true;
    const formData = {
        [infos.elements.email.name]: infos.elements.email.value,
        [infos.elements.password.name]: infos.elements.password.value,
    }


    infInpt.forEach(el => {
        if (el.value.trim() === ""){
        alert('All form fields must be filled in');
        allFills = false;
        return;
        }
    });
    if(allFills){
        infos.reset();
        console.log(formData);
    }
});


