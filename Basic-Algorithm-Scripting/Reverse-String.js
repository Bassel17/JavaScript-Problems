function reverseString(string) {
    const arrayOfString = [...string];
    const reversedArrayOfString = [];
    arrayOfString.forEach((character)=>reversedArrayOfString.unshift(character));
    string="";
    reversedArrayOfString.forEach((character)=> string += character);
    return string;
  }
  
  console.log(reverseString("bassel")); 