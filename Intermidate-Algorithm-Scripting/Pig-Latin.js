function translatePigLatin(str) {
    const arrayOfVowels = ['a','e','i','o','u'];
    const firstLetter= str[0];
    let stringToAdd;
    let baseString ;
    if(arrayOfVowels.includes(firstLetter)){
        return str.concat('way');
    }
    let arrayOfCharacters = str.split('');
    for (let i=0; i<arrayOfCharacters.length; i++){
        if(arrayOfVowels.includes(arrayOfCharacters[i])){
            stringToAdd = str.slice(0,i);
            baseString = str.slice(i);
            break;
        }
    }
    return baseString.concat(stringToAdd,'ay');
}
//Example:
console.log(translatePigLatin("consonant"));