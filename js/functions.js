//MILESTONE 1
function numberClik() { 
    const number = this.innerText;
    const result = document.getElementById('result-display');
    if (result.innerHTML === "0") {
        result.innerHTML = number;
    } else {
        result.innerHTML += number
    }
    
}

//MILESTONE 2 
/**
 * Description  salvare l'operatore ed il numero in un arrey 
 * @returns {array} 
 */
function operationCLik() {
    console.log("operationCLik", this.innerText);
    const result = document.getElementById('result-display');
    operation[0] = result.innerHTML;
    operation[1] = this.innerText;
    result.innerHTML = 0;
    console.log(operation);
}

//MILESTONE 3 
/**
 * Description salvare il secondo operando ed effettuare il calcolo 
 * @returns {number}
 */
function calc() {
    const result = document.getElementById('result-display');   
}




//rest 
function reset () {
    const result = document.getElementById('result-display');
    result.innerHTML = "0";
}


