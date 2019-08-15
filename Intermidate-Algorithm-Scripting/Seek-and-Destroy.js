function destroyer(arr) {
    let newArray = [];
    arr.forEach(addElementsNotPresentInArgumentsToArray(newArray,arguments));
    return newArray;
}

function addElementsNotPresentInArgumentsToArray(Array,Arguments) {
    return (Element) => {
        let count = 0;
        for (let j = 1; j < Arguments.length; j++) {
            if (Element !== Arguments[j]) {
                count++;
            }
        }
        if (count === Arguments.length - 1) {
            Array.push(Element);
        }
    };
}

//Example:
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
