function isPalindrome(str) {
    let lowerCasedStr = str.toLowerCase();
    console.log(lowerCasedStr);
    let arrayOfCharacters = lowerCasedStr.split("");
    let arrayOfAlphaNumericCharacters = [];
    for(i=0;i<arrayOfCharacters.length;i++){
        if(arrayOfCharacters[i].match(/^[0-9a-z]+$/)){
            arrayOfAlphaNumericCharacters.push(arrayOfCharacters[i]);
        }
    }
    console.log(arrayOfAlphaNumericCharacters);
    let strOfAlphaNumericCharacters = arrayOfAlphaNumericCharacters.join("");
    let reversedStrOfAlphaNumericCharacters = arrayOfAlphaNumericCharacters.reverse().join("");
    if(strOfAlphaNumericCharacters === reversedStrOfAlphaNumericCharacters){
        return true
    }
    return false;
}
  
  
console.log(palindrome("_eye"));