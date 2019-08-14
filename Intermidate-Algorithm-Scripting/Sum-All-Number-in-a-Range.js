function sumAll(range) {
    let sum = 0;
    let firstElement = range[0];
    let lastElement = range[1];
    if(range[0]>range[1]){
        firstElement = range[1];
        lastElement = range[0];
    }
    for (let i=firstElement ; i<=lastElement ; i++){
        sum += i;
    }
    return sum;
}
//Examples:
console.log(sumAll([1, 4]));//should print 10
console.log(sumAll([4, 1]));//should print 10
console.log(sumAll([5, 10]));//should print 45
console.log(sumAll([10,5]));//should print 45