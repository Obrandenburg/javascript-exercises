const palindromes = function (str) {
let lowerString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
let reverseArray = lowerString.split("").reverse().join("");
return (reverseArray == lowerString ? true : false)
};


// Do not edit below this line
module.exports = palindromes;
