function largestNumbersInSubArray(array) {
    const largestNumbersArray=[];
    array.forEach(subArray => {
        let largestNumber=largestNumberInArray(subArray);
        largestNumbersArray.push(largestNumber);
    });
    return largestNumbersArray;
}

function largestNumberInArray(array){
    let largestNumber = array[0];
    array.forEach(number =>{
        largestNumber = number > largestNumber ? number : largestNumber;
    });
    return largestNumber;
}
//Example:
console.log(largestNumbersInSubArray([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));