function convertFromBinaryToCharacters(str) {
    const arrayOfBinaryNumbers = str.split(' ');
    const arrayOfCharacters = [];
    for (let i=0 ; i<arrayOfBinaryNumbers.length;i++){
        arrayOfCharacters.push(convertFromBinaryToACharacter(arrayOfBinaryNumbers[i]));
    }
    str = arrayOfCharacters.join('');
    return str;
}
function convertFromBinaryToACharacter(binaryString){
    const hexaDecimal = parseInt(binaryString,2);
    const character = String.fromCharCode(hexaDecimal);
    return character;
}
//Example:
console.log(convertFromBinaryToCharacters("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));