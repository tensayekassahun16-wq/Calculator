const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
let count = 0, divByZero = false;
let operation = [];

function operationCalculator(arr){
    let loopResult = 0;
    for(let i = 1; i<arr.length; i+=2){
        if(arr[i] === '+'){
            loopResult = (arr[i-1] + arr[i+1]);
            arr[i+1]+=arr[i-1];
            console.log(operation);
        }
        else if(arr[i] === '-'){
            loopResult = (arr[i-1] - arr[i+1]);
            arr[i+1] = arr[i-1] - arr[i+1];
            console.log(operation);
        }
        else if(arr[i] === '/'){
            if(arr[i+1] === 0){
                divByZero = true;
                loopResult = "ERROR: ATTEMPTED DIVISION BY ZERO";
                break;
            }
            else{
                loopResult = arr[i-1]/arr[i+1];
                arr[i+1] = arr[i-1]/arr[i+1];
                console.log(operation);
            }
        }
        else if(arr[i] === '*'){
            loopResult = arr[i-1] * arr[i+1];
            arr[i+1] = arr[i-1] * arr[i+1];
            console.log(operation);
        }
    }
    return loopResult;
}

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        if(count%2===0){
            operation.push(+(number.textContent));
            count++;
            console.log(operation);
        }
        else{
            // do nothing?, No i'll be adding a thing to check the previous entry and if 
            // they are the same type it will replace it
            // no what is gonna happen is i only allow single digits so no replacement but
            // rather its going to sum add the digits as strings then convert it to a number
            if(operation.length%2!==0 && typeof(operation[count-1]) === 'number'){
                operation[count-1] = +(String(operation[count-1]) + (number.textContent));
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
        console.log(result);
        console.log(operation);
        console.log(count);
    }
    else{
        console.log("Unfinished or no expressions");
        operation.length = 0;
        count = 0;
    }
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", ()=>{
    if(count%2!==0 && typeof(operation[count-1]) === 'number'){
        operation[count-1] = operation[count-1] + '.';
    }
});

const backSpace = document.querySelector(".backspace");
backSpace.addEventListener("click", ()=>{
    operation.length = operation.length - 1;
    count--;
    console.log(operation);
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    operation.length = 0;
    count = 0;
    console.log("cleared");
    console.log(operation);
});