function confirmEnding(string, target) {
    return string.slice(string.length - target.length) === target;
}

//Examples:
console.log(confirmEnding("Bastian", "n"));//should return true
console.log(confirmEnding("Congratulation", "on"));//should return true
console.log(confirmEnding("Connor", "n"));//should return false
console.log(confirmEnding("He has to give me a new name", "name"));//should return true
console.log(confirmEnding("Open sesame", "same"));//should return true
console.log(confirmEnding("Open sesame", "game"));//should return false
console.log(confirmEnding("Abstraction", "action"));//should return true