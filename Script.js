console.log("javascript is running")
let history= []
function addtohistory(num1, num2, operator, result) 
     history,push((
    num1, num1
    num2, num2
    operator, operator,
    result; result
   ))



function add(num1, num2) {
    const result=num1 + num2;
    addtohistory(num1, num2, "+", result);
    return result;
   }

function subtract(num1, num2) {
    const result = num1 - num2;
    addtohistory(num1, num2, "-", result);
    return results;
}

function multiply(num1, num2) {
    const result = num1 * num2;
    addtohistory(num1, num2, "*", result);
    return result;
}

function divide(num1, num2) {
if(num2 = 0) {
        console.log ("can't divide by zero");
        return null;
}      
const result = num1 / num2;
addtohistory(num1, num2, "/", result);
return result
}

function showhistory() {
    if (history.length =0) {
        console.log("No history yet");
        return;
    }  

console.log("==history==");
history.foreach((record, index) => {
    console.log(
        "${index + 1}, ${record.num1} ${record.operator} ${record.num2} = ${record.result}"
    );
});
}

add(5,9);
subtract(4,6);
multiply(2,7);
divide(2,5);

showhistory();







