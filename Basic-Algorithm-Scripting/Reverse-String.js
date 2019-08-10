function reverseString(string) {
    const arrayOfString = [...string];//spreading the string in to individual characters inside the array using the spread operator
    const reversedArrayOfString = [];//array that will hold the characters in reversed order
    arrayOfString.forEach((character)=>reversedArrayOfString.unshift(character));//looping through the array and adding the characters in reverse
    string="";//emptying the string
    reversedArrayOfString.forEach((character)=> string += character);//concatinating the characters to the string
    return string;
  }
  //example:
  console.log(reverseString("bassel")); 