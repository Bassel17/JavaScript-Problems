function diffArray(arr1, arr2) {
    const newArr = [];
    arr1.forEach(element => {
        addIfNotInArray(element,arr2,newArr);
    });
    arr2.forEach(element => {
        addIfNotInArray(element,arr1,newArr);
    });
    return newArr;
}

function addIfNotInArray(element,array,newArray){
    if(array.indexOf(element) === -1){
        newArray.push(element);
    }
}
//Example:
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));