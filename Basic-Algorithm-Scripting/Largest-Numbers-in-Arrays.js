function largestNumbersInArray(array) {
    const largestNumbersArray=[];
    array.forEach(subArray => {
    let largestNumber = subArray[0];
    subArray.forEach(number=>{
        if(number > largestNumber){
            largestNumber = number;
        }
    });
    largestNumbersArray.push(largestNumber);
    });
    return largestNumbersArray;
}

console.log(largestNumbersInArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));