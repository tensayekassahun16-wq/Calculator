const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
let count = 0;
let operation = [];
let result;

function operationCalculator(arr){
    if(arr[1] === '+'){
        console.log(arr[0] + arr[2]);
        count = 0;
        arr.length = 0;
        console.log(count);
        console.log(arr.length);
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click", ()=>{
        if(count%2===0){
            operation.push(+(number.textContent));
            count++;
            console.log(operation);
            if(operation.length === 3){
                //call calculating function
                operationCalculator(operation);
                //store value inside a variable and maybe the first slot of the array
            }
        }
        else{
            // do nothing?, No i'll be adding a thing to check the previous entry and if 
            // they are the same type it will replace it
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
            if(operation.length>1 && typeof(operation[1]) === 'string'){
                operation[1] = operator.textContent;
            }
        }
    });
});