const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
let count = 0;
let operation = [];
const display = document.querySelector(".display");

function operationCalculator(arr){
    let loopResult = 0;
    if(arr.length === 1){
        loopResult = arr[0];
        return loopResult;
    }
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
            if(arr[i+1] === '0'){
                loopResult = "ERROR";
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

function numInputs(btnInput){
    if(count%2 === 0){
        operation.push(btnInput);
        count++;
        display.textContent = operation.join('');
        console.log(operation);
    }
    else{
        operation[count-1] = operation[count-1] + btnInput;
        display.textContent = operation.join('');
        console.log(operation);
    }
}

window.addEventListener("keydown", (e)=>{
    if(e.key>='0' && e.key<='9') numInputs(e.key);
});
numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        numInputs(number.textContent);
    });
});

function operatorInput(oInput){
    if(count%2 !== 0){
        operation.push(oInput);
        count++;
        display.textContent = operation.join('');
        console.log(operation);
    }
    else{
        if(operation.length>1){
            operation[count-1] = oInput;
            display.textContent = operation.join('');
            console.log(operation);
        }
    }
}

window.addEventListener("keydown", (e)=>{
    if(['+','-','/','*'].includes(e.key)) operatorInput(e.key);
});
operators.forEach((operator)=>{
    operator.addEventListener("click", ()=>{
        operatorInput(operator.textContent);
    });
});

function equateOp(){
    if(operation.length%2 !== 0){
        let result = operationCalculator(operation);
        operation.length = 0;
        count = 0;
        display.textContent = result;
        console.log(result);
        console.log(operation);
        console.log(count);
    }
}

window.addEventListener("keydown", (e)=>{
    if(e.key === '=' || e.key === 'Enter') equateOp();
});
const equate = document.querySelector(".result");
equate.addEventListener("click", ()=>{
    equateOp();
});

function decimalInput(dInput){
    let decimalInstance = false;
    for(let digit of operation[count-1]){
        if(digit === '.') decimalInstance = true;
    }
    if(count%2 !== 0 && !(decimalInstance)){
        operation[count-1] = operation[count-1] + dInput;
        display.textContent = operation.join('');
        console.log(operation);
    }
}

window.addEventListener("keydown", (e)=>{
    if(e.key === '.') decimalInput(e.key);
});
const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", ()=>{
    decimalInput('.');
});

function backSpaceOp(){
    if(operation.length>0){
        if(operation[count-1].length === 1){
            operation.length-=1;
            count--;
            display.textContent = operation.join('');
            console.log(operation);
        }
        else{
            operation[count-1] = operation[count-1].slice(0, operation[count-1].length-1);
            display.textContent = operation.join('');
            console.log(operation);
        }
    }
}

window.addEventListener("keydown", (e)=>{
    if(e.key === 'Backspace') backSpaceOp();
});
const backSpace = document.querySelector(".backspace");
backSpace.addEventListener("click", ()=>{
    backSpaceOp();
});

function clearOp(){
    operation.length = 0;
    count = 0;
    display.textContent = '';
    console.log(operation);
    console.log(count);
}

window.addEventListener("keydown", (e)=>{
    if(e.key === 'Escape' || e.key === 'c') clearOp();
});
const clear = document.querySelector(".clear");
clear.addEventListener("click", ()=>{
    clearOp();
});