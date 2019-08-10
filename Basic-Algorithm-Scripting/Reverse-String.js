function reverseString(str) {
    let arrayOfString = [...str];
    let newArray = [];
    arrayOfString.forEach((character)=>newArray.unshift(character));
    str="";
    newArray.forEach((character)=> str += character);
    return str;
  }
  
  console.log(reverseString("bassel")); 