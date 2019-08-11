function truncateString(string,maximumNumberOfCharacters){
    if(string.length > maximumNumberOfCharacters){
        string = string.substring(0,maximumNumberOfCharacters);
        string += "...";
    }
    return string;
}
//Example:
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));