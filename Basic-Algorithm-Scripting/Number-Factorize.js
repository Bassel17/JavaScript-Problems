function factorialize(number) {
    if(number === 0){
        return 1;
    }
    number *= factorialize(number-1);
    return number;
}
  
console.log(factorialize(20));