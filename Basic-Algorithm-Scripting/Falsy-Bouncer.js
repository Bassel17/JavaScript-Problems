function bouncer(arr) {
    const arrayWithNoFalsyValues=arr.filter((value)=>{
        if(value){
            return value;
        } 
    })
    return arrayWithNoFalsyValues;
}

//Example:
console.log(bouncer([7, "ate", "", false, 9]));