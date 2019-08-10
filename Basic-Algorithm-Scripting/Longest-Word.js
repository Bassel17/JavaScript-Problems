function findLongestWordLength(str) {
    const ArrayOfString = [...str];
    const LongestWordLength = longestWordLengthOf(ArrayOfString);//returns longest word length in an array
    return LongestWordLength;
}

function longestWordLenghtOf(Array) {
    Array.push(' ');
    let counter = 0;
    let maximum = 0;
    for (let i = 0; i < Array.length; i++) {//loop throught array
        if (Array[i] !== " ") {
            counter++;//count the number of characters in a word
        }
        else {
            if (counter > maximum) {//compare the number of character of a word to the maximum current value 
                maximum = counter;//update maximum value to a longer value
            }
            counter = 0;//restart counter
        }
    }
    return maximum;
}
//Example:
console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));
