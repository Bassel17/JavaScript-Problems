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
//Examples:
console.log(isPalindrome("eye"));//Should return true
console.log(isPalindrome("_eye"));//Should return true
console.log(isPalindrome("race car"));//Should return true
console.log(isPalindrome("not a palindrome"));//Should return false
console.log(isPalindrome("A man, a plan, a canal. Panama"));//Should return true
console.log(isPalindrome("never odd or even"));//Should return true
console.log(isPalindrome("nope"));//Should return false
console.log(isPalindrome("almostomla"));//Should return false
console.log(isPalindrome("My age is 0, 0 si ega ym."));//Should return true
console.log(isPalindrome("1 eye for of 1 eye."));//Should return false
console.log(isPalindrome("0_0 (: /-\ :) 0-0"));//Should return true
console.log(isPalindrome("five|\_/|four"));//Should return false
