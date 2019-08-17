function myReplace(str, before, after) {
    if(isUpperCase(before[0])){
        after = firstCharacterToUpperCase(after);
    }
    const newString = str.replace(before,after);
    return newString;
}
function isUpperCase(character){
    if(character === character.toUpperCase()){
        return true;
    }else{
        return false;
    }
}
function firstCharacterToUpperCase(word){
    const newWord = word.replace(word[0],word[0].toUpperCase());
    return newWord;
}
//Example:
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));