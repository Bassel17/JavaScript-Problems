function sumAll(range) {
    range.sort((a,b)=>a-b);
    let sum = 0;
    const Minimum = range[0];
    const Maximum = range[1];
    for (let i=Minimum ; i<=Maximum ; i++){
        sum += i;
    }
    return sum;
}
//Examples:
console.log(sumAll([1, 4]));//should print 10
console.log(sumAll([4, 1]));//should print 10
console.log(sumAll([5, 10]));//should print 45
console.log(sumAll([10,5]));//should print 45