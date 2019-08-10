function factorialize(number) {
    if(number === 0) return 1;
    number *= factorialize(number-1);//looping using recursion
    return number;
}
//Example:
console.log(factorialize(20));