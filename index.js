const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operator");
let count = 0;
let operation = [];

numbers.forEach((number)=>{
    number.addEventListener(()=>{
        if(count%2===0){
            operation.push(number);
            count++;
            if(operation.length === 3){
                //call calculating function
            }
        }
        else{
            //do nothing?
        }
    });
});