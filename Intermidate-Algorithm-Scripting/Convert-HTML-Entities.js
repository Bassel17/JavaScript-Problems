function convertHTML(str) {
    const arrayOfCharacters = str.split("");
    for (let i=0;i<arrayOfCharacters.length;i++){
        switch (arrayOfCharacters[i]){
            case '<':
                arrayOfCharacters[i] = '&lt;';
                break;
            case '>':
                arrayOfCharacters[i] = '&gt;';
                break;
            case '&':
                arrayOfCharacters[i]= '&amp;';
                break;
            case '"':
                arrayOfCharacters[i] = '&quot;';
                break;
            case "'":
                arrayOfCharacters[i] = '&apos;';
                break;
            default:
                break;
        }
    }

    return arrayOfCharacters.join('');
}

//Example:
console.log(convertHTML("Dolce & Gabbana"));