const add = function(x, y) {
	let addResult = x + y;
  return addResult; 
};

const subtract = function(x, y) {
	let subResult = x - y;
  return subResult;
};

const sum = function(array) {
   const total = array.reduce((total, current) => total + current, 0);
   return total;
  };

const multiply = function(...args) {
  let sum = 1;
for (i=0; i<args.length; ++i){
  sum = sum*args[i];
};
return sum;
};

const power = function(x, y) {
	let powerResult = x ** y;
  return powerResult;
};

const factorial = function(x) {
  let result = x;
  if (x == 0){
    let result = 1;
  }

  while (x > 1){
    --result;
    result *= x;
  };
return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
