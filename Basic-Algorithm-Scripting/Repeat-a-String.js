function repeatStringANumberOfTimes(string, numberOfTimes) {
    if(numberOfTimes<0) return "";
    const copyOfString = string;
    for (let i = 1; i < numberOfTimes; i++)
        string += copyOfString;
    return string;
}
//Example
console.log(repeatStringANumberOfTimes("abc", 3));
