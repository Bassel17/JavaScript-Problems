function bouncer(arr) {
    const arrayWithNoFalsyValues=arr.filter(CheckForNonFalsy)
    return arrayWithNoFalsyValues;
}

function CheckForNonFalsy(value){
    if(value){
        return value;
    }
}

//Example:
console.log(bouncer([7, "ate", "", false, 9]));