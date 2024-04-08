//individuiamo il contenier del risultato dell'operazione 
const displayNum = document.querySelector("span");
console.log(displayNum);

//indeividuiamo i numeri in paagina 
const nums = document.querySelectorAll(".number");

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    num.addEventListener("click" , function() {
        displayNum.innerHTML += num.innerHTML;
    });
}


