function addAllPrimeNumbersTill(num){
    let sumOfPrimeNumbers = 0;
    const arrayOfPrimeNumbers = returnArrayOfPrimeNumbers(num);
    arrayOfPrimeNumbers.forEach(primeNumber => {
        sumOfPrimeNumbers += primeNumber;
    });
    return sumOfPrimeNumbers;
}

function returnArrayOfPrimeNumbers(num){
    let counter = 0;
    const arrayOfPrimeNumbers = [];
    for (let i=2 ; i<=num ; i++){
        counter = 0
        for (let j =2; j<=num ; j++){
            if((i !== j) && (i % j === 0)){
                counter ++;
            }
        }
        if(counter < 1){
            arrayOfPrimeNumbers.push(i);
        }
    }
    return arrayOfPrimeNumbers;
}

console.log(addAllPrimeNumbersTill(977));