function convertCelsiusToFahrenheit(celsiusDegree){
    const fahrenheitDegree = (celsiusDegree * (9/5)) + 32;//Equation that converts celsius to fahrenheit
    return fahrenheitDegree;
}

//Eaxmple:
const celsiusDegree = 30;
console.log(`The Temperature in celsius ${celsiusDegree}`);//logging the degree in celsius to the console
const fahrenheitDegree = convertCelsiusToFahrenheit(celsiusDegree);
console.log(`The Temperature in fahrenheit ${fahrenheitDegree}`);//logging the degree in fahrenheit to the console
