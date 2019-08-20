function decipherRot13(str) {
    const arrayOfWords = str.split(" ");
    const arrayOfDechiperedWords = [];
    arrayOfWords.forEach((word)=>{
        const arrayOfCharacter = word.split('');
        for (let i=0 ; i<arrayOfCharacter.length;i++){
            let character = arrayOfCharacter[i];
            if(character.match(/[A-M]/)){
                let unicode = word.charCodeAt(i);
                unicode += 13;
                arrayOfCharacter[i] = String.fromCharCode(unicode);
            }else{
                if(character.match(/[N-Z]/)){
                    let unicode = word.charCodeAt(i);
                    unicode -= 13;
                    arrayOfCharacter[i] = String.fromCharCode(unicode);
                }
            }
        }
        const decipheredWord = arrayOfCharacter.join('');
        arrayOfDechiperedWords.push(decipheredWord);
    });
      
    return arrayOfDechiperedWords.join(" ");
}
//Example: 
console.log(decipherRot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));