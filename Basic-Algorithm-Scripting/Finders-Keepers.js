function findElement(array, func) {
    for(let i=0; i<array.length;i++){
        if(func(array[i])){
            return array[i];
        }
    }
    return undefined;
}
//Example:
console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));