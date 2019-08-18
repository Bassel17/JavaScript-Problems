
function returnNumbersInRange(arr){
    arr.sort((a,b)=>a-b);
    const lastElementInArray = arr[1];
    const firstElementInArray = arr[0];
    const arrayOfNumbers = [];
    for(i=firstElementInArray;i<= lastElementInArray;i++){
        arrayOfNumbers.push(i);
    }
    return arrayOfNumbers;
}
  
  
console.log(returnNumbersInRange([5,1]));