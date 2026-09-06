const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
let count = 0;
let operation = [];
const display = document.querySelector(".display");

function operationCalculator(arr){
    let loopResult = 0;
    for(let i = 1; i<arr.length; i+=2){
        if(arr[i] === '+'){
            loopResult = +arr[i-1] + +arr[i+1];
            arr[i+1] = +arr[i-1] + +arr[i+1];
            console.log(operation);
        }
        else if(arr[i] === '-'){
            loopResult = +arr[i-1] - +arr[i+1];
            arr[i+1] = +arr[i-1] - +arr[i+1];
            console.log(operation);
        }
        else if(arr[i] === '/'){
            if(arr[i+1] === 0){
                loopResult = "ERROR: ATTEMPTED DIVISION BY ZERO";
                break;
            }
            else{
                loopResult = +arr[i-1]/+arr[i+1];
                arr[i+1] = +arr[i-1]/+arr[i+1];
                console.log(operation);
            }
        }
        else if(arr[i] === '*'){
            loopResult = +arr[i-1] * +arr[i+1];
            arr[i+1] = +arr[i-1] * +arr[i+1];
            console.log(operation);
        }
    }
    return loopResult;
}

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        if(count%2===0){
            operation.push(number.textContent);
            count++;
            display.textContent = operation[count-1];
            console.log(operation);
        }
        else{
            if(operation.length%2!==0 && Number(operation[count-1]) !== NaN){
                operation[count-1] = operation[count-1] + number.textContent;
                display.textContent = operation[count-1];
                console.log(operation);
            }
        }
    });
});

operators.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        if(count%2!==0){
            operation.push(operator.textContent);
            count++;
            console.log(operation);
        }
        else{
            if(operation.length>1 && typeof(operation[count-1]) === 'string'){
                operation[count-1] = operator.textContent;
                console.log(operation);
            }
        }
    });
});

const equate = document.querySelector(".result");
equate.addEventListener("click", ()=>{
    let result;
    if(operation.length%2!==0){
        result = operationCalculator(operation);
        operation.length = 0;
        count = 0;
        display.textContent = result;
        console.log(result);
        console.log(operation);
        console.log(count);
    }
    else{
        display.textContent = "Unfinished or no expressions";
        console.log("Unfinished or no expressions");
        operation.length = 0;
        count = 0;
    }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", ()=>{
    let decimalInstance = false;
    let expression = String(operation[count-1]);
    for(let digit of expression){
        if(digit === '.') decimalInstance = true;
    }
    if(count%2!==0 && Number(operation[count-1]) !== NaN && !(decimalInstance)){
        operation[count-1] = operation[count-1] + '.';
        display.textContent = operation[count-1];
        console.log(operation);
    }
});

const backSpace = document.querySelector(".backspace");
backSpace.addEventListener("click", ()=>{
    if(operation.length>0){
        if(operation[count-1].length === 1){
            //for when there is only one element so that count is decremented and
            //length adjusted for calculation function
            operation.length = operation.length - 1;
            count--;
            display.textContent = operation[count-1];
            console.log(operation);
        }
        else{
            //using string method to slice the last element
            operation[count-1] = operation[count-1].slice(0, operation[count-1].length - 1);
            display.textContent = operation[count-1];
            console.log(operation);
        }
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    operation.length = 0;
    count = 0;
    display.textContent = '';
    console.log("cleared");
    console.log(operation);
});