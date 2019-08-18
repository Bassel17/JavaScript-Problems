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


console.log(fibonacciSeries(4));