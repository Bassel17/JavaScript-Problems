function whatIsInAName(collection, source) {
    var arr = [];
    const arrayOfKeys = Object.keys(source);
    collection.forEach((element)=>{
        let count = 0;
        arrayOfKeys.forEach((property)=>{
            if(element[property] === source[property]){
                count++;
            }
        });
        if(count ===  arrayOfKeys.length){
           arr.push(element);
        }
    });
    console.log(arr);
    return arr;
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });