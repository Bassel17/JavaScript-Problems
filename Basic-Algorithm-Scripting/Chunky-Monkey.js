function chunkArrayInGroups(arr, size) {
    const finalArray = [];
    for(let i=0;i<arr.length;i+=size){
        let slicedPart = arr.slice(i,i+size);
        finalArray.push(slicedPart);
    }
    return finalArray;
}
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));