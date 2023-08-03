const removeFromArray = function(myArray, ...args) {

const newArray = [];
myArray.forEach((arg) => {
    if (!args.includes(arg)) {
        newArray.push(arg)
    } });
    
    return newArray;

};






// Do not edit below this line
module.exports = removeFromArray;
