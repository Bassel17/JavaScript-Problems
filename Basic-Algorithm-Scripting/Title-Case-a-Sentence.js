function titleCase(str) {
    const arrayOfWords = str.split(" ");
    let newArray = []
    arrayOfWords.forEach((word)=>{
        let newWord=word.charAt(0).toUpperCase();
        for(let i=1;i<word.length;i++){
        newWord += word.charAt(i).toLowerCase();
    }
        newArray.push(newWord);
    });
    str = newArray.join(" ");
    return str;
  }
  
console.log(titleCase("I'm a little tea pot"));