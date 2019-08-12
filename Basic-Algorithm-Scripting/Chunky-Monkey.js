function chunkArrayInGroups(array, size) {
    const finalArray = [];
    for(let i=0;i<array.length;i+=size){
        let slicedPart = array.slice(i,i+size);
        finalArray.push(slicedPart);
    }
    return finalArray;
}

//Example:
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));