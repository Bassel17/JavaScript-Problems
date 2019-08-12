function getIndexToInsert(array, number) {
    array.push(number);
    array.sort((currentNumber,nextNumber)=>currentNumber>nextNumber);
    return array.indexOf(number);
}
  
console.log(getIndexToInsert([10, 20, 30, 40, 50], 35));