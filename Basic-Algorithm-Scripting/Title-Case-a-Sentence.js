function titleCase(str) {
    const arrayOfWords = str.split(" ");
    const arrayOfTitleCasedWords = titleCaseWordsInArray(arrayOfWords);
    str = arrayOfTitleCasedWords.join(" ");
    return str;
}

function titleCaseWordsInArray(arrayOfWords){
    const arrayOfTitleCasedWords = [];
    arrayOfWords.forEach((word)=>{
        let titleCasedWord = titleCaseWord(word);
        arrayOfTitleCasedWords.push(titleCasedWord);
    });
    return arrayOfTitleCasedWords;
}

function titleCaseWord(word){
    let titleCasedWord = word.charAt(0).toUpperCase();
    for(let i=1;i<word.length;i++){
        titleCasedWord += word.charAt(i).toLowerCase();
    }
    return titleCasedWord;
}

//Example:
console.log(titleCase("I'm a little tea pot"));