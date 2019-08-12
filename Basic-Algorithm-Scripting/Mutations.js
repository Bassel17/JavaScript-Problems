function mutation(arr) {
    const firstWordLowerCased = arr[0].toLowerCase();
    const secondWordLowerCased = arr[1].toLowerCase();
    const arrayOfCharacters = [...secondWordLowerCased];
    let counter = 0;
    arrayOfCharacters.forEach((character)=>{
        if(firstWordLowerCased.includes(character)){
            counter++;
        }
    });
    if(counter === arrayOfCharacters.length){
        return true;
    }
    return false;
}

//Example:
console.log(mutation(["Mary", "Army"]));