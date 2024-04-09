//variabili globali 
const operation = [];

//indeividuiamo i numeri in pagina 
const nums = document.querySelectorAll(".number");

//creiamo ciclo for per selezionare tutti i numeri 
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    num.addEventListener("click" , numberClik); 

};

//individuare gli operatori in pagina 
const ops = document.querySelectorAll(".op-item");

//creiamo ciclo for per selezionare gli operatori 
for (let i = 0 ; i < ops.length ; i++) {
    const op = ops[i];
    op.addEventListener('click' , operationCLik );
}

//cliccando sull'uguale si effettua il calcolo 
const equal = document.querySelector(".equal");
for (let i = 0 ; i < equal.length ; i++){
    equal.addEventListener('click', calc)
}

//cliccando sul pulsante canc si resetta il calcolo 
const canc = document.querySelector(".canc");
for ( let i = 0 ; i < canc.length ; i++) {
    canc.addEventListener('click', reset);
}