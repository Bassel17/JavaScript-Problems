function findLongestWordLength(str) {
    const Array = [...str];
    const Maximum = longestWordLengthOf(Array);
    return Maximum;
}

function longestWordLenghtOf(Array) {
    Array.push(' ');
    let counter = 0;
    let maximum = 0;
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] !== " ") {
            counter++;
        }
        else {
            if (counter > maximum) {
                maximum = counter;
            }
            counter = 0;
        }
    }
    return maximum;
}
  
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
