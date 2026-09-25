let operator = "+";
let rightOperand = 0;
let leftOperand = 0;

function add(leftOperand,rightOperand) {

    return leftOperand + rightOperand;
}

function subtract(leftOperand,rightOperand) {

    return leftOperand - rightOperand;
}

function multiply(leftOperand,rightOperand) {

    return leftOperand * rightOperand;
}

function divide(leftOperand,rightOperand) {

    return leftOperand / rightOperand;
}


function operate (operator,rightOperand,leftOperand) {
    
    if(operator === "+"){
        add(leftOperand,rightOperand);

    } else if(operator === "-") {
        subtract(leftOperand,rightOperand);

    } else if(operator === "*") {
        multiply(leftOperand,rightOperand)

    } else if(operator === "/") {

        divide(leftOperand,rightOperand);
    }
}