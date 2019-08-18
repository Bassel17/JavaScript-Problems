function returnArrayOfPrimeNumbers(num){
    let counter = 0;
    const arrayOfPrimeNumbers = [];
    for (i=2 ; i<num ; i++){
        counter = 0
        for (j =2; j<num ; j++){
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

console.log(returnArrayOfPrimeNumbers(250));