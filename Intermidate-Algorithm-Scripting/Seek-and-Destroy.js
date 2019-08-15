function destroyer(arr) {
    let newArray = [];
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=1;j<arguments.length;j++){
            if(arr[i] !== arguments[j]){
                count++;
            }
        }
        if(count === arguments.length-1){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
//Example:
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));