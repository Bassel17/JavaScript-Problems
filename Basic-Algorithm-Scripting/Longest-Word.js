function findLongestWordLength(str) {
    const Array = [...str];
    Array.push(' ');
    let counter = 0;
    let Maximum = 0;
    for(let i=0;i<Array.length;i++){
        if(Array[i]!==" "){
            counter++;
        }else{
            if(counter > Maximum){
                Maximum = counter;
            }
            counter =0;
        }
    }
    return Maximum;
}
  
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));