function reverseString(str) {
    let arrayOfString = [...str];
    let newArray = [];
    for(let i=0;i<arrayOfString.length;i++){
        newArray.unshift(arrayOfString[i]);
    }
    console.log(newArray);
    str="";
    for(let i=0;i<newArray.length;i++){
        str += newArray[i];
    }
    return str;
  
  }
  
  console.log(reverseString("Bassel")); 