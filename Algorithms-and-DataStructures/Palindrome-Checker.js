function isPalindrome(str) {
    let lowerCasedStr = str.toLowerCase();
    let arrayOfCharacters = lowerCasedStr.split("");
    let arrayOfAlphaNumericCharacters = [];
    filterAlphaNumericCharacters(arrayOfCharacters, arrayOfAlphaNumericCharacters);
    let strOfAlphaNumericCharacters = arrayOfAlphaNumericCharacters.join("");
    let reversedStrOfAlphaNumericCharacters = arrayOfAlphaNumericCharacters.reverse().join("");
    return areEqual(strOfAlphaNumericCharacters,reversedStrOfAlphaNumericCharacters);
}

function filterAlphaNumericCharacters(arrayOfCharacters, arrayOfAlphaNumericCharacters) {
    arrayOfCharacters.forEach((character)=>{
        if (character.match(/^[0-9a-z]+$/)) {
            arrayOfAlphaNumericCharacters.push(character);
        }
    });
}

function areEqual(string1,string2){
    if(string1 === string2){
        return true
    }else{
        return false;
    }
}
  
console.log(isPalindrome("_eye"));
