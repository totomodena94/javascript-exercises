const sumAll = function(num1, num2) {
    
if((num1 < 0 || num2 < 0) || (typeof num1 ==="string" || typeof num2 === "string") || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    
    let suma = 0;
    for (let i = num1; i<=num2; i++){
        suma = suma + i
    }
    return suma;
};

// Do not edit below this line
module.exports = sumAll;
