
function sumOfOddFabonacciNumbers(num){
    const arrayOfFibonacciNumbers = fibonacciSeries(num);
    let sumOfOddFabonacciNumbers = 0;
    arrayOfFibonacciNumbersLessThanNum = []
    arrayOfFibonacciNumbers.forEach(number => {
        if(number<num){
            arrayOfFibonacciNumbersLessThanNum.push(number);
        }
    });
    arrayOfFibonacciNumbersLessThanNum.forEach(number => {
        if(isOdd(number)){
            sumOfOddFabonacciNumbers += number;
        }
    })
    return sumOfOddFabonacciNumbers;
}

function isOdd (num){
    if(num % 2 === 0){
        return false;
    }
    return true;
}

function fibonacciSeries(limit){
    let currentNumber = 1;
    let nextNumber = 1;
    let sum;
    const arrayOfFibonacciNumbers = [1,1];
    for (let i=nextNumber;i < limit-1; i++){
        sum = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = sum;
        arrayOfFibonacciNumbers.push(nextNumber);
    }
    return arrayOfFibonacciNumbers;
}

//Example:
console.log(sumOfOddFabonacciNumbers(4));