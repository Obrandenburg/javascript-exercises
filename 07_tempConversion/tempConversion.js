const convertToCelsius = function(tempInFarenheit) {
  let newCelsius = (tempInFarenheit-32) * (5/9); 
  let roundedCelsius = Math.round(newCelsius*10)/10;
  return roundedCelsius;
};

const convertToFahrenheit = function(tempInCelsius) {
  let newFarenheit = (tempInCelsius*(9/5)+ 32);
  let  roundedFarenheit = Math.round(newFarenheit*10)/10;
  return roundedFarenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
