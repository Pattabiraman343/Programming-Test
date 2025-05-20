function calculator(a, b, operation) {
    if (operation === "add") {
        return a + b;
    } else if (operation === "subtract") {
        return a - b;
    } else if (operation === "multiply") {
        return a * b;
    } else if (operation === "divide") {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    } else {
        return "Invalid operation";
    }
}

console.log(calculator(10, 5, "add"));       
console.log(calculator(10, 5, "subtract"));  
console.log(calculator(10, 5, "multiply"));  
console.log(calculator(10, 5, "divide"));    
