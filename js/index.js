let elModal = document.querySelector('#modal');
let payBtn = document.querySelector('#pay');
let shoesModeal = document.querySelector('#shoesmodal');
let cardbtn = document.querySelector('#addbtn')

payBtn.addEventListener('click', () =>  {
    
    elModal.classList.toggle("active");
})

cardbtn.addEventListener('click', () => {

    shoesModeal.classList.toggle("activ");
})

