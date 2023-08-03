const fibonacci = function(number) {
if (number < 0){
    return 'OOPS'
}
else {
let fibonacciNumbers = [1, 1, 2, 3, 5, 8,];
let fiboMember = number - 1;
for (i= 6; i < number; ++i){
    let indexOne = ([i] - 2);
    let indexTwo = ([i] - 1);
    let x = fibonacciNumbers[`${indexOne}`];
    let y = fibonacciNumbers[`${indexTwo}`];
    let newFibonacci = x + y;
    fibonacciNumbers.push(newFibonacci);
    };
return fibonacciNumbers[fiboMember];
};

};


// Do not edit below this line
module.exports = fibonacci;
