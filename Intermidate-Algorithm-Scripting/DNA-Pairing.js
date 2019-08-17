function pairElement(str) {
    const arrayOfCharacters = str.split("");
    const arrayOfDNAPairs = [];
    arrayOfCharacters.forEach(character => {
      switch(character){
        case "A":
            arrayOfDNAPairs.push(["A","T"]);
             break;
        case "T":
            arrayOfDNAPairs.push(["T","A"]);
            break;
        case "C":
            arrayOfDNAPairs.push(["C","G"]);
            break;
        case "G":
            arrayOfDNAPairs.push(["G","C"]);
            break;
        }
    });
    return arrayOfDNAPairs;
}
//Example:  
console.log(pairElement("GCGATA"));